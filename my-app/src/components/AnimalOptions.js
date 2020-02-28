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
  { key: '', text: 'Kot', value: 'animal' },
  { key: '', text: 'Pies', value: 'animal' },
  { key: '', text: 'Chomik', value: 'animal' },
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

export default FormExampleFieldControl
