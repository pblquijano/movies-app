import React from 'react';
import './style.css';
import MovieListItem from './MovieListItem';

const MoviesList = ({ movies, handleCheck }) => {
	const newMovies = movies.map((movie, i) => (
		<MovieListItem
			key={i}
			id={movie.id}
			handleCheck={handleCheck}
			title={movie.title}
			genre={movie.genre}
			img={movie.img}
			price={movie.price}
			selected={movie.selected}
		/>
	));
	return <div className="moviesListContainer ">{newMovies}</div>;
};

export default MoviesList;
