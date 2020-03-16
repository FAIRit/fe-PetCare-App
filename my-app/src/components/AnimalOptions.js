import React, { Component } from 'react'
import {
  Form,
  Select,
} from 'semantic-ui-react'

const options = [
  { key: 'a', text: 'Kot', value: 'animal' },
  { key: 'b', text: 'Pies', value: 'animal' },
  { key: 'c', text: 'Chomik', value: 'animal' },
]

class FormFieldControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Select}
            label=''
            options={options}
            placeholder=''
          />
        </Form.Group>
      </Form>
    )
  }
}

export default FormFieldControl
