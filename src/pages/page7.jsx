import React from "react";

function Page7() {
  const faqs = [
    {
      question: "HOW OFTEN SHOULD I GET AN OIL CHANGE?",
      answer:
        "It's recommended to get an oil change every 5,000 to 7,500 miles for optimal engine performance.",
    },
    {
      question: "WHEN SHOULD I CHANGE THE OIL",
      answer:
        "It's recommended to get an oil change every 5,000 to 7,500 miles for optimal engine performance. Check your vehicle’s manual for specifics. ",
    },
    {
      question: "WHEN SHOULD I REPLACE THE BATTERY?",
      answer:
        "Car batteries typically last between 3 to 5 years. Check your battery's health regularly, especially after 3 years.",
    },
    {
      question: "WHEN SHOULD I CHECK FLUID LEVELS?",
      answer:
        "It’s a good idea to check fluid levels like coolant, brake, and transmission fluids during each oil change or at least every month.",
    },
    {
      question: "WHEN SHOULD I REPLACE MY BRAKE PADS?",
      answer:
        "Brake pads should generally be replaced every 30,000 to 70,000 miles, depending on your driving style and the type of brake pads.",
    },
    {
      question: "WHEN SHOULD I GET A TIRE ROTATION?",
      answer:
        "Tire rotations are recommended every 5,000 to 8,000 miles to ensure even tire wear and improve lifespan.",
    },
  ];

  return (
      <div className="flex justify-center items-center w-full  -mt-[20rem] max-w-[2000px]
      xxs:mt-0
      sm:mt-0
      md:-mt-[20rem]
      ">
        <div>
          <div className="center-div  mb-6">
            <h1 className="flex gap-3 text-blue-600 text-lg">
              <img src="../public/separator-carsblue.svg" alt="" /> FAQS
            </h1>
            <h1 className="text-[24px]">FREQUENTLY ASKED QUESTIONS</h1>
          </div>

          <div>
            <ul
              className="grid grid-cols-2 max-w-[85rem] gap-x-4  grid-rows-3
            xxs:grid xxs:grid-cols-1
            xl:grid xl:grid-cols-2
            "
            >
              {faqs.map((faq, index) => (
                <li key={index} className="mb-4 flex  w-fit justify-center">
                  <details className="bg-white border-l-4 border-blue-600 text-black justify-center items-center w-[42rem] h-24 cursor-pointer
                  xxs:w-fit
                  sm:w-[42rem]
                  ">
                    <summary className="text-lg pt-8 pl-10 pr-5 flex justify-between">
                      {faq.question}
                      <img src="../public/mdi_chevron-up.png" alt="" />
                    </summary>
                    <p className="mt-2 relative rounded-md max-w-[40rem] ml-3 pl-4 bg-gray-800  text-white">
                      {faq.answer}
                    </p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Page7;
