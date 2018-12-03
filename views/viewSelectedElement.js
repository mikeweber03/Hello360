import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  VrButton,
  Image,
  asset
} from 'react-360';


import ViewBohrDiagram from "./viewBohrDiagram";
import {connect, setCurrent} from '../store';

class SelectedElement extends React.Component {
    render() {
        if (!this.props || this.props.current < 0)
        {
            return (
            <View>    
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
        
        if (!this.props || this.props.current < 0)
        {
            return (
            <View >    
                </View>
            );
        }        
        else {
            return (
                <View style={styles.viewBackground} onInput={() => setCurrent(-1)} >
                    <View>
                        <VrButton style={styles.button} onClick={() => setCurrent(-1)} >
                            <Text >Close</Text>
                        </VrButton>
                    </View>
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
                        <Text style={styles.words}>Valence Shell: {element.Valence}</Text>
                        <Text style={styles.words}>Ionization Energy: {element.IonizationEnergy} kJ/mol</Text>
                        <Text style={styles.words}>Electronegativity: {element.Electronegativity}</Text>
                        <Text style={styles.words}>Electron Affinity: {element.ElectronAffinity} kJ/mol</Text>
                        <Text style={styles.words}>Violates Aufbau: {element.ViolatesAufbau==1 ? 'true': 'false'}</Text>
                    </View>
                    <View style={styles.viewDiagram}>
                        <ViewBohrDiagram></ViewBohrDiagram>
                    </View>                  
                </View>           
            );
        }
    }
};

const ConnectedSelectedElement = connect(SelectedElement);
export default ConnectedSelectedElement;

const styles = StyleSheet.create({
    viewBackground: {
        width: 650,
        height: 430,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
      },
    panel: {
        width: 250,
        height: 400,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderColor: '#303050',
        borderWidth: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 10,
      },
    viewDiagram: {
        width: 256,
        height: 256,     
        backgroundColor: 'rgba(255, 255, 255, 1)',
        justifyContent: 'flex-start',
        alignItems:'flex-start',
        padding: 0,
    },
    button: {
        backgroundColor: 'rgba(128, 128, 255, 1.0)',
        justifyContent: 'flex-start',
        alignItems:'flex-start',
        padding: 0,
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
