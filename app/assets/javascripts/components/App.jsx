var RouteHandler = ReactRouter.RouteHandler;

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentUser: CurrentUserStore.getData()
		}
	}

	componentDidMount() {
    	CurrentUserStore.addChangeListener(this._onChange.bind(this));
    	ErrorsStore.addChangeListener(this._onChange.bind(this));
  	}

  	componentWillUnMount() {
    	CurrentUserStore.removeChangeListener(this._onChange.bind(this));
    	ErrorsStore.removeChangeListener(this._onChange.bind(this));
  	}

  	_onChange() {
    	this.setState({
    		currentUser: CurrentUserStore.getData(),
    		errors: ErrorsStore.getData()
    	});
  	}

	render() {
		return (
			<content>
				<Nav currentUser={this.state.currentUser}/>
				<div className="main-content col-xs-10 col-xs-offset-1">
					<Notice errors={this.state.errors}/>
					<RouteHandler currentUser={this.state.currentUser}
								  errors={this.state.errors}
					/>
				</div>
			</content>
		)
	}
}