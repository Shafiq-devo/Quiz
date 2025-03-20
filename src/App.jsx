import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import { lazy,Suspense } from 'react';
import First from './components/First'
// import Header from './components/Header'
import Quiz from './components/Quiz';

const Header= lazy(()=>import('./components/Header'));

const router =createBrowserRouter(
   [{ path:'/',element: <First/>  },
      { path:'/header',element:  <Suspense fallback={<p>Loadingassa...</p>}>
      <Header />
    </Suspense> },   
      { path:'/quiz',element:   <Suspense fallback={<p>Loading...</p>}>
      <Quiz />
    </Suspense>  }
   ]

)

function App() {
   return <RouterProvider router={router} />
}

export default App;
