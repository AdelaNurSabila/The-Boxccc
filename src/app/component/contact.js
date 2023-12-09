import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div class="flex justify-center items-center w-full h-screen bg-slate-200 pt-[30px]">
        <div>
          <div>
            <div className=" text-center md:text-left sm:ml-4">
              <p className=" font-black mb:text-3xl sm:text-xl text-[#292E3D]">
                What can us do for you?
              </p>
              <p className=" font-semibold md:text-xl sm:text-lg  text-[#292E3D] ">
                We are ready to work on a project of any complexity, whether
                it's commercial or residential.
              </p>
            </div>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                class="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                class="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                class="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                class="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div class="my-4">
              <textarea
                placeholder="Message*"
                class="w-full h-32 bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div class="my-2 w-1/2 lg:w-1/4 sm:ml-[200px] md:ml-0  ml-[118px]">
              <button
                class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline hover:bg-blue-700 "
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
