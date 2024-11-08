function Page4() {
  return (
    <div className="bg-[rgb(243,243,244)] max-w-[2000px] flex   flex-col justify-center">
      <div className="pt-20">
        <div className="flex justify-end items-start  relative">
          {/* latest work */}
          <div className="bg-white h-fit relative left-72 top-40 w-[33rem]">
            <div className="space-y-2 ml-10 mt-10 h-[25rem]">
              <h1 className="flex gap-2 text-[20px]">
                <img src="../public/separator-carsblue.svg" alt="" />
                OUR LATEST WORK
              </h1>
              <h1 className="text-[35px] leading-tight">
                SUBARU WRX STI <br /> PERFORMANCE PARTS
              </h1>
              <p className="w-[30rem]">
                Simply dummy text of the printing and typesetting industry.
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
                  Engine: 2000 cc turbo type EJ20.
                </li>
                <li className="flex gap-4">
                  <img src="../public/disc.svg" alt="" />
                  Color: Blue
                </li>
              </ul>
            </div>
            <div className="flex justify-center bg-blue-600 h-14 text-[20px]">
              <button>VIEW CASE STUDY</button>
            </div>
          </div>
          {/* car image */}
          <div className="h-[50rem] w-[85rem]">
            <img
              className="h-full w-full"
              src="../public/pexels-cottonbro-studio-4489734 2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page4;
