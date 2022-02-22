import io from "socket.io-client";
import { useState, useEffect } from "react";
import Chat from "../components/debate_room/Chat";

export default function DebateRoom() {
  const [socket, setSocket] = useState({});

  useEffect(() => {
    setSocket(io(`${process.env.REACT_APP_API_URL}`));
  }, []);

  return (
    <div>
      <h1>-DebateRoom-</h1>
      {Object.keys(socket).length === 0 ? <div>Loading</div> : <Chat socket={socket} />}
    </div>
  );
}
