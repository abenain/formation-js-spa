/**
 * Created by antoine on 23/01/2017.
 */
import * as React from 'react'
import {Paper, Divider, FloatingActionButton, List as MaterialUIList, ListItem} from 'material-ui'

import { Document } from '../types'

const styles = require('./styles.scss')
const plusIcon = require('./plus.png')

interface Props {
    documents: Document[],
    onDocumentSelected: (documentReference: string) => void
}

const List = (props: Props) => (
    <Paper className={styles.card}>
        <div className={styles.cardContents}>
            <div className={styles.listPanel}>
                <MaterialUIList>
                    {props.documents.map(document => (
                        <ListItem key={document.reference}
                                  primaryText={document.title}
                                  onClick={() => props.onDocumentSelected(document.reference)}/>
                    ))}
                </MaterialUIList>
            </div>
            <div className={styles.bottomPanel}>
                <Divider />
                <FloatingActionButton className={styles.actionButton} mini={true} onClick={() => {alert('clicked')}} >
                    <img src={plusIcon} alt="+"/>
                </FloatingActionButton>
            </div>
        </div>
    </Paper>
)

export default List