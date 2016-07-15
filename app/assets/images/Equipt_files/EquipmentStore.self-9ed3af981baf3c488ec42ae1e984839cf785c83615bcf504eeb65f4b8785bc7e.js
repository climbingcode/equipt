var _equipment = [];

var EquipmentStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

  getEquipment: function () {
    return _equipment;
  }

});

AppDispatcher.register(function (action) {
  var _action$payload = action.payload;
  var type = _action$payload.type;
  var data = _action$payload.data;

  switch (type) {
    case Constants.EQUIPMENT_INDEX:
      _equipment = data;
      EquipmentStore.emitChange();
      break;
  }
});
