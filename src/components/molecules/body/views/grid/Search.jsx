import {Component} from 'react';

import * as SInput from '../../../../atoms/Input.style';

import * as SMain from './Search.style';

const S = {
  Search: SMain.Search,
  Input: SInput.Input
};

class Search extends Component {
  constructor() {
    super();
  }

  render() {
    return <S.Search>
      <form>
        <S.Input placeholder='Search by name'/>
      </form>
    </S.Search>;
  }
}

export default Search;
