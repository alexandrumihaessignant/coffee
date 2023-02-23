import * as SInput from '../../../../atoms/Input.style';

import * as SMain from './Search.style';

const S = {
  Search: SMain.Search,
  Input: SInput.Input
};

function Search(props) {

  const onChange = (event) => {
    props.filterGrid({
      filterText: event.target.value
    })
  }

  return (
      <S.Search>
        <form>
          <S.Input placeholder='Search by name'
                   onChange={onChange}/>
        </form>
      </S.Search>
  );
}

export default Search;
