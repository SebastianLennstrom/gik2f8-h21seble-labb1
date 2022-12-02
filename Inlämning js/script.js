'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});



searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
}




  function showItem(bookList) {
  for (let i = 0; i < bookList.length; i++) {
    let li = bookList[i];
    let html = `<div id="hidden-Item" style = border: 1px solid black; border-radius: 10px; z-index: 100; background-color:white;
    position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); max-width: 40%> 
        <header style = padding: 10px 15px; display: flex; justify-content: space-between; align-items: center >
        ${li.title}
        <button id="close-btn">&times;</button>
        </header>
        <p>
        This is info about the book
        </p>
    </div>` 
    return html 
  }
}

let listItem = document.getElementsByClassName(".book-list_item")
listItem = document.addEventListener('click', () =>{
      
       root.insertAdjacentHTML('beforeend', showItem(bookList))
       console.log("clicked")
  })

