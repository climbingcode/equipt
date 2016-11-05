Equipt.controllers.AjaxLoader = class AjaxLoader extends Equipt.controllers.MainController {

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.AjaxLoaderStore]
		this.state = {
			isLoaderShown: Equipt.stores.AjaxLoaderStore.isShown()
		}
	}

	_onChange() {
		this.mounted && this.setState({
			isLoaderShown: Equipt.stores.AjaxLoaderStore.isShown()
		});
		this.mounted && this.forceUpdate();
	}

	render() {

		const CampFireView = Equipt.views.campFireView;

		let isLoaderShown = this.state.isLoaderShown;
		let shownClass = isLoaderShown ? 'loader-wrapper show' : 'loader-wrapper';

		return (
			<div className={ shownClass }>
				<CampFireView/>
			</div>
		)
	}

}