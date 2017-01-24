/**
 * Created by antoine on 23/12/2016.
 */
import * as React from 'react'
import {MuiThemeProvider, lightBaseTheme, getMuiTheme} from 'material-ui/styles';

import Header from "header"

const title = 'Test ReactJS Application'

interface Props{
    children: React.ReactInstance
}

const Application = ({children}: Props) => <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
        <Header title={title}/>
        {children}
    </div>
</MuiThemeProvider>

export default Application
