import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://i.postimg.cc/L50hyK2R/saint-petersburg-einkehr-sky-neva.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Профессиональные высотные работы в Санкт-Петербурге
          </h1>
          <p className="text-xl mb-8">
            Выполняем все виды высотных работ с гарантией качества и безопасности.
            Команда опытных промышленных альпинистов готова решить задачи любой
            сложности.
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center transition-colors duration-300"
            >
              Заказать работы
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#services"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Наши услуги
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}