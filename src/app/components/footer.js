import Image from "next/image";
import Link from "next/image";

export default function Footer() {
  return (
    <>
      <footer class="bg-white dark:bg-gray-900">
        <div class="container px-14 py-12 mx-auto">
          <div class="grid grid-cols-1 gap-[120px] sm:grid-cols-2 sm:gap-y-28 md:grid-cols-3">
            <div class="sm:col-span-2">
              <h1 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                Subscribe our newsletter to get update.
              </h1>

              <div className=" flex">
                <div>
                  <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input
                      id="email"
                      type="text"
                      class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                      placeholder="Email Address"
                    />

                    <button class=" px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                      Subscribe
                    </button>
                  </div>
                  <p className="pt-4 text-xl  text-gray-700">Socials:</p>
                  <div className="flex pt-4">
                    <a href="https://www.linkedin.com/">
                      <Image
                        className="cursor-pointer"
                        src="/linkind.png"
                        alt="logo"
                        width={30}
                        height={30}
                      />
                    </a>
                    <a href="https://www.instagram.com/">
                      <Image
                        className="cursor-pointer"
                        src="/instagram.png"
                        alt="logo"
                        width={30}
                        height={30}
                      />
                    </a>
                    <a href="https://www.facebook.com/">
                      <Image
                        className=""
                        src="/facebook.png"
                        alt="logo"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6">
              <p className="text-sky-700">
                Address:{" "}
                <span className=" text-gray-700">
                  6391 Elgin St. Celina, Delaware 10299
                </span>
              </p>
              <p className="text-sky-700">
                Phone:<span className=" text-gray-700"> +84 1102 2703</span>
              </p>
              <p className="text-sky-700">
                Email:<span className=" text-gray-700"> hello@thebox.com</span>
              </p>
            </div>
          </div>
        </div>
        <p className=" bg-sky-700 text-white w-full h-10 pl-16 pt-2">
          TheBox Company © 2022. All Rights Reserved
        </p>
      </footer>
    </>
  );
}
