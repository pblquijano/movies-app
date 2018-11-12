import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeMoviesContent from './HomeMoviesContent';
import DetailMovieContent from './DetailMovieContent';
import FormMovieContent from './FormMovieContent';
import LoginMovieContent from './LoginMovieContent';
import RentMovieContent from './RentMovieContent';

function RouterMovies() {
	return (
		<Router>
			<div>
				<Route exact path="/" component={HomeMoviesContent} />
				<Route exact path="/detail/:id" component={DetailMovieContent} />
				<Route exact path="/new" component={FormMovieContent} />
				<Route exact path="/edit/:id" component={FormMovieContent} />
				<Route exact path="/rent_a_movie" component={RentMovieContent} />
				<Route exact path="/rent_a_movie/:id" component={RentMovieContent} />
				<Route exact path="/login" component={LoginMovieContent} />
			</div>
		</Router>
	);
}
export default RouterMovies;

//WebpackerReact.setup({ MovieTitle });
