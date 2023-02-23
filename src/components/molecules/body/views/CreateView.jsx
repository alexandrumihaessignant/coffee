import Create from './create/Create';

function CreateView(props) {

  return (
      props.display
          ? <Create updateItems={props.updateItems}
                    updateActiveView={props.updateActiveView}/>
          : null
  );
}

export default CreateView;
