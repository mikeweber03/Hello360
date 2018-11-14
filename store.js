import * as React from 'react';

import csvReader from "./views/components/csvReader.js";

/**
 * If you want to share data between multiple root components, you'll need a
 * global store like Redux. This is similar to building a web app where you
 * want to synchronize data between a sidebar and a main view - just extended
 * into three dimensions.
 * To simplify this sample, we implement a trivial Redux-like store that will
 * ensure all of our elements are synchronized.
 */
const State = {
  elements: [],
  current: -1,
  viewType: '',
  viewMin: 0,
  viewMax: 0
};

const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}

export function initialize() {
  let r = new csvReader();
  let properties = require("./views/components/elementProperties.json");
  var allElements = r.processData(properties);

  State.elements = allElements;
  updateComponents();
}

export function setCurrent(value) {  
  State.current = value-1;
  updateComponents();
}

export function setViewType(value) {      
  State.viewType = value;
  State.viewMin = GetViewMinMax(State.viewType, true);
  State.viewMax = GetViewMinMax(State.viewType, false);  
  updateComponents();
}

export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {      
      elements: State.elements,
      current: State.current,
      viewType: State.viewType,
      viewMin: State.viewMin,
      viewMax: State.viewMax
    };

    _listener = () => {
      this.setState({       
        elements: State.elements,
        current: State.current,
        viewType: State.viewType,
        viewMin: State.viewMin,
        viewMax: State.viewMax
      });
    };

    componentDidMount() {
      listeners.add(this._listener);
    }

    componentWillUnmount() {
      listeners.delete(this._listener);
    }

    render() {
      return (
        <Component
          {...this.props}         
          elements={this.state.elements}
          current={this.state.current}
          viewType={this.state.viewType}
          viewMin={this.state.viewMin}
          viewMax={this.state.viewMax}
        />
      );
    }
  };
}

function GetViewMinMax(type, isMin){
  var retVal = null;
  if (!State.elements || State.elements.Count < 1){
    return retVal;
  }
  State.elements.forEach(element => {
    var val = parseInt(element[type]);
    if (val && val!= "NaN"){
    if (!retVal){
      retVal = val;
    }
    if (isMin){
      if (val < retVal){
        retVal = val;
      }
    }
    else {
      if (val > retVal){
        retVal = val;
      }
    }
  }
  });
  return retVal;
}