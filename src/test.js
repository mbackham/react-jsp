import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Test extends Component {
    state = {}
    render() {
        return (
            <li onClick={this.clickChild}>{this.props.content}</li>
        );
    }
    clickChild = () => {
        this.props.deleteMethod(this.props.index)
    }
}
Test.defaultProps = {
    content: PropTypes.string.isRequired,
    index: PropTypes.number,
    deleteMethod: PropTypes.func
}
export default Test;