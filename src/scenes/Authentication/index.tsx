import Login from "./Login";
import Register from "./Register";
import DefaultMargin from "../../DefaultMargin";

const index: React.FC = () => {
  return (
    <DefaultMargin>
      <div className="lg:h-[calc(100vh-110px)] flex flex-col lg:flex-row items-center gap-6">
        <Login />
        <div className="h-0.5 w-full bg-gray-500 lg:hidden"/>
        <Register />
      </div>
    </DefaultMargin>
  );
};

export default index;
