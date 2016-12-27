/**
 * Created by antoine on 23/12/2016.
 */
import * as React from 'react'
import {Maybe} from 'tsmonad'
import axios from 'axios'
import { Store } from 'redux'

import {GlobalState} from "types";
import Header from 'header'
import List from 'list'
import Grid from 'grid'
import {Book} from 'types'

interface Props{
    store: Store<GlobalState>
}

interface State{
    view: string
    books: Maybe<Book[]>
}

const styles = require('./styles.scss')
const title = 'Test ReactJS Application'

export default class Application extends React.Component<Props, State>{
    public constructor(props: Props){
        super(props)
        this.state = {
            view: 'list',
            books: Maybe.nothing<Book[]>()
        }
    }

    public componentDidMount(){
        axios.get('http://localhost:3000/books')
            .then(response => {
                this.setState(Object.assign(this.state, {
                    books: Maybe.just(response.data)
                }))
            })
            .catch(error => {
                // TODO: deal with error case
                console.log(error);
            });
    }


    private switchView(){
        const newView = this.state.view === 'list' ? 'grid' : 'list'
        this.setState(Object.assign(this.state, {
            view: newView
        }))
    }

    private getSwitchViewButton(){
        const buttonLabel = this.state.view === 'list' ? 'Vue Grille' : 'Vue Liste'
        return <div className={styles.buttonContainer}>
            <button  className={styles.switchViewModeButton} onClick={() => this.switchView()}>{buttonLabel}</button>
        </div>
    }


    public render(){
        return <div>
            <Header title={title}/>
            {this.state.books.caseOf({
                just: (books: Book[]) => {
                    const bookView = this.state.view === 'grid' ? <Grid books={books}/> : <List books={books}/>
                    return <div>
                        {this.getSwitchViewButton()}
                        {bookView}
                    </div>
                },
                nothing: () => <div>Loading...</div>
            })}

        </div>
    }
}