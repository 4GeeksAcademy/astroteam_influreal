import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

const Influencer = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div>
          <img
            className="rounded-full w-32 h-32"
            src="https://climate-xchange.org/wp-content/uploads/2018/09/Ryan-Illustrated-Headshot-Circle-01.png"
            alt="image description"
          />
        </div>
      </div>

      <div>
        <h2 className="px-4 font-bold">Bio</h2>
        <p className="px-4">
          fs asfasfa sdgsgsdgzgvsg sdgdsg ssd sgdgfs sdg sdgsdgso
        </p>
      </div>

      <div className="flex items-end justify-center">
        <div className="my-4 h-0.5 border-t-1 bg-gray-400  w-[22rem]"></div>
      </div>

      <div className="inline-flex">
        <div className="px-4 w-[12rem]">
          <span className="block text-sm font-semibold">
            <FontAwesomeIcon
              icon={faInstagram}
              className="ml-auto bg-gray text-3xl"
            />{" "}
            @IG
          </span>
          <span className="block text-sm">ER%: 4.5%</span>
          <span className="block text-sm">10.000 Seguidores</span>
          <span className="block text-sm">2000 Publicaciones</span>
          <span className="block text-sm">
            <FontAwesomeIcon
              icon={faSolidHeart}
              className="ml-auto text-red-700"
            />{" "}
            800 Likes
          </span>
          <span className="block text-sm">250 Comentarios</span>
          <span className="block text-sm">100 Branded Posts</span>
        </div>

        <div className="px-4">
          <span className="block text-sm font-semibold">
            <FontAwesomeIcon
              icon={faTiktok}
              className="ml-auto text-accent-two text-3xl"
            />
            @TikTok
          </span>
          <span className="block text-sm">ER%: 4.5%</span>
          <span className="block text-sm">10.000 Seguidores</span>
          <span className="block text-sm">2000 Publicaciones</span>
          <span className="block text-sm">
            <FontAwesomeIcon
              icon={faSolidHeart}
              className="ml-auto text-red-700"
            />{" "}
            800 Likes
          </span>
          <span className="block text-sm">250 Comentarios</span>
          <span className="block text-sm">100 Branded Posts</span>
        </div>
      </div>

      <div className="flex items-end justify-center">
        <div className="my-4 h-0.5 border-t-1 bg-gray-400  w-[22rem]"></div>
      </div>

      <div className="inline-flex">
        <div className="px-4 w-[12rem]">
          <button class="bg-fuchsia-700 hover:bg-fuchsia-500 text-white font-bold py-0 px-2 rounded">
            Estilo de Vida
          </button>
        </div>

        <div className="px-4">
          <button class="bg-fuchsia-700 hover:bg-fuchsia-500 text-white font-bold py-0 px-4 rounded">
            Foodie
          </button>
        </div>
      </div>

      <div className="flex items-end justify-center">
        <div className="my-4 h-0.5 border-t-1 bg-gray-400  w-[22rem]"></div>
      </div>

      <div>
        <h2 className="px-4 font-bold">Edad Objetivo</h2>
        <p className="px-4">24-35 años, 35-45 años</p>
      </div>

      <div className="flex items-end justify-center">
        <div className="my-4 h-0.5 border-t-1 bg-gray-400  w-[22rem]"></div>
      </div>

      <div>
        <h2 className="px-4 font-bold">Paises Objetivos</h2>
        <p className="px-4">España, Colombia, Venezuela</p>
      </div>

      <div className="flex items-end justify-center">
        <div className="my-4 h-0.5 border-t-1 bg-gray-400  w-[22rem]"></div>
      </div>
    </div>
  );
};

export default Influencer;
