/** @format */

import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Context } from '../App';

const Author = ({ name, email, id, navigation }) => {
  const { postNum, onPress } = useContext(Context);

  const numberOfPosts = postNum !== null ? postNum[id] : '';

  const initials = (name) => {
    let initials = name
      .split(' ')
      .filter(
        (item) =>
          item !== 'Mrs.' &&
          item !== 'Mr.' &&
          item !== 'Ms.' &&
          item !== 'Miss.',
      )
      .map((item) => item.match(/\b\w/g) || []);
    return (initials = (
      (initials.shift() || '') + (initials.shift() || '')
    ).toUpperCase());
  };

  return (
    <TouchableOpacity
      style={styles.authorContainer}
      onPress={onPress.bind(null, id, name, navigation)}
      activeOpacity={0.5}>
      <View style={styles.author}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials(name)}</Text>
        </View>
        <View>
          <Text style={styles.authorName}>{name}</Text>
          <Text style={styles.authorEmail}>{email}</Text>
        </View>
      </View>
      <View style={styles.num}>
        <View to="/posts">
          <Text style={styles.numText}>{numberOfPosts} Posts</Text>
        </View>
        <View to="/posts">
          <Image
            style={styles.numImage}
            source={require('../assets/arrow.png')}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Author;

const styles = StyleSheet.create({
  authorContainer: {
    width: 360,
    paddingHorizontal: 15,
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  num: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.44,
    color: '#382A2C',
  },
  numImage: {
    marginLeft: 10,
    marginTop: 4,
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#6FCF97',
    borderRadius: 99,
    marginRight: 16,
  },
  avatarText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.1,
    color: '#382A2C',
  },
  authorName: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.44,
    color: '#382A2C',
  },
  authorEmail: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 16,
    alignItems: 'center',
    letterSpacing: 0.4,
    color: '#382A2C',
    opacity: 0.54,
  },
});
