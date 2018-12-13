import React from 'react';
import {
  View, 
  asset
} from 'react-360';

import Entity from 'Entity';
import {connect, toggleExplode} from '../../store';


class OrbitalLogicF extends React.Component {
  
  drawF1 (isFull){
    var mtlSrc = 'Objects/solidBlue.mtl';
    if (isFull){
      mtlSrc = 'Objects/solidGray.mtl'
    }
    return (
    <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], alignItems: 'center'}}
    source={{
      obj: asset('Objects/f1.obj'),
      mtl: asset(mtlSrc)       
    }}
    onInput={e => {
      const inputEvent = e.nativeEvent.inputEvent;
      if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
        toggleExplode(e);
      }
    }}
  />
    );
  }

  drawF2 (isFull,iexplode) {
    var mtlSrc = 'Objects/solidBlue.mtl';
    if (isFull){
      mtlSrc = 'Objects/solidGray.mtl'
    }
    return (
    <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
    {translate:[0, this.props.sizerValence * 3 * iexplode, 0]}], alignItems: 'center'}}
        source={{
          obj: asset('Objects/f2.obj'),
          mtl: asset(mtlSrc)       
        }}
        onInput={e => {
          const inputEvent = e.nativeEvent.inputEvent;
          if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
            toggleExplode(e);
          }
        }}
     />
    );
  }

  drawF3 (isFull, iexplode){
    var mtlSrc = 'Objects/solidBlue.mtl';
    if (isFull){
      mtlSrc = 'Objects/solidGray.mtl'
    }
    return (
    <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
    {translate:[0, this.props.sizerValence * -3 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
    source={{
      obj: asset('Objects/f1.obj'),
      mtl: asset(mtlSrc)       
    }}
    
    onInput={e => {
      const inputEvent = e.nativeEvent.inputEvent;
      if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
        toggleExplode(e);
      }
    }}              
  />
    );
  }

  drawF4 (isFull, iexplode) {
    var mtlSrc = 'Objects/solidBlue.mtl';
    if (isFull){
      mtlSrc = 'Objects/solidGray.mtl'
    }
    return (
    <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
    {translate:[0, this.props.sizerValence * 6 * iexplode, 0]}], alignItems: 'center'}}
    source={{
      obj: asset('Objects/f4.obj'),
      mtl: asset(mtlSrc)       
    }}
    
    onInput={e => {
      const inputEvent = e.nativeEvent.inputEvent;
      if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
        toggleExplode(e);
      }
    }}    
  />
    );
  }

  drawF5 (isFull, iexplode) {
    var mtlSrc = 'Objects/solidBlue.mtl';
    if (isFull){
      mtlSrc = 'Objects/solidGray.mtl'
    }
    return (
    <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]},
    {translate:[0, this.props.sizerValence * -6 * iexplode, 0]},  {rotateY: 45}], alignItems: 'center'}}
    source={{
      obj: asset('Objects/f1.obj'),
      mtl: asset(mtlSrc)       
    }}
    
    onInput={e => {
      const inputEvent = e.nativeEvent.inputEvent;
      if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
        toggleExplode(e);
      }
    }}
  />);
  }

  drawF6 (isFull, iexplode) {
    var mtlSrc = 'Objects/solidBlue.mtl';
    if (isFull){
      mtlSrc = 'Objects/solidGray.mtl'
    }
    return (
    <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
    {translate:[this.props.sizerValence * 3 * iexplode, 0, 0]}, {rotateY: 45}], alignItems: 'center'}}
        source={{
          obj: asset('Objects/f2.obj'),
          mtl: asset(mtlSrc)       
        }}
        onInput={e => {
          const inputEvent = e.nativeEvent.inputEvent;
          if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
            toggleExplode(e);
          }
        }}
     />
    );
  }

  drawF7 (isFull, iexplode) {
    var mtlSrc = 'Objects/solidBlue.mtl';
    if (isFull){
      mtlSrc = 'Objects/solidGray.mtl'
    }
    return (
    <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
    {translate:[this.props.sizerValence * -3 * iexplode, 0, 0]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
        source={{
          obj: asset('Objects/f1.obj'),
          mtl: asset(mtlSrc)       
        }}
        onInput={e => {
          const inputEvent = e.nativeEvent.inputEvent;
          if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
            toggleExplode(e);
          }
        }}
     />
    );
  }

  render () {  
    var iexplode = this.props.isExploded ? 1 : 0;

    if (this.props.orbitalType=="f1"){
      return (
        <View style={{alignItems: 'center'}} >
        {drawF1(false)};
      </View> 
      );
    }
  
    if (this.props.orbitalType=="f2"){
      return (
        <View style={{alignItems: 'center'}} >
          {this.drawF1(false)}
          {this.drawF2(false, iexplode)}
        </View> 
      );
    }
  
    if (this.props.orbitalType=="f3"){
      return (
        <View style={{alignItems: 'center'}} >
          {this.drawF1(false)}
          {this.drawF2(false, iexplode)}
          {this.drawF3(false, iexplode)}               
        </View> 
      );
    }
  
    if (this.props.orbitalType=="f4"){      
      return (
        <View style={{alignItems: 'center'}} >
        {this.drawF1(false)}
          {this.drawF2(false, iexplode)}
          {this.drawF3(false, iexplode)}               
          {this.drawF4(false, iexplode)}        
        </View> 
      );
    };

    if (this.props.orbitalType=="f5"){
      return (
        <View style={{alignItems: 'center'}} >
        {this.drawF1(false)}
          {this.drawF2(false, iexplode)}
          {this.drawF3(false, iexplode)}               
          {this.drawF4(false, iexplode)}        
          {this.drawF5(false, iexplode)}        
        </View> 
      );
    };
  
    if (this.props.orbitalType=="f6"){
      return (
        <View style={{alignItems: 'center'}} >
          {this.drawF1(false)}
          {this.drawF2(false, iexplode)}
          {this.drawF3(false, iexplode)}               
          {this.drawF4(false, iexplode)}        
          {this.drawF5(false, iexplode)}        
          {this.drawF6(false, iexplode)}        
        </View> 
      );
    };
  
    if (this.props.orbitalType=="f7"){
      return (
        <View style={{alignItems: 'center'}} >
          {this.drawF1(false)}
          {this.drawF2(false, iexplode)}
          {this.drawF3(false, iexplode)}               
          {this.drawF4(false, iexplode)}        
          {this.drawF5(false, iexplode)}        
          {this.drawF6(false, iexplode)}        
          {this.drawF7(false, iexplode)} 
        </View> 
      );
    };
  
    if (this.props.orbitalType=="f8"){
      return (
        <View style={{alignItems: 'center'}} >
          {this.drawF1(true)}
          {this.drawF2(false, iexplode)}
          {this.drawF3(false, iexplode)}               
          {this.drawF4(false, iexplode)}        
          {this.drawF5(false, iexplode)}        
          {this.drawF6(false, iexplode)}        
          {this.drawF7(false, iexplode)}        
        </View> 
      );
    };
  
    if (this.props.orbitalType=="f9"){
      return (
        <View style={{alignItems: 'center'}} >
          {this.drawF1(true)}
          {this.drawF2(true, iexplode)}
          {this.drawF3(false, iexplode)}               
          {this.drawF4(false, iexplode)}        
          {this.drawF5(false, iexplode)}        
          {this.drawF6(false, iexplode)}        
          {this.drawF7(false, iexplode)}        
        </View> 
      );
    };
  
    if (this.props.orbitalType=="f10"){
      return (
        <View style={{alignItems: 'center'}} >
          {this.drawF1(true)}
          {this.drawF2(true, iexplode)}
          {this.drawF3(true, iexplode)}               
          {this.drawF4(false, iexplode)}        
          {this.drawF5(false, iexplode)}        
          {this.drawF6(false, iexplode)}        
          {this.drawF7(false, iexplode)}        
        </View> 
      );
    };
  
    if (this.props.orbitalType=="f11"){
      return (
        <View style={{alignItems: 'center'}} >
          {this.drawF1(true)}
          {this.drawF2(true, iexplode)}
          {this.drawF3(true, iexplode)}               
          {this.drawF4(true, iexplode)}        
          {this.drawF5(false, iexplode)}        
          {this.drawF6(false, iexplode)}        
          {this.drawF7(false, iexplode)}        
        </View> 
      );
    };

    if (this.props.orbitalType=="f12"){
      return (
        <View style={{alignItems: 'center'}} >
          {this.drawF1(true)}
          {this.drawF2(true, iexplode)}
          {this.drawF3(true, iexplode)}               
          {this.drawF4(true, iexplode)}        
          {this.drawF5(true, iexplode)}        
          {this.drawF6(false, iexplode)}        
          {this.drawF7(false, iexplode)}        
        </View> 
      );
    };

    if (this.props.orbitalType=="f13"){
      return (
        <View style={{alignItems: 'center'}} >
          {this.drawF1(true)}
          {this.drawF2(true, iexplode)}
          {this.drawF3(true, iexplode)}               
          {this.drawF4(true, iexplode)}        
          {this.drawF5(true, iexplode)}        
          {this.drawF6(true, iexplode)}        
          {this.drawF7(false, iexplode)}        
        </View> 
      );
    };

    if (this.props.orbitalType=="f14"){
      return (
        <View style={{alignItems: 'center'}} >
          {this.drawF1(true)}
          {this.drawF2(true, iexplode)}
          {this.drawF3(true, iexplode)}               
          {this.drawF4(true, iexplode)}        
          {this.drawF5(true, iexplode)}        
          {this.drawF6(true, iexplode)}        
          {this.drawF7(true, iexplode)}        
        </View> 
      );
    };
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

const ConnectedOrbitalLogicF = connect(OrbitalLogicF);
export default ConnectedOrbitalLogicF;
