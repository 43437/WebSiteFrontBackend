import React from 'react'
import socketIOClient from "socket.io-client";
import VXChartLine from './vxline'

class ChartPage extends React.PureComponent{

    constructor(props){
        super(props)
        this.props = props
        this.state = {
            data: {},
            endpoint: '127.0.0.1:4000',
        }
        this._active = false
        this._socket = null
    }


    componentDidMount(){
        this._active = true
        const { endpoint } = this.state;
        this._socket = socketIOClient(endpoint);
        this._socket.on("FromAPI", data => {
            if (this._active){
                this.setState({ data: data })
            }

            console.log('receive msg.')
        });
    }

    componentWillUnmount(){
        this._active = false
        this._socket.close()
    }

    render(){
        const x=this.state.data.x
        const y=this.state.data.y
        const mg={left: 35, right: 35, top: 35, bottom: 35}
        return (
            <div>
                <VXChartLine /><br/>
                x value is {x}, y value is {y}
            </div>
        )
    }
}

export default ChartPage;