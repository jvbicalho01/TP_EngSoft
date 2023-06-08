import { useEffect, useState, useCallback } from "react"
import { useParams, useNavigate } from "react-router-dom"

import {
  IoIosArrowBack,
} from "react-icons/io"
import {
  BsArrowClockwise,
  BsArrowCounterclockwise,
  BsFillSkipStartFill,
  BsPlayFill,
  BsFillVolumeUpFill
} from "react-icons/bs"
import { RiFullscreenFill } from "react-icons/ri"

import "./Video.css"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Video = () => {

  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const navigate = useNavigate()

  const [hours, setHours] = useState("")
  const [minutes, setMinutes] = useState("")

  const convertMinutesHours = () => {
    Math.floor(movie.runtime / 60)
    const hours = Math.floor(movie.runtime / 60)
    const minutes = movie.runtime % 60

    setHours(hours)
    setMinutes(minutes)
  }

  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)


  }

  const returnPage = () => {
    navigate(-1)
  }

  // useEffect(() => {
  //   convertMinutesHours()
  // }, [convertMinutesHours])

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`
    getMovie(movieURL)
  }, [id])

  return (
    <div>
      {movie && (
        <div className="video-container">
          <div className="movie-title">
            <h1 className="arrow-title" onClick={returnPage}><IoIosArrowBack /></h1>
            <h1 className="title">{movie.title}</h1>
          </div>
          <div className="icons">
            <div className="play-icons">
              <h1><BsFillSkipStartFill /></h1>
              <h1><BsArrowCounterclockwise /></h1>
              <h1><BsPlayFill /></h1>
              <h1><BsArrowClockwise /></h1>
            </div>
            <div className="other-icons">
              <h1><BsFillVolumeUpFill /></h1>
              <h1><RiFullscreenFill /></h1>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Video