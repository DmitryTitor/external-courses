class ElectricalAppliances {
  constructor(name, isInSocket, power, roomName) {
    this._name = name;
    this._isInSocket = isInSocket;
    this._power = power;
    this._room = roomName;
  }

  set name(value) {
    if (typeof value === 'string' && value) {
      this._name = value;
    }
  }

  get name() {
    return this._name;
  }

  set isInSocket(value) {
    this._isInSocket = value;
  }

  get isInSocket() {
    return this._isInSocket;
  }

  set power(value) {
    if (value > 0) {
      this._power = value;
    }
  }

  get power() {
    return this._power;
  }

  set room(value) {
    if (typeof value === 'string' && value) {
      if (!roomsArray.includes(value)) {
        roomsArray.push(value);
      }
      this._room = value;
    }
  }

  get room() {
    return this._room;
  }
}

class Kettle extends ElectricalAppliances {
  constructor(name, volume, isInSocket, power, roomName) {
    super(name, isInSocket, power, roomName);
    this._volume = volume;
  }

  set volume(value) {
    if (value > 0) {
      this._volume = value;
    }
  }

  get volume() {
    return this._volume;
  }
}

class Iron extends ElectricalAppliances {
  constructor(name, isSteamFunction, isInSocket, power, roomName) {
    super(name, isInSocket, power, roomName);
    this._isSteamFunction = isSteamFunction;
  }

  set isSteamFunction(value) {
    this._isSteamFunction = value;
  }

  get isSteamFunction() {
    return this._isSteamFunction;
  }
}

class Toaster extends ElectricalAppliances {
  constructor(name, maxTemperature, isInSocket, power, roomName) {
    super(name, isInSocket, power, roomName);
    this._maxTemperature = maxTemperature;
  }

  set maxTemperature(value) {
    if (value > 0) {
      this._maxTemperature = value;
    }
  }

  get maxTemperature() {
    return this._maxTemperature;
  }
}

ElectricalAppliances.roomsArray = [];

const flat = {
  deviceArray: [
    new Kettle('Чайник', 5, true, 200, 'Кухня'),
    new Iron('Утюг', true, true, 200, 'Спальня'),
    new Toaster('Тостер', 50, true, 200, 'Кухня'),
  ],

  find(name) {
    return flat.deviceArray.find((element) => {
      if (element.name === name) {
        return true;
      }

      return false;
    })
  }
}
