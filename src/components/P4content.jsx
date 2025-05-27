function P4note() {
  return (
    <div
      className="bg-white  max-w-[33rem] relative left-60 space-y-8 
    xxs:left-0
    lg:left-60
      "
    >
      <div className="space-y-2 ml-10 w-fit">
        <h1
          className="flex gap-2 text-[20px]
        xxs:text-[13px] xxs:flex
        xs:text-[13px] xs:flex
        sm:text[15px] sm:flex
        md:text-[15px] md:flex
        lg:text-[20px] lg:flex
        "
        >
          <img src="/separator-carsblue.svg" alt="" />
          OUR LATEST WORK
        </h1>
        <h1
          className="text-[35px] leading-tight 
        xxs:text-[22px] 
        xs:text-[22px] 
        sm:text[26px] 
        md:text-[22px] 
        lg:text-[30px] "
        >
          SUBARU WRX STI <br /> PERFORMANCE PARTS
        </h1>
        <p
          className=" text-[15px]
        xxs:text-[10px]
        xs:text-[12px]
        sm:text-[12px]
        md:text-[12px]
       "
        >
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the
        </p>
        <ul
          className="space-y-3 pt-5 text-[15px]
        xxs:text-[10px]
        xs:text-[12px]
        sm:text-[13px]
        md:text-[12px]"
        >
          <li className="flex gap-2 ">
            <img src="/disc.svg" alt="" />
            Make: Subaru Impreza
          </li>
          <li className="flex gap-2">
            <img src="/disc.svg" alt="" />
            Submodel: 4 doors 2.0L 5MT AWD (152 HP)
          </li>
          <li className="flex gap-2">
            <img src="/disc.svg" alt="" />
            Engine: 2000 cc turbo type EJ20.
          </li>
          <li className="flex gap-2 ">
            <img src="/disc.svg" alt="" />
            Color: Blue
          </li>
        </ul>
      </div>
      <div className="flex justify-center bg-blue-600 h-14 text-[20px]">
        <button>VIEW CASE STUDY</button>
      </div>
    </div>
  );
}
export default P4note;
