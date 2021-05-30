import React, { Suspense } from 'react';
import imageFile from '../../components/image/gitcat.png';
import ButtonComponent from '../../components/button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { increasePageLimitBy } from '../../redux/ducks/catsReducer';
import { Cat } from '../../domain/models';

const ImageComponent: any = React.lazy(
  () => import('../../components/image/image.component')
);

const ListContainer: React.FC = () => {
  const dispatch = useDispatch();

  const { selectedCategoryId, cats } = useSelector((state: RootState) => ({
    selectedCategoryId: state.cats.selectedCategoryId,
    cats: state.cats.results,
  }));

  const loadMoreCats = () => dispatch(increasePageLimitBy(10));

  return (
    <div className="list">
      {cats.map((cat: Cat, index: number) => (
        <div className="card" key={`${cat.id}${index}`}>
          <Suspense
            fallback={
              <img src={imageFile} alt="Avatar" style={{ width: '50%' }} />
            }
          >
            <ImageComponent src={cat.url} />
          </Suspense>
        </div>
      ))}
      {selectedCategoryId ? (
        <ButtonComponent loadMore={loadMoreCats}>Load more</ButtonComponent>
      ) : (
        <h3>no category selected</h3>
      )}
    </div>
  );
};

export default ListContainer;
