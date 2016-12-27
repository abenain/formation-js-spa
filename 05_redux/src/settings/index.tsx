import * as React from 'react'
import { Store } from 'redux'
import classnames from 'classnames'
import { TextField, Paper, RaisedButton } from 'material-ui'

import { GlobalState } from 'types'

const styles = require('./styles.scss')

interface Props{
    store: Store<GlobalState>
}

export default class Settings extends React.Component<Props, {}> {

    public refs: {
        username: TextField
        [k: string]: React.ReactInstance
    }

    private onSaveClicked(){
        this.props.store.dispatch({
            type: 'settings-save-button-clicked',
            payload: {
                username: this.refs.username.getValue()
            }
        })
    }

    public render(){
        return <div className={styles.container}>
            <Paper className={styles.card}>
                <h3>Settings</h3>

                <div className={styles.row}>
                    <div className={styles.label}>Nom</div>
                    <div className={styles.control}>
                        <TextField ref='username'
                                   hintText='Nom utilisateur'
                                   defaultValue={this.props.store.getState().username}/>
                    </div>
                </div>

                <div className={classnames(styles.footer, styles.textCenter)}>
                    <RaisedButton label="Sauvegarder"
                                  primary={true}
                                  className={styles.submit}
                                  onClick={ () => this.onSaveClicked() }
                    />
                </div>
            </Paper>
        </div>
    }
}