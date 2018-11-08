import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import MoviePreview from '../MoviePreview';

const MoviesGrid = ({ movies }) => {
	const newMovies = movies.map((movie, i) => <MoviePreview key={i} title={movie.title} genre={movie.genre} img={movie.img} price={movie.price} />);
	return <div className="row center-xs moviesGridContainer">{newMovies}</div>;
};

export default MoviesGrid;

//WebpackerReact.setup({ MovieTitle });
