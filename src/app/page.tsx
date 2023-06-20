import Button from "./(components)/Button";

export default function Home() {
  return (
    <div className="flex-auto py-20 sm:py-40 px-2 sm:px-10 justify-center mx-auto items-center">
      <div className="text-burgundy">
        <h1>Buy Bitcoin and Cryptocurrencies</h1>
        <p className="text-3xl sm:text-4xl">Register now and start trading.</p>
      </div>
      <div>
        <form className="my-8 h-12 flex">
          <input
            type="email"
            className="mr-5 border-2 rounded-lg px-5 focus:outline-none focus:border-burgundy focus:ring-burgundy"
            placeholder="Email Address"
          ></input>
          <Button register>Get Started</Button>
        </form>
      </div>
    </div>
  );
}
