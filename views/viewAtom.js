import React from 'react';
import {
  View, 
  Text,
  StyleSheet,
  asset
} from 'react-360';
//import { Animated } from 'react-native';

import {connect} from '../store';
import Entity from 'Entity';
import {returnOrbital} from './components/orbitalLogic'
//import AmbientLight from 'AmbientLight';
//import PointLight from 'PointLight';



class AtomView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      explode: false
    };
  }

  

  render() { 
    //<Entity lit="false" style={{transform:[{scale:[0.6,0.6,0.6]}], alignItems: 'center'}}
    //const e = this.state.element;
    if (!this.props || this.props.current < 0)
    {
        return (
        <View >    
          </View>
        );
    }        
    else {
      var element = this.props.elements[this.props.current];
      var sizerShell = element.CovalentRadius * 0.005;
      var sizerValence = element.AtomicRadius * 0.005;
     
      var type = element.Valence;
debugger;
      return returnOrbital(type, sizerValence);
    }
  };
}



const ConnectedAtomView = connect(AtomView);
export default ConnectedAtomView;

styles = StyleSheet.create({ 
  elementSymbol: { 
      fontSize: 16,
      alignItems:'center',
      color: 'rgba(255, 255, 0, 1)',
  },
  elementName: { 
      fontSize: 12,   
      color: 'rgba(255, 255, 0, 1)' 
  },
});
