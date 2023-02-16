import Create from './create/Create';

const CreateView = (props) => {

  return (
      props.display
          ? <Create updateActiveView={props.updateActiveView}/>
          : null
  );
}

export default CreateView;
