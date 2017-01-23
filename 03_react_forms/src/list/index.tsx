/**
 * Created by antoine on 23/01/2017.
 */
import * as React from 'react'
import {Paper, List as MaterialUIList, ListItem} from 'material-ui'

import { Document } from '../types'

const styles = require('./styles.scss')

interface Props {
    documents: Document[],
    onDocumentSelected: (documentReference: string) => void
}

const List = (props: Props) => (
    <Paper className={styles.card}>
        <MaterialUIList>
            {props.documents.map(document => (
                <ListItem key={document.reference}
                          primaryText={document.title}
                          onClick={() => props.onDocumentSelected(document.reference)}/>
            ))}
        </MaterialUIList>
    </Paper>
)

export default List