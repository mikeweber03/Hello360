import React from 'react';
import {
  View, 
  asset
} from 'react-360';

import Entity from 'Entity';
import {connect, toggleExplode} from '../../store';


class OrbitalLogicD extends React.Component {
  
  render () {  
    var iexplode = this.props.isExploded ? 1 : 0;

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
          {translate:[0, this.props.sizerValence * 3 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * 3 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * -3 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * 3 * iexplode, 0]},{rotateY: 45}], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * -3 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * 3 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * -3 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * -6 * iexplode, 0]}, ], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * 3 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * -3 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * -6 * iexplode, 0]}], 
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
            {translate:[0, this.props.sizerValence * 3 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * -3 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * -6 * iexplode, 0]}], 
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
            {translate:[0, this.props.sizerValence * 3 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * -3 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * -6 * iexplode, 0]}], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * 3 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * -3 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * -6 * iexplode, 0]}], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * 3 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * -3 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
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
            {translate:[0, this.props.sizerValence * -6 * iexplode, 0]}], alignItems: 'center'}}
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

const ConnectedOrbitalLogicD = connect(OrbitalLogicD);
export default ConnectedOrbitalLogicD;
