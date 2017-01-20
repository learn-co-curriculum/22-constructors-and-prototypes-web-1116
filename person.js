function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

var kanye = new Person('Kanye', 'West')

// {firstName: 'Kanye', lastName: 'West'}


// DEMO PURPOSES ONLY - DO NOT USE
function myNewPerson(constructor, firstName, lastName ){
  var object = {}
  object.initialize = constructor
  object.initialize(firstName, lastName)
  return object
}

debugger


// var kanye = {
//   firstName: 'Kanye',
//   lastName: 'West',
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
//
// kanye.firstName // Kanye
// kanye.fullName() // Kanye West
//
// var jayZ = {
//   firstName: 'Sean',
//   lastName: 'Carter',
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
//
// jayZ.fullName()


//
