import React from "react";
import img1 from "../assets/Web_Image_03.jpg";
import { useNavigate } from "react-router-dom";

export default function Posters() {
  const nav = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full">
      <div className="bg-[#cddccb] lg:w-1/2 w-full flex flex-col p-8 lg:h-[600px] h-auto justify-center items-center text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#40773b]">
          GET TO KNOW US
        </h2>
        <p className="text-[#40773b] mb-4">
          We believe in preserving the rich heritage of forgotten herbs while
          embracing the modern needs of health-conscious individuals. We are
          passionate about reviving traditional wisdom and bringing it to your
          table in the form of highly medicinal Vathals. Our range includes the
          rarest of herbs such as Pirandai, Sangupushpam, Avarampoo, and more,
          meticulously crafted into delectable Vathals that not only tantalize
          your taste buds but also nurture your well-being.
        </p>
        <button
          className="text-[#40773b] py-2 px-4 rounded-md border-2 border-[#40773b] w-[100px] hover:text-white hover:bg-[#277933] "
          onClick={() => nav("/aboutus")}
        >
          More
        </button>
      </div>

      <div className="w-1/2 flex flex-col lg:h-[600px] h-auto justify-center items-center text-center">
        <img
          className="object-cover shadow-lg lg:h-full w-full"
          src={img1}
          alt="flowers"
        />
      </div>
    </div>
  );
}
