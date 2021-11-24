import React from 'react'
import  ReactDOM from 'react-dom'


import './index.css';
import './CancerChat/css/styles.min.css';
import './CancerChat/fontawesome/css/font-awesome.min.css';
import './CancerChat/css/libs/select2.min.css';
import './CancerChat/css/ie8.css';
import Page from './Page'


//Component has 3 things 1. State 2. Lifecycle 3. UI
class App extends React.Component {
    render() {
        return <Page pagename = {this.props.pagename} />
    }
}
ReactDOM.render(

    <App pagename = 'about-us'/>,
    document.getElementById('nandita')

)