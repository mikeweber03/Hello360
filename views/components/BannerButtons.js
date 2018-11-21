import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View, 
  VrButton,
} from 'react-360';

import {connect, setViewType} from '../../store';

class BannerButtons extends Component {
//  constructor(props) {
//    super(props);
//    var val = this.props.element[this.props.viewType];
//    this.state = {
//      viewType: props.viewType,
//      viewMax: props.viewMax,
//      viewMin: props.viewMin,
//      element: props.element,
//      keyNumber: props.keyNumber,
//      hasError: false,
//      isIn: false,
//      bgcolor: this.getColor(props.viewMin, props.viewMax, val)
//    };
//  }

  //componentWillReceiveProps(nextProps) {   
  //  if (nextProps.viewType !== this.props.viewType) {
  //      this.props.viewType = nextProps.viewType;
  //      this.props.viewMax =nextProps.viewMin;
  //      this.props.viewMin = nextProps.viewMax;
  //      var val = this.state.element[nextProps.viewType];
  //      this.setState({
  //        bgcolor: this.getColor(nextProps.viewMin, nextProps.viewMax, val)
  //      });
  //  }
  //}

  componentDidCatch() {     
    this.setState({ hasError: true });
  }

  onEntering() {   
    this.style= styles.buttonHover; 
  } 

  onExiting() {   
    var val = this.props.viewType;
    this.style= this.data==val ? styles.buttonSelected: styles.button; 
  } 

  render() {
    return (   
      <View style={styles.headerPanel}>
        <VrButton data='CovalentRadius' style={this.props.viewType=='CovalentRadius' ? styles.buttonSelected: styles.button} 
            onClick={() => setViewType('CovalentRadius')}            
            >
            <Text style={styles.buttonText} >Covalent Radius</Text>
        </VrButton>
        <VrButton style={this.props.viewType=='AtomicRadius' ? styles.buttonSelected: styles.button} 
            onClick={() => setViewType('AtomicRadius')} >
            <Text style={styles.buttonText} >Atomic Radius</Text>
        </VrButton>
        <VrButton style={this.props.viewType=='BoilingPoint' ? styles.buttonSelected: styles.button} 
            onClick={() => setViewType('BoilingPoint')} >
            <Text style={styles.buttonText} >Boiling Point</Text>
        </VrButton>
        <VrButton style={this.props.viewType=='MeltingPoint' ? styles.buttonSelected: styles.button} 
            onClick={() => setViewType('MeltingPoint')} >
            <Text style={styles.buttonText} >Melting Point</Text>
        </VrButton>
        <VrButton style={this.props.viewType=='IonizationEnergy' ? styles.buttonSelected: styles.button} 
            onClick={() => setViewType('IonizationEnergy')} >
            <Text style={styles.buttonText} >Ionization Energy</Text>
        </VrButton>
        <VrButton style={this.props.viewType=='Electronegativity' ? styles.buttonSelected: styles.button} 
            onClick={() => setViewType('Electronegativity')} >
            <Text style={styles.buttonText} >Electronegativity</Text>
        </VrButton>
        <VrButton style={this.props.viewType=='ElectronAffinity' ? styles.buttonSelected: styles.button} 
            onClick={() => setViewType('ElectronAffinity')} >
            <Text style={styles.buttonText} >Electron Affinity</Text>
        </VrButton>
        <VrButton style={this.props.viewType=='ViolatesAufbau' ? styles.buttonSelected: styles.button} 
            onClick={() => setViewType('ViolatesAufbau')} >
            <Text style={styles.buttonText} >Violates Aufbau</Text>
        </VrButton>
      </View>
    );
  }
}

const ConnectedBannerButtons = connect(BannerButtons);
export default ConnectedBannerButtons;

const styles = StyleSheet.create({
  headerPanel: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      height: 65,
      width: 1200,
      flexDirection: 'row',         
   },
   button: {
      backgroundColor:'rgba(128, 128, 128, 0.8)',       
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#303050',
      borderWidth:2, 
      height: 60
   },
   buttonHover: {
      backgroundColor: 'white',        
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#303050',
      borderWidth:2, 
      height: 60
   },
   buttonSelected: {
      backgroundColor: 'rgba(0, 200, 0, 0.8)',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#303050',
      borderWidth:2, 
      height: 60
   },
   buttonText: {
      fontSize: 18,
      padding: 10,
      color: 'black',
      justifyContent: 'center',
      alignItems: 'center'
   }
});