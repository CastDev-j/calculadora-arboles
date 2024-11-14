import { useState, useEffect } from 'preact/hooks';

const ToggleDarkMode = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Asegúrate de que el código se ejecute solo en el navegador
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;

      // Aplicar el tema guardado en el DOM antes de renderizar
      if (storedTheme) {
        document.documentElement.classList.add(storedTheme); // Agregar el tema al DOM
        setTheme(storedTheme); // Establecer el estado
      } else {
        document.documentElement.classList.add('light'); // Establecer modo claro por defecto
        setTheme('light');
      }
    }
  }, []);

  useEffect(() => {
    // Guardar el tema en localStorage y aplicar el tema en el DOM
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);

      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    // Cambiar el tema entre 'light' y 'dark'
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      id='toggleDarkMode'
      class='relative rounded-md border border-border p-1.5 transition-all hover:bg-border'
      onClick={toggleTheme}
    >
      <span class='sr-only'>Dark Theme</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        viewBox='0 0 24 24'
        class='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:hidden dark:-rotate-90 dark:scale-0'
      >
        <path
          fill='currentColor'
          d='M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15m0 1q-1.671 0-2.836-1.164T8 12q0-1.671 1.164-2.836T12 8q1.671 0 2.836 1.164T16 12q0 1.671-1.164 2.836T12 16m-7-3.5H1.5v-1H5zm17.5 0H19v-1h3.5zM11.5 5V1.5h1V5zm0 17.5V19h1v3.5zM6.746 7.404l-2.16-2.098l.695-.744l2.111 2.134zM18.72 19.438l-2.117-2.14l.652-.702l2.16 2.098zM16.596 6.746l2.098-2.16l.744.695l-2.134 2.111zM4.562 18.72l2.14-2.117l.663.652l-2.078 2.179zM12 12'
        />
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        viewBox='0 0 24 24'
        class='hidden h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:block dark:rotate-0 dark:scale-100'
      >
        <path
          fill='currentColor'
          d='M12.058 20q-3.334 0-5.667-2.333Q4.058 15.333 4.058 12q0-3.038 1.98-5.27Q8.02 4.5 10.942 4.097q.081 0 .159.006t.153.017q-.506.706-.801 1.57q-.295.865-.295 1.811q0 2.667 1.866 4.533q1.867 1.867 4.534 1.867q.952 0 1.813-.295q.862-.295 1.548-.801q.012.075.018.153q.005.078.005.158q-.384 2.923-2.615 4.904T12.057 20'
        />
      </svg>
    </button>
  );
};

export default ToggleDarkMode;
