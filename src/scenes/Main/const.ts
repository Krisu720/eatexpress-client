export interface products {
    name: string;
    img: string;
    deliveryTime: string;
    rating: number;
    deliveryCost: number;
  };
  
 export const Products: products[] = [
    {
      name: "Yo! Suchi",
      img: "https://via.placeholder.com/150",
      deliveryTime: '45-60min',
      rating: 4.6,
      deliveryCost: 6
    },
    {
      name: "Pizza hut",
      img: "https://via.placeholder.com/150",
      deliveryTime: '30-45min',
      rating: 3.9,
      deliveryCost: 9.99
    },
    {
      name: "Caserolle",
      img: "https://via.placeholder.com/150",
      deliveryTime: '30-45min',
      rating: 5.0,
      deliveryCost: 15.99
    },
    {
      name: "Strefa Pizzy",
      img: "https://via.placeholder.com/150",
      deliveryTime: '60-75min',
      rating: 3.2,
      deliveryCost: 4
    },
    {
      name: "Kebab Kebsik",
      img: "https://via.placeholder.com/150",
      deliveryTime: '60-90min',
      rating: 6,
      deliveryCost: 5
    },
  ];