import Login from "./Login";
import Register from "./Register";
import DefaultMargin from "../../defaultMargin";

const index: React.FC = () => {
  return (
    <DefaultMargin>
      <div className="xl:max-w-[1200px] w-full h-[calc(100vh-110px)]">
        <div className="w-full h-full md:flex justify-center items-center">
          <Login />
          <div className="w-0.5 h-2/3 bg-black relative hidden md:block">
            <div className="absolute bg-white p-2 border-2 hidden md:block border-black rounded-full top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
              lub
            </div>
          </div>
          <Register />
        </div>
      </div>
    </DefaultMargin>
  );
};

export default index;
