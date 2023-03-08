import './styles/index.css';
import './styles/color-palette.css';
import './styles/font-size.css';

import {useEffect, useState} from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Root from './pages/Root';
import GridPage from "./pages/item/GridPage";
import PreviewPage from "./pages/item/PreviewPage";
import ItemNotFound from "./pages/error/ItemNotFound";
import CreatePage from "./pages/item/CreatePage";

import fetchItems from "./services/DataFetcher";
import computeUniqueItems from "./util/ItemsUtils";
import {ActiveCategory} from "./constants/ActiveCategory";
import {LocalData} from "./constants/LocalData";
import {AppContext} from "./services/AppContext";
import {Endpoints} from "./constants/Endpoints";
import {AppRoutes} from "./constants/routing/AppRoutes";
import PageNotFound from "./pages/error/PageNotFound";

const router = createBrowserRouter([
  {
    path: AppRoutes.home,
    element: <Root/>,
    errorElement: <PageNotFound/>,
    children: [
      {
        index: true,
        path: AppRoutes.home,
        element: <GridPage/>
      },
      {
        path: AppRoutes.category,
        element: <GridPage/>
      },
      {
        path: AppRoutes.preview,
        element: <PreviewPage/>
      },
      {
        path: AppRoutes.itemNotFound,
        element: <ItemNotFound/>
      },
      {
        path: AppRoutes.categoryCreate,
        element: <CreatePage/>
      }
    ]
  }
]);

function App() {

  const [appCtx, setAppCtx] = useState({
    activeItems: [],
    items: {
      'hot-coffee': [],
      'iced-coffee': LocalData.IcedCoffee,
      'desserts': []
    }
  });

  useEffect(() => {
    Promise.all([
      initializeItems(ActiveCategory.HotCoffee),
      initializeItems(ActiveCategory.IcedCoffee),
      initializeItems(ActiveCategory.Desserts),
    ]).then(allItems => updateAppContext(allItems));
  }, []);

  const initializeItems = async (category) => {
    let activeEndpoint = Endpoints[category];
    return fetchItems(category, activeEndpoint)
    .then(newItems => computeUniqueItems(appCtx.items[category], newItems));
  }

  const updateAppContext = async (allItems) => {
    let tempContext = {...appCtx};
    tempContext["items"][ActiveCategory.HotCoffee] = allItems[0];
    tempContext["items"][ActiveCategory.IcedCoffee] = allItems[1];
    tempContext["items"][ActiveCategory.Desserts] = allItems[2];
    setAppCtx(tempContext);
  }

  return (
      <>
        <AppContext.Provider value={{appCtx, setAppCtx}}>
          <RouterProvider router={router}/>
        </AppContext.Provider>
      </>
  );
}

export default App;
