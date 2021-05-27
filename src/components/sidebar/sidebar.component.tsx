import React, { useState, useEffect } from "react";
import "./sidebar.styles.css";
import axiosInstance from "../../helpers/axiosInstance";
import { selectCategoryId } from "../../redux/ducks/selectCategoryId";
import { useDispatch } from "react-redux";

const SidebarComponent: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axiosInstance()
      .get("/categories/")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="sidebar">
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <button onClick={() => dispatch(selectCategoryId(category.id))}>
                {category.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarComponent;
