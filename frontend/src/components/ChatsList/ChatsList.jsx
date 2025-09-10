import "./ChatsList.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

import { useEffect } from "react";
import { axiosInstance } from "../../utils/axios.js";
import CustomButton from "../CustomButton/CustomButton.jsx";
import { useState } from "react";

// Demo Friends List for testing purpose
// const chatsList = [
//   { id: 1, name: "Yadynesh Nandane", messages: "Hi There" },
//   { id: 2, name: "Harsh Pillai", messages: "Hi There" },
//   { id: 3, name: "Jayesh Wanger", messages: "Hi There" },
//   { id: 4, name: "Rahul Battin", messages: "Hi There" },
// ];

const ChatsList = () => {
  const navigate = useNavigate();
  const [friendsList, setFriendsList] = useState([]);
  const user = useSelector((state) => state.auth?.signedIn.user);

  const logOutHandler = async () => {
    const result = await axiosInstance.get("auth/signout");
    if (result.status === 200) {
      navigate({ to: "/signin" });
    }
    console.log("logout result: ", result);
  };

  useEffect(() => {
    (async () => {
      const responce = await axiosInstance.get("user/friends");
      console.log("get all friends response: ", responce);
      setFriendsList(responce.data.friends);
    })();
  }, []);

  return (
    <div className="chatsList-main-container">
      <div className="chatsList-wrapper">
        <div className="chatlist-heading-container">
          <div className="chat-heading-wrapper">
            <h3 className="chatlist-heading">{user.name}</h3>
          </div>
          <div className="chatlist-heading-submenu-container">
            <BsThreeDotsVertical className="submenu-icon" />
            <div className="submenu-container">
              <span>
                <CustomButton
                  btnType="button"
                  loading={false}
                  disabled={false}
                  btnText="Logout"
                  onClick={logOutHandler}
                  btnClass="submenu-logoutBtn"
                />
              </span>
            </div>
          </div>
        </div>
        {friendsList.map((friend, index) => {
          return (
            <Link
              to={`/friends/${friend._id}`}
              className="chatList-nav-links"
              key={index}
            >
              <div className="chatlist-item-container">
                <div className="chat-item-wrapper">
                  <div className="chat-label-container">
                    <p className="chat-label">{friend.name}</p>
                  </div>
                  <div className="chat-message-container">
                    {/* <p className="chat-message">{friend.messages}</p> */}
                  </div>
                </div>
                <div className="chatMessage-count-container">
                  <div className="chatMessage-count-circle">
                    <p className="chatMessage-count">1</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ChatsList;
