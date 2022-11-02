function findCategories() {
  const categListItemsRef = document.querySelectorAll('#categories .item');

  console.log('Number of categories:', categListItemsRef.length);

  categListItemsRef.forEach(item => {
    console.log('Category:', item.querySelector('h2').textContent);
    console.log('Elements:', item.querySelector('ul').children.length);
  });
}

findCategories();
