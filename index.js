// Code your solution in this file.
let drivers = ['bobby', 'sammy', 'sally', 'annette', 'sarah', 'bobby']
function lowerCaseDrivers(){
  return drivers.map(function(x){
    return x.toLowerCase()
  });
}
function nameToAttributes(){
  return drivers.split(" ").map(function(x){
    return "firstName: " +drivers[0]+ " lastName: "+drivers[1]

  })


}
function attributesToPhrase(){
  return drivers.map(function(driver){
  return driver.name+" is from "+driver.hometown
});
}
