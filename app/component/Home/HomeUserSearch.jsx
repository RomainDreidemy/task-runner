import React, { useCallback, useState } from 'react';
import { StyleSheet, View, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import debounce from "lodash.debounce";

const HomeUserSearch = ({ users, setFilteredUsers }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (searchValue) => {
    setSearchText(searchValue)
    searchUsers(searchValue, users)
  }

  const resetSearch = () => {
    setSearchText("")
    setFilteredUsers(users)
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
      <Ionicons style={[styles.icon, styles.searchIcon]} name="search" size={25} color="black" />
      <TextInput
        style={styles.searchInput}
        onChangeText={handleSearchChange}
        value={searchText}
        placeholder="Search by name"
      />

      {searchText.length > 0 &&
        <Pressable
          style={styles.searchReset}
          onPress={resetSearch}
        >
          <Ionicons style={styles.resetIcon} name="close-circle" size={25} color="grey" />
        </Pressable>
      }

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
    height: 60,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 10,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  icon: {
    textAlignVertical: 'center'
  },
  searchIcon: {
    marginLeft: 15,
    marginRight: 10
  },
  searchReset: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    opacity: 0.5
  }
})
