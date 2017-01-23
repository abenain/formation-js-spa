import * as React from 'react'
import {MuiThemeProvider, lightBaseTheme, getMuiTheme} from 'material-ui/styles';

import Header from 'header'
import Form from "form"

const title = 'Test ReactJS Application'

const Application = () => <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
        <Header title={title}></Header>
        <Form />
    </div>
</MuiThemeProvider>

export default Application