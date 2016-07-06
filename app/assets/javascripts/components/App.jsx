var RouteHandler = ReactRouter.RouteHandler;

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<content>
				<Nav/>
				<RouteHandler/>
			</content>
		)
	}
}