import React, { useState, useEffect, Suspense } from "react";
import axiosInstance from "../../helpers/axiosInstance";
import { useSelector } from "react-redux";
import imageFile from "../../components/image/gitcat.png";
import ButtonComponent from "../../components/button/button.component";

const ImageComponent: any = React.lazy(() =>
  import("../../components/image/image.component")
);

const ListContainer: React.FC = () => {
  const [listItems, setListItems] = useState<any[]>([]);
  const [page, setPage] = useState(10);
  const selectCategoryId  = useSelector<any>(state => state.selectCategoryId.selectCategoryId);
  
  useEffect(() => {
    fetchData();
  }, [selectCategoryId]);

  const fetchData = async () => {
    try {
      const result = await axiosInstance().get(
        `/images/search?limit=${page}&category_ids=${selectCategoryId}`
      );
      const data = await result.data;
      setPage(page + 10);
      setListItems(() => {
        return [...listItems, ...data];
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMoreListItems = () => {
    fetchData();
  };

  return (
    <div className="list">
      {listItems.map((listItem) => (
        <div className="card" key={listItem.id}>
          	<Suspense fallback={<img src={imageFile} alt='Avatar' style={{ width: '50%' }} />}>
						<ImageComponent src={listItem.url} />
				  	</Suspense>
        </div>
      ))}
      {selectCategoryId ? (
        <ButtonComponent loadMore={() => fetchMoreListItems()}>
          Load more
        </ButtonComponent>
      ) : (
        <h3>no category selected</h3>
      )}
    </div>
  );
};

export default ListContainer;
