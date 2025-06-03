import { workers } from '../data/workers';

export default function WorkerProfiles() {
  return (
    <section id="workers" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workers.map((worker) => (
            <div
              key={worker.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={worker.image}
                alt={worker.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{worker.name}</h3>
                <p className="text-blue-600 mb-2">{worker.role}</p>
                <p className="text-gray-600 mb-4">
                  Опыт работы: {worker.experience} лет
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Специализация:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {worker.specializations.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Сертификаты:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {worker.certifications.map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}