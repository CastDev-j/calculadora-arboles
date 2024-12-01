import { useState } from 'preact/hooks';

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex-none text-[1.05rem] font-medium hover:text-foreground/75 transition duration-200 ease-in-out"
        aria-label="Nav Menu Item"
      >
        Calculadora
      </button>
      <div
        className={`absolute mt-2 -ml-12 w-48 bg-white dark:bg-zinc-900 border dark:border-gray-900 rounded-md shadow-lg z-10 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none ease-in'
        }`}
      >
        <a
          href="/calculadora-v1"
          className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-zinc-800 rounded-md transition duration-200"
        >
          Version 1
        </a>
        <a
          href="/calculadora-v2"
          className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-zinc-800 rounded-md transition duration-200"
        >
          Version 2
        </a>
      </div>
    </div>
  );
}
