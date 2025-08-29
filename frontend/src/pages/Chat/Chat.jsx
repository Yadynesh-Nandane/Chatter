import { useParams } from "react-router-dom";
import ChatPane from "../../components/ChatPane/ChatPane";
import ChatsList from "../../components/ChatsList/ChatsList";

const Chat = () => {
  const { id } = useParams();
  return (
    <div className="chat-section-container">
      <ChatsList />
      {id ? (
        <ChatPane />
      ) : (
        <div className="noChat-container">
          <p className="noChat">Please select a chat to start conversation.</p>
        </div>
      )}
    </div>
  );
};

export default Chat;
