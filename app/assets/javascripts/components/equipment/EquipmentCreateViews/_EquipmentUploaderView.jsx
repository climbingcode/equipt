Equipt.views.EquipmentUploaderView = class EquipmentUploaderView extends React.Component {

	static propType = {
		setImages: React.PropTypes.func.isRequired,
		equipment: React.PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);

		this.state = {
			maxUploads: 4
		}
	}

	setImages(newImages) {

		let equipment 	  = this.props.equipment || {};
		let currentImages = equipment.images ? equipment.images : [];
		let allImages 	  = currentImages.concat(newImages);

		this.setState({
			images: allImages
		});

		this.props.setImages(allImages);
	}

	showPreviews() {

		let previewElements = [];
		let PreviewImage = Equipt.views.PreviewImage;
		let images = this.state.images ? this.state.images : [];

		// set current images if exist
		if (this.props.equipment && this.props.equipment.images) {
			images = this.props.equipment.images.concat(images);
		}

		images.forEach((image, index) => {
			
			let reader = new FileReader();

			if (image.file) {

				$(`.preview_${index}`).attr('src', image.file.url);

			} else  {

				reader.onload = function(e) {
					$(`.preview_${index}`).attr('src', e.target.result);
				}

				reader.readAsDataURL(image);

			}

			previewElements.push(<PreviewImage 	key={`preview_${index}`} 
										image={image}
										imageIndex={index}
										removeImage={this.removeImage.bind(this)}/>);

		});

		return previewElements;

	}

	removeImage(index) {

		let images = this.state.images;

		images.splice(index, 1);

		this.setState({
			images: images 
		});

	}

	render() {

		let ImageDrop = Equipt.controllers.ImageDrop;

		let images = this.props.equipment ? this.props.equipment.images : [];

		let imagesLeftForUpload = this.state.maxUploads - images ? images.length : 0;

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