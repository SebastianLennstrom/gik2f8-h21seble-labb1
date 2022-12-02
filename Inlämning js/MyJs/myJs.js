const createHidden = (book) =>{
 let html =    `
<div id="hidden-Item" style = border: 1px solid black; border-radius: 10px; z-index: 10; background-color:white;
position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); max-width: 40%> 
    <header style = padding: 10px 15px; display: flex; justify-content: space-between; align-items: center >
    ${book.title}
    <button id="close-btn">&times;</button>
    </header>
    <p>
    This is info about the book
    </p>
</div>`
return html
}


 
