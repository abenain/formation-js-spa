/**
 * Created by antoine on 23/12/2016.
 */
import * as React from 'react'

import Header from "header"
import List from "list"
import Grid from "grid"

interface State{
    view: string
}

const styles = require('./styles.scss')
const title = 'Test ReactJS Application'

const books = [{
    "id": "bk001",
    "title": "Everyday Italian",
    "author": "Giada De Laurentiis",
    "genre": "Languages",
    "publish_date": "2005",
    "price": 30
}, {
    "id": "bk002",
    "title": "Harry Potter",
    "author": "J K. Rowling",
    "genre": "Fantasy",
    "publish_date": "2005",
    "price": 29.99
}, {
    "id": "bk003",
    "title": "XQuery Kick Start",
    "author": "James McGovern",
    "genre": "Computer",
    "publish_date": "2003",
    "price": 49.99
}, {
    "id": "bk004",
    "title": "Learning XML",
    "genre": "Computer",
    "author": "Erik T. Ray",
    "publish_date": "2003",
    "price": 39.95
}]

export default class Application extends React.Component<{}, State>{
    public constructor(){
        super()
        this.state = {
            view: 'list'
        }
    }

    private switchView(){
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
    public render(){
        return <div>
            <Header title={title}/>
            {this.getSwitchViewButton()}
            {this.state.view === 'grid' ? <Grid books={books}/> : null}
            {this.state.view === 'list' ? <List books={books}/> : null}
        </div>
    }
}