import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ToolbarTitle from './ToolbarTitle';
import ToolbarButton from './ToolbarButton';

const MovieToolbar = ({ title, buttons }) => {
	const newButtons = buttons.map(button => <ToolbarButton name={button.name} />);
	return (
		<div className="movieToolbarContainer row middle-xs">
			<ToolbarTitle title={title} />
			<div className="col-xs" />
			{newButtons}
		</div>
	);
};
MovieToolbar.propTypes = {
	title: PropTypes.string.isRequired
};
export default MovieToolbar;

//WebpackerReact.setup({ MovieTitle });
