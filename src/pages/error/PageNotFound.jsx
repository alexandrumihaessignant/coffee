import Header from "../../components/organisms/Header";
import Nav from "../../components/organisms/Nav";

import * as S from "../Root.style";

function ItemNotFound() {

  return (
      <S.Root>
        <Header/>
        <Nav/>
        <S.Body>
          <h3>404</h3>
          <p>Ooooops!</p>
          <p>Page Not Found</p>
          <p>This page does not exist or was removed.</p>
        </S.Body>
      </S.Root>
  );
}

export default ItemNotFound;
