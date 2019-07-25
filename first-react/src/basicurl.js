import React from "react";
import FrameMain from './frame'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class BasicUrl extends React.PureComponent {

    render(){
        return (
            <div className='App'>
                <Router>
                    <Route exact path="/" component={FrameMain} />
                    {/* <Route path="/topics" component={Topics} /> */}
                </Router>
            </div>
        );
    }
  }

  export default BasicUrl;