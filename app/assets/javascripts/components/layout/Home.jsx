Equipt.views.Home = class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		document.getElementsByClassName('main-content')[0].className = 'main-content home';
		document.getElementsByClassName('navbar')[0].className = 'navbar home';
	}

	componentWillUnmount() {
		document.getElementsByClassName('navbar')[0].className = 'navbar';
		document.getElementsByClassName('main-content')[0].className = 'main-content col-xs-10 col-xs-offset-1';
	}

	scrollDown() {
		debugger;
		window.scrollTo(0, 500);
	}

	render() {

		let content = Equipt.content.home;

		return (
			<div className="home-wrapper">
				
				<i 	className="fa fa-chevron-down fa-5" 
					aria-hidden="true"
					onClick={ this.scrollDown.bind(this) }></i>
				
				<video loop autoPlay>
  					<source src="assets/homepage.mp4" type="video/mp4"/>
				</video>

				<h1>{ content.title }</h1>

				<div className="how-it-works-container" ref="howItWorks">
						<h3>{ content.howItWorks.title }</h3>
						<div className="col-xs-3">
							
						</div>
						<div className="col-xs-3">
							
						</div>
						<div className="col-xs-3">
							
						</div>
				</div>

			</div>
		)
	}

}