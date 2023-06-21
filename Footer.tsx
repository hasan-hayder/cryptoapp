import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className=" flex flex-col py-20 sm:py-40 bg-logo items-center">
      <div className="flex gap-4 my-5">
        <AiOutlineInstagram size={45} className="cursor-pointer mr-4" />
        <AiOutlineFacebook size={45} className="cursor-pointer mr-4" />
        <AiOutlineTwitter size={45} className="cursor-pointer mr-4" />
      </div>
      <div className="my-10 text-xl">©2023 - Zipcoin</div>
    </div>
  );
}
