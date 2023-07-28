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
import CommunityData from './components/Community/CommunityData';

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
      element={<CommunityData />}
     
    />
      <Route
      path="community/:id"
      element={<CommunityDetails />}
     
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
