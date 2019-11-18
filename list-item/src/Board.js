import React from 'react';
import './App.css';

function BoardItem(props) {
    return <li>{props.value}</li>;
}

function BoardList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />

    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default BoardList;
