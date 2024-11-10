import { BsBrightnessHigh } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { useGlobalContext } from './context';

function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsBrightnessHigh className="toggle-icon" />
        ) : (
          <MdDarkMode className="toggle-icon" />
        )}
      </button>
    </section>
  );
}
export default ThemeToggle;
