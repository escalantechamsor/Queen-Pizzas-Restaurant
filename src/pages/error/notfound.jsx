import React from "react";
import { useRouteError } from "react-router";
import { Link } from "react-router-dom";
function NotFound() {
  const error = useRouteError();

  return (
    <section className="w-full h-screen flex items-center justify-center flex-col bg-slate-900">
      <h1 className="lg:text-[6rem] md:text-[4rem] text-[3.3rem] text-slate-100">Not found </h1>
    <h2 className="lg:text-[3rem] md:text-[2.8rem] text-[2rem] text-slate-200">{error.status}</h2>
      <p className="lg:text-[1.3rem] text-slate-300 mt-2 text-center text-base mx-auto p-3">
       The route provide is wrong, please check de request.
      </p>
  <Link to={'/'}>
  <button className="py-3 px-5 text-slate-800 bg-slate-100 m-4 text-lg rounded-sm shadow-xl font-semibold">
        Go Home
      </button>
  </Link>
    </section>
  );
}

export default NotFound;
