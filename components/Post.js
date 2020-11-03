/** @format */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Post = ({ body, title, mt }) => {
  const capitalLetter = (text) =>
    text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
  return (
    <View style={[styles.post, { ...mt }]}>
      <Text style={styles.postTitle}>{capitalLetter(title)}</Text>
      <Text style={styles.postDesc}>{capitalLetter(body)}</Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  post: {
    backgroundColor: 'white',
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginHorizontal: 15,
  },
  postTitle: {
    marginBottom: 10,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    alignItems: 'center',
    letterSpacing: 0.44,
  },
  postDesc: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'left',
    letterSpacing: 0.4,
    color: '#382A2C',
    opacity: 0.5,
  },
});
