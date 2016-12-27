import * as React from 'react'
import {MuiThemeProvider, lightBaseTheme, getMuiTheme} from 'material-ui/styles';

import Header from 'header'

const title = 'Test ReactJS Application'


const Application = () => <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
        <Header title={title}></Header>
        <h1>Hello, World!</h1>
    </div>
</MuiThemeProvider>

export default Application