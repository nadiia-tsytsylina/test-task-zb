import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAuthIsLoading,
  selectIsDealsLoading,
  selectIsFetchingUser,
} from '../redux/selectors';
import { fetchCurrentUser, fetchDeals } from '../redux/operations';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Layout from './Layout/Layout';
import PublicRoute from './PublicRoute';
import Loader from './Loader/Loader';

export default function App() {
  const dispatch = useDispatch();
  const isAuthLoading = useSelector(selectAuthIsLoading);
  const isDealsLoading = useSelector(selectIsDealsLoading);
  const isFetchingUser = useSelector(selectIsFetchingUser);

  useEffect(() => {
    dispatch(fetchDeals());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      {(isAuthLoading || isDealsLoading || isFetchingUser) && <Loader />}
    </>
  );
}
