import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ToolbarButton = ({ name }) => (
	<div className="toolbarButtonContainer">
		<button type="button">{name}</button>
	</div>
);
ToolbarButton.propTypes = {
	name: PropTypes.string.isRequired
};
export default ToolbarButton;

//WebpackerReact.setup({ MovieTitle });
