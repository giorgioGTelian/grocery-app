import type { Route } from '@vaadin/router';
import './views/grocery/grocery-view';
import './views/main-layout';

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
};

export const views: ViewRoute[] = [
  // Place routes below (more info https://hilla.dev/docs/routing)
  {
    path: '',
    component: 'grocery-view',
    icon: '',
    title: '',
  },
  {
    path: 'grocery',
    component: 'grocery-view',
    icon: 'list-alt-solid',
    title: 'Grocery',
  },
];
export const routes: ViewRoute[] = [
  {
    path: '',
    component: 'main-layout',
    children: views,
  },
];
