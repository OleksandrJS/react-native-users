/** @format */

import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Author from '../components/Author';
import Search from '../components/Search';
import { Context } from '../App';

const Authors = ({ navigation }) => {
  const {
    authors,
    onSearchAuthors,
    authorsInput,
    setAuthorsInput,
  } = useContext(Context);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Authors</Text>
      <Search
        onSearchAuthors={onSearchAuthors}
        authorsInput={authorsInput}
        setAuthorsInput={setAuthorsInput}
      />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={authors}
        renderItem={({ item }) => <Author {...item} navigation={navigation} />}
      />
    </View>
  );
};

export default Authors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.44,
    color: '#000000',
    marginLeft: 15,
  },
});
