import './styles/index.css';
import './styles/color-palette.css';
import './styles/font-size.css';

import {useState} from 'react';

import Header from './components/organisms/Header';
import Nav from './components/organisms/Nav';
import Body from './components/organisms/Body';

import {ActiveCategory} from './constants/ActiveCategory';

import * as S from './App.style';

function App() {

  const [activeCategory, setActiveCategory] = useState(ActiveCategory.HotCoffee);

  const handleUpdateActiveCategory = (data) => {
    console.log(`App: Handling update active [category=${data.activeCategory}]`);
    setActiveCategory(data.activeCategory);
  };

  return (
      <S.App>
        <Header></Header>
        <Nav updateActiveCategory={handleUpdateActiveCategory}></Nav>
        <Body activeCategory={activeCategory}></Body>
      </S.App>
  );
}

export default App;
