// Code your solution in this file.
let drivers = ['bobby', 'sammy', 'sally', 'annette', 'sarah', 'bobby']
function lowerCaseDrivers(){
  return drivers.map(function(x){
    return x.toLowerCase()
  });
}
function nameToAttributes(drivers){
  let driverNames = drivers.split(" ")


}
function attributesToPhrase(){
  return drivers.map(function(driver){
  return driver.name+" is from "+driver.hometown
});
}
