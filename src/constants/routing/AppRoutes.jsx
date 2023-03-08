export const AppPaths = {
  'hot-coffee': '/hot-coffee',
  'iced-coffee': '/iced-coffee',
  'desserts': '/desserts',

  itemNotFound: '/not-found',
  preview: '/preview',
};

export const AppRoutes = {
  home: '/',

  category: '/:category',

  preview: '/:category' + AppPaths.preview + '/:itemTitle',
  itemNotFound: '/:category' + AppPaths.itemNotFound,

  categoryCreate: '/:category/create',
  categoryCreatePath: '/create'
};
