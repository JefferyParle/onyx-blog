import { ThemeProvider } from './providers/theme-provider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '@/routes';
import './index.css';

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
