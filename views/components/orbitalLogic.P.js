import React from 'react';
import {
  View, 
  asset
} from 'react-360';

import Entity from 'Entity';
import {connect, toggleExplode} from '../../store';


class OrbitalLogicP extends React.Component {


//returnOrbital(this.props.orbitalType, this.props.sizerValence, parent, isExploded) {
  
  render () {  
    var iexplode = this.props.isExploded ? 1 : 0;

    if (this.props.orbitalType=="p1"){
      return (
        <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
            }}
          />          
      </View> 
      );
    }
  
    if (this.props.orbitalType=="p2"){
      return (
        <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}           
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]},
             {translate:[0, this.props.sizerValence * 3 * iexplode, 0]}, {rotateY: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />          
      </View> 
      );
    }
  
    if (this.props.orbitalType=="p3"){
      return (
        <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]},
             {translate:[0, this.props.sizerValence * 3 * iexplode, 0]}, {rotateY: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
             {translate:[0, this.props.sizerValence * 6 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />        
      </View> 
      );
    }
  
  
    if (this.props.orbitalType=="p4"){
      return (
        <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidGray.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
             {translate:[0, this.props.sizerValence * 3 * iexplode, 0]}, {rotateY: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
             {translate:[0, this.props.sizerValence * 6 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />          
      </View> 
      );
    }
  
    if (this.props.orbitalType=="p5"){
      return (
        <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidGray.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
             {translate:[0, this.props.sizerValence * 3 * iexplode, 0]}, {rotateY: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidGray.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
             {translate:[0, this.props.sizerValence * 6 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />     
      </View> 
      );
    }
  
  
    if (this.props.orbitalType=="p6"){
      return (
        <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidGray.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
             {translate:[0, this.props.sizerValence * 3 * iexplode, 0]}, {rotateY: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidGray.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
             {translate:[0, this.props.sizerValence * 6 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidGray.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
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

const ConnectedOrbitalLogicP = connect(OrbitalLogicP);
export default ConnectedOrbitalLogicP;
