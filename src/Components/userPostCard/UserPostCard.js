import React from "react";
import { Link} from "react-router-dom";
import './UsersPostCard.scss'
import axios from "axios";
function UserPostCard({ data }) {
    axios.get(`${process.env.REACT_APP_URL}`)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
  return (
    <div className="userPost__main">
        <div className="userPost__card">
        <div className="userPost__image">
          <img src={data.imgurl} alt={`Card ${data.title}`} />
        </div>

        <div className="userPost__details">
          <h6>{data.title}</h6>
        
          <p>{data.price} AED </p>
        
        <p> {Math.floor(data.area)} Sq Ft </p>
        <p>{data.purpose} </p>
        <div classname="fav_detalis">
          <Link>
            {" "}
            
          </Link>
        </div>
        </div>
        <div className="userPost__features">
            {/* {data.features.slice(0,5).map(feature=><p>{feature}</p>
            )} */}
        </div>
        </div>
    </div>
  );
}

export default UserPostCard;
