export const productList: Products[] = [
  {
    id: 1,
    name: 'Lavandina',
    price: 10,
    descripcion: 'Limpieza',
  },
  {
    id: 2,
    name: 'Detergente',
    price: 101,
    descripcion: 'botella verde',
  },
  {
    id: 3,
    name: 'Jabon',
    price: 50,
    descripcion: 'Jabonera',
  },
  {
    id: 3,
    name: 'Quita Grasa',
    price: 101,
    descripcion: 'saca toda la grasa',
  },
  {
    id: 5,
    name: 'Perfume',
    price: 50,
    descripcion: 'perfuma toda la vida',
  },
];

export interface Products {
  id: number | string;
  name: string;
  price: number;
  descripcion: string;
}
