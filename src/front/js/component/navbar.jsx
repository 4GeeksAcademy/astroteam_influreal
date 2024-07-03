import React from "react";
import { Link } from "react-router-dom";
import { EnviarPropuesta } from "./enviarPropuesta.jsx";

export const Navbar = () => {
  return (
    <header className="bg-white w-screen shadow-md sticky top-0 px-4 flex justify-between items-center h-12 z-10">
      <div>
        <Link to="/" className="text-2xl font-bold">
          <span className="text-[#F16006]">
            <b>influ</b>
          </span>
          <span className="text-[#CD11F4]">
            <b>real</b>
          </span>
        </Link>
      </div>
      <nav>
        <ul className="flex justify-between gap-3 items-center">
          <li className="nav-item">
            <Link to="/empresa/mis-listas">
              <svg
                className="text-slate-500"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>
          </li>
          <li className="nav-item">
            <svg
              className="text-slate-500"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
            </svg>
          </li>
          <li className="nav-item font-light">
            <EnviarPropuesta />
          </li>
        </ul>
      </nav>
    </header>
  );
};
