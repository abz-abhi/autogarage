function P1Content(params) {
  return (
    <div className="absolute bg-yellow-500 2xl:-ml-[55rem] lg:-ml-[25rem]  w-fit ">
      <div className="flex flex-col gap-6">
        <h1 className="text-white text-[60px] 2xl:text-[60px] xl:text-[55px] lg:text-[50px] md:text-[45px] sm:text-[40px] xs:text-[30px]  leading-[4rem]">
          EXPERT CAR REPAIR <br />
          SERVICE CERTIFIED
        </h1>
        <p className="text-[18px] text-white  ">
          We offering well-trained machanics and exeellent coustomer <br />
          services,all at competitive prices of vehicle repair at your home
          <br />
          or place of work.
        </p>
      </div>
      <div className=" flex gap-8 mt-8">
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
  );
}

export default P1Content;
