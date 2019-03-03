import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const DashboardPage = lazy(() => import('./admin/dashboard'));
const ForgotPasswordPage = lazy(() => import('./admin/forgot-password'));
const LoginPage = lazy(() => import('./admin/login'));
const AddUserPage = lazy(() => import('./admin/manage-users/add'));
const EditUserPage = lazy(() => import('./admin/manage-users/edit'));
const ListUserPage = lazy(() => import('./admin/manage-users/list'));
const ViewUserPage = lazy(() => import('./admin/manage-users/view'));
const ProfilePage = lazy(() => import('./admin/profile'));

const routes = [
  <Route path="/" component={DashboardPage} exact />,
  <Route path="/admin/dashboard" component={DashboardPage} exact />,
  <Route path="/admin/forgot-password" component={ForgotPasswordPage} exact />,
  <Route path="/admin/login" component={LoginPage} exact />,
  <Route path="/admin/profile" component={ProfilePage} exact />,
  <Route path="/admin/users/add" component={AddUserPage} exact />,
  <Route path="/admin/users/edit/:id" component={EditUserPage} exact />,
  <Route path="/admin/users/view/:id" component={ViewUserPage} exact />,
  <Route path="/admin/users" component={ListUserPage} exact />,
  // <Route component={NoMatch} />
];

export default routes;
