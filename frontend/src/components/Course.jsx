import React from 'react';
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from 'react-router-dom';

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
        </div>
        <p className="mt-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
          assumenda? Repellendus, iste corrupti? Tempore laudantium
          repellendus accusamus accusantium sed architecto odio, nisi expedita
          quas quidem nesciunt debitis dolore non aspernatur praesentium
          assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
          animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
          consequatur!
        </p>
        <Link to="/">
        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
          Back
        </button>
        </Link>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            list.map((item) => (
              <Cards key={item.id} item={item} /> // Fixed prop name and key
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
