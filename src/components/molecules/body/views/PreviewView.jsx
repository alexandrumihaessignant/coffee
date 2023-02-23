import Preview from './preview/Preview';

function PreviewView(props) {

  return (
      props.display
          ? <Preview
              title={props.title}
              description={props.description}
              imgSrc={props.imgSrc}
              updateActiveView={props.updateActiveView}/>
          : null
  );
}

export default PreviewView;
