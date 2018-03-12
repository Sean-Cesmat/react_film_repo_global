import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

const FilmRow = (props) => {

  const {title, date, url} = props
  var year = new Date(date)
  year = year.getFullYear()
  return (
    <div className="film-row" onClick={ props.onDetailsClick }>
      <FilmPoster src={'https://image.tmdb.org/t/p/w780/' + url} />

      <div className="film-summary">
        <h1>{title}</h1>
        <p>{year}</p>
      </div>
      <Fave isFave={props.isFave} onFaveToggle={props.onFaveToggle} />
    </div>
  )
}

export default FilmRow;
