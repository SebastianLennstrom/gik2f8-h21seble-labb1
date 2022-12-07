const BookListInfo = (book) => {
    let html = `  <div id = "book-list__info" class= "book-list__info absolute pointer-events-none" style= background-color:white;border-radius:15px;z-index:10;position:fixed;left:50%;top:50%;transform:translate(-50%,-50%)> 
      <header style = padding:10px,15px;display:flex;align-items:center;justify-content:center>
      ${book.title} <br> ${book.author} </header>
      <picture>
    <source srcset="${book.coverImage}"
            media="(orientation: portrait)">
    <img src="${book.coverImage}"
    width="200px"
    height="200px"
    alt="Bild på bokens framsida">
    </picture>

    <footer style=display:flex;align-items:center;justify-content:center> Year: ${book.releaseDate} <br> Pages: ${book.pages}
    </footer>
    </div>`
    return html
  }

 
