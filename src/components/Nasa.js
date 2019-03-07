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
      <img src={nasaData.url} alt={nasaData.title} />
      <h2>{nasaData.title}</h2>
      <p className="explanation-section">{nasaData.explanation}</p>
      <p className="copyright-section">{nasaData.copyright}</p>
    </>
  )
}
