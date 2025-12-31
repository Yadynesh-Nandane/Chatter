import "./Chat.css";
import { useParams } from "react-router-dom";
import ChatPane from "../../components/ChatPane/ChatPane.jsx";
import ChatsList from "../../components/ChatsList/ChatsList.jsx";

const Chat = () => {
  const { id } = useParams();
  return (
    <div className="chat-section-container">
      <ChatsList />
      {id ? (
        <ChatPane />
      ) : (
        <h1 className="chatrenderingMessage">
          Select a chat to start conversation
        </h1>
      )}
    </div>
  );
};

export default Chat;
