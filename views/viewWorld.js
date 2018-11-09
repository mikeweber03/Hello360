import React from 'react';
import {
  //View, 
  //asset,
 Animated,
 PointLight,
 DirectionalLight,
 SpotLight,
 AmbientLight
 //Easing,
 //Entity
} from 'react-360';
//import { Animated } from 'react-native';
//import EventEmitter from 'EventEmitter';
import AtomView from "./viewAtom";
//import Entity from 'Entity';
//import AmbientLight from 'AmbientLight';
//import PointLight from 'PointLight';

//import store from "../js/store/dataStore";
import {connect} from "react-redux";


export default class ModelView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    elementList: [],
    selection: '',
  }

  componentDidMount() {
   //store.subscribe(() => console.log('Look ma, Redux!!'));
   
//    EventEmitter.addListener("NewElement", this.handleAwesomeEvents, this);
    //EventEmitter.addListener('awesome', this.handleAwesomeEvents.bind(this));
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 20,                   // Animate to opacity: 1 (opaque)
        duration: 100000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }


  handleAwesomeEvents = (event) => {
    let awesomeness = event.awesomeRating;

    // if you don't provide context in didMount,
    // "this" will not refer to the component,
    // and this next line will throw
    this.setState({ awesomeness });
  };

  render() {
    //<PointLight style={{color:'red', transform:[{translate:[0,2,-5]}]}}/>
    //<DirectionalLight style={{color:'green'}}/>
    //<SpotLight style={{color:'white', transform:[{translate:[0,10,-1]}]}} angle={60}/>
    let { fadeAnim } = this.state;
    return (      
      <Animated.View  style={{opacity: 1,  transform: [{translateY: fadeAnim}]}} >      
        <AmbientLight intensity={0.6}  />
        <DirectionalLight style={{color:'white'}}/>  
        <AtomView />
      </Animated.View>
    );
  }
};

//function mapStateToProps(state){
//  return {
//      elementList: state.elementList,
//  }
//}

//export default connect(mapStateToProps)(ModelView);