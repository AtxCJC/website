// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);


// SELECTORS //

// GETELEMENTBYID //
// console.log(document.getElementById('featured-name'));
// var featured = document.getElementById('featured-name');
// console.log(featured);
// featured.textContent = 'textContent'; // does not pay attention to style 
// featured.innerText = 'innerText'; // pay attention to style
// featured.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('nav-item active');
// console.log(items[0]);
// items[0].innerText = 'testing';
// items[0].style.backgroundColor = 'yellow';

// QUERYSELECTOR //
// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';