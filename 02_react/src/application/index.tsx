/**
 * Created by antoine on 23/12/2016.
 */
import * as React from 'react'

import Header from "header"
import List from "list"

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

const Application = () => <div>
    <Header title={title}/>
    <List books={books}/>
</div>

export default Application