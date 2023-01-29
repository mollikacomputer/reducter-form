import React from "react";

const Form = () => {
  return (
    <div className="grid justify-items-center">
      <div className="columns-2 gap-4 mx-16">
        <form>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Write your first name?</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Write First Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Write your last name?</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password?</span>
            </label>
            <input
              type="text"
              name="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Comment?</span>
            </label>
            <textarea
              type="textaria"
              name="textaria"
              class="textarea textarea-bordered"
              placeholder="Comment"
            ></textarea>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Education</span>
            </label>
            <select
            name="education"
            class="select select-primary w-full max-w-xs">
            <option disabled selected>
              Select Your Last Education Level
            </option>
            <option>SSC</option>
            <option>HSC</option>
            <option>BA</option>
            <option>MA</option>
          </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Number of PC's</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <button className="btn mt-2">Button</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
