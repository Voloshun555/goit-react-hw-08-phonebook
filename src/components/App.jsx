import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';
 import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoutes';

const HomePage = lazy(() => import('../pages/home'));
const LoginPage = lazy(() => import('../pages/login'));
const ContactsPage = lazy(() => import('../pages/rootContact'));
const RegisterPage = lazy(() => import('../pages/register'));

function App() {
  const dispatch = useDispatch();
   const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (<Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/contact"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contact"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contact" component={<LoginPage />} />
          }
        />
      </Route>
    </Routes>)
    
  );
}

export default App;
