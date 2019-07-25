import React from "react";
import { slide as Menu } from "react-burger-menu";
import './style.css'

const PageType = {
  Home:1,
  Chart:2,
  About:3,
  Setting:4,
}

class SideBar extends React.PureComponent{
  constructor(props){
    super(props)
    this.props = props
  }

  handleUrl(param){
    this.props.onUrlChanged(param)
  }

  render(){
    return (
      // Pass on our props
      <div>
        <Menu>
        <a className="menu-item" href='#' onClick={(e) => this.handleUrl(PageType.Home)}>
            Home
          </a>
  
          <a className="menu-item" href='#' onClick={(e) => this.handleUrl(PageType.Chart)}>
            Chart
          </a>
  
          <a className="menu-item" href='#' onClick={(e) => this.handleUrl(PageType.Setting)}>
            Setting
          </a>
  
          <a className="menu-item" href='#' onClick={(e) => this.handleUrl(PageType.About)}>
            About
          </a>
        </Menu>
      </div>
    );
  }
}

export {PageType, SideBar}