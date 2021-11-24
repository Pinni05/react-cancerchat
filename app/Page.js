import React from 'react'
import  ReactDOM from 'react-dom'
function createMarkup(template_name) {
    var template_html = require('./'+template_name+'.html.js');
    return {__html: template_html};
}

class Header extends React.Component {
    render() {
        return (

            <header className="row container nopad nomargin" dangerouslySetInnerHTML={createMarkup('header')} />

        )
    }
}

class Footer extends React.Component {
    render() {
        return <footer dangerouslySetInnerHTML={createMarkup('footer')} />

    }
}

class Body extends React.Component {
    render() {
        var pagename= this.props.pagename;
        return <section className="content  nopad" dangerouslySetInnerHTML={createMarkup(pagename)} />

    }
}
class Page extends React.Component {
    render() {

        return (
            <div>
                <Header />
                <Body pagename={this.props.pagename}/>
                <Footer/>
            </div>
        );
    }
}

export default Page;