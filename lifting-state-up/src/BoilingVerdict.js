import React from 'react';
import './App.css';

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil</p>
}

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {temperatrue: ''}
    }
    handleChange(e) {
        this.setState({temperature: e.target.value})
    }

    render() {
        const temperature = this.state.temperature
        return (
            <fieldset>
                <legend>Enter temperatrue in Celsius:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}
                />

                <BoilingVerdict
                    celsius={parseFloat(temperature)}
                />
            </fieldset>
        )
    }
}

export default Calculator