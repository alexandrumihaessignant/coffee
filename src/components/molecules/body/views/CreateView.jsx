import Create from './create/Create';

function CreateView(props) {

  return (
      props.display
          ? <Create updateActiveView={props.updateActiveView}/>
          : null
  );
}

export default CreateView;
