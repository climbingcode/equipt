Equipt.views.Slider = class Slider extends React.Component {


	render() {
		
		let images = this.props.images;

		return (

			<ul className="slider">
				{
					images.map(function(image, index) {
						return  <li key={`image_${index}`}>
									<img src={image && image.file.url}/>
								</li>
					})
				}
			</ul>

		)

	}

}