import React from 'react';

class BurgerNavView extends React.Component {

	iconClass() {
		if (this.props.showDropDown) {
			return 'fa fa-times burger-icon dropdown-toggle visible-md visible-sm';
		} else {
			return 'fa fa-bars burger-icon dropdown-toggle visible-md visible-sm';
		}
	}

	render() {
		return (
			<i  className={ this.iconClass() }
				onClick={ this.props.toggleDropDown }>
			</i>
		)
	}

}

export { BurgerNavView };