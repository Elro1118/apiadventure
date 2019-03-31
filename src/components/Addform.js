import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import axios from 'axios'

const schema = {
  title: 'Add New Object',
  type: 'object',
  // required: ['title'],
  properties: {
    title: { type: 'string', title: 'Title', default: 'Add a Title' },
    description: {
      type: 'string',
      title: 'Description',
      default: 'Add Description'
    },
    image: { type: 'string', title: 'NASA picture', default: null }
    // done: { type: 'boolean', title: 'Done?', default: false }
  }
}
const log = type => console.log.bind(console, type)

class Addform extends Component {
  onSubmit = event => {
    console.log(event.formData)
    axios
      .post('https://localhost:5001/api/Picture', event.formData)
      .then(resp => {
        console.log(resp)

        if (resp.status === 201) {
          console.log(event.formData)

          //   // const oldForm = this.state.formSchema
          //   oldForm.properties.name.default = 'A new dish'
          //   oldForm.properties.origin.default = 'A country'
          //   this.setState({
          //     formSchema: oldForm
          //   })
        }
      })
  }
  render() {
    return (
      <div>
        <section>
          <header>
            <h1> Add new entry </h1>
          </header>
          <Form
            schema={schema}
            onChange={log('changed')}
            onSubmit={this.onSubmit}
            onError={log('errors')}
          />
        </section>
      </div>
    )
  }
}

export default Addform
