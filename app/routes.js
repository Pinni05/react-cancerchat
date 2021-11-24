import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
const About = ()=>{
    <div>
        <h2>About</h2>
    </div>
}
const Resources = ()=>{
    <div>
        <h2>Resources</h2>
    </div>
}
class App extends React.Component {
    render() {
        return (
            <Router>
                <div>React Router Course</div>
            </Router>
        );
    }
}

export default App;