/**
 * Created by antoine on 23/01/2017.
 */
import * as React from 'react'
import { Maybe } from 'tsmonad'
import {Paper, Divider, FloatingActionButton, List as MaterialUIList, ListItem} from 'material-ui'
import { browserHistory }from 'react-router'

import { Document } from '../../types'

const styles = require('./styles.scss')
const plusIcon = require('./plus.png')

interface Props {
    documents: Document[],
    selectedDocumentReference: Maybe<string>,
    onCreateDocument: () => void
}

const getListItemStyle = (document: Document, selectedDocumentReference: Maybe<string>) => {
    return selectedDocumentReference.caseOf({
        just: reference => document.reference === reference ? {backgroundColor: '#66d7e5'} : {},
        nothing: () => ({})
    })
}

const List = (props: Props) => (
    <Paper className={styles.card}>
        <div className={styles.cardContents}>
            <div className={styles.listPanel}>
                <MaterialUIList>
                    {props.documents.map(document => (
                        <ListItem key={document.reference}
                                  primaryText={document.title}
                                  style={getListItemStyle(document, props.selectedDocumentReference)}
                                  onClick={() => browserHistory.push('/documents/' + document.reference)}/>
                    ))}
                </MaterialUIList>
            </div>
            <div className={styles.bottomPanel}>
                <Divider />
                <FloatingActionButton className={styles.actionButton} mini={true} onClick={props.onCreateDocument} >
                    <img src={plusIcon} alt="+"/>
                </FloatingActionButton>
            </div>
        </div>
    </Paper>
)

export default List