Equipt.helpers.FormHelper = class FormHelper extends React.Component {

	constructor(props) {
		super(props);
		this.formData = {};
	}

	serializeForm() {
		for (var field in this.refs) {
			this.formData[field] = this.refs[field].value;
		}
		this.images && this.images.length && this.multipartHandler.call(this);
	}

	multipartHandler() {
		let formData = new FormData();

		this.formData.images = this.images;

		for (key in this.formData) {
			if (typeof this.formData[key] === 'object') {
				this.formData[key].forEach((value, index) => {
					formData.append(`key_${index}`, value);
				});	
			} else {
				formData.append(key, this.formData[key]);
			}
		}

		this.formData = formData;
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