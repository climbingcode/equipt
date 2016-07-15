var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = (function (_FormComponent) {
	_inherits(Signup, _FormComponent);

	function Signup(props) {
		_classCallCheck(this, Signup);

		_get(Object.getPrototypeOf(Signup.prototype), "constructor", this).call(this, props);
	}

	_createClass(Signup, [{
		key: "submit",
		value: function submit(formData) {
			// submit functionality handled in mixins/FormComponent.submit
			createUser({ user: formData });
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "signup-wrapper" },
				React.createElement(FaceBookOauth, null),
				React.createElement(
					"form",
					{ onSubmit: this.submit.bind(this) },
					React.createElement(
						"label",
						{ htmlFor: "firstname" },
						"First Name"
					),
					React.createElement("input", { className: "form-control", ref: "firstname" }),
					this.renderError.call(this, 'firstname'),
					React.createElement("br", null),
					React.createElement(
						"label",
						{ htmlFor: "lastname" },
						"Last Name"
					),
					React.createElement("input", { className: "form-control", ref: "lastname" }),
					this.renderError.call(this, 'lastname'),
					React.createElement("br", null),
					React.createElement(
						"label",
						{ htmlFor: "username" },
						"Username"
					),
					React.createElement("input", { className: "form-control", ref: "username" }),
					this.renderError.call(this, 'username'),
					React.createElement("br", null),
					React.createElement(
						"label",
						{ htmlFor: "email" },
						"Email"
					),
					React.createElement("input", { className: "form-control", ref: "email" }),
					this.renderError.call(this, 'email'),
					React.createElement("br", null),
					React.createElement(
						"label",
						{ htmlFor: "email-confirmation" },
						"Email Confirmation"
					),
					React.createElement("input", { className: "form-control", ref: "email_confirmation" }),
					this.renderError.call(this, 'email_confirmation'),
					React.createElement("br", null),
					React.createElement(
						"label",
						{ htmlFor: "password" },
						"Password"
					),
					React.createElement("input", { type: "password", ref: "password", className: "form-control" }),
					this.renderError.call(this, 'password'),
					React.createElement("br", null),
					React.createElement(
						"label",
						{ htmlFor: "password" },
						"Password"
					),
					React.createElement("input", { type: "password", ref: "password_confirmation", className: "form-control" }),
					this.renderError.call(this, 'password_confirmation'),
					React.createElement("br", null),
					React.createElement(
						"button",
						{ className: "btn btn-success pull-right", type: "submit" },
						"Sign up"
					)
				)
			);
		}
	}]);

	return Signup;
})(FormComponent);
