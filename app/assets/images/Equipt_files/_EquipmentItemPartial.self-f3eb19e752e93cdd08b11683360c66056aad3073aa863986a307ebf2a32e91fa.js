var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EquipmentItemPartial = (function (_React$Component) {
	_inherits(EquipmentItemPartial, _React$Component);

	function EquipmentItemPartial(props) {
		_classCallCheck(this, EquipmentItemPartial);

		_get(Object.getPrototypeOf(EquipmentItemPartial.prototype), "constructor", this).call(this, props);
	}

	_createClass(EquipmentItemPartial, [{
		key: "selectedEquipment",
		value: function selectedEquipment(equipment) {
			var path = Constants.links.equipmentShow;
			this.context.router.transitionTo(path, { id: equipment.id });
		}
	}, {
		key: "render",
		value: function render() {

			var equipment = this.props.equipment;

			return React.createElement(
				"div",
				{ className: "equipment-container col-xs-4" },
				React.createElement(
					Link,
					{ to: "equipmentShow=", params: { id: equipment.id } },
					React.createElement(
						"div",
						{ className: "well" },
						React.createElement(
							"h2",
							null,
							equipment.equipment_name.capitalize()
						),
						React.createElement(
							"h4",
							null,
							equipment.brand
						),
						React.createElement("img", { className: "img-responsive center-block", src: "/assets/equipment-default.png" }),
						React.createElement(
							"h5",
							null,
							equipment.model
						),
						React.createElement(
							"p",
							null,
							"Price Per Day: $",
							equipment.price_per_week
						),
						React.createElement(
							"p",
							null,
							"Deposit: $",
							equipment.desposit_amount
						)
					)
				)
			);
		}
	}]);

	return EquipmentItemPartial;
})(React.Component);

EquipmentItemPartial.contextTypes = {
	router: React.PropTypes.func.isRequired
};
