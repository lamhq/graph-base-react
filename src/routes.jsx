import { lazy } from 'react';

const DashboardPage = lazy(() => import('./admin/dashboard'));
const ForgotPasswordPage = lazy(() => import('./admin/forgot-password'));
const LoginPage = lazy(() => import('./admin/login'));
const AddUserPage = lazy(() => import('./admin/manage-users/add'));
const EditUserPage = lazy(() => import('./admin/manage-users/edit'));
const ListUserPage = lazy(() => import('./admin/manage-users/list'));
const ViewUserPage = lazy(() => import('./admin/manage-users/view'));
const ProfilePage = lazy(() => import('./admin/profile'));

const routes = [
  {
    path: '/admin/dashboard',
    name: 'dashboard',
    component: DashboardPage,
  },
  {
    path: '/admin/forgot-password',
    name: 'forgot-password',
    component: ForgotPasswordPage,
  },
  {
    path: '/admin/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/admin/profile',
    name: 'profile',
    component: ProfilePage,
  },
  {
    path: '/admin/users/add',
    name: 'add-user',
    component: AddUserPage,
  },
  {
    path: '/admin/users/edit/:id',
    name: 'profile',
    component: EditUserPage,
  },
  {
    path: '/admin/users/view/:id',
    name: 'profile',
    component: ViewUserPage,
  },
  {
    path: '/admin/users',
    name: 'profile',
    component: ListUserPage,
  },
];

export default routes;
