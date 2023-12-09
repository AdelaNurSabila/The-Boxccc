import Image from "next/image";

// function Testimoni(props) {
//   return (
//     <>
//       <div className="flex ml-[132px] mt-8 gap-40 pl-[20px]">
//         <p className="inset-y-230 mt-[70px] w-[600px] text-justify">
//           {props.testimoni}
//         </p>
//         <div className="h-[130px] w-[181px] rounded overflow-hidden shadow-lg bg-white m-8 ">
//           <Image
//             classname="mx-auto pt-3"
//             src={props.image}
//             alt="logo"
//             width={40}
//             height={40}
//           />
//           <Image
//             classname="mx-auto pt-3"
//             src={props.image}
//             alt="logo"
//             width={40}
//             height={40}
//           />
//           <p class="font-bold text-xl mb-2 text-center text-sky-700"></p>
//           <p className=" mt-6">{props.name}</p>
//         </div>
//       </div>
//     </>
//   );
// }

// function Servis(props) {
//   return (
//     <>
//       <div className="flex gap-40 ml-[120px]">
//         <div className="h-[130px] w-[181px] rounded overflow-hidden shadow-lg bg-sky-700 m-8 ">
//           <Image
//             className=" mx-auto pt-3"
//             src={props.image}
//             alt="logo"
//             width={40}
//             height={40}
//           />
//           <Image
//             className="mx-auto m-4"
//             src={props.image}
//             alt="logo"
//             width={50}
//             height={20}
//           />
//           <p class="font-bold text-xl mb-2 text-center text-white">
//             {props.name}
//           </p>
//         </div>
//         <p className=" inset-y-230 mt-[70px] w-[600px] text-justify">
//           {props.servis}
//         </p>
//       </div>
//     </>
//   );
// }

{
  /* <div>
          <div className="flex mx-auto gap-11 justify-center mb-11">
            <div class="relative max-w-md py-6 px-8 bg-white rounded-lg shadow-lg border-solid border-sky-700 border-2">
              <p class="text-slate-700">
                “Choosing The Box was a game-changer for our projects. Their 30
                years of excellence, commitment to quality, and innovative
                solutions make them an industry leader. We look forward to a
                continued successful partnership.”
              </p>
              <p class=" mt-6">Mike Taylor. - arcitect</p>
            </div> */
}

export default function services() {
  return (
    <>
      <div className="w-full relative m-auto h-[200px]  ">
        <Image
          src="/heroServis.png"
          alt="groov"
          className="object-cover"
          quality={100}
          fill
        />
      </div>
      <div className="">
        <div className=" row-justify-center text-center pt-7  text-sky-700 ">
          <p className="font-bold text-3xl mb-7"> Our Services </p>
          <hr className="  border-solid border-blue-700 short-line w-[128px] mx-auto mb-8"></hr>
        </div>

        {/* servis 1 part */}
        <div className="">
          <div className="flex  md:ml-[132px]  md:gap-40 pl-[20px]">
            <p className=" sm:mt-[70px] sm:w-[600px] w-[400px] text-justify text-sm md:text-base">
              Building the future, one structure at a time. Our Construction
              Department is at the forefront of turning blueprints into reality,
              creating spaces that stand as a testament to our commitment to
              quality and excellence.
            </p>
            <div className="h-[130px] sm:w-[181px] w-[200px] rounded overflow-hidden shadow-lg bg-white ml-4 mr-4 sm:m-8 ">
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
              <p class="font-bold mb:text-xl mb-2 text-center text-sky-700">
                Construction
              </p>
            </div>
          </div>

          <div className="flex md:gap-40 md:ml-[120px] ">
            <div className="h-[130px] w-[181px]  rounded overflow-hidden shadow-lg bg-sky-700 m-8 ">
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
              <p class="font-bold mb:text-xl mb-2 text-center text-white">
                Renovation
              </p>
            </div>
            <p className=" mt-[30px] sm:mt-[45px] md:mt-[70px] sm:w-[600px] w-[400px] text-justify text-sm md:text-base pr-[25px]">
              Transforming spaces and breathing new life into structures, our
              Renovation Department is dedicated to revitalizing and enhancing
              existing properties. From subtle upgrades to complete makeovers,
              we redefine spaces with creativity and precision.
            </p>
          </div>
        </div>
      </div>

      {/* servis part 2  */}

      <div className=" bg-slate-200 ">
        <div className="flex md:ml-[132px] mt-8 md:gap-40 pl-[20px]">
          <p className=" mt-[40px] sm:mt-[70px] sm:w-[600px] w-[400px] text-justify text-sm md:text-base">
            Your project's compass. The Consultation Department is here to guide
            you through the journey, offering expert advice, strategic planning,
            and a personalized approach to ensure your vision aligns seamlessly
            with reality.
          </p>
          <div className="h-[130px] w-[181px] rounded overflow-hidden shadow-lg bg-white m-8 ">
            <Image
              className=" mx-auto pt-3"
              src="/Consult.png"
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
            <p class="font-bold mb:text-xl mb-2 text-center text-sky-700">
              Consultation
            </p>
          </div>
        </div>

        <div className="flex md:gap-40 md:ml-[120px]">
          <div className="h-[130px] w-[181px] rounded overflow-hidden shadow-lg bg-sky-700 m-8 ">
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
            <p class="font-bold mb:text-xl mb-2 text-center text-white">
              Repair Services
            </p>
          </div>
          <p className="  mt-[30px] sm:mt-[55px] md:mt-[70px] sm:w-[600px] w-[400px] text-justify text-sm md:text-base pr-[25px]">
            Solutions that stand the test of time. Our Repair Services
            Department specializes in swift and effective solutions, addressing
            structural issues with precision and reliability. We're here to
            safeguard and extend the life of your investments.
          </p>
        </div>
      </div>

      {/* servis part 3 */}
      <div className="pb-8">
        <div className="flex md:ml-[132px] mt-8 md:gap-40 pl-[20px]">
          <p className=" mt-[30px] sm:mt-[70px] sm:w-[600px] w-[400px] text-justify text-sm md:text-base">
            Where dreams take shape. The Architecture Department is the creative
            hub, translating visions into designs that inspire. With a focus on
            aesthetics and functionality, we craft blueprints that form the
            foundation of extraordinary spaces.
          </p>
          <div className="h-[130px] w-[181px] rounded overflow-hidden shadow-lg bg-white m-8 ">
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
            <p class="font-bold mb:text-xl mb-2 text-center text-sky-700">
              Architecture
            </p>
          </div>
        </div>

        <div className="flex md:gap-40 md:ml-[120px]">
          <div className="h-[130px] w-[181px] rounded overflow-hidden shadow-lg bg-sky-700 m-8 ">
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
            <p class="font-bold text-xl mb-2 text-center text-white">
              Electrical
            </p>
          </div>
          <p className="mt-[30px] sm:mt-[55px] md:mt-[70px] sm:w-[600px] w-[400px] text-justify text-sm md:text-base pr-[25px]">
            Powering progress. The Electrical Department is the backbone,
            ensuring seamless connectivity and functionality. From intricate
            wiring to cutting-edge technology, we provide the energy that brings
            spaces to life.
          </p>
        </div>
      </div>

      {/* testimonial */}
      <div className="bg-slate-200 pb-11">
        <div className=" row-justify-center text-center pt-7  text-sky-700 ">
          <p className="font-bold text-3xl mb-7"> Our Clients Testimonials </p>
          <hr className=" border-solid border-blue-700 short-line w-[128px] mx-auto"></hr>
        </div>

        <div className="grid grid-cols-2 pt-11 ">
          <Image
            className="mx-auto sm:pt-7  pt-[100px] max-w-[150px] sm:max-w-[200px] md:max-w-none"
            src="/testi2.png"
            alt="logo"
            width={279}
            height={100}
          />

          <div className=" pt-14">
            <div className=" mx-auto md:gap-11 justify-center mb-11 sm:pr-[50px] pr-[20px]">
              <div class="max-w-md py-6 px-8 bg-white rounded-lg shadow-lg border-solid border-sky-700 border-2">
                <p class="text-slate-700 md:text-base text-xs">
                  “Choosing The Box for our construction project was the best
                  decision we made. The attention to detail, commitment to
                  timelines, and the overall quality of work exceeded our
                  expectations. The team's professionalism and dedication to
                  excellence truly set them apart. We now have a space that not
                  only meets but surpasses our vision.”
                </p>
                <p class=" sm:text-xs mb:text-base mt-6">Client: Mark T. - Construction Project</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 pt-11">
          <div className=" pt-14 pl-[20px]">
            <div className="  mx-auto gap-11 justify-center mb-11 md:pl-[200px] sm:pl-[50px]">
              <div class="max-w-md  py-6 px-8 bg-white rounded-lg shadow-lg border-solid border-sky-700 border-2">
                <p class="] text-slate-700 text-xs md:text-base">
                  “Our renovation experience with the box was exceptional. The
                  team's creativity and meticulous planning transformed our
                  space into something beyond imagination. From the initial
                  concept discussions to the final touches, every step was
                  handled with care and expertise. We couldn't be happier with
                  the results!”
                </p>
                <p class="sm:text-xs md:text-base mt-6">Client: Emily S. - Renovation Project</p>
              </div>
            </div>
          </div>
          <div className=" mx-auto mt-[120px] sm:mt-7 md:mr-[240px]  max-w-[150px] sm:max-w-[200px] md:max-w-none ">
            <Image
              className="  "
              src="/testi3.png"
              alt="logo"
              width={279}
              height={100}
            />
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div>
      <Testimoni image="/testi1.png" name="Susan M. - Electrical Services" testimoni="The Electrical Department at [Your Company Name] delivered top-notch service for our project. Their expertise in electrical systems and cutting-edge technology was evident throughout. The team's efficiency and dedication to quality ensured that our facility not only met but exceeded industry standards. We highly recommend their services." />
          <Testimoni image="/coo2.png" name="Lala" testimoni="lalalalalala" />
          </div> */
}
