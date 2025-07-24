import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold text-orange-500 mb-2">About Page</h1>
        <h2 className="text-lg text-gray-700 mb-6">Welcome to the About Page</h2>

        <UserClass name={"Shubham Rana"} />
      </div>
    </div>
  );
};

export default About;
