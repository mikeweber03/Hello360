import React from 'react';
import {
  View, 
  asset
} from 'react-360';

import Entity from 'Entity';
import {connect} from '../../store';


class OrbitalLogicS extends React.Component {
  render () {  
    
    if (this.props.orbitalType=="s1"){
      return (
        <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/shell.obj'),
              mtl: asset('Objects/solidBlue.mtl')
            }}
          />            
        </View> 
      );
    }
  
    if (this.props.orbitalType=="s2"){
      return (
        <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], 
            alignItems: 'center'}}
            source={{
              obj: asset('Objects/shell.obj'),
              mtl: asset('Objects/solidGray.mtl')
            }}              
          />                   
      </View> 
      );
    }
  
  
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/shell.obj'),
            mtl: asset('Objects/transGray.mtl')
          }}
        />                 
    </View> 
    );
  }
}

const ConnectedOrbitalLogicS = connect(OrbitalLogicS);
export default ConnectedOrbitalLogicS;
