/**
 * Created by antoine on 23/12/2016.
 */
import * as React from 'react'
import {MuiThemeProvider, lightBaseTheme, getMuiTheme} from 'material-ui/styles';
import { Store } from 'redux'

import {GlobalState} from "types";
import Header from "header"

const title = 'Test ReactJS Application'

interface Props{
    children: any,
    store: Store<GlobalState>
}

const Application = ({children, store}: Props) => <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
        <Header title={title} store={store}/>
        {children}
    </div>
</MuiThemeProvider>

export default Application
