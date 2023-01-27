import {Component} from 'react';

import * as S from './Search.style';

class Search extends Component {
  constructor() {
    super();
  }

  render() {
    const {display} = this.props;
    let html = null;

    if (display) {
      html = <S.Search>
        <form>
          <input placeholder='Search by name'/>
        </form>
      </S.Search>
    }

    return html;
  }
}

export default Search;
