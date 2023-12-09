import Image from "next/image";

export default function about() {
  return (
    <>
      <div className="w-full relative m-auto h-[200px]  ">
        <Image
          src="/heroabout.png"
          alt="groov"
          className="object-cover"
          quality={100}
          fill
        />
      </div>

      {/* Our Journey: */}
      <div>
        <div className=" row-justify-center text-center mt-7 mb-7 text-sky-700 ">
          <p className="font-bold text-3xl mb-7"> Our journey </p>
          <hr className="  border-solid border-blue-700 short-line w-[128px] mx-auto"></hr>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:ml-[120px] mt-16">
          <p className=" inset-y-24 mt-[70px] sm:w-[600px] md:text-justify sm:ml-[80px] text-center ">
            What began as a vision for excellence has evolved into a legacy of
            more than 30 years, positioning us as an industry leader. Our
            journey is marked by a commitment to building not just structures
            but also enduring partnerships and trust within the communities we
            serve.
          </p>
          <Image
            className="mx-auto w-full max-w-0  md:max-w-sm  "
            src="/ourjourney.png"
            alt="logo"
            width={380}
            height={240}
          />
        </div>
      </div>

      {/* core values */}
      <div className="w-full relative m-auto h-[450px] mt-[180px] text-black">
        <Image
          src="/core.png"
          alt="groov"
          className="object-cover"
          quality={100}
          fill
        />

        <div className="absolute inset-y-24 md:right-[325px] sm:right-[40px] right-[20px]">
          <div>
            <p className=" pb-4 text-center font-semibold text-2xl">
              Core Values
            </p>
            <hr className="border-solid border-black short-line w-[128px] pb-4 mx-auto" />
          </div>
          <p className=" sm:w-[316px] w-[250px] text-justify font-medium text-[14px] sm:text-base ">
            At The Box , our core values drive every aspect of our business. We
            believe in the power of quality construction to shape communities
            and improve lives. Our unwavering dedication to innovation sets us
            apart, pushing boundaries and redefining industry standards.
          </p>
        </div>
      </div>

      {/* meet our ceo and coo */}

      <div>
        <div className=" row-justify-center text-center mt-7 mb-7 text-sky-700 ">
          <p className="font-bold text-3xl mb-7"> Meet our CEO and COO </p>
          <hr className="  border-solid border-blue-700 short-line w-[128px] mx-auto"></hr>
        </div>

        <div className="grid grid-cols-2 sm:ml-[120px] mt-16 ">
          <p className=" ml-[80px] sm:ml-0 text-[14px] sm:text-base sm:mt-[50px] md:mt-[120px]  md:w-[600px] sm:w-[250px] text-justify">
            Meet our CEO, Adam, the architect of our dreams. With a blueprint
            for success and a passion for innovation, Adam guides our
            architectural journey, shaping skylines and redefining
            possibilities.
          </p>
          <Image
            className="ml-[80px] sm:ml-0 md:ml-[200px] max-w-[100px] sm:max-w-[200px] md:max-w-none "
            src="/ceo1.png"
            alt="logo"
            width={279}
            height={300}
          />
        </div>

        <div className="pt-11 sm:pt-0 grid grid-cols-2 md:ml-[120px] ">
          <Image
            className="ml-[75px] sm:ml-[120px] md:ml-0 max-w-[100px] sm:max-w-[200px] md:max-w-none sm:pt-[80px] md:pt-0"
            src="/coo2.png"
            alt="logo"
            width={279}
            height={300}
          />
          <p className="mr-[80px] text-[14px] sm:text-base sm:mt-[120px] md:w-[600px] sm:w-[250px] text-justify md:pr-[110px] sm:pr-0 ">
            Our COO, Jason, is the operational virtuoso ensuring every design
            springs to life seamlessly. From concept to construction, Jason 
            orchestrates the symphony of our architectural endeavors, turning
            visions into tangible masterpieces.
          </p>
        </div>
      </div>

      {/* our cultures */}

      <div className=" bg-slate-200 pt-8 mt-11">
        <div className=" row-justify-center text-center mt-7 mb-7 text-sky-700 pb-8 ">
          <p className="font-bold text-3xl mb-7"> Our Cultures </p>
          <hr className="  border-solid border-blue-700 short-line w-[128px] mx-auto"></hr>
        </div>

        <div className="md:flex justify-center pl-[120px] pb-11 sm:pl-0">
          <div className="grid  sm:ml-[80px] md:ml-[30px] sm:grid-cols-2 sm:content-center sm:gap-4 md:gap-11">
          <div className=" w-[250px]">
            <div>
              <Image
                className="mx-auto pb-8 "
                src="/cek.png"
                alt="logo"
                width={80}
                height={80}
              />
            </div>
            <p className=" text-center font-semibold pb-8">Quality</p>
            <p className=" text-justify sm:text-sm md:text-base">
              We pride ourselves on delivering construction projects that stand
              the test of time. From meticulous planning to flawless execution,
              quality is at the heart of everything we do.
            </p>
          </div>

          <div className=" w-[250px]">
            <div>
              <Image
                className="mx-auto pb-8 "
                src="/inovation.png"
                alt="logo"
                width={80}
                height={80}
              />
            </div>
            <p className=" text-center font-semibold pb-8">Innovation</p>
            <p className=" text-justify sm:text-sm md:text-base">
              Embracing the latest advancements in construction technology and
              design, we bring fresh ideas and creative solutions to every
              project. Our innovative approach ensures that each endeavor is as
              unique as our clients.
            </p>
          </div>
          </div>

          <div className=" sm:col-start-2  sm:col-end-4 sm:pt-11 md:pt-0   w-[250px] sm:ml-[250px] md:ml-11">
            <div>
              <Image
                className="mx-auto pb-8 "
                src="/real.png"
                alt="logo"
                width={80}
                height={80}
              />
            </div>
            <p className=" text-center font-semibold pb-8">Reliability</p>
            <p className=" text-justify sm:text-sm md:text-base">
              Clients trust us for our reliability and consistency. We
              understand the significance of deadlines and budgets, and we go
              above and beyond to ensure that our clients' expectations are not
              just met but exceeded.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
