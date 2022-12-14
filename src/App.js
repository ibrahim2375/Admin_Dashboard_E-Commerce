import { useEffect, useState } from 'react';
// router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
//components
import Layouts from './components/Layout';
import CreateProduct from './pages/CreateProduct';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Users from './pages/Users';
import Orders from './pages/Orders';
import UpdateProduct from './pages/UpdateProduct';
import UpdateUser from './pages/UpdateUser';
import Login from './pages/Login'
import OrderDetailes from './pages/OrderDetailes'
import NotFound from './pages/404/NotFound';
import CalculateSales from './pages/CalculateSales';
//redux
import { useSelector, useDispatch } from 'react-redux'
import * as Actions from './Redux/actions/Actions'
//api request
import { public_request } from './util/requestMethods'
function App() {
  const dispatch = useDispatch();
  const admin = useSelector(state => state.admin_data.admin_state);
  const [latestOrders, setLatestOrders] = useState([])
  const checkAdminAuth = async () => {
    await public_request.get('/current-admin')
      .then(res => {
        if (res.data === 'no admin') {
          dispatch(Actions.get_admin(null, false))
        }
      }).catch(err => {
        if (err) {
          dispatch(Actions.get_admin(null, false))
        }
      })
  }
  //calculate total paied money from all orders
  useEffect(() => {
    const getLatestOrders = async () => {
      await public_request.get('/orders/get')
        .then(res => {
          setLatestOrders(res?.data)
        }).catch(err => console.log(err))
    }
    getLatestOrders()

  }, [])
  useEffect(() => {
    checkAdminAuth()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={!admin ? <Login /> : <Navigate to='/dashboard' replace />} />
        <Route path='/dashboard' element={admin ? <Layouts><Dashboard latestOrders={latestOrders}/></Layouts> : <Navigate to='/' replace />} />
        <Route path='/users' element={admin ? <Layouts><Users /></Layouts> : <Navigate to='/' replace />} />
        <Route path='/orders' element={admin ? <Layouts><Orders /></Layouts> : <Navigate to='/' replace />} />
        <Route path='/order/:id' element={admin ? <Layouts><OrderDetailes /></Layouts> : <Navigate to='/' replace />} />
        <Route path='/products' element={admin ? <Layouts><Products /></Layouts> : <Navigate to='/' replace />} />
        <Route path='/create-product' element={admin ? <Layouts><CreateProduct /></Layouts> : <Navigate to='/' replace />} />
        <Route path='/calc-sales' element={admin ? <Layouts><CalculateSales orders={latestOrders} /></Layouts> : <Navigate to='/' replace />} />
        <Route path='/update-product/:id' element={admin ? <Layouts><UpdateProduct /></Layouts> : <Navigate to='/' replace />} />
        <Route path='/update-user/:id' element={admin ? <Layouts><UpdateUser /></Layouts> : <Navigate to='/' replace />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
