var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NOTICE_DURATION = 4000;

var Notice = (function (_React$Component) {
	_inherits(Notice, _React$Component);

	function Notice(props) {
		_classCallCheck(this, Notice);

		_get(Object.getPrototypeOf(Notice.prototype), 'constructor', this).call(this, props);
	}

	_createClass(Notice, [{
		key: 'clearNotices',
		value: function clearNotices() {
			var _this = this;

			setTimeout(function () {
				delete _this.props.errors.notice;
				hasErrors(_this.props.errors);
			}, NOTICE_DURATION);
		}
	}, {
		key: 'render',
		value: function render() {

			var noticesContainer;
			var notices = [];
			var count = 0;

			if (this.props.errors) {

				for (notice in this.props.errors) {
					if (this.props.errors.notice) {
						notices.push(React.createElement(
							'p',
							{ className: 'text-danger', key: 'error_' + count },
							this.props.errors.notice
						));
					}
				}
				count++;
			};

			if (notices.length) {

				noticesContainer = React.createElement(
					'div',
					{ className: this.props.errors ? 'alert alert-danger' : 'alert alert-success' },
					notices
				);

				this.clearNotices();
			};

			return React.createElement(
				'div',
				{ className: 'notice-wrapper' },
				noticesContainer
			);
		}
	}]);

	return Notice;
})(React.Component);
