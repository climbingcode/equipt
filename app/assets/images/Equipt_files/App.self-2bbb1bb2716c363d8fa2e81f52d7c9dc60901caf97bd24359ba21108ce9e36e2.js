var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteHandler = ReactRouter.RouteHandler;

var App = (function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		_get(Object.getPrototypeOf(App.prototype), "constructor", this).call(this, props);
		this.state = {
			currentUser: AuthStore.currentUser()
		};
	}

	_createClass(App, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			ErrorsStore.addChangeListener(this._onChange.bind(this));
			AuthStore.addChangeListener(this._onLoginChange.bind(this));
		}
	}, {
		key: "componentWillMount",
		value: function componentWillMount() {
			if (AuthStore.authenticated()) {
				appInit();
			}
		}
	}, {
		key: "componentWillUnMount",
		value: function componentWillUnMount() {
			ErrorsStore.removeChangeListener(this._onChange.bind(this));
			AuthStore.addChangeListener(this._onLoginChange.bind(this));
		}
	}, {
		key: "_onChange",
		value: function _onChange() {
			this.setState({
				errors: ErrorsStore.getData()
			});
		}
	}, {
		key: "_onLoginChange",
		value: function _onLoginChange() {
			var _this = this;

			if (AuthStore.authenticated()) {
				this.setState({
					currentUser: AuthStore.currentUser()
				});
				setTimeout(function () {
					_this.context.router.transitionTo(Constants.links.equipmentIndex);
				});
			} else {
				this.setState({
					currentUser: AuthStore.currentUser()
				});
				setTimeout(function () {
					_this.context.router.transitionTo(Constants.links.login);
				});
			}
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"content",
				null,
				React.createElement(Nav, { currentUser: this.state.currentUser }),
				React.createElement(
					"div",
					{ className: "main-content col-xs-10 col-xs-offset-1" },
					React.createElement(Notice, { errors: this.state.errors }),
					React.createElement(RouteHandler, { currentUser: this.state.currentUser,
						errors: this.state.errors
					})
				)
			);
		}
	}]);

	return App;
})(React.Component);

App.contextTypes = {
	router: React.PropTypes.func.isRequired
};
