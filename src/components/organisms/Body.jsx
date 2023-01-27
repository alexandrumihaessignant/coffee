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

class Body extends Component {

  constructor() {
    super();
    this.icedCoffeeImg = require('./../../assets/iced-coffee.jpg');
    this.icedLatteImg = require('./../../assets/iced-latte.jpg');
    this.frappuccinoImg = require('./../../assets/frappuccino.jpg');
    this.coldBrewImg = require('./../../assets/cold-brew.jpg');
    this.nitroImg = require('./../../assets/nitro.jpg');

    this.state = {
      activeView: ActiveView.List,
      previewTitle: null,
      previewImgSrc: null
    };
  }

  handleUpdateActiveView = (itemListData) => {
    this.setState({
      activeView: itemListData.activeView,
      previewTitle: itemListData.previewTitle,
      previewImgSrc: itemListData.previewImgSrc,
    });
  };

  render() {
    return (
        <S.Body>
          <Search
              display={this.state.activeView === ActiveView.List}/>
          <ItemList
              display={this.state.activeView === ActiveView.List}
              activeView={this.state.activeView}
              updateActiveView={this.handleUpdateActiveView}
              items={[
                {title: 'Iced Coffee', imgSrc: this.icedCoffeeImg},
                {title: 'Iced Latte', imgSrc: this.icedLatteImg},
                {title: 'Frappuccino', imgSrc: this.frappuccinoImg},
                {title: 'Cold Brew', imgSrc: this.coldBrewImg},
                {title: 'Nitro', imgSrc: this.nitroImg},
              ]}>
          </ItemList>
          <S.CreateButtonWrapper>
            <CreateItemButton
                display={this.state.activeView === ActiveView.List}
                updateActiveView={this.handleUpdateActiveView}/>
          </S.CreateButtonWrapper>
          <ItemPreview
              display={this.state.activeView === ActiveView.Preview}
              title={this.state.previewTitle}
              imgSrc={this.state.previewImgSrc}
              updateActiveView={this.handleUpdateActiveView}>
          </ItemPreview>
        </S.Body>
    );
  }
}

export default Body;