//on rentre tous nos éléments de la liste dans un tableau
let listItems = [...document.querySelectorAll('li')];

let options = {
  rootMargin: '0%',
  threshold: 1.0
};

//on regarde si nos éléments sont dans la vue de l'écran
let observer = new IntersectionObserver(showItem, options);

//si nos éléments sont dans la vue, on ajoute la classe 'active' à l'élément
function showItem(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let letters = [...entry.target.querySelectorAll('span')];
      letters.forEach((letter, idx) => {
        setTimeout(() => {
          letter.classList.add('active');
        }, idx * 20);
      });
      entry.target.children[0].classList.add('active');
    }
  });
}

listItems.forEach((item) => {
  let newString = '';
  let itemText = item.children[0].innerText.split('');
  console.log(itemText);
  itemText.map(
    (letter) =>
      (newString +=
        letter == ' ' ? `<span class='gap'></span>` : `<span>${letter}</span>`)
  );
  item.innerHTML = newString;

  observer.observe(item);
});
