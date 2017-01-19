import * as React from 'react'
import axios from 'axios'
import { Maybe } from 'tsmonad'

import List from "books/list"
import Grid from "books/grid"
import { Book } from 'types'

interface State {
    view:string,
    books:Maybe<Book[]>
}

const styles = require('./styles.scss')

export default class Books extends React.Component<{}, State> {
    public constructor(props: any) {
        super(props)
        this.state = {
            view: 'list',
            books: Maybe.nothing<Book[]>()
        }
    }

    public componentDidMount() {
        axios.get('http://codeberry.fr/1/books')
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

    private switchView() {
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

    public render() {
        return this.state.books.caseOf({
            just: (books:Book[]) => {
                const bookView = this.state.view === 'grid' ? <Grid books={books}/> : <List books={books}/>
                return <div>
                    {this.getSwitchViewButton()}
                    {bookView}
                </div>
            },
            nothing: () => <div className={styles.loading}>
                <span>Loading...</span>
            </div>
        })
    }
}