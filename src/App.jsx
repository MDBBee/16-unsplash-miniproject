import Gallery from './Gallery';
import SearchForm from './SearchForm';
import ThemeToggle from './ThemeToggle';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <main>
      <ToastContainer position="top-center" />
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
