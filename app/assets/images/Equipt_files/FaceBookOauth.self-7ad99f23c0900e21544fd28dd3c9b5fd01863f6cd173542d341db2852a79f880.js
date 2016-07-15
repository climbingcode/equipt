var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FaceBookOauth = (function (_React$Component) {
	_inherits(FaceBookOauth, _React$Component);

	function FaceBookOauth(props) {
		_classCallCheck(this, FaceBookOauth);

		_get(Object.getPrototypeOf(FaceBookOauth.prototype), "constructor", this).call(this, props);
		this.state = {
			FB: {
				appId: Keys.FACEBOOK_APP_ID,
				cookie: true,
				status: true,
				xfbml: true
			}
		};
		this.disabled = true;
		this.loggedIn = false;
		this.initalized = false;
		this._isMounted = false;
	}

	_createClass(FaceBookOauth, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			var _this = this;

			this._isMounted = true;
			if (this.initalized) {
				this.updateStatus();
			} else {
				window.fbAsyncInit = function () {
					window.FB.init(_this.state.FB);
					_this.initalized = true;
					_this._isMounted && _this.updateStatus();
				};
			}
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			this._isMounted = false;
		}
	}, {
		key: "updateStatus",
		value: function updateStatus() {
			var _this2 = this;

			if (this.initalized) {
				window.FB.getLoginStatus(function (response) {
					_this2.loggedIn = response.status === 'connected' ? true : false;
					_this2.disabled = false;
					_this2.forceUpdate();
				});
			} else {
				if (window.FB) window.FB.init(this.state.FB);
			}
		}
	}, {
		key: "login",
		value: function login() {
			var _this3 = this;

			if (FB.getAuthResponse()) return;
			FB.login(function (res) {
				faceBookLogin();
				_this3.updateStatus();
			});
		}
	}, {
		key: "logout",
		value: function logout() {
			var _this4 = this;

			if (!FB.getAuthResponse()) return;
			FB.logout(function (res) {
				_this4.updateStatus();
			});
		}
	}, {
		key: "render",
		value: function render() {

			if (this.loggedIn) {
				var btn = React.createElement(
					"button",
					{ className: "btn btn-success", disabled: this.disabled, onClick: this.logout.bind(this) },
					"Logout"
				);
			} else {
				var btn = React.createElement(
					"button",
					{ className: "btn btn-success", disabled: this.disabled, onClick: this.login.bind(this) },
					"Login With Facebook"
				);
			}

			return React.createElement(
				"div",
				{ className: "oauth-container" },
				btn,
				React.createElement("hr", null)
			);
		}
	}]);

	return FaceBookOauth;
})(React.Component);
