import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkFill
} from "react-icons/bs"

import { FaPlay } from "react-icons/fa"

import MovieCard from "../components/MovieCard"
import Navbar from "../components/Navbar"

import "./Movie.css"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {

  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)
  }

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`
    getMovie(movieURL)
  }, [id])

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} showPlay={true} />
          <p className="tagline">{movie.tagline}</p>
          <div className="full-info">
            <div className="info">
              <h3>
                <BsWallet2 /> Orçamento:
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className="info">
              <h3>
                <BsGraphUp /> Receita:
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className="info">
              <h3>
                <BsHourglassSplit /> Duração:
              </h3>
              <p>{movie.runtime} minutos</p>
            </div>
            <div className="info-description">
              <h3>
                <BsFillFileEarmarkFill /> Descrição:
              </h3>
              {/* <p>{movie.overview}</p> */}
            </div>
            <p className="description">{movie.overview}</p>
          </div>
          <Link className="play-btn" to={`/movie/video/${movie.id}`}>
              <FaPlay /> Assistir
          </Link>
        </>
      )}
    </div>
  )
}

export default Movie