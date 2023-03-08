const Mapper = {
  'hot-coffee': (json) => {
    return json.map(item => {
      return {
        title: item.title,
        imgSrc: item.image,
        description: item.description
      }
    });
  },
  'iced-coffee': (json) => {
    return json.map(item => {
      return {
        title: item.title,
        imgSrc: item.image,
        description: item.description
      }
    });
  },
  'desserts': (json) => {
    return json.cakes.map(item => {
      return {
        title: item.title,
        imgSrc: item.image,
        description: item.previewDescription
      }
    });
  }
};

export default Mapper;
