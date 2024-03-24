/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const LoginLazyImport = createFileRoute('/login')()
const AddRestaurantLazyImport = createFileRoute('/add-restaurant')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const CompaniesCompnayIdRestaurantsLazyImport = createFileRoute(
  '/companies/$compnayId/restaurants',
)()
const CompaniesCompnayIdHomeLazyImport = createFileRoute(
  '/companies/$compnayId/home',
)()
const CompaniesCompnayIdAddRestaurantLazyImport = createFileRoute(
  '/companies/$compnayId/add-restaurant',
)()

// Create/Update Routes

const LoginLazyRoute = LoginLazyImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const AddRestaurantLazyRoute = AddRestaurantLazyImport.update({
  path: '/add-restaurant',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/add-restaurant.lazy').then((d) => d.Route),
)

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const CompaniesCompnayIdRestaurantsLazyRoute =
  CompaniesCompnayIdRestaurantsLazyImport.update({
    path: '/companies/$compnayId/restaurants',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/companies.$compnayId.restaurants.lazy').then(
      (d) => d.Route,
    ),
  )

const CompaniesCompnayIdHomeLazyRoute = CompaniesCompnayIdHomeLazyImport.update(
  {
    path: '/companies/$compnayId/home',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/companies.$compnayId.home.lazy').then((d) => d.Route),
)

const CompaniesCompnayIdAddRestaurantLazyRoute =
  CompaniesCompnayIdAddRestaurantLazyImport.update({
    path: '/companies/$compnayId/add-restaurant',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/companies.$compnayId.add-restaurant.lazy').then(
      (d) => d.Route,
    ),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/add-restaurant': {
      preLoaderRoute: typeof AddRestaurantLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/companies/$compnayId/add-restaurant': {
      preLoaderRoute: typeof CompaniesCompnayIdAddRestaurantLazyImport
      parentRoute: typeof rootRoute
    }
    '/companies/$compnayId/home': {
      preLoaderRoute: typeof CompaniesCompnayIdHomeLazyImport
      parentRoute: typeof rootRoute
    }
    '/companies/$compnayId/restaurants': {
      preLoaderRoute: typeof CompaniesCompnayIdRestaurantsLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AboutLazyRoute,
  AddRestaurantLazyRoute,
  LoginLazyRoute,
  CompaniesCompnayIdAddRestaurantLazyRoute,
  CompaniesCompnayIdHomeLazyRoute,
  CompaniesCompnayIdRestaurantsLazyRoute,
])

/* prettier-ignore-end */
