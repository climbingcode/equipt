Equipt.helpers.OptionsHelper = class extends React.Component {

	static propType = {
		name: React.PropTypes.string.isRequired,
		value: React.PropTypes.string.isRequired
	}

	constructor(props) {
		super(props);
	}

	selected() {
		let dropDownName = this.props.name;
		let element = this.refs[dropDownName];
		let value = element ? element.value : '';
		this.value = value;
	}

	render() {

		let options = this.props.options;
		let name  = this.props.name;

		let startingValue = this.props.value;

		return (

			<select ref={name} 
					onChange={this.selected.bind(this)}
					className="form-control col-sm-12">
						<option value="" disabled selected>Select a category</option>
				{
					options.map(function(option, i) {
						if (option === startingValue) {
							return <option  key={`option_${i}`} 
											value={option}
											selected>
											{option}
									</option>
						} else {						
							return 	<option  key={`option_${i}`} 
											value={option}>
											{option}
									</option>
						}
					})
				}
			</select>

		)

	}

}