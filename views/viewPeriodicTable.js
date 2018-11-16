import React from 'react';
import {
  StyleSheet,
  View,
  VrButton,
  Text
} from 'react-360';


import ElementClass from "./components/ElementClass";
import {connect, setViewType} from './../store';

class PeriodicTable extends React.Component {
 
    childWasClicked(c){
        var n = c.state.element.Name;
        postMessage({ type: "newComponent", words: "hello"});
    }
  

 
    findElement (rowNum, colNum, elements) {
        var e = '';
        elements.forEach(function(element){
        if (element.Period == rowNum && element.Group == colNum){
            e = element;
        }
        });
        return e;
    }

    generateElementClass(element, dummyNumberForKey){
        var _element = [];
        _element.push(<ElementClass key={dummyNumberForKey} element={element} keyNumber={dummyNumberForKey} clickHandler={this.childWasClicked} /> );
        return _element;
    }

    generateRows(arRowContent, row, isLanthanide) {
        var _row = [];
        var col;
    
        var dummyNumberForKey = 1000*row;

        var colCount = 18;
        if (isLanthanide){
            colcount = 14;           
        }
        for( col = 0; col < colCount ; col++){
            if (arRowContent[col]){
            //_row.push(<View style={styles.element} key={dummyNumberForBlanks}><Text>{arRowContent[col].Symbol}</Text></View>);
            _row.push(this.generateElementClass(arRowContent[col], dummyNumberForKey));
            }
            else {
                _row.push(<View style={styles.elementNull} key={dummyNumberForKey}></View>);    
            }
            dummyNumberForKey++;
        }
        return _row;
    }

    
    generateTable (){
    //generateTable (elements){
      
        var elements = this.props.elements;
        var _table = [];
        var row = 1;

        for (row = 1; row < 8; row++) {
            var arRowContent=[];
            for (var col=1; col < 19; col++){
                arRowContent.push(this.findElement(row, col, elements));
            }
        
            _table.push(<View key={row} style={styles.row}>{this.generateRows(arRowContent, row)}</View>)
        }
        //Lanthanides
        _table.push(<View key="0" style={styles.skipRow}></View>)
  
        for (rowL = 101; rowL < 103; rowL++) {
            var arRowContentL=[];
            for (var colL=1; colL < 15; colL++){
                arRowContentL.push(this.findElement(rowL, colL, elements));
            }
        
            _table.push(<View key={rowL} style={styles.row}>{this.generateRows(arRowContentL, rowL, true)}</View>)
        }        
        return _table;
    }

    //<!--<VrButton style={styles.button} onClick={setViewType('size')}>Size</VrButton>-->
    onEntering() {
        this.setState({
          bgcolor: 'rgba(0, 200, 0, 0.8)'
        });
      } 
    
    onExiting(e) {
        this.setState({
            bgcolor: 'rgba(128, 128, 128, 0.6)'
        });
    } 

    render() {
        return (            
            <View style={styles.panel}>
            <View style={styles.headerPanel}>
                <VrButton style={this.props.viewType=='CovalentRadius' ? styles.buttonSelected: styles.button} 
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
            </View>
                {this.generateTable()}
            </View>
        );
    }
};

const ConnectedPeriodicTable = connect(PeriodicTable);
export default ConnectedPeriodicTable;

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
     },
    panel: {
       // backgroundColor: 'rgba(128, 128, 128, 0.8)',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    row:{
      flexDirection: 'row', 
      height:80
    },
    skipRow:{
        height:40
      },
    elementDiv:{
      borderColor:'rgba(0, 0, 0, 1)', 
      width:65,
      borderWidth:1,
      backgroundColor: 'rgba(128, 128, 128, 0.8)',
    },
    elementNull:{
        //borderColor:'rgba(0, 0, 0, 1)', 
        width:65,
        //borderWidth:1,
        //backgroundColor: 'rgba(255, 255, 255, 0.5)',
    }
});
