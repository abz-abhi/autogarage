function Page6() {
  return (
    <div>
      <div className="bg-green-300">
        {/* left box */}
        <div className="text-white space-y-6 bg-red-400 w-[30rem]">
          <div className="space-y-3 ">
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
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
            </p>
          </div>
          <div className="space-y-5 ">
            <div className="flex">
              <div className="h-16 w-16 rounded-full flex justify-center items-center bg-red-500">
                <img src="../public/marker-car-service.png" alt="" />
              </div>
              <div className="ml-4 flex flex-col justify-center">
                <h1 className="text-[18px]">LOCATION</h1>
                <p className="text-[15px]">
                  1265 11th Ave Calggary Alberta Canada
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="h-16 w-16 rounded-full flex justify-center items-center bg-red-500">
                <img src="../public/envelope-car-service.png" alt="" />
              </div>
              <div className="ml-4 flex flex-col justify-center">
                <h1 className="text-[18px]">EMIAL</h1>
                <p className="text-[15px]">suppor@example.com</p>
              </div>
            </div>
            <div className="flex">
              <div className="h-16 w-16 rounded-full flex justify-center items-center bg-red-500">
                <img src="../public/phone-car-service.png" alt="" />
              </div>
              <div className="ml-4 flex flex-col justify-center">
                <h1 className="text-[18px]">PHONE</h1>
                <p className="text-[15px]">62 123 4567 890</p>
              </div>
            </div>
          </div>
        </div>
        {/* right box */}
        <div className="bg-white w-[30rem]">
          <div>
            <div className="flex justify-center items-center  ">
              <h1 className="text-[30px]">HOW CAN WE HELP</h1>
            </div>
            <ul className="space-y-5">
              <li>
                <input
                  type="text"
                  className="pl-10 h-12 w-96 border border-gray-400 bg-transparent "
                  placeholder="YOUR NAME"
                />
              </li>
              <li>
                <input
                  type="text"
                  className="pl-10 h-12 w-96 border border-gray-400 bg-transparent"
                  placeholder="PHONE NUMBER"
                />
              </li>
              <li>
                <input
                  type="text"
                  className="pl-10 h-12 w-96 border border-gray-400 bg-transparent"
                  placeholder="EMAIL ADDRESS"
                />
              </li>
              <li>
                <input
                  type="text"
                  className="pl-10 h-24 pb-10 w-96 border border-gray-400 bg-transparent"
                  placeholder="YOUR ISSUE"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page6;
