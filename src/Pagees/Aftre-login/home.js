

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../navbar/navbar";


const body ={
    backgroundImage: 'url("https://lilacinfotech.com/lilac_assets/images/blog/What-are-the-Effects-of-E-commerce-on-Business-Exploring-Opportunities-and-Challenges.jpg")',
    height: '3500px', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover',
  
}


const HomeScreen = () => {
  const [state, setState] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setState(response.data);
        // console.log(response.data);
      });
  }, []);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <Navbar/>
      <div style={body}>      
      {state.map((data) => (
        <div key={data.id} style={{ width: 330, height: 420, display: "inline-block", padding: 10, margin: 12 }}>
          <center>
            {/* <p>{data.id}</p> */}
            <p>{data.title}</p>
            <p><img src={data.image}  width={200} height={200} /></p>
            <p>{data.price}</p>
            <button onClick={() => handleClick(data.id)} style={{color:"black",backgroundColor:"red"}}>View More</button>
            <p>{data.rating.count}</p>
          </center>
        </div>
      ))}
      
      
        </div>
    </>
  );
};

export default HomeScreen;