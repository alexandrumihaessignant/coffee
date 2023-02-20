import {useState, useEffect} from 'react';

import GridView from '../molecules/body/views/GridView';
import PreviewView from '../molecules/body/views/PreviewView';
import CreateView from '../molecules/body/views/CreateView';

import {ActiveView} from '../../constants/ActiveView';
import {Endpoints} from '../../constants/Endpoints';
import {LocalData} from '../../constants/LocalData';

import * as S from './Body.style';

const knownInvalidTitles = ['rem', 'Founder', 'string'];

function Body(props) {

  const [activeCategory, setActiveCategory] = useState(props.activeCategory);
  const [activeView, setActiveView] = useState(ActiveView.Grid);
  const [previewTitle, setPreviewTitle] = useState(null);
  const [previewImgSrc, setPreviewImgSrc] = useState(null);
  const [previewDescription, setPreviewDescription] = useState(null);
  const [activeItems, setActiveItems] = useState([]);
  const [items, setItems] = useState({
    HotCoffee: [],
    IcedCoffee: LocalData.icedCoffee,
    Deserts: []
  });
  const [itemsAlreadyFetched, setItemsAlreadyFetched] = useState({
    HotCoffee: false,
    IcedCoffee: false,
    Deserts: false
  });
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    console.log('Body: Component did mount');

    initializeFirstCategory(activeCategory);

    return () => {
      console.log("Body: Component will unmount\n");
    };
  }, []);

  useEffect(() => {
    console.log(`Body: Component did update [category=${props.activeCategory}]`);

    let activeEndpoint = Endpoints[props.activeCategory];
    if (itemsAlreadyFetched[props.activeCategory]) {
      console.log(`Body: Items already fetched. Just changing the active items list [category=${props.activeCategory}]\n\n`);
      setActiveCategory(props.activeCategory);
      setActiveItems(items[props.activeCategory]);
    } else {
      console.log(`Body: Fetching items [category=${props.activeCategory}]\n\n`);
      fetchItems(activeEndpoint).then(newItems => {
        updateExistingItems(newItems);
      });
    }

    return () => {
      console.log("Body: Component will unmount\n\n");
    };
  }, [props.activeCategory]);


  const handleUpdateActiveView = (itemListData) => {
    setActiveView(itemListData.activeView);
    setPreviewTitle(itemListData.previewTitle);
    setPreviewDescription(itemListData.previewDescription);
    setPreviewImgSrc(itemListData.previewImgSrc);
  };

  const handleCreateItem = (createItemFormData) => {
    let tempItems = {...items};
    tempItems[activeCategory].push(
        {
          title: createItemFormData.title,
          imgSrc: null,
          description: createItemFormData.description
        }
    );
    setActiveView(ActiveView.Grid);
    setItems(tempItems);
    setActiveItems(items[activeCategory]);
  };

  const handleFilterGrid = (filterData) => {
    let filteredItems = [];
    items[activeCategory].forEach(item => {
      if(item.title.toLowerCase().includes(filterData.filterText.toLowerCase())) {
        filteredItems.push(item);
      }
    });
    setActiveItems(filteredItems);
  };


  const initializeFirstCategory = (category) => {
    console.log(`Body: Initialize first category. Fetching items [category=${category}]\n\n`);
    let activeEndpoint = Endpoints[category];
    fetchItems(activeEndpoint).then(newItems => {
      updateExistingItems(newItems);
    });
  }

  const fetchItems = async (...endpoints) => {
    setIsFetching(true);
    let newItems = [];
    for (const endpoint of endpoints) {
      const response = await fetch(endpoint);
      const json = await response.json();
      let someNewItems = [];
      someNewItems = Mapper[props.activeCategory](json);
      newItems = newItems.concat(someNewItems);
    }
    return newItems;
  }

  const updateExistingItems = (newItems) => {
    const computedItems = computeUniqueItems(
        items[props.activeCategory],
        newItems
    );
    let tempItems = {...items};
    let tempItemsAlreadyFetched = {...itemsAlreadyFetched};
    tempItems[props.activeCategory] = computedItems;
    tempItemsAlreadyFetched[props.activeCategory] = true;
    setItems(tempItems);
    setItemsAlreadyFetched(tempItemsAlreadyFetched);
    setActiveItems(computedItems);
    setIsFetching(false);
  }

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
  }

  return (
      <S.Body>
        <GridView display={activeView === ActiveView.Grid}
                  activeView={activeView}
                  items={activeItems}
                  updateActiveView={handleUpdateActiveView}
                  filterGrid={handleFilterGrid}/>
        <PreviewView display={activeView === ActiveView.Preview}
                     title={previewTitle}
                     description={previewDescription}
                     imgSrc={previewImgSrc}
                     updateActiveView={handleUpdateActiveView}/>
        <CreateView display={activeView === ActiveView.Create}
                    updateActiveView={handleCreateItem}>
        </CreateView>
      </S.Body>
  );
}

const Mapper = {
  HotCoffee: (json) => {
    return json.map(item => {
      return {
        title: item.title,
        imgSrc: item.image,
        description: item.description
      }
    });
  },
  IcedCoffee: (json) => {
    return json.map(item => {
      return {
        title: item.title,
        imgSrc: item.image,
        description: item.description
      }
    });
  },
  Deserts: (json) => {
    return json.cakes.map(item => {
      return {
        title: item.title,
        imgSrc: item.image,
        description: item.previewDescription
      }
    });
  }
};

export default Body;
