import './styles/index.css';
import './styles/color-palette.css';
import './styles/font-size.css';

import Header from './components/organisms/Header';
import Nav from './components/organisms/Nav';
import Body from './components/organisms/Body';

import * as S from './App.style';

function App() {
  return (
      <S.App>
        <Header></Header>
        <Nav></Nav>
        <Body></Body>
      </S.App>
  );
}

export default App;
