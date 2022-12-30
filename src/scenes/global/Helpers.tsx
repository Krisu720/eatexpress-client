import React from "react";
import useAuth, { useAuthStore } from "../../hooks/useAuth";
const Helpers = () => {

    const {user} = useAuthStore()
    const {setUser} = useAuthStore()
    const hook  = useAuth()


  return <div className="flex gap-2">
    <button className="bg-gray-500 text-white px-2 py-1" onClick={()=>console.log(user)}>showAuth</button>
    <button className="bg-gray-500 text-white px-2 py-1" onClick={()=>setUser({name: 'Krzytof',surname: 'wilk'})}>setAuth</button>
    <button className="bg-gray-500 text-white px-2 py-1" >AuthHook</button>
  </div>;
};

export default Helpers;
