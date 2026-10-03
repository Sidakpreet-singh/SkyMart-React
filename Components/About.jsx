import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
    <Navbar/>
    <main className="mx-auto max-w-[1400px] px-6 py-10">

      {/* ================= HERO ================= */}

      <section className="border-b border-slate-200 pb-12">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          About SkyMart
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
          Shopping made simple.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
          SkyMart is built around a simple idea — make it easier
          to discover useful products without making online
          shopping complicated.
        </p>

      </section>


      {/* ================= STORY ================= */}

      <section className="grid items-center gap-10 py-16 lg:grid-cols-2">

        {/* Image */}

        <div className="h-[420px] overflow-hidden rounded-2xl bg-slate-100">

          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
            alt="SkyMart shopping"
            className="h-full w-full object-cover"
          />

        </div>


        {/* Content */}

        <div className="lg:pl-8">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Our Story
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Built for everyday shopping.
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 md:text-base">

            <p>
              SkyMart was created with the goal of bringing
              everyday products together in one convenient place.
            </p>

            <p>
              From electronics and fashion to home essentials
              and accessories, we want browsing to feel simple,
              organized, and enjoyable.
            </p>

            <p>
              Instead of overwhelming you with endless choices,
              SkyMart focuses on creating a clean shopping
              experience where finding what you need feels easy.
            </p>

          </div>

        </div>

      </section>


      {/* ================= WHAT WE FOCUS ON ================= */}

      <section className="border-y border-slate-200 py-14">

        <div className="max-w-2xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            What We Focus On
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            A better way to browse.
          </h2>

        </div>


        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {/* Card 1 */}

          <div className="rounded-xl border border-slate-200 bg-white p-6">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg text-blue-600">
              ✓
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              Quality Selection
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Products are organized into clear categories
              so you can spend less time searching.
            </p>

          </div>


          {/* Card 2 */}

          <div className="rounded-xl border border-slate-200 bg-white p-6">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg text-blue-600">
              ↗
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              Simple Experience
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Clean layouts and straightforward navigation
              make shopping easier across every device.
            </p>

          </div>


          {/* Card 3 */}

          <div className="rounded-xl border border-slate-200 bg-white p-6">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg text-blue-600">
              ♡
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              Customer First
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Every part of SkyMart is designed around making
              the shopping journey comfortable and intuitive.
            </p>

          </div>

        </div>

      </section>


      {/* ================= BRAND STATEMENT ================= */}

      <section className="py-16 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          SkyMart
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Everything you need.
          <span className="text-blue-600">
            {" "}All in one place.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-500 md:text-base">
          Explore our collection and discover products made
          for everyday life.
        </p>

        <button
          className="
            mt-7
            rounded-xl
            bg-blue-600
            px-7
            py-3
            text-sm
            font-semibold
            text-white
            shadow-sm
            transition-all
            duration-200
            hover:bg-blue-700
            hover:shadow-md
          "
        >
          Start Shopping
        </button>

      </section>

    </main>
    </>
  );
};

export default About;