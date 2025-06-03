import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { clsx } from 'clsx';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-blue-600">
              ВысотаПро
            </a>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600">
              Услуги
            </a>
            <a href="#workers" className="text-gray-600 hover:text-blue-600">
              Наша команда
            </a>
            <a href="#gallery" className="text-gray-600 hover:text-blue-600">
              Галерея
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">
              Контакты
            </a>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="tel:+79110145335"
              className="flex items-center text-blue-600 hover:text-blue-700"
            >
              <Phone className="w-5 h-5 mr-2" />
              +7 (911) 014-53-35
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          'md:hidden absolute top-16 left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out',
          {
            'opacity-100 visible': isMenuOpen,
            'opacity-0 invisible': !isMenuOpen,
          }
        )}
      >
        <nav className="flex flex-col space-y-4 p-4">
          <a
            href="#services"
            className="text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Услуги
          </a>
          <a
            href="#workers"
            className="text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Наша команда
          </a>
          <a
            href="#gallery"
            className="text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Галерея
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Контакты
          </a>
          <a
            href="tel:+79110145335"
            className="flex items-center text-blue-600 hover:text-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone className="w-5 h-5 mr-2" />
            +7 (911) 014-53-35
          </a>
        </nav>
      </div>
    </header>
  );
}