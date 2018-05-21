function lowerCaseDrivers(drivers) {
  return drivers.map(function (name) { return name.toLowerCase(); });
}

function splitName(name) {
  return name.split(" ");
}

function nameToAttributes(drivers) {
  return drivers.map(function (name) { return Object.assign({}, name, {firstName: })
}
