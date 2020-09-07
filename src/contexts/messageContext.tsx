import React from "react";
import { message, messages } from "../data/messages";
import { messageReducer, messageAction } from "../reducers/messageReducer";

export interface messageContext {
  msg: message[]
  dispatchMessage: React.Dispatch<messageAction>;
}

export const MessageContext = React.createContext<any | messageContext>(
  messages
);

export const MessageProvider: React.FC = ({children}): JSX.Element => {
  const [msg, dispatchMessage] = React.useReducer(messageReducer, messages);
  return (
    <MessageContext.Provider value={{ msg, dispatchMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
