import './ChatPane.css';
import { useParams } from "react-router-dom";

const ChatPane = () => {
  const { id } = useParams();

  return (
    <div className="chatpane-container">
      {id ? (
        <p className="renderingMessage">Hi chat with chat id: {id}</p>
      ) : (
        <p className="renderingMessage">Select a chat to start chatting!!!</p>
      )}
    </div>
  );
};

export default ChatPane;
