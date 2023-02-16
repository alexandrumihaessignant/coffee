import {Component} from 'react';

import * as SInput from '../../../../atoms/Input.style';
import * as SButtonWrapper from '../../../../atoms/Button.style';

import * as SMain from './Create.style';

const S = {
  ItemCreateForm: SMain.ItemCreateForm,
  Input: SInput.Input,
  ButtonWrapper: SButtonWrapper.ButtonWrapper
};

class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateActiveView({
      title: this.state.name,
      description: this.state.description
    })
  }

  render() {
    return (
        <S.ItemCreateForm onSubmit={this.handleSubmit}>
          <S.Input type='text'
                   name='name'
                   placeholder='Name'
                   onChange={this.handleNameChange}/>
          <S.Input type='text'
                   name='description'
                   placeholder='Description'
                   onChange={this.handleDescriptionChange}/>
          <S.ButtonWrapper>
            <input type='submit'
                   value='Create'/>
          </S.ButtonWrapper>
        </S.ItemCreateForm>
    );
  }
}

export default Create;
