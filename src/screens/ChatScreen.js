import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useLayoutEffect, useCallback } from 'react';
import { Chat, defaultTheme } from '@flyerhq/react-native-chat-ui';
import { firebase } from '../firebase/config'
import { collection, addDoc, orderBy, query, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';



const ChatScreen = ({ route, navigation }) => {
  const [messages, setMessages] = useState([]);
  const user = { id: getAuth().currentUser.uid }
  const { user1, user2 } = route.params;

  createChatID = () => {
    const sortID = [];
    sortID.push(user1);
    sortID.push(user2);
    sortID.sort();
    return sortID.join('_');
  };

  const chatID = createChatID();



  //https://blog.jscrambler.com/build-a-chat-app-with-firebase-and-react-native
  useLayoutEffect(() => {
    const collectionRef = collection(firebase.firestore(), 'pairs', chatID, 'chats');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
      setMessages(
        querySnapshot.docs.map(doc => ({
          author: doc.data().author,
          createdAt: doc.data().createdAt,
          id: doc.data().id,
          text: doc.data().text,
          type: doc.data().type
        }))
      );
    });

    return unsubscribe;
  });

  //https://blog.jscrambler.com/build-a-chat-app-with-firebase-and-react-native
  const onPress = useCallback((message) => {
    const textMessage = {
      author: user,
      createdAt: Date.now(),
      id: uuidv4(),
      text: message.text,
      type: 'text'
    }

    setMessages([textMessage, ...messages]);
    addDoc(collection(firebase.firestore(), 'pairs', chatID, 'chats'), textMessage);
  }, []);



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
