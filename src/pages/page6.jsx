function Page6() {
  return (
    <div className="pt-44 bg-yellow-500">
      <div className="bg-blue-700 w-[95rem] h-[45rem] relative">
        <div className="absolute bottom-0 right-0 bg-green-500">
          <div className="relative overflow-hidden w-[70rem] h-[40rem] bg-pink-500">
            <img
              className="object-fill h-full w-full filter brightness-75"
              src="../public/track tires.png"
              alt="Tire"
            />
            <div className="absolute top-0 left-0 h-[40rem] w-[60rem] bg-blue-700 bg-opacity-30 pl-10 z-10"></div>
          </div>
          <div className="bg-red-500 absolute flex w-full h-full">
            {/* Right Side */}
            <div className="text-white space-y-6 bg-red-400 w-[30rem] relative p-6">
              <div className="space-y-3">
                <h1 className="flex gap-4 text-[18px]">
                  <img
                    className="h-5"
                    src="../public/separator-carswhite.svg"
                    alt=""
                  />
                  MAKE APPOINTMENT
                </h1>
                <h1 className="text-[30px] leading-tight">
                  TRUST OUR SERVICE TO GET <br /> YOU BACK ON THE ROAD!
                </h1>
                <p className="w-[32rem]">
                  obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the cites of the word in classical
                  literature.
                </p>
              </div>
              {/* Contact Info */}
              <div className="space-y-5">
                <div className="flex">
                  <div className="h-16 w-16 rounded-full flex justify-center items-center bg-[rgba(43,68,72,1)]">
                    <img src="../public/marker-car-service.png" alt="" />
                  </div>
                  <div className="ml-4 flex flex-col justify-center">
                    <h1 className="text-[18px]">LOCATION</h1>
                    <p className="text-[15px]">
                      1265 11th Ave Calgary Alberta Canada
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="h-16 w-16 rounded-full flex justify-center items-center bg-[rgba(43,68,72,1)]">
                    <img src="../public/envelope-car-service.png" alt="" />
                  </div>
                  <div className="ml-4 flex flex-col justify-center">
                    <h1 className="text-[18px]">EMAIL</h1>
                    <p className="text-[15px]">support@example.com</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="h-16 w-16 rounded-full flex justify-center items-center bg-[rgba(43,68,72,1)]">
                    <img src="../public/phone-car-service.png" alt="" />
                  </div>
                  <div className="ml-4 flex flex-col justify-center">
                    <h1 className="text-[18px]">PHONE</h1>
                    <p className="text-[15px]">62 123 4567 890</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Box */}
            <div className="bg-white w-[30rem] relative p-6 ml-[32rem]">
              <div className="flex justify-center items-center">
                <h1 className="text-[30px]">HOW CAN WE HELP</h1>
              </div>
              <ul className="space-y-5 text-[14px]">
                <li>
                  <input
                    type="text"
                    className="pl-5 h-12 w-96 border border-gray-400 bg-transparent"
                    placeholder="YOUR NAME"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    className="pl-5 h-12 w-96 border border-gray-400 bg-transparent"
                    placeholder="PHONE NUMBER"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    className="pl-5 h-12 w-96 border border-gray-400 bg-transparent"
                    placeholder="EMAIL ADDRESS"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    className="pl-5 h-24 pb-10 w-96 border border-gray-400 bg-transparent"
                    placeholder="YOUR ISSUE"
                  />
                </li>
                <li>
                  <button className="bg-[rgba(43,68,72,1)] w-72 text-[20px] text-white py-2">
                    SEND A MESSAGE
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page6;
