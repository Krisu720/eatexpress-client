import { Axios } from "axios";
import React, { useRef,useState } from "react";
import axios from "../../axios";
import { useAuthStore } from "../../hooks/useAuth";
import Alert from "../global/components/Alert";
const Login: React.FC = () => {
  const { setUser } = useAuthStore();

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string | null>(null)

  const Login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/login", {
        email: email.current?.value,
        password: password.current?.value,
      });
      if (res.status === 200) {
        setUser(res.data);
      }
      console.log(res.data);
  } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="flex flex-col items-center w-full lg:w-1/2 my-6">
      <Alert error={error} setError={setError}/>
      <h1 className="font-semibold text-3xl">Zaloguj się</h1>
      <form className=" min-w-[300px] mt-10" onSubmit={(e) => Login(e)}>
        <p>Adres Email</p>
        <input
          type="text"
          ref={email}
          placeholder="example@example.com"
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
        />
        <div className="flex justify-between mt-5">
          <p>Hasło</p>
          <p className="text-purple-500 cursor-pointer hover:text-purple-800">
            Zapomniałeś hasła?
          </p>
        </div>
        <input
          type="password"
          ref={password}
          autoComplete="on"
          placeholder="*********"
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
        />
        <button
          type="submit"
          className="select-none bg-black py-4 text-white font-semibold px-4 mt-5 w-full rounded"
        >
          Zaloguj
        </button>
      </form>
    </div>
  );
};

export default Login;
