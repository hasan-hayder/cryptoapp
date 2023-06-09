import Button from "./(components)/Button";
import Image from "next/image";
import Screenshot from "../../public/screenshot.png";

export default function Home() {
  return (
    <div className="container flex 2xl:h-full flex-wrap  py-20 sm:py-40 px-2 sm:px-10 xl:px-20  mx-auto items-center">
      <div className="flex-wrap lg:basis-3/5  lg:pt-5 lg:pl-5">
        <div className="text-burgundy">
          <h1>Buy Bitcoin and Cryptocurrencies</h1>
          <h2>Register now and start trading.</h2>
        </div>
        <div>
          <form className="flex my-8 h-12">
            <input
              type="email"
              className="mr-2 border-2  px-5 focus:outline-none focus:border-burgundy focus:ring-burgundy"
              placeholder="Email Address"
            ></input>
            <Button register>Get Started</Button>
          </form>
        </div>
      </div>
      <div className="container p-2 m-2 sm:p-5 justify-items-center sm:m-5 mx-auto lg:basis-1/5 ">
        <Image
          src={Screenshot}
          width={300}
          height={300}
          alt="iPhone screenshot"
        />
      </div>
    </div>
  );
}
