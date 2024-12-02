import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation, Form } from "react-router-dom";
import {FaHeart} from "react-icons/fa";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";



const Cards = ({item}) => {
  const {name,image,price,recipe,_id} = item;
    const [isHeartFilled, setHeartFilled] = useState(false);
    const { user } = useContext(AuthContext);

    const navigate= useNavigate();
    const location= useLocation();


    const handleAddToCart = (item) => {
      //console.log("add to cart clokced", item);
      if (user && user?.email) {
        const cartItem = { 
          menuItemId: _id,
           name, 
           quantit:1,
           image, 
           price, 
           email: 
           user.email 
          };
      }
      else {
        Swal.fire({
          title: "please SignUP/Login",
          text: "You won't be able to items to the card!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "SignUp",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/signup", { state: { from: location } });
          }
        });
      }

    };

    const handleHeartClick = () => {
     setHeartFilled(!isHeartFilled);
    };

  return (
    <div className="card bg-base-100 w-96 shadow-xl relative">
        <div className={`rating gap-1 absolute right-2 p-4 heartSter bg-blue ${
          isHeartFilled ? "text-rose-500" : "text-white"
          }`} 
          onClick={handleHeartClick}
          >
            <FaHeart className="h-5 w-5 cursor-pointer "/>
        </div>

     <Link to={`/menu/${item._id}`}>
  <figure>
    <img src={item.image}
    className="hover:scale-105 transition-all duration-200 md:h-32 md:w-42 gap-10"
    />
  </figure>
  </Link> 
  <div className="card-body">
    
    <h2 className="card-title">{item.title}</h2>
    {/* edit this line */}
     <Link to={`/menu/${item._id}`}> 
   </Link> 
   {/* edit this line */}
    <p>Description of title</p>
    <div className="card-actions justify-between items-center mt-2">
        <h5 className="font-semibold">
            <span className="text-sm text-red">$</span>
            {item.price}
            </h5>
      <button className="btn bg-blue text-whit" onClick={()=>handleAddToCart(item)}>
        Buy Now
        </button>
    </div>
  </div>
</div>
  );
};

export default Cards;
