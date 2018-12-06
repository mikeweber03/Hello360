import React from 'react';
import {
  View, 
  Text,
  StyleSheet,
  asset
} from 'react-360';

import Entity from 'Entity';

var isExploded = false;


function toggleExpolode() {   
  isExploded =  !isExploded;
}



export function returnOrbital(orbitalType, sizerValence) {
  
    
  if (orbitalType=="s1"){
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/shell.obj'),
            mtl: asset('Objects/solidBlue.mtl')
          }}
        />            
      </View> 
    );
  }

  if (orbitalType=="s2"){
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], 
          alignItems: 'center'}}
          source={{
            obj: asset('Objects/shell.obj'),
            mtl: asset('Objects/solidGray.mtl')
          }}              
        />                   
    </View> 
    );
  }


  if (orbitalType=="p1"){
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/p1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
        />          
    </View> 
    );
  }

  if (orbitalType=="p2"){
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/p1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}             
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/p1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
        />          
    </View> 
    );
  }

  if (orbitalType=="p3"){
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/p1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/p1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateZ: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/p1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
        />        
    </View> 
    );
  }


  if (orbitalType=="p4"){
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/p1.obj'),
            mtl: asset('Objects/solidGray.mtl')       
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/p1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateZ: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/p1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
        />          
    </View> 
    );
  }

  if (orbitalType=="p5"){
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/p1.obj'),
            mtl: asset('Objects/solidGray.mtl')       
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/p1.obj'),
            mtl: asset('Objects/solidGray.mtl')       
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateZ: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/p1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
        />     
    </View> 
    );
  }


  if (orbitalType=="p6"){
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/p1.obj'),
            mtl: asset('Objects/solidGray.mtl')       
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/p1.obj'),
            mtl: asset('Objects/solidGray.mtl')       
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateZ: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/p1.obj'),
            mtl: asset('Objects/solidGray.mtl')       
          }}
        />        
    </View> 
    );
  }

  if (orbitalType=="d1"){
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
        />
    </View> 
    );
  }

  if (orbitalType=="d2"){
    var iexplode = isExpoloded ? 1 : 0;
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}             
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
        {translate:[0, sizerValence * 2 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
            }}
          
            onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
          />
      </View> 
    );
  }

  if (orbitalType=="d3"){
    var iexplode = isExpoloded ? 1 : 0;
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
          
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]},
          {translate:[0, sizerValence * 2 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
            }}
            
            onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
          />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 4 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
          
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}              
        />
      </View> 
    );
  }

  if (orbitalType=="d4"){
    var iexplode = isExpoloded ? 1 : 0;
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
          
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 2 * iexplode, 0]},{rotateY: 45}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
            }}
            
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExpolode(e);
              }
            }}
          />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 4 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
          
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 6 * iexplode, 0]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
          
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
      </View> 
    );
  };

  if (orbitalType=="d5"){
    var iexplode = isExpoloded ? 1 : 0;
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
          
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 2 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
            }}
          
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExpolode(e);
              }
            }}
          />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 4 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
          
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 6 * iexplode, 0]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
          
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]},
          {translate:[0, sizerValence * 8 * iexplode, 0]}, ], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d5.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
          
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
      </View> 
    );
  };

  if (orbitalType=="d6"){
    var iexplode = isExpoloded ? 1 : 0;
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/transGray.mtl')       
          }}

          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]},             
          {translate:[0, sizerValence * 2 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/solidBlue.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExpolode(e);
              }
            }}
          />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 4 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 6 * iexplode, 0]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]},
          {translate:[0, sizerValence * 8 * iexplode, 0]}], 
          alignItems: 'center'}}
          source={{
            obj: asset('Objects/d5.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
      </View> 
    );
  };

  if (orbitalType=="d7"){
    var iexplode = isExpoloded ? 1 : 0;
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/transGray.mtl')       
          }}
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 2 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/transGray.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExpolode(e);
              }
            }}
          />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 4 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 6 * iexplode, 0]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]},
          {translate:[0, sizerValence * 8 * iexplode, 0]}], 
          alignItems: 'center'}}
          source={{
            obj: asset('Objects/d5.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
      </View> 
    );
  };

  if (orbitalType=="d8"){
    var iexplode = isExpoloded ? 1 : 0;
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/transGray.mtl')       
          }}
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 2 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/transGray.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExpolode(e);
              }
            }}
          />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 4 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/transGray.mtl')       
          }}
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 6 * iexplode, 0]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]},
          {translate:[0, sizerValence * 8 * iexplode, 0]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d5.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
      </View> 
    );
  };

  if (orbitalType=="d9"){
    var iexplode = isExpoloded ? 1 : 0;
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/transGray.mtl')       
          }}
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 2 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/transGray.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExpolode(e);
              }
            }}
          />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 4 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/transGray.mtl')       
          }}
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 6 * iexplode, 0]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/transGray.mtl')       
          }}
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]},
          {translate:[0, sizerValence * 8 * iexplode, 0]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d5.obj'),
            mtl: asset('Objects/solidBlue.mtl')       
          }}
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
      </View> 
    );
  };

  if (orbitalType=="d10"){
    var iexplode = isExpoloded ? 1 : 0;
    return (
      <View style={{alignItems: 'center'}} >
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/transGray.mtl')       
          }}
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 2 * iexplode, 0]}, {rotateY: 45}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/d1.obj'),
              mtl: asset('Objects/transGray.mtl')       
            }}
            onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
                toggleExpolode(e);
              }
            }}
          />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 4 * iexplode, 0]}, {rotateZ: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/transGray.mtl')       
          }}
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, 
          {translate:[0, sizerValence * 6 * iexplode, 0]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d1.obj'),
            mtl: asset('Objects/transGray.mtl')       
          }}
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
        <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]},
          {translate:[0, sizerValence * 8 * iexplode, 0]}], alignItems: 'center'}}
          source={{
            obj: asset('Objects/d5.obj'),
            mtl: asset('Objects/transGray.mtl')       
          }}
          onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
              toggleExpolode(e);
            }
          }}
        />
      </View> 
    );
  };

  return (
    <View style={{alignItems: 'center'}} >
      <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
        source={{
          obj: asset('Objects/shell.obj'),
          mtl: asset('Objects/transGray.mtl')
        }}
      />                 
  </View> 
  );
}