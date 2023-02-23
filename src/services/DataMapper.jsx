const Mapper = {
  HotCoffee: (json) => {
    return json.map(item => {
      return {
        title: item.title,
        imgSrc: item.image,
        description: item.description
      }
    });
  },
  IcedCoffee: (json) => {
    return json.map(item => {
      return {
        title: item.title,
        imgSrc: item.image,
        description: item.description
      }
    });
  },
  Deserts: (json) => {
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
