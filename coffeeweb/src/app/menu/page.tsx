import Link from "next/link";
import React from "react";


export default function Manu() {
  return (
    <div className="bg-black h-auto pt-[7rem]">
      {/* Section for Title */}
      <section>
        <div className="pt-[3rem] bg-orange-500 flex justify-center items-center bg-fixed">
          <h1 className="text-white mb-[4rem] font-serif text-3xl sm:text-5xl text-center ">
            <i>OUR MENU</i>
          </h1>
        </div>
      </section>

      {/* Section for Quotes */}
      <section className="h-auto sm:h-screen">
        <div className="flex flex-col sm:flex-row items-center justify-center mt-5 text-white text-center sm:text-left p-4">
          {/* GIF */}
          {/* <img
            src="https://i.makeagif.com/media/1-22-2017/eQ9zo4.gif"
            alt="gif"
            className="max-w-full sm:w-1/3 md:w-1/4 lg:w-1/5 mb-4 sm:mb-0"
          /> */}

          {/* Paragraph */}
          <p className="font-serif text-sm sm:text-lg md:text-xl sm:ml-6 p-4 sm:max-w-lg">
            <i>
              Coffee is a language in itself: A quote that compares coffee to a language, and compares its various qualities to human characteristics. <br />
              Life is too short for bad coffee: A quote that expresses the idea that bad coffee is unacceptable. <br />
              Good friends and great coffee make the perfect blend: A quote that suggests that good coffee and good friends go well together. <br />
              Happiness is a warm cup of coffee: A quote that suggests that a warm cup of coffee can make you happy. <br />
              There is never a wrong time to have a coffee: A quote that suggests that there is no wrong time to enjoy coffee. <br />
              Coffee is more than just a drink, It is an experience: A quote that suggests that coffee is more than just a beverage, but rather an experience. <br />
              Coffee is a beautiful, complex beverage that has everything to do with the people you share it with: A quote that suggests that coffee is a complex beverage that is connected to the people you share it with. <br />
              Never trust anyone who doesnt drink coffee: A quote that suggests that people who do not drink coffee are untrustworthy. <br />
              The smell of fresh-made coffee is one of the world’s greatest inventions: Coffee is the ultimate stress reliever. <br />
              Life is too short for bad coffee. Good friends and great coffee make the perfect blend.
            </i>
          </p>
        </div>
      </section>

      {/* Table Section */}
      <section className="text-black body-font">
        <div className="container px-4 sm:px-6 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-7xl text-5xl font-medium title-font mb-2 text-gray-900">
              👇👇👇
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-orange-500">
              Great menu is here.................................................................... Taste is guaranteed!
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Our Menu
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Flavour
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    More Flavours
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Price
                  </th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 text-white">Cappuccino</td>
                  <td className="px-4 py-3 text-white">Creamy</td>
                  <td className="px-4 py-3 text-white">Chocolate</td>
                  <td className="px-4 py-3 text-white text-lg">$100</td>
                  <td className="w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 text-white px-4 py-3">
                    Latte
                  </td>
                  <td className="border-t-2 border-gray-200 text-white px-4 py-3">
                    Cold
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 text-white py-3">
                    Hot
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 text-white py-3 text-lg">
                    $240
                  </td>
                  <td className="border-t-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 text-white px-4 py-3">
                    Black Coffee
                  </td>
                  <td className="border-t-2 border-gray-200 text-white px-4 py-3">
                    With Sugar
                  </td>
                  <td className="border-t-2 border-gray-200 text-white px-4 py-3">
                    Without Sugar
                  </td>
                  <td className="border-t-2 border-gray-200 text-white px-4 py-3 text-lg">
                    $500
                  </td>
                  <td className="border-t-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 text-white border-gray-200 px-4 py-3">
                    Cortado
                  </td>
                  <td className="border-t-2 border-b-2 text-white border-gray-200 px-4 py-3">
                    With Ice
                  </td>
                  <td className="border-t-2 border-b-2 text-white border-gray-200 px-4 py-3">
                    Without Ice
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 text-white px-4 py-3 text-lg">
                    $720
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Button Section */}
          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto justify-center">
            <Link href="/contact">
              <button className="flex ml-auto text-black font-bold bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
