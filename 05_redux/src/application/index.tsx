/**
 * Created by antoine on 23/12/2016.
 */
import * as React from 'react'
import {MuiThemeProvider, lightBaseTheme, getMuiTheme} from 'material-ui/styles';
import { Store } from 'redux'

import {GlobalState} from "types";
import rerender from './rerenderElementWhenStoreChanges'
import Header from "header"

const title = 'Test ReactJS Application'

interface Props{
    children?: any,
    store: Store<GlobalState>
}

export default class Application extends React.Component<Props, {}>{
    public static childContextTypes: React.ValidationMap<{}> = {}
    public getChildContext() { return {} }

    public constructor(props: Props){
        super(props)
        rerender(this, this.props.store)
    }

    public render(){
        return <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
                <Header title={title} store={this.props.store}/>
                {this.props.children}
            </div>
        </MuiThemeProvider>
    }
}
