class Book {
	constructor(title, author, pages, price) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.price = price;
	}
}

class UI {
	static displayBooks(items) {
		const books = Store.getBooks(items);
		books.forEach((book) => UI.addBookToPage(book));
	}
	
	static addBookToPage(book) {
		const list = document.querySelector('#item-list');
		const item = document.createElement('div');

		item.innerHTML = `
		<div class="card m-5" style="width: 18rem;">
		<img class="card-img-top" src="img/book.svg" alt="Card image cap">
		<div class="card-body">
			<h4 class="card-title">${book.title}</h4>
			<h6 class="card-subtitle text-muted my-2">${book.author}</h6>
			<h6 class="card-subtitle text-muted">${book.pages} pages</h6>
			<h5 class="card-subtitle pt-3">${book.price} UAH</h6>
			<a href="#" class="btn btn-danger btn-sm float-end delete">Delete</a>
			<a href="#" class="btn btn-primary btn-sm float-end mx-1 edit-btn "><i class="bi bi-pencil-fill"></i></a>
		</div>
	</div>`;
	list.appendChild(item);
	}

	static clearFields() {
		document.querySelector('#title').value = '';
		document.querySelector('#author').value = '';
		document.querySelector('#pages').value = '';
		document.querySelector('#price').value = '';
	}

	static showAlert(message, className) {
		const div = document.createElement('div');
		div.className = `alert alert-${className}`;
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector('#create_page-container');
		const form = document.querySelector('#form-wrapper');
		container.insertBefore(div, form);

		setTimeout(() => document.querySelector('.alert').remove(), 4000);
	}

	// static validateInputs(title, author, pages, price) {
		
	// 	if(title === '' || author === '' || pages === '' || price === '') {
	// 		UI.showAlert('Please fill all the gaps to create a book :)', 'danger');
	// 	} 
	// 	else if(!isNaN(author) || pages < 0 || price < 0) {
	// 		UI.showAlert('Please check entered data!', 'danger');
	// 	}
	// 	return true;
	// }
}

class Store {
	static getBooks(items) {
		let books;
		if(localStorage.getItem(items) === null) {
			books = [];
		} else {
			books = JSON.parse(localStorage.getItem(items));
		}
		return books;
	}

	static addBook(book) {
		const books = Store.getBooks('books');
		books.push(book);
		localStorage.setItem('books', JSON.stringify(books));
	}
}

document.addEventListener('DOMContentLoaded', UI.displayBooks('books'));

document.querySelector('#create_page-form').addEventListener('submit', (e) => {
	e.preventDefault();

	const title = document.querySelector('#title').value;
	const author = document.querySelector('#author').value;
	const pages = document.querySelector('#pages').value;
	const price = document.querySelector('#price').value;
	
	if(title === '' || author === '' || pages === '' || price === '') {
		UI.showAlert('Please fill all the gaps to create a book :)', 'danger');
	} else if(!isNaN(author) || pages < 0 || price < 0) {
		UI.showAlert('Please check entered data!', 'danger');
	} else {
		const book = new Book(title, author, pages, price);
		UI.addBookToPage(book);
		Store.addBook(book);

		UI.showAlert('Book has been successfully added!', 'success');
		UI.clearFields();
	}
});

const OPEN = 'open';
const mainPage = document.querySelector("#main_page");
const createPage = document.querySelector("#create_page");
const editPage = document.querySelector('#edit_page');

document.querySelector('#main-btn').addEventListener('click', () => {
	if(mainPage.classList.contains(OPEN)) {
		mainPage.classList.remove(OPEN);
		
	} else {
		mainPage.classList.add(OPEN);
		createPage.classList.remove(OPEN);
		editPage.classList.remove(OPEN);
	}
});

document.querySelector('#create-btn').addEventListener('click', () => {

	if(!createPage.classList.contains(OPEN)) {
		createPage.classList.add(OPEN);
		mainPage.classList.remove(OPEN);
		editPage.classList.remove(OPEN);
	} else {
		createPage.classList.remove(OPEN);
	}
});

document.querySelectorAll('.edit-btn').forEach(book => book.addEventListener('click', () => {
	
	if(!editPage.classList.contains(OPEN)) {
		editPage.classList.add(OPEN);
		mainPage.classList.remove(OPEN);
	} else {
		editPage.classList.remove(OPEN);
	}
}));

const chbox = document.querySelector('#price-sort');
const searchInput = document.querySelector('#search');
const countBtn = document.querySelector('#count-total-btn');
const list = document.querySelector('#item-list');

chbox.addEventListener('change', (e) => {
	
	if(chbox.checked) {
		let books = Store.getBooks('books');
	  const sortedBooks = books.sort((a, b) => (Number(a.price) > Number(b.price) ? 1 : -1));
		localStorage.setItem('sortedBooks', JSON.stringify(sortedBooks));
		
		list.innerHTML= '';
		UI.displayBooks('sortedBooks');
	} else {
		list.innerHTML='';
		UI.displayBooks('books');
	}
});

document.querySelector('#search-btn').addEventListener('click', (e) => {
	chbox.disabled = true;
	countBtn.disabled = true;

	let books = Store.getBooks('books');

	const foundBooks = books.filter(book => (book.title.toUpperCase()
	.search(searchInput.value.toUpperCase()) !== -1));

	localStorage.setItem('foundBooks', JSON.stringify(foundBooks));

	list.innerHTML = '';
	UI.displayBooks('foundBooks');
});

document.querySelector('#cancel-btn').addEventListener('click', (e) => {
	list.innerHTML = '';
	searchInput.value = '';
	UI.displayBooks('books');
	chbox.disabled = false;
	countBtn.disabled = false;
});

document.querySelector('#count-total-btn').addEventListener('click', (e) => {
	const books = Store.getBooks('books');
	const totalPrice = books.reduce((total, book) => (total + Number(book.price)), 0);

	console.log(totalPrice);
	
	const manageContainer = document.querySelector('#collapse-total-price');
	const showTotalPrice = document.createElement('div');
	const totalPrice1 = document.querySelector('#total-price');

	if(!manageContainer.classList.contains(OPEN)) {
		manageContainer.classList.add(OPEN);
		totalPrice1.textContent = `${totalPrice}`;
	} else {
		manageContainer.classList.remove(OPEN);
	}
});

