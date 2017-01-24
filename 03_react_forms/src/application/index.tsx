import * as React from 'react'
import { Maybe } from 'tsmonad'
import { Paper } from 'material-ui';
import { MuiThemeProvider, lightBaseTheme, getMuiTheme } from 'material-ui/styles';

import Header from '../header'
import Form from "../form"
import List from "../list"
import { Document } from "../types"
import * as webservices from "../webservices"

const styles = require('./styles.scss')
const documentIcon = require('./document.svg')
const title = 'Test ReactJS Application'

const mockDocuments: Document[] = [{
    title: 'How to grow funghi',
    reference: 'PCD-002301',
    object: 'Describes in depth how to grow a large population of funghi',
    nature: 3
},{
    title: 'Incident report #33',
    reference: 'NOT-004415',
    object: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum massa quam, vel lobortis quam ultricies ',
    nature: 2
},{
    title: 'Memo',
    reference: 'MEM-0EE415',
    object: 'Sem scelerisque felis, at euismod quam nisl id turpis. Curabitur eget libero id est blandit tincidunt quis non risus.',
    nature: 1
}]

interface State {
    documents?: Document[],
    selectedDocumentReference?: Maybe<string>,
    isCreatingDocument?: boolean
    isSavingDocument?: boolean
}

export default class Applicaton extends React.Component<{}, State>{

    public constructor(props: any){
        super(props)
        this.state = {
            documents: mockDocuments,
            selectedDocumentReference: Maybe.nothing<string>(),
            isCreatingDocument: false,
            isSavingDocument: false
        }
    }
    private onDocumentSelected = (documentReference: string) => {
        if(this.state.isCreatingDocument){
            if(!confirm('Cancel Document creation?')){
                return
            }
        }
        this.setState({
            selectedDocumentReference: Maybe.maybe(documentReference),
            isCreatingDocument: false
        })
    }
    private onCreateDocumentButtonClicked = () => {
        this.setState({
            selectedDocumentReference: Maybe.just(''),
            isCreatingDocument: true
        })
    }
    private onSaveDocumentClicked = (newDocument: Document) => {
        const savePromise = this.state.isCreatingDocument ? webservices.createDocument(newDocument) : webservices.updateDocument(newDocument)

        this.setState({
            isSavingDocument: true
        })

        savePromise.then((result: string) => {

            // Creation d'un document
            if(this.state.isCreatingDocument){
                return this.setState((previousState: State) => ({
                    documents: [newDocument].concat(previousState.documents),
                    selectedDocumentReference: Maybe.maybe(newDocument.reference),
                    isCreatingDocument: false,
                    isSavingDocument: false
                }))
            }

            // Update d'un document
            return this.setState((previousState: State) => ({
                documents: previousState.documents.map(document => {
                    if(document.reference === newDocument.reference){
                        return newDocument
                    }
                    return document
                }),
                selectedDocumentReference: Maybe.maybe(newDocument.reference),
                isCreatingDocument: false,
                isSavingDocument: false
            }))
        }).catch((error: Error) => {
            console.log(error)
            this.setState({
                isSavingDocument: false
            })
        }).done()
    }
    private getAllDocuments = () => {
        if(this.state.isCreatingDocument){
            return [{
                title: 'Nouveau Document',
                reference: '',
                object: '',
                nature: 1
            }].concat(this.state.documents)
        }

        return this.state.documents
    }
    private getSelectedElement = () => {
        if(this.state.isCreatingDocument){
            return this.getAllDocuments()[0]
        }

        return this.state.selectedDocumentReference.caseOf({
            just: reference => this.getAllDocuments().find(document => document.reference === reference),
            nothing: () => null
        })
    }

    public render(){
        const selectedDocument = this.getSelectedElement()

        const noDocumentSelectedPanel = (
            <Paper className={styles.card} >
                <div className={styles.noDocumentSelectedPanel}>
                    <img className={styles.icon} src={documentIcon} alt="Document"/>
                    <h2>No Document selected</h2>
                </div>
            </Paper>
        )
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <Header title={title}></Header>
                    <div className={styles.container}>
                        <div className={styles.sidePanel}>
                            <List documents={this.getAllDocuments()}
                                  onCreateDocument={this.onCreateDocumentButtonClicked}
                                  selectedDocumentReference={this.state.selectedDocumentReference}
                                  onDocumentSelected={this.onDocumentSelected}/>
                        </div>
                        <div className={styles.formPanel}>
                            { selectedDocument ?  <Form document={this.getSelectedElement()}
                                                        onSaveDocument={this.onSaveDocumentClicked}
                                                        isSavingDocument={this.state.isSavingDocument}/> : noDocumentSelectedPanel }
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}