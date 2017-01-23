/**
 * Created by antoine on 25/12/2016.
 */
import * as React from 'react'

const styles = require('./styles.scss')

interface State{
    title: string,
    reference: string,
    object: string,
    nature: number
}

class Form extends React.Component<{}, State>{

    public refs: {
        name: HTMLInputElement,
        [k: string]: React.ReactInstance
    }

    public constructor(props: {}){
        super(props)
        this.state = {
            title: '',
            reference: '',
            object: '',
            nature: 1
        }
    }

    private onValueChange = (key: string, event: React.FormEvent<any>) => {
        const newValue = (event.target as any).value
        const newState: {[k: string]: any} = {}
        newState[key] = newValue as any
        this.setState(newState as State)
    }
    
    private handleFormSubmit = (event: React.SyntheticEvent<any>) => {
        const documentValues = {
            title: this.state.title,
            reference: this.state.reference,
            object: this.state.object,
            nature: this.state.nature
        }
        console.log('Form was submitted')
        console.log('Document values: ' + JSON.stringify(documentValues))
    }

    public render(){
        return (
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.labelColumn}>
                        <span>Titre du document:</span>
                    </div>
                    <div className={styles.inputColumn}>
                        <input className={styles.input}
                               type="text"
                               name="title"
                               value={this.state.title}
                               onChange={(event: React.FormEvent<any>) => this.onValueChange('title', event)} />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.labelColumn}>
                        <span>Référence du document:</span>
                    </div>
                    <div className={styles.inputColumn}>
                        <input className={styles.input}
                               type="text"
                               name="reference"
                               value={this.state.reference}
                               onChange={(event: React.FormEvent<any>) => this.onValueChange('reference', event)} />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.labelColumn}>
                        <span>Objet du document:</span>
                    </div>
                    <div className={styles.inputColumn}>
                         <textarea className={styles.textarea}
                                   rows={4}
                                   name="object"
                                   value={this.state.object}
                                   onChange={(event: React.FormEvent<any>) => this.onValueChange('object', event)} />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.labelColumn}>
                        <span>Nature du document:</span>
                    </div>
                    <div className={styles.inputColumn}>
                        <select className={styles.select}
                                name="nature"
                                value={this.state.nature}
                                onChange={(event: React.FormEvent<any>) => this.onValueChange('nature', event)} >
                            <option value="1">Mémo</option>
                            <option value="2">Note</option>
                            <option value="3">Procédure</option>
                        </select>
                    </div>
                </div>

                <div className={styles.buttonPanel}>
                    <button className={styles.button}
                            onClick={this.handleFormSubmit}>Save</button>
                </div>
            </div>
        )
    }
}

export default Form