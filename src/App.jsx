import './styles/index.css';
import './styles/color-palette.css';
import './styles/font-size.css';

import {useState} from 'react';

import Header from './components/organisms/Header';
import Nav from './components/organisms/Nav';
import Body from './components/organisms/Body';

import {ActiveView} from './constants/ActiveView';
import {ActiveCategory} from './constants/ActiveCategory';

import * as S from './App.style';

function App() {

  const [activeView, setActiveView] = useState(ActiveView.Grid);
  const [activeCategory, setActiveCategory] = useState(ActiveCategory.HotCoffee);

  const handleUpdateActiveView = (data) => {
    console.log(`App: Handling update active view [activeView=${data.activeCategory}]`);
    setActiveView(data.activeView);
  };

  const handleUpdateActiveCategory = (data) => {
    console.log(`App: Handling update active category [activeCategory=${data.activeCategory}]`);
    setActiveView(ActiveView.Grid);
    setActiveCategory(data.activeCategory);
  };

  return (
      <S.App>
        <Header></Header>
        <Nav updateActiveCategory={handleUpdateActiveCategory}></Nav>
        <Body activeView={activeView}
              activeCategory={activeCategory}
              updateActiveView={handleUpdateActiveView}></Body>
      </S.App>
  );
}

export default App;
