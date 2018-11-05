import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import MovieToolbar from '../MovieToolbar';
import MoviesGrid from './MoviesGrid';

const buttons = [{ name: 'Rent Movies' }, { name: 'New Movie' }];
const movies = [
	{
		title: 'The Movie',
		genre: 'The Movie',
		price: 99.9,
		img:
			'https://cdn20.patchcdn.com/users/22924509/20180619/041753/styles/T800x600/public/processed_images/jag_cz_movie_theater_retro_shutterstock_594132752-1529438777-6045.jpg'
	},
	{
		title: 'The Movie',
		genre: 'The Movie',
		price: 99.9,
		img:
			'https://cdn20.patchcdn.com/users/22924509/20180619/041753/styles/T800x600/public/processed_images/jag_cz_movie_theater_retro_shutterstock_594132752-1529438777-6045.jpg'
	},
	{
		title: 'The Movie',
		genre: 'The Movie',
		price: 99.9,
		img:
			'https://cdn20.patchcdn.com/users/22924509/20180619/041753/styles/T800x600/public/processed_images/jag_cz_movie_theater_retro_shutterstock_594132752-1529438777-6045.jpg'
	},
	{
		title: 'The Movie',
		genre: 'The Movie',
		price: 99.9,
		img:
			'https://cdn20.patchcdn.com/users/22924509/20180619/041753/styles/T800x600/public/processed_images/jag_cz_movie_theater_retro_shutterstock_594132752-1529438777-6045.jpg'
	},
	{
		title: 'The Movie 2',
		genre: 'The Movie',
		price: 99.9,
		img:
			'https://cdn20.patchcdn.com/users/22924509/20180619/041753/styles/T800x600/public/processed_images/jag_cz_movie_theater_retro_shutterstock_594132752-1529438777-6045.jpg'
	}
];
const HomeMoviesContent = ({ title }) => (
	<div className="homeMoviesContent">
		<MovieToolbar title={'Movies App'} buttons={buttons} />
		<MoviesGrid movies={movies} />
	</div>
);
HomeMoviesContent.propTypes = {
	title: PropTypes.string.isRequired
};
export default HomeMoviesContent;

//WebpackerReact.setup({ MovieTitle });
