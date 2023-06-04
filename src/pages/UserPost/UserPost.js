import React, { useEffect, useState } from 'react'
// import UserPropertyCard from '../../Components/UserPropertyCard/UserPropertyCard'
import axios from 'axios'
import UserPostCard from '../../Components/userPostCard/UserPostCard';
export default function UserPost() {
    const [userPost, setUserPost] = useState([]);

   function getUsersPosts(){
    axios.get(`${process.env.REACT_APP_URL}/usersProperties`)
    .then((res) => {
      setUserPost(res.data);
      console.log(res)
    })
    .catch((error) => {
      console.log('error');
    });
     }

    useEffect(() => {
      getUsersPosts();
      }, []);
  return (
    <div>
     {
        userPost.map((userPost)=>(
            <UserPostCard key={userPost.id} data={userPost}/>
        ))
     }

      {/* <UserPropertyCard/> */}
    </div>
  )
}
