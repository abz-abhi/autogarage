function App() {
  return (
    <div className="h-screen w-screen bg-red-500">
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
              We offering well-trained machanics and exeellent coustomer <br />
              services,all at competitive prices of vehicle repair at your home{" "}
              <br />
              or place of work.
            </p>
          </div>
          <div className=" flex gap-8 mt-4">
            <button className="bg-blue-500 text-white w-60">
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
      <div className="bg-blue-600 w-screen h-[166px] flex items-center justify-around justify-between">
        {/* box1 */}
        <div className="bg-yellow-500 h-28 w-[30rem] flex">
          <img src="../public/best-prices.png" alt="" />
          <div className="pl-10">
            <h1>BEST PRICES</h1>
            <p>
              All mechanical repairs and services <br /> are available at
              affordable rates
            </p>
          </div>
        </div>
        {/* box2 */}
        <div className="bg-red-500 h-28 w-[30rem]  flex">
          <img className="h-24" src="../public/guarantee.png" alt="" />
          <div className="pl-10">
            <h1>100% GUARANTEE</h1>
            <p>
              All of our rapairs and services come with a guarantee period
            </p>
          </div>
        </div>
        {/* box3 */}
        <div className="bg-yellow-500 h-28 w-[30rem]   flex">
          <img className=""  src="../public/certified.png" alt="" />
          <div className="pl-10">
            <h1>CERTIFIED MECHANICS</h1>
            <p>
              All of our mechanics are qualified and are regularly trained
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
