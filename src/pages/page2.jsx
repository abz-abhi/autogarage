function Page2() {
  return (
    <div className=" max-w-[2000px] bg-[rgb(243,243,244)] ">
      <div className="  flex items-center justify-center ">
        <div
          className="bg mt-44 flex flex-row gap-40  
          2xl:flex 2xl:flex-row 2xl:gap-40 2xl:mt-44 
          xl:flex xl:flex-row xl:gap-40 xl:mt-44
          lg:flex lg:flex-row lg:gap-y-36 lg:mt-40
          md:flex md:flex-row md:gap-36 md:mt-32
          sm:flex sm:flex-col sm:gap-5 sm:mt-5
          xs:flex xs:flex-col xs:gap-5 xs:mt-4
          xxs:flex xxs:flex-col xxs:gap-0 xxs:mt-4
          "
        >
          {/* left page */}
          <div className=" ">
            <img
              className="max-h-[42rem]"
              src="../public/pexels-artem-podrez-8985464 1.png"
              alt=""
            />
          </div>
          {/* right side */}
          <div
            className="space-y-20  
            xxs:space-y-3
            xs:space-y-3
            sm:space-y-3
            md:space-y-10
          "
          >
            <div className="space-y-2 max-w-[35rem] w-fit ">
              <div className="flex gap-4">
                <img src="../public/separator-carsblue.svg" alt="" />
                <h1 className="text-blue-600">WHO WE ARE</h1>
              </div>
              <div>
                <h1 className="text-[40px] xxs:text-[25px] xs:text-[28px] sm:text-[30px] md:text-[30px]">
                  CAR SERVICE REPAIRS AND <br /> MAINTENANCE CERTIFIED
                </h1>
                <p className="mt-3 text-[15px] ">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
            <img
              className=" w-full  "
              src="../public/pexels-artem-podrez-8986037 1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page2;
