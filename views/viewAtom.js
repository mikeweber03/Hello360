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
//import AmbientLight from 'AmbientLight';
//import PointLight from 'PointLight';

class AtomView extends React.Component {
  //constructor(props) {
  //  super(props);
  //  this.state = {
  //    element: props.element
  //  };
  //}

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
        var sizerShell = this.props.elements[this.props.current].CovalentRadius * 0.005;
        var sizerValence = this.props.elements[this.props.current].AtomicRadius * 0.005;

        return (
          <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/p1.mtl')       
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[sizerShell,sizerShell,sizerShell ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/shell.obj'),
              mtl: asset('Objects/shell.mtl')
            }}
          />      
        </View> 
        );
    }
  }
};

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
