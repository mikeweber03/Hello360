import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View
} from 'react-360';

import {connect, setCurrent} from './../../store';

class ElementClass extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      viewType: props.viewType,
      viewMax: props.viewMax,
      viewMin: props.viewMin,
      element: props.element,
      keyNumber: props.keyNumber,
      hasError: false,
      isIn: false,
      bgcolor: this.setColor()
    };
  }

 
  componentDidCatch() {     
    this.setState({ hasError: true });
  }

  styleBackground = function() {    
    return {
      borderColor:'rgba(0, 0, 0, 1)', 
      width:65,
      borderWidth:1,
      backgroundColor: this.state.bgcolor     
    }
  }

  onEntering() {
    this.setState({
      bgcolor: 'rgba(0, 200, 0, 0.8)'
    });
  } 

  onExiting(e) {
    this.setState({
      //bgcolor: 'rgba(128, 128, 128, 0.6)'
      bgcolor: this.setColor()
    });
  } 

  setColor() {
    
    if (!this.props || !this.props.viewMin || ! this.props.viewMax || !this.props.viewType || ! this.state.element){
      return 'rgba(128, 128, 128, 0.6)';
    }
    var min = this.props.viewMin;
    var max = this.props.viewMax;
    var value = this.state.element[this.props.viewType];
    if (!min || !max || !value || min=='NaN' || max=='NaN'){
      return 'rgba(128, 128, 128, 0.6)';
    }
   
    var span = (value - min) / (max - min) * 255;
    return 'rgba(' + span + ', 0, ' + (255 - span) + ', 1.0)';
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error: </h1>;
    } else {
      
      const e = this.state.element;
     
      return (
        <View pointerEvents='box-only' onEnter={e=>this.onEntering()} 
          onExit={e=>this.onExiting()} onInput={() => setCurrent(this.props.element.Number)}
          style={this.styleBackground() } key={this.state.keyNumber}>
        <Text style={styles.elementSymbol}>{e.Symbol}</Text>
        <Text style={styles.elementName}>{e.Name}</Text>
        </View>
      );
    }
  }
}

const ConnectedElementClass = connect(ElementClass);
export default ConnectedElementClass;

styles = StyleSheet.create({
  elementNull:{
      //borderColor:'rgba(0, 0, 0, 1)', 
      width:65,
      //borderWidth:1,
      //backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  elementSymbol: { 
      fontSize: 24,
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: 'rgba(255, 255, 0, 1)',
  },
  elementName: { 
      fontSize: 12,
      justifyContent: 'flex-end',
      alignItems: 'center',
      color: 'rgba(255, 255, 0, 1)' 
  },
});
