/** @format */

import React, { createContext, useEffect, useState } from 'react';
import { Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Authors from './screens/Authors';
import Posts from './screens/Posts';
import GetData from './services/GetData';

export const Context = createContext();

export default function App() {
  const fetchData = new GetData();
  const [authors, setAuthors] = useState(null);
  const [posts, setPosts] = useState(null);
  const [authorId, setAuthorId] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [allAuthors, setAllAuthors] = useState(null);
  const [allPosts, setAllPosts] = useState(null);
  const [postNum, setPostNum] = useState(null);
  const [authorsInput, setAuthorsInput] = useState('');
  const [postsInput, setPostsInput] = useState('');

  useEffect(() => {
    fetchData
      .getAuthors()
      .then((authors) => {
        setAuthors(authors);
        return authors;
      })
      .then((data) => setAllAuthors(data));
    fetchData
      .getPosts()
      .then((data) => {
        setAllPosts(data);
        return data;
      })
      .then((posts) => countNumberOfPosts(posts));
  }, []);

  useEffect(() => {
    if (allPosts === null) return;
    else filterPosts();
  }, [authorId, authorName]);

  useEffect(() => {
    console.log('authorsInput');
    if (allAuthors === null) return;
    else onSearchAuthors(authorsInput);
  }, [authorsInput]);

  useEffect(() => {
    if (allPosts === null) return;
    else onSearchPosts(postsInput);
  }, [postsInput]);

  const countNumberOfPosts = (arr) => {
    const numOfPosts = {};
    for (let el of arr) {
      if (numOfPosts[el.userId]) numOfPosts[el.userId] += 1;
      else numOfPosts[el.userId] = 1;
    }
    setPostNum(numOfPosts);
  };

  const filterPosts = () => {
    const posts = allPosts.filter((item) => item.userId === authorId);
    setPosts(posts);
  };

  const onPress = (id, name, navigation) => {
    setAuthorId(id);
    setAuthorName(name);
    setPostsInput('');
    navigation.navigate('Posts');
  };

  const onSearch = (arr, input, setMethod, prop1, prop2) => {
    const filteredArr = arr.filter((item) => {
      if (input.trim()) {
        return (
          item[prop1].toString().toLowerCase().includes(input.toLowerCase()) ||
          item[prop2].toString().toLowerCase().includes(input.toLowerCase())
        );
      } else {
        return arr;
      }
    });
    setMethod(filteredArr);
  };

  const onSearchAuthors = (input) => {
    onSearch(allAuthors, input, setAuthors, 'name', 'email');
  };

  const onSearchPosts = (input) => {
    onSearch(allPosts, input, setPosts, 'body', 'title');
  };

  const context = {
    postNum,
    onPress,
    authors,
    authorId,
    authorsInput,
    setAuthorsInput,
    onSearchAuthors,
    posts,
    postsInput,
    setPostsInput,
    authorName,
  };

  const Stack = createStackNavigator();

  const configOpen = {
    animation: 'spring',
    config: {
      stiffness: 500,
      damping: 200,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  const configClose = {
    animation: 'timing',
    config: {
      duration: 300,
      easing: Easing.linear,
    },
  };

  return (
    <NavigationContainer>
      <Context.Provider value={context}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Authors}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Posts"
            component={Posts}
            options={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              transitionSpec: {
                open: configOpen,
                close: configClose,
              },
            }}
          />
        </Stack.Navigator>
      </Context.Provider>
    </NavigationContainer>
  );
}
