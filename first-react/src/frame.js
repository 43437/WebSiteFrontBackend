import React from 'react';
import HomePage from './home'
import ChartPage from './chart'
import AboutPage from './about'
import SettingPage from './setting'
import {PageType, SideBar} from './sidebar'

class FrameMain extends React.Component{

    constructor(props){
        super(props)
        this.props = props
        this.state = {page:PageType.Home}
    }

    componentDidMount(){
        console.log('Did mounted.')
    }

    pageSelect(param){
        var page=<HomePage />
        switch(param){
            case PageType.Home:
                page = <HomePage />
                break;
            case PageType.Chart:
                page = <ChartPage />
                break;
            case PageType.About:
                page = <AboutPage />
                break;
            case PageType.Setting:
                page = <SettingPage />
                break;
            default:
                page = <HomePage />
                break;
        }

        return page;
    }

    handleUrlChange(param){

        this.setState({page:param})
    }

    render(){
        var page=this.pageSelect(this.state.page);
        return (
            <div id='Frame'>
                {/* <BasicUrl /> */}
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"Frame"} onUrlChanged={this.handleUrlChange.bind(this)}/>
                <div id='page-wrap'>
                    {page}
                </div>
            </div>
        );
    }
}

export default  FrameMain;