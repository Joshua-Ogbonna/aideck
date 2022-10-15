import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="hero__component">
      <h1>Support Growing Communities</h1>
      <p>
        {" "}
        Independent funding patform created to foster the spread of the Gospel
        through giving.
      </p>
      <button onClick={() => navigate("/campaigns")}><i className='bx bxs-donate-heart'></i> Donate</button>
    </div>
  );
};

export default Hero;
