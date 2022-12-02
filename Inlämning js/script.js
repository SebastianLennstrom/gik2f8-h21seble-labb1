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
    let html = `  <div id="hidden-Item" style =visability:visible;background-color:white;border-radius:10px;z-index:100;position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);max-width:40%> 
    <header style = padding:10px,15px;display:flex;align-items:center;justify-content:center;transition:200msease-in-out>
    ${li.title}
    </header>
    <p style = padding:1rem>
    This is info about the book
    </p>
</div>` 
    i++
    return html
  }
  
}

for (let i = 0; i < bookList.length; i++) {
  const listItem = bookList[i];
  listItem[i].addEventListener("click", () => {
    root.insertAdjacentHTML("beforeend", showItem(bookList))
  })
}

/*let listItem = document.querySelectorAll(".book-list__item");

listItem = document.addEventListener("click", () =>{
      root.insertAdjacentHTML('beforeend', showItem(bookList))
})*/





