class FormComponent extends React.Component {

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
			this.formData[field] = this.refs[field].value
		}
	}

}