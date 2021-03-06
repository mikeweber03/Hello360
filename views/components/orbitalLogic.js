import React from 'react';
import {
  View, 
  asset
} from 'react-360';

import Entity from 'Entity';
import {connect, toggleExplode} from './../../store';


class OrbitalLogic extends React.Component {


//returnOrbital(this.props.orbitalType, this.props.sizerValence, parent, isExploded) {
  
  render () {  
    var iexplode = this.props.isExploded ? 1 : 0;

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
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, {rotateY: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
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
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, {rotateY: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
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
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, {rotateY: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
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
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, {rotateY: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidGray.mtl')       
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
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
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, {rotateY: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidGray.mtl')       
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/p1.obj'),
              mtl: asset('Objects/solidGray.mtl')       
            }}
          />        
      </View> 
      );
    }
  
    if (this.props.orbitalType=="d1"){
      return (
        <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
            }}
          />
      </View> 
      );
    }
  
    if (this.props.orbitalType=="d2"){
      return (
        <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
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
          {translate:[0, this.props.sizerValence * 2 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
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
  
    if (this.props.orbitalType=="d3"){
      return (
        <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
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
            {translate:[0, this.props.sizerValence * 2 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
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
            {translate:[0, this.props.sizerValence * 4 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
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
  
    if (this.props.orbitalType=="d4"){
      return (
        <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
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
            {translate:[0, this.props.sizerValence * 2 * iexplode, 0]},{rotateY: 45}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
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
            {translate:[0, this.props.sizerValence * 4 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
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
            {translate:[0, this.props.sizerValence * 6 * iexplode, 0]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
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
    };
  
    if (this.props.orbitalType=="d5"){
      return (
        <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
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
            {translate:[0, this.props.sizerValence * 2 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
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
            {translate:[0, this.props.sizerValence * 4 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
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
            {translate:[0, this.props.sizerValence * 6 * iexplode, 0]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
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
            {translate:[0, this.props.sizerValence * 8 * iexplode, 0]}, ], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d5.obj'),
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
    };
  
    if (this.props.orbitalType=="d6"){
      return (
        <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/transGray.mtl')       
            }}
  
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]},             
            {translate:[0, this.props.sizerValence * 2 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
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
            {translate:[0, this.props.sizerValence * 4 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
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
            {translate:[0, this.props.sizerValence * 6 * iexplode, 0]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
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
            {translate:[0, this.props.sizerValence * 8 * iexplode, 0]}], 
            alignItems: 'center'}}
            source={{
              obj: asset('Objects/d5.obj'),
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
    };
  
    if (this.props.orbitalType=="d7"){
      return (
        <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/transGray.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
            {translate:[0, this.props.sizerValence * 2 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transGray.mtl')       
              }}
              onInput={e => {
                const inputEvent = e.nativeEvent.inputEvent;
                if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                  toggleExplode(e);
                }
              }}
            />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
            {translate:[0, this.props.sizerValence * 4 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
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
            {translate:[0, this.props.sizerValence * 6 * iexplode, 0]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
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
            {translate:[0, this.props.sizerValence * 8 * iexplode, 0]}], 
            alignItems: 'center'}}
            source={{
              obj: asset('Objects/d5.obj'),
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
    };
  
    if (this.props.orbitalType=="d8"){
      return (
        <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/transGray.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
            {translate:[0, this.props.sizerValence * 2 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transGray.mtl')       
              }}
              onInput={e => {
                const inputEvent = e.nativeEvent.inputEvent;
                if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                  toggleExplode(e);
                }
              }}
            />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
            {translate:[0, this.props.sizerValence * 4 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/transGray.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
            {translate:[0, this.props.sizerValence * 6 * iexplode, 0]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
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
            {translate:[0, this.props.sizerValence * 8 * iexplode, 0]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d5.obj'),
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
    };
  
    if (this.props.orbitalType=="d9"){
      return (
        <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/transGray.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
            {translate:[0, this.props.sizerValence * 2 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transGray.mtl')       
              }}
              onInput={e => {
                const inputEvent = e.nativeEvent.inputEvent;
                if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                  toggleExplode(e);
                }
              }}
            />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
            {translate:[0, this.props.sizerValence * 4 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/transGray.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
            {translate:[0, this.props.sizerValence * 6 * iexplode, 0]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/transGray.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]},
            {translate:[0, this.props.sizerValence * 8 * iexplode, 0]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d5.obj'),
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
    };
  
    if (this.props.orbitalType=="d10"){
      return (
        <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/transGray.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
            {translate:[0, this.props.sizerValence * 2 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transGray.mtl')       
              }}
              onInput={e => {
                const inputEvent = e.nativeEvent.inputEvent;
                if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                  toggleExplode(e);
                }
              }}
            />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
            {translate:[0, this.props.sizerValence * 4 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/transGray.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]}, 
            {translate:[0, this.props.sizerValence * 6 * iexplode, 0]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/transGray.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExplode(e);
              }
            }}
          />
          <Entity lit="false" style={{transform:[{scale:[this.props.sizerValence,this.props.sizerValence,this.props.sizerValence ]},
            {translate:[0, this.props.sizerValence * 8 * iexplode, 0]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d5.obj'),
              mtl: asset('Objects/transGray.mtl')       
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

const ConnectedOrbitalLogic = connect(OrbitalLogic);
export default ConnectedOrbitalLogic;
