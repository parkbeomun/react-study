import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name:'', desc:'', select:'one'}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]:value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>Name:
            <input name="name" type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
           <br/> <br/>
          <label>
            TextArea:
            <textarea name="desc" value={this.state.taValue} onChange={this.handleChange}></textarea>
          </label>
          <br/> <br/>
          <label>
            select:
            <select name="select" onChange={this.handleChange}>
              <option value="one">one</option>
              <option value="two">two</option>
              <option value="three">three</option>
              <option value="four">four</option>
            </select>
          </label>
        </form>
    )
  }
}

export default App;
