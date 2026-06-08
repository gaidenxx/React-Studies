import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetails from './pages/ProductDetails';

// Defining routes with jsx codes
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>}/>
//     <Route path='/products' element={<ProductsPage/>}/>
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions)
// ---


// Defining routes with js
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: '', 
        element: (<HomePage/>)
      },
      { path: '/products', 
        element: (<ProductsPage/>),
      },
      {
        path: '/products/:productId',
        element: <ProductDetails/>
      }
    ]
  },
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
