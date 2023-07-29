// src/App.jsx
import React from 'react';
import {  Link, Route, createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'
import WhyUs from './pages/WhyUs';
import Support from './pages/Support';
import Profile from './pages/Profile';
import Products from './pages/Products';
import Error from './components/Error'
import Community from './pages/Community';
import ProductDetails from './components/Products/ProductDetails';
import CommunityDetails from './components/Community/CommunityDetails';
import Faq from './components/Community/Faq'
import ShippingPolicy from './components/Support/ShippingPolicy';
import PrivacyPolicy from './components/Support/PrivacyPolicy';
import RefundPolicy from './components/Support/RefundPolicy';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
    <Route index element={<Home />} />
    <Route path="whyus" element={<WhyUs />} />
  
    <Route
      path="products"
      element={<Products />}
     
    />
      <Route
      path="products/:productId"
      element={<ProductDetails />}
     
    />
    <Route
      path="support"
      element={<Support />}
     
    />
      <Route
      path="profile"
      element={<Profile />}
     
    />
       <Route
      path="community"
      element={<Community />}
     
    />
      <Route
      path="community/:id"
      element={<CommunityDetails />}
     
    />
      <Route
      path="faq"
      element={<Faq />}
     
    />

<Route
      path="refund-policy"
      element={<RefundPolicy />}
     
    />   <Route
      path="privacy-policy"
      element={<PrivacyPolicy />}
     
    />   <Route
      path="shipping-policy"
      element={<ShippingPolicy />}
     
    />
      <Route path="*" element={<Error />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
