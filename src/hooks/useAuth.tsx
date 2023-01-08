import React, { useDebugValue } from "react";
import create from "zustand";
import {persist} from 'zustand/middleware'


interface Order {
  address: {
    name: string;
    street: string;
    city: string;
    number: string;
  };
  products: [
    {
      _id: string;
      quantity: number;
    }
  ];
  status: string;
  method: string;
  _id: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
}


interface User {
  address: {
    favourite: {
      name: string;
      street: string;
      city: string;
      number: string;
    };
    other: [
      {
        name: string;
        street: string;
        city: string;
        number: string;
      }
    ];
  };
  createdAt: string;
  email: string;
  img: string;
  name: string;
  orders: Order[];
  phone: string;
  role: string;
  surname: string;
  updatedAt: string;
  token: string;
  __v: number;
  _id: string;
}

interface AuthStore {
  user: User | null;
  setUser: (val: User) => void;
  logoutUser: () => void;
}


export const useAuthStore = create(
  persist<AuthStore>(
  (set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logoutUser: () => {
    set({ user: null });
    location.reload();
  },
})));

const useAuth = () => {
  const { user } = useAuthStore();
  // useDebugValue(user, user ? user.name : "no user");
  return useAuthStore();
};

export default useAuth;
