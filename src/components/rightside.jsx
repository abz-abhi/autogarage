function HelpBox() {
  return (
      <div className=" space-y-4 bg-white w-[30rem]   max-h-[32rem] p-6
      xxs:max-w-[320px]
      xs:max-w-[425px]
      ">
        <div className="flex justify-center items-center">
          <h1 className="text-[30px]
          xxs:text-[18px]
          md:text-[25px]
          lg:text-[30px]
          ">HOW CAN WE HELP</h1>
        </div>
        <ul className="space-y-5 text-[14px] ">
          <li>
            <input
              type="text"
              className="pl-5 h-12 w-full max-w-96 border border-gray-400 bg-transparent"
              placeholder="YOUR NAME"
            />
          </li>
          <li>
            <input
              type="text"
              className="pl-5 h-12 w-full max-w-96 border border-gray-400 bg-transparent"
              placeholder="PHONE NUMBER"
            />
          </li>
          <li>
            <input
              type="text"
              className="pl-5 h-12 w-full  border border-gray-400 bg-transparent"
              placeholder="EMAIL ADDRESS"
            />
          </li>
          <li>
            <input
              type="text"
              className="pl-5 max-h-28 w-full pb-14 max-w-96 border border-gray-400 bg-transparent"
              placeholder="YOUR ISSUE"
            />
          </li>
          <li>
            <button className="bg-[rgba(43,68,72,1)] text-[20px] xxs:text-[15px] text-white py-2 pl-[25px] pr-[25px]">
              SEND A MESSAGE
            </button>
          </li>
        </ul>
      </div>
  );
}

export default HelpBox;
