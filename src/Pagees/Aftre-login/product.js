// 
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const body = {
  backgroundImage: 'url("https://img.freepik.com/free-photo/paper-bags-different-colors-blue-background-top-view_169016-43755.jpg")',
  height: '650px', 
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat', 
  backgroundSize: 'cover',
};

const ProductDetailed = () => {
  const [setting, statesetting] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const back = () => {
    navigate("/");
  };

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      statesetting(result.data);
    });
  }, []);

  return (
    <>
      {setting.map((item) => {
        if (item.id === Number(id)) {
          return (
            <div style={body} key={item.id}>
              <center>
                <h1>{id}</h1>
                <h1>{item.title}</h1>
                <img src={item.image} alt={item.title} width={200} height={200} />
                <p>Category: {item.category}</p>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
              </center>
              <button onClick={back} style={{color:"black",backgroundColor:"deeppink",marginTop:'50px',marginLeft:'30px'}}>Go back</button>

            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default ProductDetailed;
