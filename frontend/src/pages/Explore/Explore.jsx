import "./Explore.css";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { LuImagePlus } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import postImage1 from "../../assets/postImages/1659029-2560x1080-desktop-dual-screen-nissan-gt-r-background-photo.jpg";
import postImage2 from "../../assets/postImages/img3.wallspic.com-anime-gojo_satoru-satoru_gojo-anime_art-jujutsu_kaisen-1440x2960.jpg";
import postImage3 from "../../assets/postImages/satoru-gojo-jujutsu-1440x2560-9292.jpg";
import postImage4 from "../../assets/postImages/211803.gif";
import postImage5 from "../../assets/postImages/1758061893064.mp4";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const posts = [
  {
    id: 1,
    likes: 356575600,
    comments: 0,
    share: 25341343434,
    mimeType: "image/jpeg",
    postContent: postImage1,
    postedBy: "Jaggu Bandar",
  },
  {
    id: 2,
    likes: 200,
    comments: 0,
    share: 25341343434,
    mimeType: "image/jpeg",
    postContent: postImage2,
    postedBy: "Jaggu Bandar",
  },
  {
    id: 3,
    likes: 1231,
    comments: 0,
    share: 25341343434,
    mimeType: "image/jpeg",
    postContent: postImage3,
    postedBy: "Jaggu Bandar",
  },
  {
    id: 4,
    likes: 200434234,
    comments: 0,
    share: 25341343434,
    mimeType: "image/gif",
    postContent: postImage4,
    postedBy: "Jaggu Bandar",
  },
  {
    id: 5,
    likes: 200666,
    comments: 0,
    share: 25341343434,
    mimeType: "video/mp4",
    postContent: postImage5,
    postedBy: "Jaggu Bandar",
  },
];

const trendingHashtags = [
  {
    hashtag: "#demohashtag",
    Usage: 124454,
  },
  {
    hashtag: "#demohashtag",
    Usage: 1244542545,
  },
  {
    hashtag: "#demohashtag",
    Usage: 124,
  },
];

const Explore = () => {
  const dropDownRef = useRef(null);
  const [activeDropdownId, setActiveDropdownId] = useState(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setActiveDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const createPoastHandler = () => {
    console.log("Working !!!");
    toast.success("Working....!!!");
  };

  const formatNumber = (num) => {
    if (num >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    }
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num.toString();
  };

  const handleDropDown = (postId) => {
    setActiveDropdownId((prevId) => (prevId === postId ? null : postId));
  };

  return (
    <div className="home-main-container">
      <div className="home-left-main-container-wrapper">
        <div className="create-post-container">
          <div className="createpost-wrapper">
            <div className="createpostheading-wrapper">
              <h1 className="createpost-heading">Explore</h1>
            </div>
            <div className="createpost-icon-container">
              <LuImagePlus
                className="createpost-icon"
                onClick={createPoastHandler}
              />
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
                      <Link to={`/profile/${post.id}`} className="postedBy">
                        <h4 className="postedBy">{post.postedBy}</h4>
                      </Link>
                      <div
                        className="threedot-dropdown-menu-container"
                        ref={dropDownRef}
                      >
                        <BsThreeDotsVertical
                          className="three-dots-icon"
                          onClick={() => handleDropDown(index)}
                        />
                        <div
                          className={
                            activeDropdownId === index
                              ? "dropdown-menu active"
                              : "dropdown-menu"
                          }
                        >
                          <Link to="/edit" className="dropdown-menu-item edit">
                            Edit
                          </Link>
                          <Link to="/edit" className="dropdown-menu-item edit">
                            Share
                          </Link>
                          <Link to="/edit" className="dropdown-menu-item edit">
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="postImg-container">
                      {post.mimeType === "image/jpeg" ||
                      post.mimeType === "image/gif" ? (
                        <img
                          className="post-img"
                          src={post.postContent}
                          alt={post.postedBy}
                        />
                      ) : (
                        <video
                          loop
                          muted
                          controls
                          autoPlay
                          playsInline
                          className="post-img"
                          controlsList="nodownload"
                        >
                          <source src={postImage5} type={post.mimeType} />
                        </video>
                      )}
                    </div>
                    <div className="post-reactions-container">
                      <div className="likes-container">
                        <FcLike className="post-like-icon" />
                        <p className="likes-count">
                          {formatNumber(post.likes)}
                        </p>
                      </div>
                      <div className="comments-container">
                        <FaRegComment className="post-comment-icon" />
                        <p className="comments-count">
                          {formatNumber(post.comments)}
                        </p>
                      </div>
                      <div className="share-container">
                        <RiShareForwardLine className="post-share-icon" />
                        <p className="share-count">
                          {formatNumber(post.share)}
                        </p>
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
        {/* Trending Hashtags section */}

        <div className="home-right-top-container">
          <div className="hashtags-container">
            <div className="hashtags-wrapper">
              <div className="hashtags-heading-container">
                <h4 className="hashtags-heading">Trending Hashtags</h4>
              </div>
              <div className="hashtags">
                {trendingHashtags.map((hashtag, index) => {
                  return (
                    <div className="hashTagsWrapper" key={index}>
                      <p className="hashname">{hashtag.hashtag}</p>
                      <p className="hashtag-count">
                        {formatNumber(hashtag.Usage)}
                      </p>
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
