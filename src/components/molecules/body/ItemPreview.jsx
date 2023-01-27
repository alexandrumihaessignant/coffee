import ItemPreviewBackButton from './ItemPreviewBackButton';
import Button from "../../atoms/Button";

import * as S from './ItemPreview.style';

const ItemPreview = (props) => {

  return (
      props.display
          ? <S.Wrapper>
            <S.Preview>
              <p id='ItemPreviewTitle'>{props.title}
              </p>
              <S.Content>
                <img src={props.imgSrc}/>
                <div>
                  <p>Ingredients:</p>
                  <p>Ice, Milk, Coffee Frappuccino Syrup [Sugar, Water, Natural
                    Flavor, Salt, Xanthan Gum, Potassium Sorbate, Citric Acid],
                    Coffee, Brewed Espresso.</p>
                </div>
              </S.Content>
            </S.Preview>
            <S.Buttons>
              <ItemPreviewBackButton updateActiveView={props.updateActiveView}/>
              <Button title={'Edit'}/>
            </S.Buttons>
          </S.Wrapper>
          : null
  );
}

export default ItemPreview;
