import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Products from '../pages/Products';
import Subsidiaries from '../pages/Subsidiaries';
import ContactUs from '../pages/ContactUs';
import NotFound from '../pages/NotFound';
import Location from '../pages/Location';

const Routes = () => {

    const elements = useRoutes([
        
        {
            children: [
                {
                    path:'/',
                    element:<Home />
                }
            ]
        },
        {
            children:[
                {
                    path:'/aboutus',
                    element:<AboutUs />
                }
            ]
        },
        {
            children:[
                {
                    path:'/products',
                    element:<Products />
                }
            ]
        },
        {
            children:[
                {
                    path:'/subsidiaries',
                    element:<Subsidiaries />
                }
            ]
        },
        {
            children:[
                {
                    path:'/contactus',
                    element:<ContactUs />
                }
            ]
        },
        {
            children:[
                {
                    path:'/location',
                    element:<Location />
                }
            ]
        },
        {
            children:[
                {
                    path:'*',
                    element:<NotFound />
                }
            ]
        }
    ])


  return (
    elements
  )
}

export default Routes