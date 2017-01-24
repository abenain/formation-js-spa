/**
 * Created by antoine on 23/01/2017.
 */
import * as React from 'react'
import {Paper, Divider, FloatingActionButton, List as MaterialUIList, ListItem} from 'material-ui'

import { Document } from '../types'

const styles = require('./styles.scss')
const plusIcon = require('./plus.png')

interface Props {
    documents: Document[]
}

const List = (props: Props) => (
    <Paper className={styles.card}>
        <div className={styles.cardContents}>
            <div className={styles.listPanel}>
                <MaterialUIList>
                    {props.documents.map(document => (
                        <ListItem key={document.reference}
                                  primaryText={document.title}
                                  onClick={() => console.log(document.reference)}/>
                    ))}
                </MaterialUIList>
            </div>
            <div className={styles.bottomPanel}>
                <Divider />
                <FloatingActionButton className={styles.actionButton} mini={true} onClick={() => console.log('+ button clicked')} >
                    <img src={plusIcon} alt="+"/>
                </FloatingActionButton>
            </div>
        </div>
    </Paper>
)

export default List