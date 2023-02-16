import {Component} from 'react';

import GridView from '../molecules/body/views/GridView';
import PreviewView from '../molecules/body/views/PreviewView';
import CreateView from '../molecules/body/views/CreateView';

import {ActiveView} from '../../constants/ActiveView';
import {Endpoints} from '../../constants/Endpoints';
import {LocalData} from '../../constants/LocalData';

import * as S from './Body.style';

const knownInvalidTitles = ['rem', 'Founder'];

class Body extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeCategory: props.activeCategory,
      activeView: ActiveView.Grid,
      previewTitle: null,
      previewImgSrc: null,
      previewDescription: null,
      activeItems: [],
      items: {
        HotCoffee: [],
        IcedCoffee: LocalData.icedCoffee,
        Deserts: []
      },
      itemsAlreadyFetched: {
        HotCoffee: false,
        IcedCoffee: false,
        Deserts: false,
      },
      isFetching: false
    };

    this.fetchItems = this.fetchItems.bind(this);
  }

  componentDidMount() {
    this.initializeFirstCategory(this.state.activeCategory);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const category = this.props.activeCategory;
    console.log(`Body: Component did update [category=${category}]`);
    if (prevProps.activeCategory !== category) {
      let activeEndpoint = Endpoints[category];
      if (this.state.itemsAlreadyFetched[category]) {
        console.log(
            `Body: Items already fetched. Just changing the active items list [category=${category}]\n\n`);
        this.setState({
          activeCategory: category,
          activeItems: this.state.items[category]
        });
      } else {
        console.log(`Body: Fetching items [category=${category}]\n\n`);
        this.fetchItems(activeEndpoint).then(newItems => {
          this.updateExistingItems(newItems);
        });
      }
    } else {
      console.log(
          `Body: The previous category is the same as the actual one. Skipping the change of active items [category=${category}]\n\n`);
    }
  }

  handleUpdateActiveView = (itemListData) => {
    this.setState({
      activeView: itemListData.activeView,
      previewTitle: itemListData.previewTitle,
      previewDescription: itemListData.previewDescription,
      previewImgSrc: itemListData.previewImgSrc,
    });
  };

  handleCreateItem = (createItemFormData) => {
    const category = this.state.activeCategory;
    let items = {...this.state.items};
    items[category].push(
        {
          title: createItemFormData.title,
          imgSrc: null,
          description: createItemFormData.description
        }
    );
    this.setState({
      activeView: ActiveView.Grid,
      items,
      activeItems: items[category],
    });
  };

  handleFilterGrid = (filterData) => {
    const category = this.state.activeCategory;
    let filteredItems = []
    this.state.items[category].forEach(item => {
      if(item.title.toLowerCase().includes(filterData.filterText.toLowerCase())) {
        filteredItems.push(item);
      }
    });
    this.setState({
      activeItems: filteredItems,
    });
  };


  initializeFirstCategory = (category) => {
    console.log(
        `Body: Initialize first category. Fetching items [category=${category}]\n\n`);
    let activeEndpoint = Endpoints[category];
    this.fetchItems(activeEndpoint).then(newItems => {
      this.updateExistingItems(newItems);
    });
  }

  fetchItems = async (...endpoints) => {
    const category = this.props.activeCategory;
    this.setState({
      isFetching: true
    });
    let newItems = [];
    for (const endpoint of endpoints) {
      const response = await fetch(endpoint);
      const json = await response.json();
      let someNewItems = [];
      someNewItems = Mapper[category](json);
      newItems = newItems.concat(someNewItems);
    }
    return newItems;
  }

  updateExistingItems = (newItems) => {
    const category = this.props.activeCategory;
    const computedItems = this.computeUniqueItems(
        this.state.items[category],
        newItems);
    let items = {...this.state.items};
    let itemsAlreadyFetched = {...this.state.itemsAlreadyFetched};
    items[category] = computedItems;
    itemsAlreadyFetched[category] = true;
    this.setState({
      activeCategory: category,
      items,
      itemsAlreadyFetched,
      activeItems: computedItems,
      isFetching: false
    });
  }

  computeUniqueItems = (existingItems, newItems) => {
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

  render() {
    return (
        <S.Body>
          <GridView display={this.state.activeView === ActiveView.Grid}
                    activeView={this.state.activeView}
                    items={this.state.activeItems}
                    updateActiveView={this.handleUpdateActiveView}
                    filterGrid={this.handleFilterGrid}/>
          <PreviewView display={this.state.activeView === ActiveView.Preview}
                       title={this.state.previewTitle}
                       description={this.state.previewDescription}
                       imgSrc={this.state.previewImgSrc}
                       updateActiveView={this.handleUpdateActiveView}/>
          <CreateView display={this.state.activeView === ActiveView.Create}
                      updateActiveView={this.handleCreateItem}>
          </CreateView>
        </S.Body>
    );
  }
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
