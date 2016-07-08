class Signup extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form>
				<label for="email">Email</label>
				<input className="form-control" name="email"/>
			</form>
		)
	}
	
}