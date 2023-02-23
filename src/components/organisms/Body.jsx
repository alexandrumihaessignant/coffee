import {useState, useEffect} from 'react';

import fetchItems from '../../services/DataFetcher';
import computeUniqueItems from '../../services/ItemsUtils';

import GridView from '../molecules/body/views/GridView';
import PreviewView from '../molecules/body/views/PreviewView';
import CreateView from '../molecules/body/views/CreateView';

import {ActiveView} from '../../constants/ActiveView';
import {Endpoints} from '../../constants/Endpoints';
import {LocalData} from '../../constants/LocalData';

import * as S from './Body.style';

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

  useEffect(() => {
    console.log('Body: Component did mount');

    initializeActiveItems(activeCategory);

    return () => {
      console.log('Body: Component will unmount\n');
    };
  }, []);

  const initializeActiveItems = (category) => {
    console.log(`Body: Initialize first category. Fetching items [category=${category}]\n\n`);
    let activeEndpoint = Endpoints[category];
    fetchItems(category, activeEndpoint).then(newItems => {
      updateActiveItems(newItems);
    });
  }

  useEffect(() => {
    console.log(`Body: Component did update [category=${props.activeCategory}]`);

    let activeEndpoint = Endpoints[props.activeCategory];
    if (itemsAlreadyFetched[props.activeCategory]) {
      console.log(`Body: Items already fetched. Just changing the active items list [category=${props.activeCategory}]\n\n`);
      setActiveCategory(props.activeCategory);
      setActiveItems(items[props.activeCategory]);
    } else {
      console.log(`Body: Fetching items [category=${props.activeCategory}]\n\n`);
      fetchItems(props.activeCategory, activeEndpoint).then(newItems => {
        updateActiveItems(newItems);
      });
    }

    return () => {
      console.log('Body: Component will unmount\n\n');
    };
  }, [props.activeCategory]);

  const updateActiveItems = (newItems) => {
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
  }

  const handleUpdateActiveView = (itemListData) => {
    setActiveView(itemListData.activeView);
    setPreviewTitle(itemListData.previewTitle);
    setPreviewDescription(itemListData.previewDescription);
    setPreviewImgSrc(itemListData.previewImgSrc);
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

  const handleCreateItem = (createItemFormData) => {
    let tempItems = {...items};
    tempItems[activeCategory].push({
      title: createItemFormData.title,
      imgSrc: null,
      description: createItemFormData.description
    });

    setActiveView(ActiveView.Grid);
    setItems(tempItems);
    setActiveItems(items[activeCategory]);
  };

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

export default Body;
