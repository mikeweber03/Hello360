import React from 'react';
import {
  View, 
  Text,
  StyleSheet,
  asset
} from 'react-360';
//import { Animated } from 'react-native';

import {connect} from '../store';
//import Entity from 'Entity';
import OrbitalLogic from './components/orbitalLogic'
import OrbitalLogicD from './components/orbitalLogic.D'
import OrbitalLogicP from './components/orbitalLogic.P'
import OrbitalLogicS from './components/orbitalLogic.S'
import OrbitalLogicF from './components/orbitalLogic.F';

//import AmbientLight from 'AmbientLight';
//import PointLight from 'PointLight';



class AtomView extends React.Component {
  constructor(props) {
    super(props);   
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
      //var sizerShell = element.CovalentRadius * 0.005;
      var sizerValence = element.AtomicRadius * 0.004;
     
      var type = element.Valence;
      var isExploded = this.props.isExploded;

      if (type=="s1"||type=="s2"){
        return (            
          <View>
            <OrbitalLogicS sizerValence={sizerValence} orbitalType={type} isExploded={isExploded}  />
          </View>
        );
      }

      if (type=="p1"||type=="p2"||type=="p3"||type=="p4"||type=="p5"||type=="p6"){
        return (            
          <View>
            <OrbitalLogicP sizerValence={sizerValence} orbitalType={type} isExploded={isExploded}  />
          </View>
        );
      }

      if (type=="d1"||type=="d2"||type=="d3"||type=="d4"||type=="d5"||type=="d6"||type=="d7"||type=="d8"||type=="d9"||type=="d10"){
        return (            
          <View>
            <OrbitalLogicD sizerValence={sizerValence} orbitalType={type} isExploded={isExploded}  />
          </View>
        );
      }

      if (type=="f1"||type=="f2"||type=="f3"||type=="f4"||type=="f5"||type=="f6"||type=="f7"||
        type=="f8"||type=="f9"||type=="f10"||type=="f11"||type=="f12"||type=="f13"||type=="f14"){
        
        return (            
          <View>
            <OrbitalLogicF sizerValence={sizerValence} orbitalType={type} isExploded={isExploded}  />
          </View>
        );
      }
      return (            
        <View>
          <OrbitalLogic sizerValence={sizerValence} orbitalType={type} isExploded={isExploded}  />
        </View>
      );
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
