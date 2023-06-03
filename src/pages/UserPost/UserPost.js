import React, { useEffect, useState } from 'react'
// import UserPropertyCard from '../../Components/UserPropertyCard/UserPropertyCard'
import axios from 'axios'
import FavCards from '../../Components/favCards/favCards';
export default function UserPost() {

    const [userPost, setUserPost] = useState([]);

   function getAll(){
    axios.get('https://propertylist.onrender.com/usersProperties')
    .then((res) => {
      setUserPost(res.data);
      console.log(res)
    })
    .catch((error) => {
      console.log('error');
    });
     }

    useEffect(() => {
        getAll();
      }, []);

  return (
    <div>

     {
        userPost.map((userPost)=>(
            <FavCards key={userPost.id} data={userPost}/>
        ))
     }

      {/* <UserPropertyCard/> */}
    </div>
  )
}
