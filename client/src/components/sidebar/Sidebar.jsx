import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
    <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/326415722_1579125645906673_9143534677939618256_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yAm2ExxWwQkAX9NrIDg&_nc_ht=scontent.fdel29-1.fna&oh=00_AfAAn9kdvNR3rZ7ny8LqA4qObTEZWcFS0-3XP1oF60oqNQ&oe=63F94AAC" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Reiciendis id quis veritatis 
        ratione ex itaque reprehenderit
        </p>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">CATEGORIES</span>
    <ul className="sidebarList">
         {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
    </ul>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">FOLLOW US</span>
    <div className="sidebarSocial">
    <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
    </div>
    </div>
    </div>
  )
}
