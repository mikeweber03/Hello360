import React from 'react';
import {
  View, 
  Text,
  StyleSheet,
  asset
} from 'react-360';
//import { Animated } from 'react-native';

import Entity from 'Entity';
//import AmbientLight from 'AmbientLight';
//import PointLight from 'PointLight';

export default class AtomView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: props.element,
    };
  }

  render() { 
    //const e = this.state.element;
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[0.7,0.7,0.7]}], alignItems: 'center' }}
          source={{
            obj: asset('Objects/shell.obj'),
            mtl: asset('Objects/shell.mtl')
          }}
        />
        <Entity lit="false" style={{opacity: 0.8,  alignItems: 'center'}}
        source={{
          obj: asset('Objects/p1.obj'),
          mtl: asset('Objects/p1.mtl')       
        }}
      />
      <Text style={styles.elementSymbol}>H</Text>   
      </View> 
    );
  }
};

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
