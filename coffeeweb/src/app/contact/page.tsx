
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-black">
      <div className="flex flex-col items-center justify-center h-screen bg-black py-8">
        {/* Title */}
        <h2 className="text-yellow-400 font-medium title-font text-center text-[32px] sm:text-[40px] pb-2">
          Contact
        </h2>
        <p className="leading-relaxed mb-2 text-yellow-500 text-center text-[16px] sm:text-[20px]">
          Feel free to contact us, we are available 24 hours.
        </p>

        {/* Form */}
        <div className="w-full max-w-md bg-black p-6 rounded-lg border border-yellow-500">
          {/* Name Input */}
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-yellow-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* Email Input */}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-yellow-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* Message Textarea */}
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-yellow-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="w-full text-black bg-yellow-500 border-0 py-2 px-6 transition-2s focus:outline-none hover:bg-yellow-600 rounded font-bold">
            <Link href="mailto:ridarasheed58@gmail.com">
              <i>Order Now</i>
            </Link>
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-lg text-white mt-6">We are here to make it about your taste.</p>
      </div>
    </div>
  );
}
