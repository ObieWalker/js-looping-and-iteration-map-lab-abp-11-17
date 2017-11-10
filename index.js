// Code your solution in this file.
let drivers = ['bobby', 'sammy', 'sally', 'annette', 'sarah', 'bobby']
function lowerCaseDrivers(){
  return drivers.map(function(x){
    return x.toLowerCase()
  });
}
function nameToAttributes(){
  return drivers.map(function(x){
    return "firstName: " +driverNames[0]+ " lastName: "+driverNames[1]

  })


}
function attributesToPhrase(){
  return drivers.map(function(driver){
  return driver.name+" is from "+driver.hometown
});
}
