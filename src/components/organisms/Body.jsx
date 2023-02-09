import {Component} from 'react';

import Search from './../molecules/body/Search';
import ItemList from './../molecules/body/ItemList';
import ItemPreview from './../molecules/body/ItemPreview';
import CreateItemButton from "../molecules/body/CreateItemButton.jsx";

import * as S from './Body.style';

export const ActiveView = {
  List: 'List',
  Preview: 'Preview',
  Create: 'Create',
}

const hotCoffeeEndpoint = 'https://api.sampleapis.com/coffee/hot';
const icedCoffeeEndpoint = 'https://api.sampleapis.com/coffee/iced';

class Body extends Component {

  constructor() {
    super();
    this.state = {
      activeView: ActiveView.List,
      previewTitle: null,
      previewImgSrc: null,
      previewDescription: null,
      items: [
        {
          title: 'Iced Coffee',
          imgSrc: require('./../../assets/iced-coffee.jpg')
        },
        {
          title: 'Iced Latte',
          imgSrc: require('./../../assets/iced-latte.jpg')
        },
        {
          title: 'Frappuccino',
          imgSrc: require('./../../assets/frappuccino.jpg')
        },
        {
          title: 'Cold Brew',
          imgSrc: require('./../../assets/cold-brew.jpg')
        },
        {
          title: 'Nitro',
          imgSrc: require('./../../assets/nitro.jpg')
        }
      ],
      isFetching: false
    };
    this.fetchItems = this.fetchItems.bind(this);
    this.updateExistingItems = this.updateExistingItems.bind(this);
    this.computeUniqueItems = this.computeUniqueItems.bind(this);
  }

  componentDidMount() {
    this.fetchItems(hotCoffeeEndpoint, icedCoffeeEndpoint).then(newItems => {
      this.updateExistingItems(newItems)
    });
  }

  handleUpdateActiveView = (itemListData) => {
    this.setState({
      activeView: itemListData.activeView,
      previewTitle: itemListData.previewTitle,
      previewImgSrc: itemListData.previewImgSrc,
      previewDescription: itemListData.previewDescription
    });
  };

  async fetchItems(...endpoints) {
    this.setState({
      isFetching: true
    });
    let newItems = [];
    for (const endpoint of endpoints) {
      const response = await fetch(endpoint);
      const json = await response.json();
      const someNewItems = json.map(coffee => {
        return {
          title: coffee.title,
          imgSrc: coffee.image,
          description: coffee.description
        }
      });
      newItems = newItems.concat(someNewItems);
    }
    return newItems;
  }

  updateExistingItems(newItems) {
    this.setState({
      isFetching: false,
      items: this.computeUniqueItems(newItems)
    });
  }

  computeUniqueItems(newItems) {
    const items = this.state.items.concat(newItems);
    for (let i = 0; i < items.length; ++i) {
      for (let j = i + 1; j < items.length; ++j) {
        if (items[i].title === items[j].title) {
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
                display={this.state.activeView === ActiveView.List}
                activeView={this.state.activeView}
                updateActiveView={this.handleUpdateActiveView}
                items={this.state.items}>
            </ItemList>
          </S.ItemListWrapper>
          <S.CreateButtonWrapper>
            <CreateItemButton
                display={this.state.activeView === ActiveView.List}
                updateActiveView={this.handleUpdateActiveView}/>
          </S.CreateButtonWrapper>
          <ItemPreview
              display={this.state.activeView === ActiveView.Preview}
              title={this.state.previewTitle}
              imgSrc={this.state.previewImgSrc}
              description={this.state.previewDescription}
              updateActiveView={this.handleUpdateActiveView}>
          </ItemPreview>
        </S.Body>
    );
  }
}

export default Body;
