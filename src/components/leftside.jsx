function ContactBox() {
  return (
    <div
      className="text-white  space-y-6  w-[30rem] pl-6 bg-transparent
        xxs:max-w-[320px] xxs:bg-black
        xs:max-w-[425px] xs:bg-black
        md:bg-transparent
        
    "
    >
      <div className="space-y-3">
        <h1
          className="flex gap-4 text-[18px] 
        xxs:text-[12px]
        sm:text-[12px]
        md:text-[14px]
        lg:text-[18px]
        "
        >
          <img
            className="h-5 mt-0
          xxs:h-3 xxs:mt-1
          sm:h-3 sm:mt-1
          md:h-5 md:mt-0

          "
            src="/separator-carswhite.svg"
            alt=""
          />
          MAKE APPOINTMENT
        </h1>
        <h1
          className="text-[30px] leading-tight
        xxs:text-[18px]
        sm:text-[22px]
        md:text-[25px]
        xl:text-[30px]

        "
        >
          TRUST OUR SERVICE TO GET YOU BACK ON THE ROAD!
        </h1>
        <p className="xxs:text-[12px]">
          obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in .
        </p>
      </div>
      {/* Contact Info */}
      <div className="space-y-5">
        {/* Location */}
        <div className="flex">
          <div className="h-14 w-14 rounded-full flex justify-center items-center bg-[rgba(43,68,72,1)]">
            <img src="/marker-car-service.png" alt="" />
          </div>
          <div className="ml-4 flex flex-col justify-center">
            <h1
              className="text-[17px]
            xxs:text-[12px]
            md:text-[15px]
            lg:text-[17px]
            "
            >
              LOCATION
            </h1>
            <p
              className="text-[14px]
            xxs:text-[10px]
            md:text-[12px]
            lg:text-[14px]
            "
            >
              1265 11th Ave Calgary Alberta Canada
            </p>
          </div>
        </div>
        {/* Email */}
        <div className="flex">
          <div className="h-14 w-14 rounded-full flex justify-center items-center bg-[rgba(43,68,72,1)]">
            <img src="/envelope-car-service.png" alt="" />
          </div>
          <div className="ml-4 flex flex-col justify-center">
            <h1
              className="text-[17px] 
            xxs:text-[12px]
            md:text-[15px]
            lg:text-[17px]"
            >
              EMAIL
            </h1>
            <p
              className="text-[14px] 
            xxs:text-[10px]
            md:text-[12px]
            lg:text-[14px]
            "
            >
              support@example.com
            </p>
          </div>
        </div>
        {/* Phone */}
        <div className="flex">
          <div className="h-14 w-14 rounded-full flex justify-center items-center bg-[rgba(43,68,72,1)]">
            <img src="/phone-car-service.png" alt="" />
          </div>
          <div className="ml-4 flex flex-col justify-center">
            <h1
              className="text-[17px] xxs:text-[12px]
            md:text-[15px]
            lg:text-[17px]"
            >
              PHONE
            </h1>
            <p
              className="text-[14px] xxs:text-[10px]
            md:text-[12px]
            lg:text-[14px]"
            >
              62 123 4567 890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBox;
