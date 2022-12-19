export interface products {
  id: string;
  name: string;
  openingTime?: string;
  img: string;
  deliveryTime: string;
  rating: number;
  deliveryCost: number;
  products?: section[];
}

interface section {
  id: string;
  name: string;
  dishes: dish[];
}

interface dish {
  id: string;
  img: string;
  name: string;
  price: number;
}

export const singleproductconst: products = {
  id: "32457457451243",
  name: "Pizza hut",
  openingTime: 'pn 8:00-13:00',
  img: "https://pliki.horecatrends.pl/i/01/40/02/014002_r0_940.jpg",
  deliveryTime: "30-45min",
  rating: 3.9,
  deliveryCost: 9.99,
  products: [
    {
      id: 's1',
      name: "Z myślą o Tobie",
      dishes: [
        {
          id: "z1",
          img: "https://d1ralsognjng37.cloudfront.net/300166c6-59ec-4369-bc87-953dc9061cb8.jpeg",
          name: "Sałatka z kurczaka",
          price: 41.0,
        },
      ],
    },
    {
      id: 's2',
      name: "PIZZA Z LAY'S (Duża)",
      dishes: [
        {
          id: "p1",
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/8f58798a54b12ee00cfe0625d293e5a6/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
          name: "PIZZA MARGHERITA Z LAY'S",
          price: 53.98,
        },
        {
          id: "p2",
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/1eee9fadfc63afc94077a2c0c8efe375/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
          name: "PIZZA PEPERONI Z LAY'S",
          price: 63.98,
        },
        {
          id: "p3",
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/cdc78f40f287f4ac87ef07c875765522/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
          name: "PIZZA KURCZAK Z LAY'S",
          price: 63.98,
        },
        {
          id: "p4",
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/86749b57dbc698bbf9158fb981e2b047/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
          name: "PIZZA CLASSICA Z LAY'S",
          price: 63.98,
        },
        {
          id: "p5",
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/c017bb752aa8950edee328d5c99a45d9/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
          name: "PIZZA AMERICANA Z LAY'S",
          price: 63.98,
        },
        {
          id: "p6",
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/d5bffde3c1f5bcc3455c591594cdaeee/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
          name: "PIZZA WIEJSKA Z LAY'S",
          price: 69.98,
        },
        {
          id: "p7",
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/92f14fdac1b5c930c680f4016eb1f812/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
          name: "PIZZA KEBAB Z LAY'S",
          price: 69.98,
        },
      ],
    },
    {
      id: 's3',
      name: "BOXY",
      dishes: [
        {
          id: "b1",
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/f27303ce40562b0a3b12e344f800b4d3/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
          name: "TWÓJ BOX",
          price: 31.99,
        },
        {
          id: "b2",
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/4517ee5bd47700478bc16368415d50be/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
          name: "TWÓJ BOX - DOWOLNY SMAK PIZZY",
          price: 36.99,
        },
        {
          id: "b2",
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/a8845d7d0894436780bfb4fc8e289aaf/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
          name: "WASZ BOX",
          price: 41.99,
        },
        {
          id: "b2",
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/bd6f712f7dd4b22f25a262f1db56032e/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
          name: "WASZ BOX - DOWOLNY SMAK PIZZY",
          price: 46.99,
        },
      ],
    },
  ],
}

 const Products: products[] = [
  {
    id: "3584569462334",
    name: "Caserolle",
    img: "https://kolorowegarnki.pl/wp-content/uploads/2021/02/zapiekanka-scaled.jpg",
    deliveryTime: "30-45min",
    rating: 5.0,
    deliveryCost: 15.99,
    products: [
      {
        id: 's1',
        name: "Z myślą o Tobie",
        dishes: [
          {
            id: "z1",
            img: "https://d1ralsognjng37.cloudfront.net/300166c6-59ec-4369-bc87-953dc9061cb8.jpeg",
            name: "Sałatka z kurczaka",
            price: 41.0,
          },
        ],
      },
      {
        id: 's2',
        name: "Przekąski",
        dishes: [
          {
            id: "p1",
            img: "",
            name: "Sałatka z kurczaka",
            price: 41.0,
          },
        ],
      },
      {
        id: 's3',
        name: "Sałatki",
        dishes: [
          {
            id: "s1",
            img: "",
            name: "Sałatka z kurczaka",
            price: 41.0,
          },
        ],
      },
    ],
  },
  {
    id: "1512312546216",
    name: "Yo! Suchi",
    img: "https://www.sushifriends.com.pl/images/rodzaje-sushi-sushi-friends.jpeg",
    deliveryTime: "45-60min",
    rating: 4.6,
    deliveryCost: 6,
  },
  {
    id: "32457457451243",
    name: "Pizza hut",
    img: "https://pliki.horecatrends.pl/i/01/40/02/014002_r0_940.jpg",
    deliveryTime: "30-45min",
    rating: 3.9,
    deliveryCost: 9.99,
  },
  {
    id: "2363287347341",
    name: "Strefa Pizzy",
    img: "https://cdn.galleries.smcloud.net/t/galleries/gf-cgdk-p5yy-aE4f_pizza-pepperoni-z-jalapeno-to-jadl-joe-biden-z-zolnierzami-w-rzeszowie-1920x1080-nocrop.jpg",
    deliveryTime: "60-75min",
    rating: 3.2,
    deliveryCost: 4,
  },
  {
    id: "67096784563462",
    name: "Kebab Kebsik",
    img: "https://api.broilking.pl/api/media/c/public/fp/images/przepisy/przepis-na-kebab-z-grilla/przepis-na-kebab-z-grilla-01.jpg",
    deliveryTime: "60-90min",
    rating: 6,
    deliveryCost: 5,
  },
];
