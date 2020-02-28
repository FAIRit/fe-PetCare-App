import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'

const options = [
  { key: 'v', text: 'VetCare', value: 'VetCare' },
  { key: 'c', text: 'CrisVet', value: 'CrisVet' },
  { key: 'o', text: 'Other', value: 'other' },
]

class FormExampleFieldControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='First name'
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
          <Form.Field
            control={Select}
            label='Lecznica'
            options={options}
            placeholder='Lecznica'
          />
        </Form.Group>
 
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

export default FormExampleFieldControl
