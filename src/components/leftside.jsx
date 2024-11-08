function ContactBox() {
  return (
    <div className="text-white space-y-6 w-[30rem] p-6 relative z-20">
      <div className="space-y-3">
        <h1 className="flex gap-4 text-[18px]">
          <img className="h-5" src="../public/separator-carswhite.svg" alt="" />
          MAKE APPOINTMENT
        </h1>
        <h1 className="text-[30px] w-[32rem] leading-tight">
          TRUST OUR SERVICE TO GET YOU BACK ON THE ROAD!
        </h1>
        <p className="w-[32rem]">
          obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in .
        </p>
      </div>
      {/* Contact Info */}
      <div className="space-y-5">
        {/* Location */}
        <div className="flex">
          <div className="h-14 w-14 rounded-full flex justify-center items-center bg-[rgba(43,68,72,1)]">
            <img src="../public/marker-car-service.png" alt="" />
          </div>
          <div className="ml-4 flex flex-col justify-center">
            <h1 className="text-[17px]">LOCATION</h1>
            <p className="text-[14px]">1265 11th Ave Calgary Alberta Canada</p>
          </div>
        </div>
        {/* Email */}
        <div className="flex">
          <div className="h-14 w-14 rounded-full flex justify-center items-center bg-[rgba(43,68,72,1)]">
            <img src="../public/envelope-car-service.png" alt="" />
          </div>
          <div className="ml-4 flex flex-col justify-center">
            <h1 className="text-[17px]">EMAIL</h1>
            <p className="text-[14px]">support@example.com</p>
          </div>
        </div>
        {/* Phone */}
        <div className="flex">
          <div className="h-14 w-14 rounded-full flex justify-center items-center bg-[rgba(43,68,72,1)]">
            <img src="../public/phone-car-service.png" alt="" />
          </div>
          <div className="ml-4 flex flex-col justify-center">
            <h1 className="text-[17px]">PHONE</h1>
            <p className="text-[14px]">62 123 4567 890</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBox;