import React from "react";

function Audio() {
  return (
    <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="flex flex-col sm:flex-row">
        <div className="flex h-32 w-32 flex-col items-center justify-center rounded-3xl border">
          <p>April</p>
          <p>17</p>
        </div>
        <div className="w-[250px] sm:w-[350px]">
          <p className="font-semibold">Apple Products</p>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dolorem, ipsum incidunt sapiente aperiam aut reiciendis
            optio quod, facilis vitae, reprehenderit nulla nihil et asperiores
            amet? Sed quisquam accusamus libero!
          </p>
          <img
            src="https://i.pinimg.com/564x/af/49/5f/af495f29a27073a5a70b8602bc80148a.jpg"
            className="h-[200px] rounded-xl"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex h-32 w-32 flex-col items-center justify-center rounded-3xl border">
          <p>April</p>
          <p>17</p>
        </div>
        <div className="max-w-[250px]">
          <p className="font-semibold">Apple Products</p>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dolorem, ipsum incidunt sapiente aperiam aut reiciendis
            optio quod, facilis vitae, reprehenderit nulla nihil et asperiores
            amet? Sed quisquam accusamus libero!
          </p>
          <img
            src="https://i.pinimg.com/564x/af/49/5f/af495f29a27073a5a70b8602bc80148a.jpg"
            className="h-[200px] rounded-xl"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex h-32 w-32 flex-col items-center justify-center rounded-3xl border">
          <p>April</p>
          <p>17</p>
        </div>
        <div className="max-w-[250px]">
          <p className="font-semibold">Apple Products</p>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dolorem, ipsum incidunt sapiente aperiam aut reiciendis
            optio quod, facilis vitae, reprehenderit nulla nihil et asperiores
            amet? Sed quisquam accusamus libero!
          </p>
          <img
            src="https://i.pinimg.com/564x/af/49/5f/af495f29a27073a5a70b8602bc80148a.jpg"
            className="h-[200px] rounded-xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Audio;
