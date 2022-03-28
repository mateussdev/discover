// getElementById()

const element = document.getElementById('blog-title');
console.log(element);

// getElementsByClassName()

const element = document.getElementsByClassName('one');
console.log(element);

// getElementsByTagName()

const element = document.getElementsByTagName('p');
console.log(element);

// querySelector()

const element = document.querySelector('h1.title');
console.log(element);

// querySelectorAll()

const elements = document.querySelectorAll('.title')
elements.forEach(el => console.log(el))


// Qual usar?
/* 
    getElementById()            (element)
    getElementsByClassName()    (HTMLCollection)
    getElementsByTagName()      (HTMLCollection)
    querySelector()             (element)
    querySelectorAll()          (Nodelist)
*/