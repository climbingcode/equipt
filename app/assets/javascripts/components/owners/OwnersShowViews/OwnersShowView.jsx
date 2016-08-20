Equipt.views.OwnersShowView = class OwnersShowView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let ModalView = Equipt.views.ModalView;

		let modalParams = {
			userId: this.props.userId
		}
		
		return (
			<ModalView closeTo="ownersIndex" params={modalParams}>
				<div>this is the owners equipment</div>
			</ModalView>
		)
	}

};