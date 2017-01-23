/**
 * Created by antoine on 25/12/2016.
 */
import * as React from 'react'
import classnames from 'classnames'
import {TextField, AutoComplete, RaisedButton, Paper} from 'material-ui'
import ChipInput from 'material-ui-chip-input'

import { Document } from '../types'

const styles = require('./styles.scss')

const dataSourceNature = [
    {text: 'Mémo', value: 1},
    {text: 'Note', value: 2},
    {text: 'Procédure', value: 3},
]

const dataSourceThemes = [{text: 'Equipe Operationnelle d\'hygiène', value: 1}, {text: 'Divers', value: 2}]

interface Props {
    document: Document,
    onSaveDocument: (newDocument: Document) => void
}

const getNatureForDocument = (document: Document) => {
    if(!document){
        return ''
    }
    const nature = dataSourceNature.find(currentNature => currentNature.value === document.nature)
    return nature && nature.text
}

export default class Form extends React.Component<Props, {}>{
    public refs: {
        title: TextField,
        reference: TextField,
        object: TextField,
        nature: AutoComplete,
        [k: string]: React.ReactInstance
    }
    private saveButtonClicked = () => {
        this.props.onSaveDocument({
            title: this.refs.title.getValue(),
            reference: this.refs.reference.getValue(),
            object: this.refs.object.getValue(),
            nature: 1
        })
    }
    public render(){
        return (
            <Paper className={styles.card} key={this.props.document ? this.props.document.reference || this.props.document.title : 'empty'}>
                <div className={styles.row}>
                    <div className={styles.label}>Titre</div>
                    <div className={styles.control}>
                        <TextField ref="title" defaultValue={this.props.document && this.props.document.title} hintText="Titre du document"/>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Référence</div>
                    <div className={styles.control}>
                        <TextField ref="reference" defaultValue={this.props.document && this.props.document.reference} hintText="Référence du document"/>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={classnames(styles.label, styles.multilineTextFieldLabel)}>Objet</div>
                    <div className={styles.control}>
                        <TextField hintText="Objet"
                                   ref="object"
                                   defaultValue={this.props.document && this.props.document.object}
                                   multiLine={true}
                                   rows={2}
                                   rowsMax={4}/>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Nature</div>
                    <div className={styles.control}>
                        <AutoComplete
                            ref="nature"
                            searchText={getNatureForDocument(this.props.document)}
                            floatingLabelText="Nature du document"
                            dataSource={dataSourceNature}
                        />
                    </div>
                </div>


                <div className={styles.row}>
                    <div className={classnames(styles.label, styles.multilineTextFieldLabel)}>Thèmes</div>
                    <div className={styles.control}>
                        <ChipInput
                            dataSource={dataSourceThemes}
                            dataSourceConfig={{ text: 'text', value: 'value' }}
                            onChange={(chips: any) => {console.log(chips)}}
                        />
                    </div>
                </div>

                <div className={classnames(styles.row, styles.textCenter)}>
                    <RaisedButton label="Sauvegarder"
                                  primary={true}
                                  className={styles.submit}
                                  onClick={this.saveButtonClicked}
                    />
                </div>
            </Paper>
        )
    }
}