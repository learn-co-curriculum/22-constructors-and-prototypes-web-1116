class Book {

  constructor (title, authorName){
    this.authorName = authorName
    this.title = title
  }

  description (){
    return `${this.title} by ${this.authorName}`
  }

}
