import React from 'react';
import PropTypes from 'prop-types';
import MovieTitle from '../MovieTitle';
import MovieGenre from '../MovieGenre';
import MovieRentPrice from '../MovieRentPrice';
import MoviePicture from '../MoviePicture';
import './style.css';

const MovieListItem = ({ title, genre, img, price, selected, handleCheck, id }) => {
	return (
		<div className="movieListItemContainer row middle-xs">
			<MoviePicture img={img} />
			<div className="text col-xs">
				<MovieTitle name={title} />
				<MovieGenre name={genre} />
			</div>
			<MovieRentPrice price={price} />
			<div>
				<label className="container">
					<input type="checkbox" name={id} checked={selected} onChange={handleCheck} />
					<span className="checkmark" />
				</label>
			</div>
		</div>
	);
};

export default MovieListItem;

//WebpackerReact.setup({ MovieTitle });
