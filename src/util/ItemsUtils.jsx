const knownInvalidTitles = ['rem', 'Founder', 'string', 'Aguapanela Coffee'];

const computeUniqueItems = (existingItems, newItems) => {
  const items = existingItems.concat(newItems);
  for (let i = 0; i < items.length; ++i) {
    for (let j = i + 1; j < items.length; ++j) {
      if (items[i].title === items[j].title
          || knownInvalidTitles.includes(items[j].title)) {
        items.splice(j--, 1);
      }
    }
  }
  return items;
};

export default computeUniqueItems;
