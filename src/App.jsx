import './styles/index.css';
import './styles/color-palette.css';
import './styles/font-size.css';

import {Component} from 'react';

import Header from './components/organisms/Header';
import Nav from './components/organisms/Nav';
import Body from './components/organisms/Body';

import {ActiveCategory} from './constants/ActiveCategory';

import * as S from './App.style';

class App extends Component {

  constructor() {
    super();
    this.state = {
      activeCategory: ActiveCategory.HotCoffee
    };
  }

  handleUpdateActiveCategory = (data) => {
    this.setState({
      activeCategory: data.activeCategory
    });
  };

  render() {
    return (
        <S.App>
          <Header></Header>
          <Nav updateActiveCategory={this.handleUpdateActiveCategory}></Nav>
          <Body activeCategory={this.state.activeCategory}></Body>
        </S.App>
    );
  }
}

export default App;
