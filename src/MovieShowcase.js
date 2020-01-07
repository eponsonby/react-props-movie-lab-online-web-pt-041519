import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((object, index) => <MovieCard key={index} title={object.title} IMDBRating={object.IMDBRating}/> )
    // map over your movieData array and return an array of the correct JSX
  }


  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
