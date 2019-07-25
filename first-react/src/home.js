import React from "react";
import SideBar from "./sidebar";
import axios from 'axios'

class HomePage extends React.Component {

    render(){
        // axios.get('/hireact/23', {
        //     headers:{
        //       'Content-Type': 'application/json'
        //     }
        //   })
        //   .then(response => {console.log(response.data)})
          return (
            <div>
                <h2>Home</h2>
            </div>
          );
    }
  }

  export default HomePage;