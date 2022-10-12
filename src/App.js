import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Layout/Main';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import QuizDetails from './components/QuizDetails/QuizDetails';
import productsAndCartLoader from './components/UTools/UTools';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          // loader: () => fetch('products.json'),
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path: '/Statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          // loader: productsAndCartLoader,
          element: <Statistics></Statistics>
        },
        
        {
          path: 'Blog',
          element: <Blog></Blog>
        },
        {
          path: '/quizdetails/:id',
          loader: async ({ params }) => {
            const { id } = params;
            return fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
          },
          element: <QuizDetails></QuizDetails>
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;