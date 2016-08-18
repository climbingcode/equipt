Equipt.views.EquipmentUploaderView = class EquipmentUploaderView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let ImageDropHelper = Equipt.helpers.ImageDropHelper;
		
		return (
			<div className="image-drop-container col-sm-6">
				<ImageDropHelper>
					<div className="main-drop">image Drop</div>
					<div className="add-image"></div>
				</ImageDropHelper>
			</div>
		)

	}

}