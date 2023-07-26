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

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
    <Route index element={<Home />} />
    <Route path="whyus" element={<WhyUs />} />
  
    <Route
      path="products"
      element={<Products />}
     
    />
    
    <Route
      path="support"
      element={<Support />}
     
    />
      <Route
      path="profile"
      element={<Profile />}
     
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
