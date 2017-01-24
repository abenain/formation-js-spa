/**
 * Created by antoine on 25/12/2016.
 */
import * as React from 'react'
import classnames from 'classnames'
import {TextField, RaisedButton, Paper} from 'material-ui'

import { Document } from '../types'

const styles = require('./styles.scss')
//const loadingGif = require('./loading.gif')

/*const dataSourceNature = [
    {text: 'Mémo', value: 1},
    {text: 'Note', value: 2},
    {text: 'Procédure', value: 3},
]*/

//const dataSourceThemes = [{text: 'Equipe Operationnelle d\'hygiène', value: 1}, {text: 'Divers', value: 2}]

interface Props {
    document: Document
}

export default class Form extends React.Component<Props, {}>{
    public refs: {
        title: TextField,
        [k: string]: React.ReactInstance
    }

    private saveButtonClicked = () => {
        console.log('save button clicked')
        console.log('new title is: ' + this.refs.title.getValue())
    }

    public render(){
        return (
            <Paper className={styles.card}>
                <div className={styles.row}>
                    <div className={styles.label}>Titre</div>
                    <div className={styles.control}>
                        <TextField ref="title" defaultValue={this.props.document && this.props.document.title} hintText="Titre du document"/>
                    </div>
                </div>

                <div className={classnames(styles.row, styles.textCenter)}>
                    <RaisedButton label="Sauvegarder"
                                  primary={true}
                                  className={styles.submit}
                                  onClick={this.saveButtonClicked}>
                    </RaisedButton>
                </div>
            </Paper>
        )
    }
}