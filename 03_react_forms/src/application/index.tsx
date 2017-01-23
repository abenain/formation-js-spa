import * as React from 'react'
import { Maybe } from 'tsmonad'
import { Paper } from 'material-ui';
import { MuiThemeProvider, lightBaseTheme, getMuiTheme } from 'material-ui/styles';

import Header from 'header'
import Form from "form"
import List from "list"
import { Document } from "../types"

const styles = require('./styles.scss')
const documentIcon = require('./document.svg')
const title = 'Test ReactJS Application'

const documents: Document[] = [{
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
    selectedDocumentReference?: Maybe<string>,
    isCreatingDocument?: boolean
}

export default class Applicaton extends React.Component<{}, State>{

    public constructor(props: any){
        super(props)
        this.state = {
            selectedDocumentReference: Maybe.nothing<string>(),
            isCreatingDocument: false
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
            selectedDocumentReference: Maybe.nothing<string>(),
            isCreatingDocument: true
        })
    }
    private getAllDocuments = () => {
        if(this.state.isCreatingDocument){
            return [{
                title: 'Nouveau Document',
                reference: '',
                object: '',
                nature: 1
            }].concat(documents)
        }

        return documents
    }
    private getSelectedElement = () => {
        if(this.state.isCreatingDocument){
            return this.getAllDocuments()[0]
        }

        return this.state.selectedDocumentReference.caseOf({
            just: reference => documents.find(document => document.reference === reference),
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
                                  onDocumentSelected={this.onDocumentSelected}/>
                        </div>
                        <div className={styles.formPanel}>
                            { selectedDocument ?  <Form document={this.getSelectedElement()} /> : noDocumentSelectedPanel }
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}