import "./rightNav.css";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";

export function RightNav({ posts }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, [users]);

  return (
    <aside className="right_nav_container">
      <div style={{ display: "flex" }}>
        <span className="search_icon">
          <FiSearch />
        </span>
        <input placeholder="Search Twitter" className="right_nav_input" />
      </div>
      <div className="suggestion_container">
        <div className="news_container">
          <div className="news_header">What's happening</div>
          {posts.slice(0, 6).map(({ title }) => (
            <div className="post_data_container">
              <div className="news_title">{title}</div>
              <div className="about_news">gdahfjh</div>
            </div>
          ))}
          <div className="show_more">Show more</div>
        </div>

        <div className="who_to_follow">
          <div className="who_to_follow_header">Who to follow</div>
          {users.slice(0, 3).map(({ name, username }) => (
            <div className="follow_suggestions">
              <div className="avatar_name">
                <img
                  src="http://res.cloudinary.com/dwhran9qg/image/upload/avatar/lighting_ecx6xj.jpg"
                  className="avatar_img"
                  alt="profile pic"
                />
                <span>
                  <div className="follow_suggestion_name">{name}</div>
                  <div className="follow_suggestion_username">@{username}</div>
                </span>
              </div>

              <button className="follow_btn">Follow</button>
            </div>
          ))}
          <div className="show_more">Show more</div>
        </div>
        <footer>
          <div className="footer_content">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
          </div>

          <div className="footer_content">
            <span>Accessibility</span>
            <span>Ads info</span>
            <span>More...</span>
          </div>
          <div>© 2022 Twitter, Inc.</div>
        </footer>
      </div>
      <div style={{ height: "900rem" }}></div>
    </aside>
  );
}
