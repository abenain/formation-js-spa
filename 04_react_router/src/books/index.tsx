import * as React from 'react'
import axios from 'axios'
import { Maybe } from 'tsmonad'

import List from "books/list"
import Grid from "books/grid"
import { Book } from 'types'

type ViewType = 'grid' | 'list'

interface State {
    view?:ViewType,
    books?:Maybe<Book[]>
}

interface Props {
    location: {
        query?: {
            view: ViewType
        }
    }
}

const styles = require('./styles.scss')

export default class Books extends React.Component<Props, State> {
    public constructor(props: any) {
        super(props)
        this.state = {
            view: 'list',
            books: Maybe.nothing<Book[]>()
        }
    }

    public componentDidMount() {
        if(this.props.location.query){
            const view = this.props.location.query.view
            if(view === 'list' || view === 'grid'){
                this.setState({
                    view: view
                })
            }
        }
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
        this.setState({
            view: newView
        })
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