import { Facebook, Instagram, Mail, MapPin, Phone, Skull} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ВысотаПро</h3>
            <p className="text-gray-400">
              Профессиональные высотные работы в Санкт-Петербурге. Качество,
              надежность, безопасность.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <a
                href="tel:+79110145335"
                className="flex items-center text-gray-400 hover:text-white"
              >
                <Phone className="w-5 h-5 mr-2" />
                +7 (911) 014 53 35
              </a>
              <a
                href="mailto:charyev-75@mail.ru"
                className="flex items-center text-gray-400 hover:text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                charyev-75@mail.ru
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5  h-5 mr-2" />
                Санкт-Петербург, ул. Руставели, 123
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a  className="text-gray-400 hover:text-white">
                  Мойка окон и фасадов
                </a>
              </li>
              <li>
                <a  className="text-gray-400 hover:text-white">
                  Монтаж рекламы
                </a>
              </li>
              <li>
                <a  className="text-gray-400 hover:text-white">
                  Ремонт фасадов
                </a>
              </li>
              <li>
                <a  className="text-gray-400 hover:text-white">
                  Монтаж кондиционеров
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a
                href="https://t.me/Hmelnoi"
                className="text-gray-400 hover:text-white"
                aria-label="Skull"
              >
                <Skull className="w-6 h-6" />
              </a >
             
            
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ВысотаПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}