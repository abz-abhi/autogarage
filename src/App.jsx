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
      <div className="h-screen bg-[rgb(243,243,244)] w-full flex justify-center items-center">
        <div className="bg w-[100rem] mt-44 flex gap-40">
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
      <div className="bg-[rgb(243,243,244)] flex justify-center ">
        <div className="flex flex-col items-center mt-36 ">
          {/* head container */}
          <div className=" mr-[61rem] ">
            <div className="flex gap-2 ">
              <img src="../public/separator-carsblue.svg" alt="" />
              <h1 className="text-[18px] text-blue-600">WHAT WE OFFERS</h1>
            </div>
            <h1 className="text-[33px]">EXPLORE OUR SERVICES</h1>
          </div>
          {/* service container */}
          <div className="flex gap-8 w-fit mt-8 justify-center">
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
          <button className="text-blue-600 text-[18px] h-12 w-[20rem] mt-10 pt-2 border border-blue-600">
            VIEW MORE SERVICE
          </button>
        </div>
      </div>
      {/* page 4 */}
      <div className="bg-[rgb(243,243,244)] flex h-screen w-full flex-col justify-center">
        <div className="pt-20">
          <div className="  flex justify-end items-center">
            {/* latest work  */}
            <div className="bg-white h-fit absolute right-[65rem]">
              <div className="space-y-2 ml-10 mt-10 h-[25rem] w-[28rem] ">
                <h1 className="flex gap-2 text-[20px]">
                  <img src="../public/separator-carsblue.svg" alt="" />
                  OUR LATEST WORK
                </h1>
                <h1 className="text-[35px] leading-tight">
                  SUBARU WRX STI <br /> PERFORMANCE PARTS
                </h1>
                <p className="w-[30rem]">
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the
                </p>
                <ul className="space-y-2 pt-5 text-[15px]">
                  <li className="flex gap-4">
                    <img src="../public/disc.svg" alt="" />
                    Make: Subaru Impreza
                  </li>
                  <li className="flex gap-4">
                    <img src="../public/disc.svg" alt="" />
                    Submodel: 4 doors 2.0L 5MT AWD (152 HP)
                  </li>
                  <li className="flex gap-4">
                    <img src="../public/disc.svg" alt="" />
                    Engine: 2000 cc turbo tipe EJ20.
                  </li>
                  <li className="flex gap-4">
                    <img src="../public/disc.svg" alt="" />
                    Color: Blue;
                  </li>
                </ul>
              </div>
              <div className="flex justify-center bg-blue-600 h-14 text-[20px]">
                <button>VIEW CASE STUDY</button>
              </div>
            </div>
            {/* car image  */}
            <div className=" h-[50rem] w-[85rem]">
              <img
                className="h-full w-full"
                src="../public/pexels-cottonbro-studio-4489734 2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* page 5 */}
      <div>
        <div>
          <div className="flex flex-col space-y-1">
            <h1 className="flex gap-4">
              <img src="../public/separator-carsblue.svg" alt="" />
              TESTIMONIALS
            </h1>
            <h1 className="text-[24px]">WHAT OUR CLIENTS SAYS</h1>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
export default App;
