import React, { Component } from 'react';
import './style.css';
import MoviePicture from '../MoviePicture';
import MovieInput from '../MovieInput';

class MovieForm extends Component {
	constructor(props) {
		super(props);
		if (props.id >= 0) {
			this.state = props.movie;
		} else {
			this.state = props.movie;
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		console.log(value);
		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}
	render() {
		return (
			<div className="row movieForm card">
				<div className="pictureSection col-xs-12 col-sm-offset-0">
					<MoviePicture img={this.state.img} />
					<div />
				</div>
				<div className="divider col-xs-12" />
				<div className="formContainer col-xs-12 col-sm" onSubmit={this.handleSubmit}>
					<form className="form">
						<MovieInput label="Movie Name" type="text" name="title" handleChange={this.handleChange} value={this.state.title} />
						<MovieInput label="Movie Genre" type="text" name="genre" handleChange={this.handleChange} value={this.state.genre} />
						<MovieInput label="Directed By" type="text" name="directed_by" handleChange={this.handleChange} value={this.state.directed_by} />
						<MovieInput label="Duration" type="number" name="duration" handleChange={this.handleChange} value={this.state.duration} />
						<MovieInput label="Price" type="number" name="price" handleChange={this.handleChange} value={this.state.price} />

						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		);
	}
}

export default MovieForm;
