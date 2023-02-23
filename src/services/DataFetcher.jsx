import Mapper from './DataMapper';

const fetchItems = async (category, ...endpoints) => {
  let newItems = [];
  for (const endpoint of endpoints) {
    const response = await fetch(endpoint);
    const json = await response.json();
    let someNewItems = [];
    someNewItems = Mapper[category](json);
    newItems = newItems.concat(someNewItems);
  }
  return newItems;
};

export default fetchItems;
