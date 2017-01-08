Equipt.views.Slider = class Slider extends React.Component {
	
	static propType = {
		images: React.PropTypes.object.isRequired,
		speed: React.PropTypes.number.isRequired,
		slideWidth: React.PropTypes.number.isRequired
	}

	constructor(props) {
		super(props);
		this.index = 0;
	}

	componentWillUnmount() {
		this.index = 0;
	}

	render() {
		
		let images 			= this.props.images;
		let imagesLength 	= images.length;
		let slidesStyles 	= { width: imagesLength * this.props.slideWidth };
		let slideStyles 	= { width: this.props.slideWidth };

		let slideControlClass = imagesLength > 1 ? 'show' : 'hide';
				
		return (

			<div className="slider-wrapper">

				<div 	className={ `left arrow ${ slideControlClass }` } 
						onClick={ this.moveSlide.bind(this, 'back') }>
					<i className="fa fa-angle-double-left" aria-hidden="true"/>
				</div>

				<div className="viewport" style={ slideStyles }>

					<ul className="slides" style={ slidesStyles }>
					{
						images.map((image, index) => {
							return  <li className="slide" 
										style={ slideStyles } 
										key={`image_${index}`}>
										<img  src={ image && image.file.url }/>
									</li>
						})
					}
					</ul>

				</div>

				<div className={ `right arrow ${ slideControlClass }` }  
					onClick={ this.moveSlide.bind(this, 'forward') }>
					<i className="fa fa-angle-double-right" aria-hidden="true"/>
				</div>

			</div>

		)

	}

	moveSlide(direction) {

		if ( this.canMove.call(this, direction) ) {

			let animation = {};

			if (direction === 'forward') {
				this.index++;
				animation.marginLeft = `-=${ this.props.slideWidth }px`;
			} else {
				this.index--;
				animation.marginLeft = `+=${ this.props.slideWidth }px`;
			}

			$('.slider-wrapper .slides').stop().animate(animation, this.props.speed);

		}

	}

	canMove(direction) {

		let images 			= this.props.images;
		let imagesLength 	= images.length;

		if ( direction === 'forward' && this.index < imagesLength-1 ) return true;
		if ( direction === 'back' && this.index > 0 ) return true;

		return false;

	}

}