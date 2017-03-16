import React from 'react';

class DropDownView extends React.Component {

	showDropDownClasses() {
		let visibleClass = this.props.showDropDown ? 'show' : 'hide';
		return `dropdown visible-md visible-sm ${ visibleClass }`;
	}

	render() {
		return (
			<ul className={ this.showDropDownClasses() }>
				<li>Logout</li>
			</ul>
		)
	}
}

export { DropDownView };