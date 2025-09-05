import "./Explore.css";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import postImage from "../../assets/postImages/1659029-2560x1080-desktop-dual-screen-nissan-gt-r-background-photo.jpg";

const posts = [
  {
    postedBy: "Jaggu Bandar",
    image: postImage,
    likes: 200,
    comments: 0,
  },
  {
    postedBy: "Jaggu Bandar",
    image: postImage,
    likes: 200,
    comments: 0,
  },
  {
    postedBy: "Jaggu Bandar",
    image: postImage,
    likes: 200,
    comments: 0,
  },
];

const Explore = () => {
  return (
    <div className="home-main-container">
      <div className="home-left-main-container">
        <div className="allposts-main-container">
          {posts.map((post, index) => {
            return (
              <div className="post-main-container" key={index}>
                <div className="post-wrapper">
                  <div className="postedby-wrapper">
                    <h4 className="postedBy">{post.postedBy}</h4>
                    <BsThreeDotsVertical className="three-dots-icon" />
                  </div>
                  <div className="postImg-container">
                    <img className="post-img" src={post.image} alt={post.postedBy} />
                  </div>
                  <div className="post-reactions-container">
                    <div className="likes-container">
                      <FcLike className="post-like-icon" />
                      <p className="likes-count">{post.likes}</p>
                    </div>
                    <div className="comments-container">
                      <FaRegComment className="post-comment-icon" />
                      <p className="comments-count">{post.comments}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="home-right-main-container">
        <div className="home-right-top-container">Top Container</div>
        <div className="home-right-bottom-container">Bottom Container</div>
      </div>
    </div>
  );
};

export default Explore;
