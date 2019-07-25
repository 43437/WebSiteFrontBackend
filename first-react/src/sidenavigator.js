import React from 'react';
import SideBar from './sidebar'
import BasicUrl from './basicurl'

class SideNavigator extends React.PureComponent{

    render(){
        return (
            <div>
                <BasicUrl />
            </div>
        )
    }
}

export default SideNavigator;