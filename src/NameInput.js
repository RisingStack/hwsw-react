import React from 'react';

class NameInput extends React.Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.props.onNameChange(event.target.name, event.target.value)
  }

  render() {
    const { lastName, firstName } = this.props;

    return <div>
      First: <input name='firstName' onChange={this.handleInputChange} value={firstName} />
      Last: <input name='lastName' onChange={this.handleInputChange} value={lastName} />
    </div>;
  }
}

export default NameInput;