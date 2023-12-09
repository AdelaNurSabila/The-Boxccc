import Image from "next/image";
import Link from "next/link";
import Contact from "./component/contact";

export default function Home() {
  return (
    <>
      <div className="w-full relative m-auto h-[400px]  ">
        <Image
          src="/heroimg.png"
          alt="groov"
          className="object-cover sm:w-11"
          quality={100}
          fill 
        />
        <p className="absolute  inset-y-40 md:left-40  sm:left-20  text-base md:text-3xl sm:text-xl upsize text - [40px] text-sky-700">
          Building things is our mission.
        </p>
      </div>

      {/* // our reputation //  */}
      <div className="pb-16">
        <p className="md:text-3xl text-2xl text-center pt-16 md:pb-11 pb-4 mx-auto font-bold text-sky-700">
          Our Reputation
        </p>
        <hr className="  border-solid border-blue-700 short-line md:w-[128px]  w-11 mx-auto pb-11"></hr>
        <div className="flex gap-16 justify-center ">
          <div className="box-content h-48 w-32 p-4 border-2 border-sky-700 ">
            <Image
              className="mx-auto pb-3.5 "
              src="/bestservis.png"
              alt="logo"
              width={24}
              height={0}
            />
            <div className="text-center">
              <p className=" pb-3 font-bold ">Best Services</p>
              <p className="sm:text-sm text-xs">
                Unmatched excellence in every detail <br /> where quality meets
                innovation.
              </p>
            </div>
          </div>

          <div className="box-content h-48 w-32 p-4 border-2 border-sky-700 ">
            <Image
              className="mx-auto pb-3.5 "
              src="/bestteams.png"
              alt="logo"
              width={24}
              height={0}
            />
            <div className="text-center">
              <p className=" pb-6 font-bold">Best Team</p>
              <p className="sm:text-sm text-xs">
                Your success, our expertise <br /> The dream team for your
                project.
              </p>
            </div>
          </div>

          <div className="box-content h-48 w-32 p-4 border-2 border-sky-700 ">
            <Image
              className="mx-auto pb-3.5 "
              src="/bestd.png"
              alt="logo"
              width={24}
              height={0}
            />
            <div className="text-center">
              <p className=" pb-4 font-bold">Best Design</p>
              <p className="sm:text-sm text-xs">
                Architectural brilliance in every line <br /> where vision
                becomes reality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* about ceo */}
      <div className="md:mt-10 md:mb-16 justify-center">
        <div className=" md:flex md:pl-[200px] sm:pl-[20px] ">
          <Image  className="right-[500px]" src="/coo.jpg" alt="logo" width={700} height={500} />
          <div className="md:absolute box-content md:right-[200px]  md:my-[65px] bg-sky-700 md:h-[360px] md:w-[350px] sm:w-[700px]">
            <p className="md:pb-[36px] ml-[40px] md:mt-[20px]  text-white font-bold pt-4">
              About us
            </p>
            <p className="sm:text-sm text-xs md:pb-[20px] ml-[40px] mr-[40px] text-justify  text-white m">
              For more than 30 years we have been delivering world-class
              construction and we've built many lasting relationships along the
              way. We've matured into an industry leader and trusted resource
              for those seeking quality, innovation and reliability when
              building in the U.S.{" "}
            </p>
            <div>
              <button class=" hover:bg-[#F9995D] hover:text-white text-black rounded ml-[40px] bg-white w-[200px] mx-1 my-1 mb-11">
                More on our history
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* servis */}
      <div className="bg-slate-200 h-[550px] mt-11 ">
        <p className=" font-bold md:text-3xl text-2xl  text-center pb-8 pt-10 text-sky-700">
          Services
        </p>
        <hr className="  border-solid border-blue-700 short-line md:w-[128px]  w-11 mx-auto pb-1"></hr>
        <div className=" flex sm:gap-8 content-center justify-center">
          <div className="h-[130px] sm:w-[181px] w-[200px] rounded overflow-hidden shadow-lg bg-white m-8 ">
            <Image
              className=" mx-auto pt-3"
              src="/Construction.png"
              alt="logo"
              width={40}
              height={40}
            />
            <Image
              className="mx-auto m-4"
              src="/line.png"
              alt="logo"
              width={50}
              height={20}
            />
            <p class="font-bold md:text-xl sm:text-base text-xs mb-2 text-center text-sky-700">
              Construction
            </p>
          </div>

          <div className="h-[130px] sm:w-[181px] w-[200px] rounded overflow-hidden shadow-lg bg-sky-700 m-8 ">
            <Image
              className=" mx-auto pt-3"
              src="/renov.png"
              alt="logo"
              width={40}
              height={40}
            />
            <Image
              className="mx-auto m-4"
              src="/line.png"
              alt="logo"
              width={50}
              height={20}
            />
            <p class="font-bold md:text-xl sm:text-base text-xs mb-2 text-center text-white">
              Renovation
            </p>
          </div>

          <div className="h-[130px] sm:w-[181px] w-[200px] rounded overflow-hidden shadow-lg bg-white m-8 ">
            <Image
              className=" mx-auto pt-3"
              src="/consult.png"
              alt="logo"
              width={40}
              height={40}
            />
            <Image
              className="mx-auto m-4"
              src="/line.png"
              alt="logo"
              width={50}
              height={20}
            />
            <p class="font-bold md:text-xl sm:text-base text-xs mb-2 text-center text-sky-700">
              Consultation
            </p>
          </div>
        </div>

        <div className=" flex sm:gap-8 content-center justify-center">
          <div className="h-[130px] sm:w-[181px] w-[200px] rounded overflow-hidden shadow-lg bg-sky-700 m-8 ">
            <Image
              className=" mx-auto pt-3"
              src="/repair.png"
              alt="logo"
              width={40}
              height={40}
            />
            <Image
              className="mx-auto m-4"
              src="/line.png"
              alt="logo"
              width={50}
              height={20}
            />
            <p class="font-bold md:text-xl sm:text-base text-xs mb-2 text-center text-white">
              Repair Services
            </p>
          </div>

          <div className="h-[130px] sm:w-[181px] w-[200px] rounded overflow-hidden shadow-lg bg-white m-8 ">
            <Image
              className=" mx-auto pt-3"
              src="/arct.png"
              alt="logo"
              width={40}
              height={40}
            />
            <Image
              className="mx-auto m-4"
              src="/line.png"
              alt="logo"
              width={50}
              height={20}
            />
            <p class="font-bold md:text-xl sm:text-base text-xs mb-2 text-center text-sky-700">
              Architecture
            </p>
          </div>

          <div className="h-[130px] sm:w-[181px] w-[200px] rounded overflow-hidden shadow-lg bg-sky-700 m-8 ">
            <Image
              className=" mx-auto pt-3"
              src="/electric.png"
              alt="logo"
              width={40}
              height={40}
            />
            <Image
              className="mx-auto m-4"
              src="/line.png"
              alt="logo"
              width={50}
              height={20}
            />
            <p class="font-bold md:text-xl sm:text-base text-xs mb-2 text-center text-white">
              Electric
            </p>
          </div>
        </div>
      </div>

      {/*30 years experience*/}
      <div className="md:grid md:grid-cols-2 md:ml-[250px] md:gap-[30px] justify-center pt-[100px] pb-[50px] ">
        <Image className="mx-auto" src="/happy.png" alt="logo" width={500} height={400} />
        <div className="md:w-[300px] md:h-[300px] mt-[70px] md:right-[500px] text-center ">
          <p className="md:text-6xl sm:text-4xl text-3xl text-sky-700">30 Years Experience</p>
          <p className=" text-xl pt-[20px] pb-[20px]">
            Our company has been the leading provided construction services to
            clients throughout the USA since 1988.
          </p>
          <Link href="#contact">
            <button class=" hover:bg-blue-700 rounded  bg-sky-700 w-[100px] h-[40px]  text-white">
              Contact us
            </button>
          </Link>
        </div>
      </div>

      {/* consult */}
      <div className="w-full relative m-auto h-[300px] ">
        <Image
          src="/ads.png"
          alt="ads"
          className="object-cover"
          quality={100}
          fill
        />
        <div className="absolute  text-center md:inset-y md:left-40 sm:left-8 left-20 sm:inset-y-24 inset-y-20 upsize text - [40px] text-white item-center">
          <p className="pb-[20px] md:text-3xl sm:text-xl  ">
            Free consultation with exceptional quality
          </p>
          <p className="md:text-xl sm:text-xl">Just one call away: +84 1102 2703</p>
        </div>

        <Link href="#contact" className="cursor-pointer">
          <button className="absolute border-solid border-2 md:right-[250px] sm:right-[100px] right-[160px] md:my-[130px] sm:my-[130px] my-[180px] w-[200px] rounded border-white  text-white font-semibold ">
            Get your consultation
          </button>
        </Link>
      </div>

      {/* project */}
      <div className="mb-[50px] bg-slate-100 pt-11  ">
        <p className="text-center md:text-3xl text-2xl font-bold  text-sky-700">
          Projects
        </p>
        <hr className=" mt-4 border-solid border-blue-700 short-line md:w-[128px]  w-11 mx-auto pb-1"></hr>
        <div className="grid grid-cols-1  sm:grid-cols-2 justify-center ">
          <div className="mt-8 mb-11">
            <Image
              className="mx-auto w-full max-w-xs md:max-w-sm  "
              src="/project1.png"
              alt="logo"
              width={384}
              height={247}
            />
            <div className="bg-sky-700 md:w-[384px] max-w-xs md:max-w-sm sm:ml-[27px] ml-[82px] h-[60px] text-white pl-4 pt-2 text-center  md:ml-[145px]">
              <p className="font-bold">Wildstone Infra Hotel</p>
              <p>2715 Ash Dr. San Jose, South Dakota</p>
            </div>
          </div>

          <div className=" mt-8 mb-11">
            <Image
              className="mx-auto w-full max-w-xs md:max-w-sm  "
              src="/project3.png"
              alt="logo"
              width={384}
              height={247}
            />
            <div className="bg-sky-700 md:w-[384px] max-w-xs md:max-w-sm sm:ml-[27px] ml-[82px] h-[60px] text-white pl-4 pt-2 text-center  md:ml-[145px]">
              <p className="font-bold">Mr. Parkinston's House</p>
              <p>3517 W. Gray St. Utica, Pennsylvania</p>
            </div>
          </div>
        </div>

        {/* project part2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center  pb-11">
          <div className="mt-8 mb-11">
            <Image
              className="mx-auto w-full max-w-xs md:max-w-sm"
              src="/project2.png"
              alt="logo"
              width={384}
              height={247}
            />
            <div className="bg-sky-700 md:w-[384px] max-w-xs md:max-w-sm sm:ml-[27px] ml-[82px] h-[60px] text-white pl-4 pt-2 text-center  md:ml-[145px]">
              <p className="font-bold">Wish Stone Building</p>
              <p>2972 Westheimer Rd. Santa Ana, Illinois </p>
            </div>
          </div>

          <div className=" mt-8 mb-11">
            <Image
              className="mx-auto w-full max-w-xs md:max-w-sm"
              src="/project4.png"
              alt="logo"
              width={384}
              height={247}
            />
            <div className="bg-sky-700 md:w-[384px] max-w-xs md:max-w-sm sm:ml-[27px] ml-[82px] h-[60px] text-white pl-4 pt-2 text-center  md:ml-[145px]">
              <p className="font-bold">Oregano Height</p>
              <p>2464 Royal Ln. Mesa, New Jersey</p>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col items-center mt-9 pb-11">
          <button className="text-center hover:bg-blue-700 bg-sky-700 rounded h-[40px] w-[200px] mt-11 right-11 text-white">
            More on our project
          </button>
        </div> */}
      </div>

      {/* testimonials */}
      <div className="">
        <p className="text-3xl text-center pb-10 font-bold text-sky-700">
          Testimonials
        </p>
        <div>
          <div className="grid grid-col-1 md:grid-cols-2 mx-auto gap-11 justify-center mb-11 ">
            <div class="max-w-md md:ml-[195px] py-6 px-8 bg-white rounded-lg shadow-lg border-solid border-sky-700 border-2">
              <p class="text-slate-700">
                “Choosing The Box was a game-changer for our projects. Their 30
                years of excellence, commitment to quality, and innovative
                solutions make them an industry leader. We look forward to a
                continued successful partnership.”
              </p>
              <p class=" mt-6">Mike Taylor. - arcitect</p>
            </div>
            <div>
              <div class="max-w-md py-6 px-8 bg-white rounded-lg shadow-lg border-solid border-sky-700 border-2">
                <p class="text-slate-700">
                  “Thanks to The Box, our dream home became a reality. The
                  construction process was seamless, and their attention to
                  detail was impeccable. The Box doesn't just build houses; they
                  create lasting foundations for happiness.”
                </p>
                <p class="mt-6 mb-2">James L. - Homeowner</p>
              </div>
            </div>
          </div>
          <div className="grid grid-col-1 md:grid-cols-2 mx-auto gap-11 justify-center mb-11">
            <div class="md:ml-[195px] max-w-md py-6 px-8 bg-white rounded-lg shadow-lg border-solid border-sky-700 border-2">
              <p class="text-slate-700">
                “The Box is a beacon of reliability and success. Their
                consistent delivery of world-class construction projects has
                provided substantial returns for our clients. Partnering with
                them has been a strategic and rewarding decision for our
                investment portfolio.”
              </p>
              <p class="mt-6">Robert H. - Financial Consultant</p>
            </div>

            <div class="relative max-w-md py-6 px-8 bg-white rounded-lg shadow-lg border-solid border-sky-700 border-2">
              <p class="text-slate-700">
                “Collaborating with The Box is a pleasure. Their
                professionalism, creativity, and precision make them an industry
                leader. As an architect, I highly recommend them for top-notch
                construction services.”
              </p>
              <p class="mt-6">Amanda K. - Architect</p>
            </div>
          </div>
        </div>
      </div>

      {/* contact us */}
      <div id="contact">
        {" "}
        <Contact />{" "}
      </div>
    </>
  );
}
