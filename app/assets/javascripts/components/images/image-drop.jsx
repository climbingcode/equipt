Equipt.controllers.ImageDrop = class ImageDrop extends React.Component {

	static propType = {
		setImages: React.PropTypes.func.isRequired,
		maxUploads: React.PropTypes.number.isRequired
	}

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let input = this.refs.imagesInput;
		input.addEventListener('change', this.addImage.bind(this));
	}

	componentWillUnmount() {
		let input = this.refs.imagesInput;
		input.removeEventListener('change', this.addImage.bind(this));
	}

	drop(e) {
		e.preventDefault();
		let files = e.dataTransfer.files;
		let images = Object.keys(files).map((key, index) => {
			return files[key];
		});
		this.props.setImages(images);
	}

	dragOver(e) {
		e.preventDefault();
		e.stopPropagation(); 
	}

	addImage(e)  {
		let image = e.target.files[0];
		this.props.setImages([image]);
	}

	clicked(e) {
		e.preventDefault();
		e.stopPropagation();
		let input = this.refs.imagesInput;
		input.click();
	}

	stopPropagation(e) {
		e.stopPropagation();
	}

	render() {

		return (
			<div 	refs="fileDrop"
					onClick={this.clicked.bind(this)}
					onDragOver={this.dragOver.bind(this)} 
					onDrop={this.drop.bind(this)}>
					{this.props.children}
					<input onClick={ this.stopPropagation } type="file" name="image" multiple="multiple" ref="imagesInput"/>
			</div>
		)

	}

}