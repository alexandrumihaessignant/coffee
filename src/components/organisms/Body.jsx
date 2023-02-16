import {Component} from 'react';

import Search from './../molecules/body/Search';
import ItemList from './../molecules/body/ItemList';
import ItemPreview from './../molecules/body/ItemPreview';
import CreateItemButton from '../molecules/body/CreateItemButton.jsx';

import {ActiveView} from '../../constants/ActiveView';
import {Endpoints} from '../../constants/Endpoints';
import {LocalData} from '../../constants/LocalData';

import * as S from './Body.style';
import ItemCreate from "../molecules/body/ItemCreate";

const knownInvalidTitles = ['rem', 'Founder'];

class Body extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeCategory: props.activeCategory,
      activeView: ActiveView.List,
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
      previewImgSrc: itemListData.previewImgSrc,
    });
  };

  handleCreateItem = (createItemFormData) => {
    const category = this.state.activeCategory;
    let items = {...this.state.items};
    items[category] = items[category].push(
        {
          title: createItemFormData.title,
          imgSrc: null,
          description: createItemFormData.description
        }
    );
    this.setState({
      activeView: ActiveView.List,
      items,
      activeItems: items,
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
          <Search
              display={this.state.activeView === ActiveView.List}/>
          <S.ItemListWrapper>
            <ItemList
                activeCategory={this.state.activeCategory}
                display={this.state.activeView === ActiveView.List}
                activeView={this.state.activeView}
                updateActiveView={this.handleUpdateActiveView}
                items={this.state.activeItems}>
            </ItemList>
          </S.ItemListWrapper>
          <CreateItemButton
              display={this.state.activeView === ActiveView.List}
              updateActiveView={this.handleUpdateActiveView}/>
          <ItemPreview
              display={this.state.activeView === ActiveView.Preview}
              title={this.state.previewTitle}
              imgSrc={this.state.previewImgSrc}
              updateActiveView={this.handleUpdateActiveView}>
          </ItemPreview>
          <ItemCreate
              display={this.state.activeView === ActiveView.Create}
              title={this.state.previewTitle}
              imgSrc={this.state.previewImgSrc}
              updateActiveView={this.handleUpdateActiveView}>
          </ItemCreate>
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
