import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''})
  }

  update = (e) => this.setState({ [e.target.name]:
  e.target.value });
  render() {
    return (
      <form style={{ display: 'flex'}} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          style={{flex:'10', padding: '5px'}}
          value = {this.state.title}
          onChange={this.update}
        />
        <input
          type="submit" value="submit" className="btn" style={btnStyle}
        />
      </form>
    )
  }
}

//PropTyes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

const btnStyle = {
  flex: '1',
  background: '#3399aa',
  color: '#f3f3f3',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '3%',
  cursor: 'pointer'
}


export default AddTodo
