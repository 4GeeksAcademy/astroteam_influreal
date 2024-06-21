import React from "react";
import { Link, useParams, } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok, faDiscord, } from "@fortawesome/free-brands-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser as faUser } from "@fortawesome/free-solid-svg-icons";
import { faComment as faComment } from "@fortawesome/free-solid-svg-icons";
import { faGift as faGift } from "@fortawesome/free-solid-svg-icons";
import { faClipboard as faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import influencers from "../../data/influencers.json";




const Influencer = ({
    erInstagram,
    bio,
    seguidoresInstagram,
    publicacionesInstagram,
    likesInstagram,
    comentariosInstagram,
    brandedPostInstagram,
    imagen,
    erTiktok,
    seguidoresTiktok,
    brandedPostTiktok,
    comentariosTiktok,
    likesTiktok,
    publicacionesTiktok,
    id
}) => {
    const { influencerId } = useParams();
    const influencer = influencers.find((influencer) => influencer.id === influencerId);
    return (
        <div className="" >

                    <div className="relative flex flex-row-reverse items-center justify-center py-4 ">

                        <button>
                            <FontAwesomeIcon
                                icon={faSolidHeart}
                                className="heart translate-x-6 translate-y-[-2rem]"
                                type="checkbox"
                            />
                        </button>
                        <div>
                        <h1></h1>
                            <img
                                className="rounded-full w-32 h-32"
                                src={imagen}
                                alt="image description"
                                id={id}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:h-[90vh] lg:py-0 p-8">
                        <div className="bio block">
                            <h2 className="px-4 font-bold">Bio</h2>
                            <p className="px-4">
                                {bio}
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
                                <span className="block text-sm">
                                    ER%: <strong className="text-accent-two">{erInstagram}%</strong>
                                </span>
                                <span className="block text-sm">
                                    <FontAwesomeIcon icon={faUser} /> {seguidoresInstagram} Seguidores
                                </span>
                                <span className="block text-sm">
                                    <FontAwesomeIcon icon={faClipboard} /> {publicacionesInstagram} Publicaciones
                                </span>
                                <span className="block text-sm">
                                    <FontAwesomeIcon
                                        icon={faSolidHeart}
                                        className="ml-auto text-red-700"
                                    />{" "}
                                    {likesInstagram} Likes
                                </span>
                                <span className="block text-sm">
                                    <FontAwesomeIcon icon={faComment} /> {comentariosInstagram} Comentarios
                                </span>
                                <span className="block text-sm">
                                    <FontAwesomeIcon icon={faGift} /> {brandedPostInstagram} Branded Posts
                                </span>
                            </div>


                            <div className="px-4">
                                <span className="block text-sm font-semibold">
                                    <FontAwesomeIcon
                                        icon={faTiktok}
                                        className="ml-auto text-accent-two text-3xl"
                                    />
                                    @TikTok
                                </span>
                                <span className="block text-sm">
                                    ER%: <strong className="text-accent-two">{erTiktok}%</strong>
                                </span>
                                <span className="block text-sm">
                                    <FontAwesomeIcon icon={faUser} /> {seguidoresTiktok} Seguidores
                                </span>
                                <span className="block text-sm">
                                    <FontAwesomeIcon icon={faClipboard} /> {publicacionesTiktok} Publicaciones
                                </span>
                                <span className="block text-sm">
                                    <FontAwesomeIcon
                                        icon={faSolidHeart}
                                        className="ml-auto text-red-700"
                                    />{" "}
                                    {likesTiktok} Likes
                                </span>
                                <span className="block text-sm">
                                    <FontAwesomeIcon icon={faComment} /> {comentariosTiktok} Comentarios
                                </span>
                                <span className="block text-sm">
                                    <FontAwesomeIcon icon={faGift} /> {brandedPostTiktok} Branded Posts
                                </span>
                            </div>
                        </div>

                        <div className="flex items-end justify-center">
                            <div className="my-4 h-0.5 border-t-1 bg-gray-400  w-[22rem]"></div>
                        </div>

                        <div className="inline-flex">
                            <div className="px-4 w-[12rem]">
                                <button className="bg-fuchsia-700 hover:bg-fuchsia-500 text-white font-bold py-0 px-2 rounded">
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
        </div>
    );
};

export default Influencer;
