/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker');

import ReactOnRails from 'react-on-rails';
import MovieTitle from './components/MovieTitle';
import MovieGenre from './components/MovieGenre';
import MoviePreview from './components/MoviePreview';
import MoviePicture from './components/MoviePicture';
import MovieRentPrice from './components/MovieRentPrice';
import MovieToolbar from './components/MovieToolbar';
import ToolbarTitle from './components/MovieToolbar/ToolbarTitle';
import ToolbarButton from './components/MovieToolbar/ToolbarButton';
import HomeMoviesContent from './components/HomeMoviesContent';
import MoviesGrid from './components/HomeMoviesContent/MoviesGrid';

ReactOnRails.register({
	MovieTitle,
	MovieGenre,
	MoviePreview,
	MovieRentPrice,
	MoviePicture,
	MovieToolbar,
	ToolbarTitle,
	ToolbarButton,
	HomeMoviesContent,
	MoviesGrid
});
