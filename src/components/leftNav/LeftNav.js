import "./leftNav.css";
import { RiHome7Fill, RiFileList2Line } from "react-icons/ri";
import { FaRegEnvelope, FaUserAlt } from "react-icons/fa";
import { FiHash } from "react-icons/fi";
import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { HiOutlineBell } from "react-icons/hi";
import { IoLogoTwitter } from "react-icons/io";
import { CgMoreO } from "react-icons/cg";

export function LeftNav() {
  const arr = [
    { component: "Home", icon: <RiHome7Fill className="left_nav_icons" /> },
    {
      component: "Explore",
      icon: <FiHash className="left_nav_icons" />,
    },
    {
      component: "Notifications",
      icon: <HiOutlineBell className="left_nav_icons" />,
    },
    {
      component: "Messages",
      icon: <FaRegEnvelope className="left_nav_icons" />,
    },
    { component: "Bookmarks", icon: <BsBookmark className="left_nav_icons" /> },
    {
      component: "Lists",
      icon: <RiFileList2Line className="left_nav_icons" />,
    },
    { component: "Profile", icon: <FaUserAlt className="left_nav_icons" /> },
    { component: "More", icon: <CgMoreO className="left_nav_icons" /> },
  ];

  return (
    <div className="left_nav_container">
      <div className="functional_container">
        <div className="logo website_name">
          <IoLogoTwitter />
        </div>

        {arr.map((item) => (
          <div className="functional_icon_container">
            <div className="function_icon">{item.icon}</div>
            <div className="functionality">{item.component}</div>
          </div>
        ))}

        <button className="post_btn">Tweet</button>

        <div className="profile">
          <img
            src="http://res.cloudinary.com/dwhran9qg/image/upload/avatar/lighting_ecx6xj.jpg"
            alt="profile pic"
          />
          <div className="about_profile">
            <div className="profile_name">Parul Gupta</div>
            <div className="profile_email">@guptaparul1002</div>
          </div>
          <div>
            <BsThreeDots className="three_dots" />
          </div>
        </div>
      </div>
    </div>
  );
}
