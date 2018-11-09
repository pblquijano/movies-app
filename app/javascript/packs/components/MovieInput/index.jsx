import React from 'react';
import './style.css';
const MovieInput = ({ name, handleChange, label, value, type }) => (
	<div className="inputContainer">
		<input name={name} type={type} value={value} onChange={handleChange} />
		<label>{label}</label>
	</div>
);
export default MovieInput;
