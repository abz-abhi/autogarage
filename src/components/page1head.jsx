function Page1Head() {
  return (
    <div className="bg-green-500">
      <div className=" h-full w-screen sm:flex bg-red-500">
        <div className="relative top-0 left-0 w-full h-full flex sm:min-w-[640px] md:min-w-[768px]  ">
          <div className=" h-full w-full object-contain">
            <img
              className="object-contain h-full w-full"
              src="../public/pexels-artem-podrez-8986100 1.png"
              alt=""
            />
          </div>
          <div className="absolute inset-0  bg-gradient-to-tr from-black to-transparent"></div>
        </div>
      </div>
      <div className="absolute top-96 left-36 bg-yellow-500 sm:relative max-w-screen-sm">
        <div className="flex flex-col gap-6">
          <h1 className="text-white text-[50px] leading-[4rem]">
            EXPERT CAR REPAIR <br />
            SERVICE CERTIFIED
          </h1>
          <p className="text-[15px] text-white  ">
            We offering well-trained machanics and exeellent coustomer <br />
            services,all at competitive prices of vehicle repair at your home
            <br />
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
  );
}
export default Page1Head;
