Equipt.helpers.FormHelper = class FormHelper extends React.Component {

	constructor(props) {
		super(props);
		this.formData = {};
	}

	serializeForm() {
		for (let field in this.refs) {
			this.formData[field] = this.refs[field].value;
		}
	}

	renderError(fieldName) {
		if (this.props.errors && this.props.errors[fieldName]) {
			let errorMessages = this.props.errors[fieldName].map(function(error, index) {
				return <p className="error text-danger" key={`form_error_${index}`}>{error}</p>
			});
			return <div className="errors">{errorMessages}</div>
		}
	}

}