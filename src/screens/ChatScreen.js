import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Chat, defaultTheme } from '@flyerhq/react-native-chat-ui'


const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const user = { id: '06c33e8b-e835-4736-80f4-63f44b66666c' } //filler

  const addMessage = (message) => {
    setMessages([message, ...messages]);
  }

  const onPress = (message) => {
    const textMessage = {
      author: user,
      createdAt: Date.now(),
      id: 0, //TESTING PURPOSES
      text: message.text,
      type: 'text'
    }
    addMessage(textMessage)
  }

  return (
    <Chat
      theme={{ ...defaultTheme, colors: { ...defaultTheme.colors, primary: '#8785A2' }, }}
      messages={messages}
      user={user}
      onSendPress={onPress}
    />

  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
