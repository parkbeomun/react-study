import React from 'react';
import './App.css';

function toCelsius(fahreneit){
    return (fahreneit - 32) * 5 / 9
}
function toFahrenheit(celsius){
    return (celsius * 9 / 5) + 32
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if(Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}


function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil</p>
}

class Calculator extends React.Component {

    constructor(props) {
        super(props)
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
        this.state = {temperatrue: '', scale: 'c'}
    }


    handleCelsiusChange(temperatrue) {
        this.setState({scale:'c', temperatrue})
    }

    handleFahrenheitChange(temperatrue) {
        this.setState({scale:'f', temperatrue})
    }

    render() {

        const scale = this.state.scale;
        const temperatrue = this.state.temperatrue
        const celsius = scale === 'f' ? tryConvert(temperatrue, toCelsius) : temperatrue
        const fahrenheit = scale === 'c' ? tryConvert(temperatrue, toFahrenheit) : temperatrue

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatrueChange={this.handleCelsiusChange}
                    />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatrueChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict
                    celsius={parseFloat(celsius)}
                />
            </div>
        )
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
,}

class TemperatureInput extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onTemperatrueChange(e.target.value)
    }
    render() {
        const temperature = this.props.temperature
        const scale = this.props.scale

        return (
            <fieldset>
                <legend>Enter temperatrue in {scaleNames[scale]}:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}
                />

            </fieldset>
        )
    }
}


export default Calculator