import React, { Component } from 'react'
import withForm from './withForm'

class TextInput extends Component {

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.props.onChange(event.target.value)
  }

  render() {
    const { value, onChange, ...passThroughProps } = this.props
    var val = value===undefined ? '' : value
    return (<input type="text" value={val} onChange={this.onChange} {...passThroughProps} />)
  }
}

export default withForm(TextInput)