Equipt.views.EquipmentUploaderView = class EquipmentUploaderView extends React.Component {

	static propType = {
		setImages: React.PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
		this.state = {
			images: [],
			maxUploads: 4
		}
	}

	setImages(newImages) {

		let currentImages = this.state.images;
		let allImages 	  = currentImages.concat(newImages);

		this.setState({
			images: allImages
		});

		this.props.setImages(allImages);
	}

	showPreviews() {

		let imgArr = [];

		let PreviewImage = Equipt.views.PreviewImage;

		this.state.images.forEach((image, index) => {
			
			let reader = new FileReader();

			reader.onload = function(e) {
				$(`.preview_${index}`).attr('src', e.target.result);
			}

			reader.readAsDataURL(image);

			imgArr.push(<PreviewImage 	key={`preview_${index}`} 
										image={image}
										imageIndex={index}
										removeImage={this.removeImage.bind(this)}/>);

		});

		return imgArr;

	}

	removeImage(index) {

		let images = this.state.images;

		this.setState({
			images: images.splice(index+1, 0)
		});

	}

	render() {

		let ImageDrop = Equipt.controllers.ImageDrop;

		let images = this.state.images;
		let imagesLeftForUpload = this.state.maxUploads - images;

		return (
			<div className="image-drop-container col-sm-6">
				<ImageDrop maxUploads={ this.props.maxUploads }
						   setImages={ this.setImages.bind(this) }>
					<div className="main-drop">
						<h4>{ imagesLeftForUpload } images can be uploaded</h4>
						<h2>Drop Equipment images here</h2>
					</div>
					<div className="add-image"></div>
				</ImageDrop>
				<ul className="image-previews">
					{ this.showPreviews.call(this) }
				</ul>
			</div>
		)

	}

}