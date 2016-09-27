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
		this.forceUpdate();
	}

	render() {

		let isLoaderShown = this.state.isLoaderShown;
		let shownClass = isLoaderShown ? 'loader-wrapper show' : 'loader-wrapper';

		return (
			<div className={ shownClass }>
				<div className="loader">
					<div className="fire">
                		<div className="flame"></div>
                		<div className="flame"></div>
                		<div className="flame"></div>
                		<div className="flame"></div>
                		<div className="flame"></div>
                		<div className="logs">
                			<div className="logOne"></div>
                			<div className="logTwo"></div>
                    		<div className="flicker"></div>
                		</div>
            		</div>
				</div>
			</div>
		)
	}

}