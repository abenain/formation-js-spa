/**
 * Created by antoine on 22/12/2016.
 */
import * as ReactDOM from 'react-dom'
import * as React from 'react'
import axios from 'axios'

import Application from 'application'

require('./styles.scss')

axios.get('http://localhost:3000/books')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

window.onload = () => {
    ReactDOM.render(
        <Application />,
        document.getElementById('root')
    );
}


