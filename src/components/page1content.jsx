function P1Content(params) {
  return (
    <div
      className="absolute bg-yellow-500 w-fit mr-[50rem] 
      xxs:space-y-1
      xs:space-y-1
      sm:space-y-3
      md:space-y-10

      2xl:mr-[50rem] 
      xl:mr-[35rem] 
      lg:mr-[20rem] 
      md:mr-[15rem] 
      sm:mr-[0rem] 
      xs:mr-[0rem] 
      xxs:mr-[0rem]  "
    >
      <div className="flex flex-col gap-6 bg-green-500 xxs:gap-2 xs:gap-2 sm:gap-2">
        <h1
          className="text-white text-[60px] 
        2xl:text-[60px] 
        xl:text-[55px] 
        lg:text-[40px] 
        md:text-[35px] 
        sm:text-[30px] 
        xs:text-[30px] 
        xxs:text-[18px]  
        md:leading-tight 
        sm:leading-tight 
        xs:leading-tight 
        xxs:leading-tight"
        >
          EXPERT CAR REPAIR <br />
          SERVICE CERTIFIED
        </h1>
        <p
          className="text-[14px] text-white
        2xl:text-[20px] 
        xl:text-[18px] 
        lg:text-[15px] 
        md:text-[13px]
        xs:text-[10px] 
        xxs:text-[8px]  
        md:leading-tight 
        sm:leading-tight 
        xs:leading-tight 
        xxs:leading-tight "
        >
          We offering well-trained machanics and exeellent coustomer <br />
          services,all at competitive prices of vehicle repair at your home
          <br />
          or place of work.
        </p>
      </div>
      <div
        className=" flex gap-8 bg-red-500
      2xl:flex 2xl:flex-row 
      xl:flex xl:flex-row 
      lg:flex lg:flex-row
      md:flex md:flex-row md:gap-10
      xs:flex xs:flex-col xs:gap-1
      xxs:flex xxs:flex-col xxs:items-center xxs:gap-1
       "
      >
        <button className="bg-blue-700 text-white w-60 h-6 sm:h-12">
          MAKE APPOINTMENT
        </button>
        <div className="flex items-center">
          <img
            className="h-7 
          2xl:h-7
          xl:h-7
          lg:h-7
          md:h-7
          sm:h-6
          xs:h-5
          xxs:h-4
             "
            src="../public/phone-call 1.png"
            alt=""
          />
          <div className=" flex flex-col pl-2 w-56 -space-y-2 items-center text-white">
            <h1
              className="text-[27px] 
            xxs:text-[15px] 
            xs:text-[22px] 
            sm:text-[25px] 
            2xl:text-[27px] "
            >
              123 456 678 0
            </h1>
            <h1
              className="text-[10px]
              xxs:text-[8px] 
              xs:text-[8px] 
              sm:text-[10px] 
              md:text-[10px] 
              lg:text-[10px] "
            >
              24-HOUR EMERGENCY ASSISTANCE
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default P1Content;
