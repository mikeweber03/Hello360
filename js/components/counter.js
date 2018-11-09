import React, {Component} from 'react'
import { increaseCounter } from './../actions/increaseCounter'
import { updateCounter } from './../actions/updateCounter'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    ...state
   })
  
const mapDispatchToProps = dispatch => ({
    increaseCounter: () => dispatch(increaseCounter()),
    updateCounter: () => dispatch(updateCounter())
})
     
class Counter extends Component { 
    //constructor(props) {
    //    super(props);
    //    this.state = {value: ''};
    //}
  
    increaseCounter = (event) => {
        this.props.increaseCounter();
    }

    updateCounter = (event) => {
        this.setState({wish_value: event.target.value});
        //this.props.updateCounter(event);
    }

    render() {
        //const {value, onIncreaseClick, onUpdateClick} = this.props
        debugger;
        return (
            <div>
                <button onClick={this.increaseCounter}>Increase</button>
                <input type='text'  value={this.props.countReducer.wish_value} onChange={this.updateCounter} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
