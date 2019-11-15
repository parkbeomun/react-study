import React from 'react';
import './App.css';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true}

        //콜백에서 this를 사용하기위해 bind 처리
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }

}

export default Toggle;
