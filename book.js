// this is for real

function Book(title, authorName){
  this.authorName = authorName
  this.title = title
}

Book.prototype.description = function(){
  return `${this.title} by ${this.authorName}`
}



var book = new Book('In The Woods', 'Tana French')
var book = new Book('In The', 'Tana ')
var book = new Book('In', ' French')
var book = new Book('TWhatever ', 'T')
var book = new Book('Something else', 'Trench')
debugger


function Bicycle(brand, color){
  this.brand = brand
  this.color = color
}

Bicycle.prototype.numberOfWheels = 2
Bicycle.prototype.takeARide = function(){
  console.log('Wheeeeeeee!!!')
}
