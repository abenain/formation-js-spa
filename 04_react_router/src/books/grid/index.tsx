/**
 * Created by antoine on 25/12/2016.
 */
import * as React from 'react'
import {Book} from '../../types'
import BookIcon from '../book-icon'

const styles = require('./styles.scss')

interface Props{
    books: Book[]
}

const Grid = ({books}: Props) => <div className={styles.bookGrid}>
    {books.map((book: Book) => <div key={book.id} className={styles.book}>
        <BookIcon className={styles.icon}/>
        <div className={styles.title} title={book.title}>{book.title}</div>
    </div>)}
</div>

export default Grid