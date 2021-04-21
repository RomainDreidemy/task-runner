import React, { useCallback, useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import debounce from "lodash.debounce";

const HomeUserSearch = ({ users, setFilteredUsers }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (searchValue) => {
    setSearchText(searchValue)
    searchUsers(searchValue, users)
  }

  const searchUsers = useCallback(
    debounce((searchValue, users) => {
      if (!searchValue) {
        setFilteredUsers(users)
      } else {
        setFilteredUsers(filterUsers(searchValue, users))
      }
    }, 200), [])

  return (
    <View style={styles.searchBar}>
      <Ionicons style={styles.searchIcon} name="search" size={25} color="grey" />
      <TextInput
        style={styles.searchInput}
        onChangeText={handleSearchChange}
        value={searchText}
        placeholder="Search by name"
      />
    </View>
  )
}

export default HomeUserSearch;

function filterUsers(searchText, users) {
  const searchRegex = new RegExp(searchText, 'i')
  return users.filter((user) => searchRegex.test(user.name))
}

const styles = StyleSheet.create({
  searchBar: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#e1e0e6',
    borderRadius: 25,
    marginHorizontal: 10,
    marginTop: 20
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
  },
  searchIcon: {
    paddingLeft: 15,
    textAlignVertical: 'center',
  }
})