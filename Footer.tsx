import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="flex self-end py-15 sm:py-20 bg-logo w-full h-10 justify-center">
        <div className="flex-col p-5">
      <div className="flex gap-4 items-center text-center my-5">
        <AiOutlineInstagram size={30} className="cursor-pointer mr-4" />
        <AiOutlineFacebook size={30} className="cursor-pointer mr-4" />
        <AiOutlineTwitter size={30} className="cursor-pointer mr-4" />
      </div>
      <p className="my-5 text-center">©2023 - Zipcoin</p>
      </div>
    </div>
  );
}
