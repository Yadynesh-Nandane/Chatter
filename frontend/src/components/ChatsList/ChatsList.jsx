import ChatPane from "../ChatPane/ChatPane";
import { useParams } from "react-router-dom";

const chatsList = [
  { name: "Yadynesh Nandane", messages: "Hi There" },
  { name: "Harsh Pillai", messages: "Hi There" },
  { name: "Jayesh Wanger", messages: "Hi There" },
  { name: "Rahul Battin", messages: "Hi There" },
];

const ChatsList = () => {
  const { id } = useParams();
  console.log("id: ", id);
  return (
    <div className="chatsList-main-container">
      <div className="chatsList-wrapper">
        {chatsList.map((chatItem, index) => {
          <div className="chat-item-wrapper" key={index}>
            <div className="chat-label-container">
              <p className="chat-label">{chatItem.name}</p>
            </div>
            <div className="chat-message-container">{chatItem.messages}</div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default ChatsList;
