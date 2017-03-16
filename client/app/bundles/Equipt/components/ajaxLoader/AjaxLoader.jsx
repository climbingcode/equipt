import React from 'react';

import { MainController } from 'MainController';
import { CampFireView } from 'components/ajaxLoader/CampFireView';
import AjaxLoaderStore from 'stores/AjaxLoaderStore';

class AjaxLoader extends MainController {

	constructor(props) {
		super(props);
		this.stores = [AjaxLoaderStore]
		this.state = {
			isLoaderShown: AjaxLoaderStore.isShown()
		}
	}

	_onChange() {
		this.mounted && this.setState({
			isLoaderShown: AjaxLoaderStore.isShown()
		});
		this.mounted && this.forceUpdate();
	}

	render() {

		let isLoaderShown = this.state.isLoaderShown;
		let shownClass = isLoaderShown ? 'loader-wrapper show' : 'loader-wrapper';

		return (
			<div className={ shownClass }>
				<CampFireView/>
			</div>
		)
	}

}

export { AjaxLoader }