class FormComponent extends MainComponent {

	constructor(props) {
		super(props);
		this.formData = {};
		this.submitHandler();
	}

	submitHandler() {
		var _submit = this.submit;
		this.submit = function(e) {
			e.preventDefault();
			this.serializeForm();
			_submit(this.formData);
		};
	}

	serializeForm() {
		for (var field in this.refs) {
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