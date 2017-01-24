import * as React from 'react'
import { MuiThemeProvider, lightBaseTheme, getMuiTheme } from 'material-ui/styles';

import Header from '../header'
import Form from "../form"
import List from "../list"
import { Document } from "../types"
//import * as webservices from "../webservices"

const styles = require('./styles.scss')
//const documentIcon = require('./document.svg')
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
    documents?: Document[]
}

export default class Applicaton extends React.Component<{}, State>{

    public constructor(props: any){
        super(props)
        this.state = {
            documents: mockDocuments
        }
    }

    public render(){
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <Header title={title}></Header>
                    <div className={styles.container}>
                        <div className={styles.sidePanel}>
                            <List documents={this.state.documents}></List>
                            { /* TODO: afficher la liste ici */ }
                        </div>
                        <div className={styles.formPanel}>
                            <Form document={this.state.documents[0]}></Form>
                            { /* TODO: afficher le formulaire ici */ }
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}