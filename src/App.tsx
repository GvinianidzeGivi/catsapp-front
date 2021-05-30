import React, { useEffect } from 'react';
import Sidebar from './components/sidebar/sidebar.component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategories,
  getCats,
  selectCategoryId,
} from './redux/ducks/catsReducer';
import { RootState } from './redux/store';

const RenderRoute = (route: any) => {
  return (
    <Route
      path={route.path}
      exact
      render={(props) => <route.component {...props} />}
    ></Route>
  );
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategoryId, pageLimit } = useSelector(
    (state: RootState) => state.cats
  );

  const selectCategory = (categoryId: number): void => {
    dispatch(selectCategoryId(categoryId));
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      dispatch(getCats());
    }
  }, [dispatch, pageLimit, selectedCategoryId]);

  return (
    <div className="App">
      <Sidebar categories={categories} onSelectCategory={selectCategory} />
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RenderRoute {...route} key={index} />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default App;


