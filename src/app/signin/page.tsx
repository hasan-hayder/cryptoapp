import Hero from "../(components)/Hero";
import Button from "../(components)/Button";
import Link from "next/link";

export const metadata = {
  title: "Zipcoin - Sign in",
  description: "Generated by create next app",
};

export default function RegisterPage() {
  return (
    <>
      <Hero>Sign in</Hero>
      <div className="p-4 sm:p-10 sm:my-5">
        <div className="p-4 sm:p-10 flex justify-center">
          <div className="bg-logo py-20 px-5 sm:p-20 rounded-md ">
            <form className="grid grid-cols-1 gap-4 ">
              <div className="flex mb-4 justify-end">
                <label className="p-2">ِE-mail</label>
                <input
                  type="email"
                  placeholder="E-mail address"
                  className="form-input px-2 sm:px-4 py-3 rounded-md"
                />
              </div>
              <div className="flex items-center justify-end mb-4">
                <label className="px-2 ">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-input px-2 sm:px-4 py-3 rounded-md"
                />
              </div>
              <div className="flex justify-center">
                <Button register className="border border-black">
                  SIGN IN
                </Button>
              </div>
            </form>
            <div className="sm:flex  justify-center m-2">
              {"Don't have an account?"}
              <Link
                className="ml-1 hover:text-forest-green transition"
                href="/register"
              >
                Create a new account
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
