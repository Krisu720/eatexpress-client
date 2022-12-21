import React, { useEffect, useState } from "react";
import axios from "axios";

interface products {
  _id: string;
  name: string;
  openingTime?: string;
  img: string;
  deliveryTime: string;
  rating: number;
  deliveryCost: number;
  products?: section[];
}

 interface section {
  _id: string;
  name: string;
  dishes: dish[];
}

interface dish {
  _id: string;
  img: string;
  name: string;
  price: number;
}

const usePublicFetch = (link: string) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios.get(link).then((res) => {
      setData(res.data);
    });

  }, []);

  return data;
};

export default usePublicFetch;
