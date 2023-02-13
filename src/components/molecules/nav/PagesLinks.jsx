import {ActiveCategory} from '../../../constants/ActiveCategory';

import * as S from './PagesLinks.style';

function PagesLinks(props) {

  const onClick = (event) => {
    event.preventDefault();
    const clickedCategory = event.target.innerText.replace(' ', '');
    const newActiveCategory = getKeyByValue(ActiveCategory, clickedCategory);
    props.updateActiveCategory({
      activeCategory: newActiveCategory,
    });
  }

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  }

  return (
    <S.PagesLinks>
        <li>
          <a href='#'
             onClick={onClick}>Hot Coffee
          </a>
        </li>
        <li>
          <a href='#'
             onClick={onClick}>Iced Coffee
          </a>
        </li>
        <li>
          <a href='#'
             onClick={onClick}>Deserts
          </a>
        </li>
    </S.PagesLinks>
  );
}

export default PagesLinks;
