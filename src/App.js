import React, { Component } from 'react';
import NameInput from './NameInput.jsx';

class App extends Component {
  constructor() {
    super()

    this.state = {
      firstName: 'Bela',
      lastName: 'Kovacs',
      clickCount: 0
    }
  }

  handleNameChange(key, value) {
    this.setState({
      [key]: value
    })
  }

  handlePlusOneClick() {
    this.setState((prevState) => {
      return { clickCount: prevState.clickCount + 1 }
    })

    this.setState((prevState) => {
      return { clickCount: prevState.clickCount + 1 }
    })
  }

  render() {
    const { firstName, lastName } = this.state

    const fullName = `${lastName} ${firstName}`;

    return (
      <div>
        Name: { fullName.length > 3 && fullName }
        <NameInput
          firstName={firstName}
          lastName={lastName}
          onNameChange={this.handleNameChange.bind(this)} />
          <br/>
          <br/>
        <button onClick={this.handlePlusOneClick.bind(this)} >+1</button> { this.state.clickCount }
      </div>
    );
  }
}

export default App;
