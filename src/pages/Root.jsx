import {Outlet} from 'react-router-dom';

import Header from "../components/organisms/Header";
import Nav from "../components/organisms/Nav";

import * as S from "./Root.style";

function Root() {
  return (
      <S.Root>
        <Header/>
        <Nav/>
        <S.Body>
          <Outlet />
        </S.Body>
      </S.Root>
  );
}

export default Root;
