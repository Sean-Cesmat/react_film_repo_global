import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'all',
    }
  }
  handleFilterClick = (filter) => {
    console.log("Setting filter to " + filter)
    this.setState({
      filter
    })
  }
  render() {
    const { films, faves } = this.props
    let allFilms = []
    if (this.state.filter === 'all') {
      allFilms = films.map((film, index) => {
        return (
          <FilmRow
            key={film.id}
            onFaveToggle={ () => this.props.onFaveToggle(film) }
            film={film}
            title={film.title}
            url={film.poster_path}
            date={film.release_date}
            isFave={faves.includes(film)}
            onDetailsClick={ () => this.props.onDetailsClick(film) }
          />)
      })
    } else if (this.state.filter === 'faves') {
      allFilms = faves.map((film, index) => {
        return (
          <FilmRow
            key={film.id}
            onFaveToggle={ () => this.props.onFaveToggle(film) }
            film={film}
            title={film.title}
            url={film.poster_path}
            date={film.release_date}
            isFave={faves.includes(film)}
            onDetailsClick={ () => this.props.onDetailsClick(film) }
          />)
      })
    }

    const allFilter = (this.state.filter === 'all') ? 'is-active' : ''
    const favesFilter = (this.state.filter === 'faves') ? 'is-active' : ''
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={"film-list-filter " + allFilter} onClick={ (e) => this.handleFilterClick('all') }>
              ALL
              <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={"film-list-filter " + favesFilter} onClick={ (e) => this.handleFilterClick('faves') }>
              FAVES
              <span className="section-count">{faves.length}</span>
          </div>
        </div>

        {allFilms}
      </div>
    )
  }
}

export default FilmListing;
