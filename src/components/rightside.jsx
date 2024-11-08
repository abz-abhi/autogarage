function HelpBox() {
  return (
    <div className="bg-white space-y-4 h-[32rem] p-6 ml-[40rem] mt-10 z-20">
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
            className="pl-5 h-28 pb-14 w-96 border border-gray-400 bg-transparent"
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
  );
}

export default HelpBox;