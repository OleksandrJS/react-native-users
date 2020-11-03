/** @format */

import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Context } from '../App';
import Post from '../components/Post';
import Search from '../components/Search';

const Posts = () => {
  const { posts, authorName, authorId, postsInput, setPostsInput } = useContext(
    Context,
  );
  return (
    <View style={styles.postsContainer}>
      <Text style={styles.postsTitle}>{authorName}'s Posts</Text>
      <Search postsInput={postsInput} setPostsInput={setPostsInput} />
      {posts !== null && (
        <ScrollView style={styles.scrollPostsContainer}>
          {posts.map((post, i) => {
            if (post.userId === authorId) {
              if (i === 0) {
                return <Post {...post} key={post.id} mt={{ marginTop: 24 }} />;
              } else {
                return <Post {...post} key={post.id} />;
              }
            }
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  postsContainer: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  postsTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.44,
    color: '#000000',
    marginLeft: 15,
  },
  scrollPostsContainer: {
    // paddingTop: 10,
  },
});
