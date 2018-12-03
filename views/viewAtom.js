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
      var element = this.props.elements[this.props.current];
      var sizerShell = element.CovalentRadius * 0.005;
      var sizerValence = element.AtomicRadius * 0.005;
     
      var type = element.Valence;

      if (type=="s1"){
        return (
          <View style={{alignItems: 'center'}} >
            <Entity lit="false" style={{transform:[{scale:[sizerShell,sizerShell,sizerShell ]}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/shell.obj'),
                mtl: asset('Objects/solidBlue.mtl')
              }}
            />            
          </View> 
        );
      }

      if (type=="s2"){
        return (
          <View style={{alignItems: 'center'}} >
            <Entity lit="false" style={{transform:[{scale:[sizerShell,sizerShell,sizerShell ]}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/shell.obj'),
                mtl: asset('Objects/solidGray.mtl')
              }}
            />            
       
        </View> 
        );
      }


      if (type=="p1"){
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

      if (type=="p2"){
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

      if (type=="p3"){
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


      if (type=="p4"){
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

      if (type=="p5"){
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


      if (type=="p6"){
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

      if (type=="d1"){
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

      if (type=="d2"){
        return (
          <View style={{alignItems: 'center'}} >
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transBlue.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 45}], alignItems: 'center'}}
               source={{
                 obj: asset('Objects/d1.obj'),
                 mtl: asset('Objects/transBlue.mtl')       
               }}
             />
         </View> 
        );
      }

      if (type=="d3"){
        return (
          <View style={{alignItems: 'center'}} >
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transBlue.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 45}], alignItems: 'center'}}
               source={{
                 obj: asset('Objects/d1.obj'),
                 mtl: asset('Objects/transBlue.mtl')       
               }}
             />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateZ: 90}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transBlue.mtl')       
              }}
            />
         </View> 
        );
      }

      if (type=="d4"){
        return (
          <View style={{alignItems: 'center'}} >
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transBlue.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 45}], alignItems: 'center'}}
                source={{
                  obj: asset('Objects/d1.obj'),
                  mtl: asset('Objects/transBlue.mtl')       
                }}
              />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateZ: 90}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transBlue.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transBlue.mtl')       
              }}
            />
          </View> 
        );
      };

      if (type=="d5"){
        return (
          <View style={{alignItems: 'center'}} >
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transBlue.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 45}], alignItems: 'center'}}
                source={{
                  obj: asset('Objects/d1.obj'),
                  mtl: asset('Objects/transBlue.mtl')       
                }}
              />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateZ: 90}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transBlue.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transBlue.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d5.obj'),
                mtl: asset('Objects/transBlue.mtl')       
              }}
            />
          </View> 
        );
      };

      if (type=="d6"){
        return (
          <View style={{alignItems: 'center'}} >
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transGray.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 45}], alignItems: 'center'}}
                source={{
                  obj: asset('Objects/d1.obj'),
                  mtl: asset('Objects/solidBlue.mtl')       
                }}
              />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateZ: 90}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/solidBlue.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/solidBlue.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d5.obj'),
                mtl: asset('Objects/solidBlue.mtl')       
              }}
            />
          </View> 
        );
      };

      if (type=="d7"){
        return (
          <View style={{alignItems: 'center'}} >
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transGray.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 45}], alignItems: 'center'}}
                source={{
                  obj: asset('Objects/d1.obj'),
                  mtl: asset('Objects/transGray.mtl')       
                }}
              />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateZ: 90}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transBlue.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transBlue.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d5.obj'),
                mtl: asset('Objects/transBlue.mtl')       
              }}
            />
          </View> 
        );
      };

      if (type=="d8"){
        return (
          <View style={{alignItems: 'center'}} >
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transGray.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 45}], alignItems: 'center'}}
                source={{
                  obj: asset('Objects/d1.obj'),
                  mtl: asset('Objects/transGray.mtl')       
                }}
              />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateZ: 90}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transGray.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transBlue.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d5.obj'),
                mtl: asset('Objects/transBlue.mtl')       
              }}
            />
          </View> 
        );
      };

      if (type=="d9"){
        return (
          <View style={{alignItems: 'center'}} >
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transGray.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 45}], alignItems: 'center'}}
                source={{
                  obj: asset('Objects/d1.obj'),
                  mtl: asset('Objects/transGray.mtl')       
                }}
              />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateZ: 90}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transGray.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transGray.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d5.obj'),
                mtl: asset('Objects/transBlue.mtl')       
              }}
            />
          </View> 
        );
      };

      if (type=="d10"){
        return (
          <View style={{alignItems: 'center'}} >
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transGray.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 45}], alignItems: 'center'}}
                source={{
                  obj: asset('Objects/d1.obj'),
                  mtl: asset('Objects/transGray.mtl')       
                }}
              />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateZ: 90}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transGray.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}, {rotateY: 45}, {rotateZ: 90}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d1.obj'),
                mtl: asset('Objects/transGray.mtl')       
              }}
            />
            <Entity lit="false" style={{transform:[{scale:[sizerValence,sizerValence,sizerValence ]}], alignItems: 'center'}}
              source={{
                obj: asset('Objects/d5.obj'),
                mtl: asset('Objects/transGray.mtl')       
              }}
            />
          </View> 
        );
      };

      return (
        <View style={{alignItems: 'center'}} >
          <Entity lit="false" style={{transform:[{scale:[sizerShell,sizerShell,sizerShell ]}], alignItems: 'center'}}
            source={{
              obj: asset('Objects/shell.obj'),
              mtl: asset('Objects/transGray.mtl')
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
