import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  asset
} from 'react-360';


//import ElementClass from "./components/ElementClass";
import {connect} from '../store';

class SelectedElement extends React.Component {
    render() {
        if (!this.props || this.props.current < 0)
        {
            return (
            <View style={styles.panel}>    
             </View>
            );
        }        
        var num = this.props.current;
        var element = this.props.elements[num];
   
        //For Lanthanides
        var group = element.Group;
        var period = element.Period;
        if (period == "101"){
            period = "N/A";
            group = "6";
        }
        if (period == "102"){
            period = "N/A";
            group = "7";
        }
        return (
            <View style={styles.panel}>
                <Text style={styles.words}>{element.Number}</Text>
                <Text style={styles.title}>{element.Name}</Text>
                <Text style={styles.title}>{element.Symbol}</Text>
                <Text style={styles.words}>Atomic Wt: {element.AtomicWt}</Text>
                <Text style={styles.words}>Covalent Radius: {element.CovalentRadius} pm</Text>
                <Text style={styles.words}>Atomic Radius: {element.AtomicRadius} pm</Text>
                <Text style={styles.words}>Melting Point: {element.MeltingPoint} C</Text>
                <Text style={styles.words}>Boiling Point: {element.BoilingPoint} C</Text>
                <Text style={styles.words}>Density: {element.Density} g/l</Text>
                <Text style={styles.words}>Group: {group}</Text>
                <Text style={styles.words}>Period: {period}</Text>
                <Text style={styles.words}>{element.Configuration}</Text>
                <Text style={styles.words}>Ionization Energy: {element.IonizationEnergy} kJ/mol</Text>
                <Text style={styles.words}>Electronegativity: {element.Electronegativity}</Text>
                <Text style={styles.words}>Electron Affinity: {element.ElectronAffinity} kJ/mol</Text>
                <Text style={styles.words}>Violates Aufbau: {element.ViolatesAufbau==1 ? 'true': 'false'}</Text>
            </View>
        );
    }
};

const ConnectedSelectedElement = connect(SelectedElement);
export default ConnectedSelectedElement;

const styles = StyleSheet.create({
    panel: {
        width: 250,
        height: 400,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderColor: '#303050',
        borderWidth: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 10,
      },
    title: {
        color:'#000000',
        fontSize: 24,
    },
    words: {
        color:'#000000',
        fontSize: 16,
    }

});
