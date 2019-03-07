import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Nasa() {
  const [nasaData, setNasaData] = useState({})

  useEffect(() => {
    const URL = `https://api.nasa.gov/planetary/apod?api_key=flkzuPYpWlU6MrCsszddBw2TCz5LU6W91qO3bZR2`
    axios.get(URL).then(resp => {
      console.log({ resp })
      setNasaData(resp.data)
    })
  }, [])

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather+Sans"
        rel="stylesheet"
      />
      <h1>My NASA APIS </h1>
      <div className="main-section">
        <img src={nasaData.url} alt={nasaData.title} />

        <div className="detail-section">
          <h3>{nasaData.title}</h3>
          <p className="explanation-section">{nasaData.explanation}</p>
          <p className="copyright-section">copyright: {nasaData.copyright}</p>
        </div>
      </div>
      <footer> made with 💛 at SDG</footer>
    </>
  )
}
