export function getCategories(items) {
	let allCategories = items.map((item) => {return item.categories});
	let flattenedArray = [].concat.apply([], allCategories);
	let categories = flattenedArray.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
	return categories
}

export function filterByCategory(category, items) {
	if (category === "All") {
      return items;
    }
    let filteredItems = items.filter( item => item.categories.includes(category))
    return filteredItems;
}