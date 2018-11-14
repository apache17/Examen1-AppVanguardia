import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Info from './Info'

class Search extends Component{
    constructor(props) { 
        super(props); 
        this.state = {
            ciudad: "",
            estado: "",
            temperatura: 0,
        }; 
    }
    
    handleSubmit(){
        let first = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${this.state.ciudad}`
        axios.get(first).then(data => {
            console.log("Data",data)//eslint-disable-line
            let second = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${data.data[0].woeid}/`
            axios.get(second).then(data => {
                this.setState(() => ({ 
                    temperatura: data.data.consolidated_weather[0].the_temp,
                    estado: data.data.consolidated_weather[0].weather_state_name
                }))
            }).catch( (err) => {
                console.log(err);//eslint-disable-line
            })
        })
    } 

    handleCityChange(event){
        event.preventDefault();
        this.setState({ ciudad: event.target.value});
    }

    render(){
        return(
            <div className="App">
                    <Info 
                        ciudad={this.state.ciudad} 
                        estado={this.state.estado} 
                        temperatura={this.state.temperatura}
                    />
                    <div className="search">
                        <input 
                            className="searchInput" 
                            placeholder="Enter a City" 
                            onChange={this.handleCityChange.bind(this)}
                        />
                    </div>
                    <div className="search">
                        <button 
                            className="searchButton" 
                            type="submit" 
                            onClick={this.handleSubmit.bind(this)}
                            >Search Weather
                        </button>
                    </div>
            </div> 
        );
    }
}

Search.propTypes = {
    onSubmitUsername: PropTypes.func
  }

export default Search;