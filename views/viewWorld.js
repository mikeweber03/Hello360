import React from 'react';
import {
 Animated,
 PointLight,
 DirectionalLight,
 SpotLight,
 AmbientLight
} from 'react-360';
import AtomView from "./viewAtom";

export default class ModelView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    elementList: [],
    selection: '',
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 10000,                   // Animate to opacity: 1 (opaque)
        duration: 100000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;
    return (      
      <Animated.View  style={{opacity: 1,  transform: [{rotateY: fadeAnim}]}} >      
        <AmbientLight intensity={0.6}  />
        <DirectionalLight style={{color:'white'}}/>  
        <AtomView />
      </Animated.View>
    );
  }
};
