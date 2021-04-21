import React, { useCallback, useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
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
    <View>
      <TextInput
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

