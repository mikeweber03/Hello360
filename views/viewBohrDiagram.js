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

// <Image source={asset('./Pictures/B.png')} style={{ alignItems: 'center' }} />
class ViewBohrDiagram extends React.Component {
    render() {  

        if (!this.props || this.props.current < 0)
        {
            return (
            <View style={styles.panel}>    
             </View>
            );
        }        

        var sizer=256;
        var symbol = 'H';
        var num = this.props.current;
        var element = this.props.elements[num];

        
        return (
            <View style={styles.panel}>
               <Image source={asset('Pictures/' + element.Symbol +'.png')} style={{transform:[{scale:[1,1,1]}], alignItems: 'center', width:sizer, height:sizer }} />
            </View>
        );
    }
};

const ConnectedViewBohrDiagram = connect(ViewBohrDiagram);
export default ConnectedViewBohrDiagram;

const styles = StyleSheet.create({
    panel: {
        width: 256,
        height: 256,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 0,
      },
});
