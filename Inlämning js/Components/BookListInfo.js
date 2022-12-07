const BookListInfo = (book) => {
    let html = `  <div id = "book-list__info" class= "book-list__info absolute pointer-events-none" style=visability:visible;background-color:white;border-radius:10px;z-index:100;position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);max-width:40%> 
      <header style = padding:10px,15px;display:flex;align-items:center;justify-content:center;transition:200msease-in-out>
      ${book.title} </header>
      <picture>
    <source srcset="${book.coverImage}"
            media="(orientation: portrait)">
    <img src="${book.coverImage}" alt="Bild på bokens framsida">
    </picture>
    </div>`
    return html
  }

 
