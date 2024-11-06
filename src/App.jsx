import Infobox from "./components/headfooter";
import Services from "./components/services";

function App() {
  return (
    <div>
      {/* page 1 */}
      <div>
        {/* head baground image  */}
        <div className="relative">
          <img
            className="h-[52rem] w-screen object-cover"
            src="../public/pexels-artem-podrez-8986100 1.png"
            alt=""
          />
          <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-transparent"></div>
          {/* discription box container */}
          <div className="bg  absolute top-80 left-40 ">
            <div className="flex flex-col gap-6">
              <h1 className="text-white text-[50px] leading-[4rem]">
                EXPERT CAR REPAIR <br />
                SERVICE CERTIFIED
              </h1>
              <p className="text-[15px] text-white ">
                We offering well-trained machanics and exeellent coustomer{" "}
                <br />
                services,all at competitive prices of vehicle repair at your
                home <br />
                or place of work.
              </p>
            </div>
            <div className=" flex gap-8 mt-4">
              <button className="bg-blue-700 text-white w-60">
                MAKE APPOINTMENT
              </button>
              <div className="flex items-center">
                <img className="h-7" src="../public/phone-call 1.png" alt="" />
                <div className=" flex flex-col pl-2 w-56 -space-y-2 items-center text-white">
                  <h1 className="text-[27px]">123 456 678 0</h1>
                  <h1 className="text-[10px]">24-HOUR EMERGENCY ASSISTANCE</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* head footer */}
        <div className="bg-blue-800  h-[166px] flex items-center justify-around">
          <Infobox
            imgSrc="../public/best-prices.png"
            title="BEST PRICES"
            description="All mechanical repairs and services are available at affordable rates"
          />
          <Infobox
            imgSrc="../public/guarantee.png"
            title="100% GUARANTEE"
            description="All of our repairs and services come with a guarantee period"
          />
          <Infobox
            imgSrc="../public/certified.png"
            title="CERTIFIED MECHANICS"
            description="All of our mechanics are qualified and are regularly trained"
          />
        </div>
      </div>
      {/* page 2 */}
      <div className="h-screen w-full flex justify-center items-center">
        <div className="bg w-[100rem] flex gap-40">
          {/* left page */}
          <div>
            <img
              className="h-[42rem]"
              src="../public/pexels-artem-podrez-8985464 1.png"
              alt=""
            />
          </div>
          {/* right side */}
          <div className="space-y-20">
            <div className="space-y-2">
              <div className="flex gap-4">
                <img src="../public/separator-carsblue.svg" alt="" />
                <h1 className="text-blue-600">WHO WE ARE</h1>
              </div>
              <div>
                <h1 className="text-[40px]">
                  CAR SERVICE REPAIRS AND <br /> MAINTENANCE CERTIFIED
                </h1>
                <p className=" mt-3 w-[28rem]">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
            <img
              className="w-[43rem]  "
              src="../public/pexels-artem-podrez-8986037 1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* page 3 */}
      <div className="bg-red-500 ">
        <div className="bg-green-500">
          <div className="flex gap-2 ">
            <img src="../public/separator-carsblue.svg" alt="" />
            <h1>WHAT WE OFFERS</h1>
          </div>
          <h1 className="text-[22px]">EXPLORE OUR SERVICES</h1>
        </div>
        <div className="flex gap-8 bg-pink-500 justify-center">
          <Services
            imageSrc="../public/pexels-artem-podrez-8985915 1.png"
            title="OIL & FLUIDS SERVICES"
          />
          <Services
            imageSrc="../public/pexels-artem-podrez-8985915 1 (1).png"
            title="WHEEL BALANCING SERVICE"
          />
          <Services
            imageSrc="../public/pexels-artem-podrez-8985915 1 (2).png"
            title="OVERHAUL SERVICE"
          />
        </div>
      </div>
    </div>
  );
}
export default App;
