import Testimonial from "./components/Testimonial.jsx";
import reviews from "./data";

const App = () => {
  return (
    <div className="overflow-x-hidden flex flex-col w-[100vw] min-h-screen justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonial</h1>
        <div className="bg-violet-400 h-[4px] w-1/5 m-3 mx-auto"></div>
        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
