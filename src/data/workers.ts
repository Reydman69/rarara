import { Worker } from '../types';

export const workers: Worker[] = [
  {
    id: 1,
    name: 'Максим Мочалов',
    role: 'Ведущий промышленный альпинист',
    experience: 8,
    specializations: ['Фасадные работы', 'Монтаж конструкций', 'Высотные инспекции'],
    certifications: ['Промышленный альпинизм 3 разряда', 'Работа на высоте'],
    image: 'https://i.postimg.cc/rFMdmCFC/J2-ROIIkz3-B4.jpg'
  },
  {
    id: 2,
    name: 'Максим Чмоня',
    role: 'Специалист по монтажным работам',
    experience: 5,
    specializations: ['Монтаж оборудования', 'Сварочные работы', 'Ремонт фасадов'],
    certifications: ['Промышленный альпинизм 2 разряда', 'Сварочные работы'],
    image: 'https://i.postimg.cc/W1w8HdRn/9-Zd-Gl-Fq3-Kn-I.jpg'
  },
  {
    id: 3,
    name: 'Александр Воронюк',
    role: 'Специалист по очистке фасадов',
    experience: 4,
    specializations: ['Мойка окон', 'Очистка фасадов', 'Покрасочные работы'],
    certifications: ['Промышленный альпинизм 2 разряда'],
    image: 'https://i.postimg.cc/28k6mk20/8ib-Yk6o-Af-SU-1.jpg'
  }
 
];