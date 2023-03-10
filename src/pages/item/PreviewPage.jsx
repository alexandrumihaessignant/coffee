import {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import Preview from '../../components/molecules/body/preview/Preview';

import {AppContext} from '../../services/AppContext';
import {ActiveCategory} from '../../constants/ActiveCategory';
import {AppPaths} from '../../constants/routing/AppRoutes';

function PreviewPage() {

  const {appCtx} = useContext(AppContext);
  const nav = useNavigate();
  let {category, itemTitle} = useParams();

  const activeCategory = category || ActiveCategory.HotCoffee;
  const itemsFromCategory = appCtx.items[activeCategory];

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    populatePageData();
  }, [itemsFromCategory]);

  const populatePageData = () => {
    let optionalItem = appCtx.items[category]
    .filter((item) => isTheSearchedItem(item));
    if (optionalItem.length !== 0) {
      let item = optionalItem[0];
      setState(item);
    } else if (!itemsAreStillUninitialized()) {
      const pageNotFoundRoute = '/' + activeCategory + AppPaths.itemNotFound;
      nav(pageNotFoundRoute);
    }
  }

  const isTheSearchedItem = (item) => {
    return item.title === itemTitle;
  }

  const itemsAreStillUninitialized = () => {
    return itemsFromCategory !== [];
  }

  const setState = (item) => {
    setTitle(item.title);
    setDescription(item.description);
    setImgSrc(item.imgSrc);
  }

  return (
      <Preview
          title={title}
          description={description}
          imgSrc={imgSrc}/>
  );
}

export default PreviewPage;
