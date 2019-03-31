import React, { Component } from 'react'
import Form from 'react-jsonschema-form'

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
    imageUrl: { type: 'string', title: 'NASA picture', default: null }
    // done: { type: 'boolean', title: 'Done?', default: false }
  }
}
const log = type => console.log.bind(console, type)

class Addform extends Component {
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
            onSubmit={log('submitted')}
            onError={log('errors')}
          />
        </section>
      </div>
    )
  }
}

export default Addform
