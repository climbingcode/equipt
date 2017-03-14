Equipt.views.PreviewImage = class PreviewImage extends React.Component {

	static PropTypes = {
		image: React.PropTypes.object.isRequired,
		key: React.PropTypes.number.isRequired,
		removeImage: React.PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
	}

	render() {

		let index = this.props.imageIndex;
		let image = this.props.image;

		return (
			<li className="image-preview">
				<i 	className="fa fa-times" 
					aria-hidden="true"
					onClick={ this.props.removeImage.bind(this, index) }></i>
				<img 	width="100"
						key={`preview_${index}`} 
						className={`preview_${index}`}/>
			</li>
		)
	}

}