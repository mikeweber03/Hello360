import React, { Component } from 'react'
export default function CreateStore(WrappedComponent) {
    return class extends Component {
        state = {
            element: '',
          // elements: []
        };

        render() {
            return <WrappedComponent element={this.state.element} {...this.props} />;
        }
    };
}
