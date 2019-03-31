import React, { Component } from 'react'
import Form from 'react-jsonschema-form'

const schema = {
  title: 'Todo',
  type: 'object',
  required: ['title'],
  properties: {
    title: { type: 'string', title: 'Title', default: 'A new task' },
    done: { type: 'boolean', title: 'Done?', default: false }
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
