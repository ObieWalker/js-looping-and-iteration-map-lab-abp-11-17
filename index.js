// Code your solution in this file.
let drivers = ['bobby', 'sammy', 'sally', 'annette', 'sarah', 'bobby']
function lowerCaseDrivers(){
  return drivers.map(function(x){
    return x.toLowerCase()
  });
}
function nameToAttributes(drivers){
  return drivers.map(function(x){
    let driverName= x.split(" ")
    return Object.assign({}, {firstName:driverName[0]}, {lastName: driverName[1]});
  });
}
function attributesToPhrase(){
  return drivers.map(function(driver){
  return driver.name+" is from "+driver.hometown
});
}
