import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Form from 'react-jsonschema-form'

export default function Pictures() {
  const [pictures, setPictures] = useState([])
  const [isLoading, setLoading] = useState(true)

  const schema = {
    title: '',
    type: 'object',
    properties: {
      search: { type: 'string', title: 'Search for picture', default: '' }
    }
  }
  const uiSchema = {
    search: {
      'ui:title': '',
      'ui:placeholder': 'Search for picture...'
    }
  }

  // const getAllPetsThatCanBeAdopted = () => {
  //   setLoading(true)

  //   axios.get('https://localhost:5001/api/pets').then(resp => {
  //     console.log({ resp })
  //     setLoading(false)
  //     setPets(resp.data)
  //   })
  // }

  const searchForPictures = event => {
    let _url = `https://localhost:5001/api/search/pictures?query=${
      event.formData.search
    }`
    setLoading(true)

    axios.get(_url).then(resp => {
      console.log({ resp })
      setLoading(false)

      setPictures(resp.data.results)
    })
  }

  // useEffect(() => {
  //   getAllPetsThatCanBeAdopted()

  // }, [])

  const deletePicture = event => {
    console.log(event.target.value)
    axios
      .delete(`https://localhost:5001/api/Picture/${event.target.value}`)
      .then(resp => {
        console.log(resp)

        if (resp.status === 200) {
          // searchForPictures()
          // setPictures(resp.data.results)
        }
      })
  }

  return (
    <>
      <Form schema={schema} uiSchema={uiSchema} onSubmit={searchForPictures} />
      {pictures.length > 0 && (
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            {pictures.map((m, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{m.id}</th>
                  <td>{m.title}</td>
                  <td>{m.description}</td>
                  <td>
                    <img src={m.image} alt={m.title} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      value={m.id}
                      onClick={deletePicture}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link to={`/UpdatePicture/${m.id}/${m.name}/${m.origin}`}>
                      <button className="btn btn-warning">Update</button>
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
      {pictures.length === 0 && !isLoading && <h3>No results found</h3>}
      {isLoading && <div className="loading-icon">loading results...</div>}
    </>
  )
}
