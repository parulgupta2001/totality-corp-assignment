import "./mainContent.css";
import { FiShare } from "react-icons/fi";
import { BiMessageRounded, BiPoll } from "react-icons/bi";
import {
  HiOutlineHeart,
  HiOutlineLocationMarker,
  HiOutlineEmojiHappy,
} from "react-icons/hi";
import { AiOutlineFileGif } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import { FaRetweet } from "react-icons/fa";
import { GoFileMedia } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";

export function MainContent({ posts }) {
  const scrollHandler = () => {
    console.log(1);
  };

  return (
    <div className="main_content_container main" onScroll={scrollHandler}>
      <div className="post_content">
        <div className="page_header">Home</div>

        <div className="post_input">
          <img
            src="http://res.cloudinary.com/dwhran9qg/image/upload/avatar/lighting_ecx6xj.jpg"
            className="avatar_img"
            alt="profile pic"
          />

          <textarea placeholder="What's happening?" />
        </div>
        <div className="buttons">
          <span className="option_icons">
            <GoFileMedia />
            <AiOutlineFileGif />
            <BiPoll />
            <HiOutlineEmojiHappy />
            <TbCalendarTime />
            <HiOutlineLocationMarker />
          </span>
          <button className="post_button">Tweet</button>
        </div>
      </div>

      <div className="posts">
        {posts.map(({ body }) => (
          <div>
            <div className="comment_container">
              <div className="comment_content">
                <img
                  src="http://res.cloudinary.com/dwhran9qg/image/upload/avatar/lighting_ecx6xj.jpg"
                  className="avatar_img"
                  alt="profile pic"
                />
                <div className="comment_text">
                  <div className="post_option">
                    <div className="avatar_name">
                      <span className="follow_suggestion_name">
                        Parul Gupta
                      </span>
                      <span className="follow_suggestion_username">
                        @guptaparul1002
                      </span>
                    </div>
                    <BsThreeDots className="dots" />
                  </div>
                  {body}
                </div>
              </div>

              <div className="comment_container_icon">
                <div className="icon_container blue_icon">
                  <BiMessageRounded title="comment" className="icons " />
                  <span className="count">458</span>
                </div>

                <div className="icon_container green_icon">
                  <FaRetweet className="icons" />
                  <span className="count">866</span>
                </div>

                <div className="icon_container pink_icon">
                  <HiOutlineHeart title="comment" className="icons" />
                  <span className="count"> 2377</span>
                </div>

                <div className="icon_container">
                  <FiShare title="share" className="icons blue_icon" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
