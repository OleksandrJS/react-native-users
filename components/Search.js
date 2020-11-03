/** @format */

import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';

const Search = ({
  onSearchAuthors,
  authorsInput,
  setAuthorsInput,
  postsInput,
  setPostsInput,
}) => (
  <View style={styles.searchContainer}>
    <View style={styles.search}>
      <TextInput
        onChangeText={(input) =>
          onSearchAuthors ? setAuthorsInput(input) : setPostsInput(input)
        }
        style={styles.searchText}
        value={setAuthorsInput ? authorsInput : postsInput}
        placeholder="Search"
      />
      <Image
        style={styles.searchImage}
        source={require('../assets/Search.png')}
      />
    </View>
  </View>
);

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    marginTop: 24,
    width: 333,
  },
  searchText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    height: 40,
    backgroundColor: '#EFEEEE',
    borderRadius: 4,
    paddingLeft: 40,
  },
  searchImage: {
    width: 17.5,
    height: 17.5,
    position: 'absolute',
    top: 10,
    left: 10,
  },
});
