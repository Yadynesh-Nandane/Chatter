import "./ChatPane.css";
import { useParams } from "react-router-dom";

const ChatPane = () => {
  const { id } = useParams();

  return (
    <div className="chatpane-container">
      {id ? (
        <h1 className="renderingMessage">Chat Feature Comming Soon</h1>
      ) : (
        <h1 className="renderingMessage">Select a chat to start chatting!!!</h1>
      )}
    </div>
  );
};

export default ChatPane;
