import React from 'react';
import {
  StyleSheet,
  View
} from 'react-360';


import ElementClass from "./components/ElementClass";
import {connect} from './../store';

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

    generateRows(arRowContent, row) {
        var _row = [];
        var col;
    
        var dummyNumberForKey = 1000*row;
        for( col = 0; col < 18 ; col++){
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
        return _table;
    }



    render() {
        return (
            <View style={styles.panel}>
                {this.generateTable()}
            </View>
        );
    }

};

const ConnectedPeriodicTable = connect(PeriodicTable);
export default ConnectedPeriodicTable;

const styles = StyleSheet.create({
    panel: {
       // backgroundColor: 'rgba(128, 128, 128, 0.8)',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    row:{
      flexDirection: 'row', 
      height:80
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
