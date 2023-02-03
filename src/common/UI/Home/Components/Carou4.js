import { Carousel } from "antd";
const contentStyle = {
  height: "30rem",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const App = () => (
  <div className="w-full h-[500px]  lg:h-[750px]">
    <Carousel autoplay effect="fade" duration="500ms" >
      <div className="">
        <div className="flex bg-[url('/assets/images/main-slider/7.jpg')] bg-cover bg-no-repeat bg-center h-screen items-center justify-center bg-gray-400  text-white">
          <div class="mover mr-auto place-self-center pl-10 sm:pl-20 md:pl-[12rem]">
            <h1 class=" mb-5 font-bold tracking-wide leading-none text-xl md:text-2xl text-white ease-in duration-700">
              ICONIC PRODUCTS &
            </h1>
            <h1 class=" mb-4 font-body font-extrabold tracking-wider leading-none text-4xl md:text-5xl lg:text-7xl text-white ease-in duration-700">
              Innovative <br /> Solutions
            </h1>

            <a
              href="#"
              class="inline-flex items-center justify-center px-10 py-3 mt-6 text-lg font-medium text-center border-2 border-gray-300 hover:bg-shipy hover:text-white hover:border-shipy focus:ring-4 text-white duration-500"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="flex bg-[url('/assets/images/main-slider/8.jpg')] bg-cover bg-no-repeat bg-center h-screen items-center justify-center bg-gray-400  text-white">
          <div class="mover mr-auto place-self-center pl-10 sm:pl-20 md:pl-[12rem]">
            <h1 class=" mb-5 font-bold tracking-wide leading-none text-xl md:text-2xl text-white ease-in duration-700">
              ICONIC PRODUCTS &
            </h1>
            <h1 class=" mb-4 font-body font-extrabold tracking-wider leading-none text-4xl md:text-5xl lg:text-7xl text-white ease-in duration-700">
              Innovative <br /> Solutions
            </h1>

            <a
              href="#"
              class="inline-flex items-center justify-center px-10 py-3 mt-6 text-lg font-medium text-center border-2 border-gray-300 hover:bg-shipy hover:text-white hover:border-shipy focus:ring-4 text-white duration-500"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="flex bg-[url('/assets/images/main-slider/78.jpg')] bg-cover bg-no-repeat bg-center h-screen items-center justify-center bg-gray-400  text-white">
          <div class="mover mr-auto place-self-center pl-10 sm:pl-20 md:pl-[12rem]">
            <h1 class=" mb-5 font-bold tracking-wide leading-none text-xl md:text-2xl text-white ease-in duration-700">
              ICONIC PRODUCTS &
            </h1>
            <h1 class=" mb-4 font-body font-extrabold tracking-wider leading-none text-4xl md:text-5xl lg:text-7xl text-white ease-in duration-700">
              Innovative <br /> Solutions
            </h1>

            <a
              href="#"
              class="inline-flex items-center justify-center px-10 py-3 mt-6 text-lg font-medium text-center border-2 border-gray-300 hover:bg-shipy hover:text-white hover:border-shipy focus:ring-4 text-white duration-500"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="flex bg-[url('/assets/images/main-slider/7.jpg')] bg-cover bg-no-repeat bg-center h-screen items-center justify-center bg-gray-400  text-white">
          <div class="mover mr-auto place-self-center pl-10 sm:pl-20 md:pl-[12rem]">
            <h1 class=" mb-5 font-bold tracking-wide leading-none text-xl md:text-2xl text-white ease-in duration-700">
              ICONIC PRODUCTS &
            </h1>
            <h1 class=" mb-4 font-body font-extrabold tracking-wider leading-none text-4xl md:text-5xl lg:text-7xl text-white ease-in duration-700">
              Innovative <br /> Solutions
            </h1>

            <a
              href="#"
              class="inline-flex items-center justify-center px-10 py-3 mt-6 text-lg font-medium text-center border-2 border-gray-300 hover:bg-shipy hover:text-white hover:border-shipy focus:ring-4 text-white duration-500"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>
    </Carousel>
  </div>
);
export default App;
