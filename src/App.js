import React, { Component } from 'react'
//Components
import {Cards, Chart, CountryPicker} from './components';
//API Functions
import {fetchCOV} from './api';
//Styles
import  './App.css';
//Images
import coronaImage from './images/image.png';
class App extends Component {

    state={
        data: {},
        country: '',
    };

    async componentDidMount(){
        const fetchedData = await fetchCOV();
        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchCOV(country);
        console.log(fetchedData);
        console.log(country);
        this.setState({data: fetchedData, country: country});
    }
    render() {
        const {data, country} = this.state;
        return (
            <div className="container">
                <img src={coronaImage} alt="COVID-19" className="headerImage"/>
                <Cards data={data}></Cards>
                <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
                <Chart data={data} country={country}></Chart>
            </div>
        )
    }
}
export default App;