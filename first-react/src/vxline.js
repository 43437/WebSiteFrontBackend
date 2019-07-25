import React from 'react';
import Plot from 'react-plotly.js';

class PlotChart extends React.PureComponent{

  render(){
    var trace1 = {
      type: 'scatter',
      x: [1.01, 2.93, 3.65, 4.21, 5.34, 6.45, 7.12, 8.23, 9.64, 10.56, 11.23, 12.56],
      y: [2, 3.5, 4, 3, 4.5, 5, 5.5, 6.5, 7.5, 8, 8.5, 10],
      line:{shape: 'spline'}
    }
    
    var data = [trace1]

    return (
      <Plot
        data={data}
        // layout={ {width: 640, height: 480, title: 'A Fancy Plot'} }
      />
    );
  }
}

export default PlotChart;