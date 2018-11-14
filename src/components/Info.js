import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Info extends Component{
    render(){
        return(
            <div>
                <h1> {this.props.ciudad} </h1>
                <h2> {this.props.estado} </h2>
                <h3> {this.props.temperatura} ºC </h3>
            </div>
        );
    }
}

Info.propTypes = {
    ciudad: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    temperatura: PropTypes.number.isRequired
}

export default Info;