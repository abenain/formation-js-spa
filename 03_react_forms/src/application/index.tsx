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
    selectedDocumentReference: Maybe<string>
}

export default class Applicaton extends React.Component<{}, State>{

    public constructor(props: any){
        super(props)
        this.state = {
            selectedDocumentReference: Maybe.nothing<string>()
        }
    }
    private onDocumentSelected = (documentReference: string) => {
        this.setState({
            selectedDocumentReference: Maybe.maybe(documentReference)
        })
    }

    public render(){

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
                            <List documents={documents} onDocumentSelected={this.onDocumentSelected}/>
                        </div>
                        <div className={styles.formPanel}>
                        { this.state.selectedDocumentReference.caseOf({
                            just: reference => <Form document={documents.find(document => document.reference === reference)} />,
                            nothing: () => noDocumentSelectedPanel
                        }) }
                                </div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}