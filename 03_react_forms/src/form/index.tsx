/**
 * Created by antoine on 25/12/2016.
 */
import * as React from 'react'
import classnames from 'classnames'
import {TextField, AutoComplete, RaisedButton, Paper} from 'material-ui'
import ChipInput from 'material-ui-chip-input'

const styles = require('./styles.scss')

const dataSourceNature = [
    {text: 'Mémo', value: 1},
    {text: 'Note', value: 2},
    {text: 'Procédure', value: 3},
]

const dataSourceThemes = [{text: 'Equipe Operationnelle d\'hygiène', value: 1}, {text: 'Divers', value: 2}]

const Form = () => (
    <Paper className={styles.card}>
        <div className={styles.row}>
            <div className={styles.label}>Titre</div>
            <div className={styles.control}>
                <TextField hintText="Titre du document"/>
            </div>
        </div>

        <div className={styles.row}>
            <div className={styles.label}>Référence</div>
            <div className={styles.control}>
                <TextField hintText="Référence du document"/>
            </div>
        </div>

        <div className={styles.row}>
            <div className={classnames(styles.label, styles.multilineTextFieldLabel)}>Objet</div>
            <div className={styles.control}>
                <TextField hintText="Objet"
                           multiLine={true}
                           rows={2}
                           rowsMax={4}/>
            </div>
        </div>

        <div className={styles.row}>
            <div className={styles.label}>Nature</div>
            <div className={styles.control}>
                <AutoComplete
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
                          onClick={() => {alert('clicked')}}
            />
        </div>
    </Paper>
)

export default Form