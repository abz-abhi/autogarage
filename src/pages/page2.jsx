function Page2() {
  return (
    <div className=" bg-[rgb(243,243,244)] max-w-[2000px] flex justify-center items-center">
      <div className="bg w-[100rem] mt-44 flex gap-40">
        {/* left page */}
        <div>
          <img
            className="h-[42rem]"
            src="../public/pexels-artem-podrez-8985464 1.png"
            alt=""
          />
        </div>
        {/* right side */}
        <div className="space-y-20">
          <div className="space-y-2">
            <div className="flex gap-4">
              <img src="../public/separator-carsblue.svg" alt="" />
              <h1 className="text-blue-600">WHO WE ARE</h1>
            </div>
            <div>
              <h1 className="text-[40px]">
                CAR SERVICE REPAIRS AND <br /> MAINTENANCE CERTIFIED
              </h1>
              <p className=" mt-3 w-[28rem]">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <img
            className="w-[43rem]  "
            src="../public/pexels-artem-podrez-8986037 1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Page2;
