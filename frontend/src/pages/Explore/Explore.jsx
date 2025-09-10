import "./Explore.css";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { LuImagePlus } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import postImage from "../../assets/postImages/1659029-2560x1080-desktop-dual-screen-nissan-gt-r-background-photo.jpg";

const posts = [
  {
    likes: 200,
    comments: 0,
    image: postImage,
    postedBy: "Jaggu Bandar",
  },
  {
    likes: 200,
    comments: 0,
    image: postImage,
    postedBy: "Jaggu Bandar",
  },
  {
    likes: 200,
    comments: 0,
    image: postImage,
    postedBy: "Jaggu Bandar",
  },
];

const trendingHashtags = [
  {
    hashtag: "#demohashtag",
    Usage: 1244542545,
  },
  {
    hashtag: "#demohashtag",
    Usage: 1244542545,
  },
  {
    hashtag: "#demohashtag",
    Usage: 1244542545,
  },
];

const Explore = () => {
  return (
    <div className="home-main-container">
      <div className="home-left-main-container-wrapper">
        <div className="create-post-container">
          <div className="createpost-wrapper">
            <div className="createpostheading-wrapper">
              <h1 className="createpost-heading">Explore</h1>
            </div>
            <div className="createpost-icon-container">
              <LuImagePlus className="createpost-icon" />
            </div>
          </div>
        </div>
        <div className="home-left-main-container">
          <div className="allposts-main-container">
            {posts.map((post, index) => {
              return (
                <div className="post-main-container" key={index}>
                  <div className="post-wrapper">
                    <div className="postedby-wrapper">
                      <Link to>
                        <h4 className="postedBy">{post.postedBy}</h4>
                      </Link>
                      <BsThreeDotsVertical className="three-dots-icon" />
                    </div>
                    <div className="postImg-container">
                      <img
                        className="post-img"
                        src={post.image}
                        alt={post.postedBy}
                      />
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
      </div>
      <div className="home-right-main-container">
        <div className="home-right-top-container">
          <div className="hashtags-container">
            <div className="hashtags-wrapper">
              <h4 className="hashtags-heading">Trending</h4>
              <div className="hashtags">
                {trendingHashtags.map((hashtag, index) => {
                  return (
                    <div className="hashTagsWrapper" key={index}>
                      <p className="hashname">{hashtag.hashtag}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="home-right-bottom-container">Bottom Container</div>
      </div>
    </div>
  );
};

export default Explore;
