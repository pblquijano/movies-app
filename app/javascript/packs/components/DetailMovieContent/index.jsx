import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import MovieToolbar from '../MovieToolbar';
import MovieDetails from './MovieDetails';

const buttons = [{ name: 'Rent' }, { name: 'Edit' }, { name: 'Delete' }];
const movie = {
	title: 'The Movie',
	genre: 'The Movie',
	duration: 160,
	directed_by: 'Pablo Quijano',
	synopsis:
		' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in gravida ante. In quis pulvinar risus. Sed pulvinar tortor et sem mollis sollicitudin. Cras vitae ipsum lectus. Praesent sit amet pulvinar ex, non viverra tortor. Pellentesque vestibulum, mi non interdum consectetur, eros tellus bibendum felis, non egestas lacus tortor acmetus.',
	price: 99.9,
	img:
		'https://cdn20.patchcdn.com/users/22924509/20180619/041753/styles/T800x600/public/processed_images/jag_cz_movie_theater_retro_shutterstock_594132752-1529438777-6045.jpg'
};
const DetailMovieContent = ({ title }) => (
	<div className="homeMoviesContent">
		<MovieToolbar title={'Movie Details'} buttons={buttons} />
		<MovieDetails movie={movie} />
	</div>
);
DetailMovieContent.propTypes = {
	title: PropTypes.string.isRequired
};
export default DetailMovieContent;

//WebpackerReact.setup({ MovieTitle });
