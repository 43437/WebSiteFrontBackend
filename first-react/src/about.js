import React from "react";
import SideBar from "./sidebar";
import axios from 'axios'

class AboutPage extends React.PureComponent{

    constructor(props){
      super(props)
      this.props = props
    }

    render(){
          return (
            
            <div>
                <h2>About</h2>
            </div>
          );
    }
}

export default AboutPage;