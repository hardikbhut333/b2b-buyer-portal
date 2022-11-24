import {
  lazy,
} from 'react'

const OrderList = lazy(() => import('../../pages/order/MyOrder'))

const CompanyOrderList = lazy(() => import('../../pages/order/CompanyOrder'))

const Dashboard = lazy(() => import('../../pages/dashboard/Dashboard'))

const OrderDetail = lazy(() => import('../../pages/orderDetail/OrderDetail'))

const InvoiceDetail = lazy(() => import('../../pages/invoiceDetail/InvoiceDetail'))

const Usermanagement = lazy(() => import('../../pages/usermanagement/Usermanagement'))

const AddressList = lazy(() => import('../../pages/address/Address'))

type OrderItem = typeof OrderList

export interface RouteItem {
  path: string,
  name: string,
  component: OrderItem,
  isMenuItem: boolean,
  wsKey: string,
}

const routes: RouteItem[] = [
  {
    path: '/orders',
    name: 'My Orders',
    wsKey: 'router-orders',
    isMenuItem: true,
    component: OrderList,
  },
  {
    path: '/company-orders',
    name: 'Company Orders',
    wsKey: 'router-orders',
    isMenuItem: true,
    component: CompanyOrderList,
  },
  {
    path: '/orderDetail/:id',
    name: 'Order Details',
    wsKey: 'router-orders',
    isMenuItem: false,
    component: OrderDetail,
  },
  {
    path: '/invoiceDetail/:id',
    name: 'Invoice Details',
    wsKey: 'router-invoice',
    isMenuItem: false,
    component: InvoiceDetail,
  },
  {
    path: '/addresses',
    name: 'Addresses',
    wsKey: 'router-address',
    isMenuItem: true,
    component: AddressList,
  },
  {
    path: '/user-management',
    name: 'User management',
    wsKey: 'router-userManagement',
    isMenuItem: true,
    component: Usermanagement,
  },
  // {
  //   path: '/',
  //   name: 'seleRep',
  //   wsKey: 'router-seleRep',
  //   isMenuItem: true,
  //   component: SeleRep,
  // },
  {
    path: '/recently-viewed',
    name: 'Recently Viewed',
    wsKey: 'router-orders',
    isMenuItem: true,
    component: Dashboard,
  },
  {
    path: '/account-settings',
    name: 'Account Settings',
    wsKey: 'router-orders',
    isMenuItem: true,
    component: Dashboard,
  },
  {
    path: '/',
    name: 'Dashboard',
    wsKey: 'router-orders',
    isMenuItem: true,
    component: Dashboard,
  },
]

export {
  routes,
}
