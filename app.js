const bookStore = [
    {
        id: '001',
        title: 'Sands of time',
        author: 'Robert Dillinger',
        noOfPages: 403,
        price: 250,
        isAvailable: true,
        reviews: [],
        genre: 'fiction',
        image: 'some-img-url'
    },
    {
        id: '002',
        title: 'Ocean Eyes',
        author: 'Billie Ellish',
        noOfPages: 467,
        price: 320,
        isAvailable: true,
        reviews: [],
        genre: 'horror',
        image: 'some-img-url'
    },
    {
        id: '003',
        title: 'Chronicles of jollof rice',
        author: 'Chux',
        noOfPages: 1467,
        price: 899.9999,
        isAvailable: false,
        reviews: [],
        genre: 'nutrition',
        image: 'some-img-url'
    },
]

// Listing our books
let bookListContainer = document.querySelector('#books');

function showBooks (key, searchMode) {
    let books = [];
    if (key === 'all') {
        books = bookStore
    } else if (key) {
        books = bookStore.filter(book => book.genre === key)
    } 

    if (searchMode === true) {
        books = bookStore.filter(book => {
            for (let val in book) {
                if (book[val].toString().toLowerCase().includes(key)) {
                    return true
                }
            }
            return false
        })
    }
    
    let bookList = books.map(book => {
        return (
            `<li class="book" id="${book.id}">
                <h3>Title: ${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Price: <b>$${book.price}</b></p>
                <button class="buy">Buy Now</button>
                <button class="add">Add to wishlist</button>
                <button class="rent">Rent this book!</button>
            </li>`
        )
    })

    if (bookList.length) {
        bookListContainer.innerHTML = bookList.join('')
    } else {
        bookListContainer.innerHTML = `<p>We do not have books in that category</p>`
    }
}

showBooks('all')

let allTabs = document.querySelectorAll('.tab')
allTabs.forEach(tab => {
    tab.onclick = () => {
        allTabs.forEach(tab => tab.classList.remove('active'))
        tab.classList.add('active')
        showBooks(tab.innerHTML.toLowerCase())
    }
})

let searchInput = document.querySelector('#search-input');
searchInput.oninput = (evt) => {
    showBooks(evt.target.value, true)
}