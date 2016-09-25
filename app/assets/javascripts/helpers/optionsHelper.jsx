Equipt.helpers.OptionsHelper = class extends React.Component {

	constructor(props) {
		super(props);
	}

	hasChanged() {
		let type = this.refs.type;
		let value = type ? type.value : '';
		this.props.selectedOption(value);
	}

	render() {

		let options = this.props.options;
		let name  = this.props.name;

		return (

			<select ref={name} 
					onChange={this.hasChanged.bind(this)}
					className="form-control col-sm-12">
				{
					options.map(function(option, i) {
						return <option  key={`option_${i}`} 
										value={option}>{option}

								</option>
					})
				}
			</select>

		)

	}

}