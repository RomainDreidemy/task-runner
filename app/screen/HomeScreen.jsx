import React, {useEffect, useState} from 'react';

import UserApi from "../src/api/UserApi";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SearchBar} from 'react-native-elements';


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
//   },
//   scrollView: {
//     backgroundColor: 'pink',
//     marginHorizontal: 20,
//   },
//   text: {
//     fontSize: 42,
//   },
// });

const HomeScreen = ({navigation}) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setUsers(await UserApi.getUsers());
    }

    fetchDataAsync()
  }, [])

  return (

    <View style={[{
      flex: 1,
      padding: 10,
    }, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <SearchBar
        placeholder="Type Here..."
        // onChangeText={this.updateSearch}
        // value={search}
      />
      <View style={{flex: 6, backgroundColor: "red"}}>
        <ScrollView style={{flex: 1, backgroundColor: 'red'}}>
          <View style={styles.container}>
            {
              users.map(user => {
                return <TouchableOpacity onPress={() => {
                  navigation.navigate('UserDetails', {id: user.id})
                }}>
                  <Text style={{height: 80}}>{user.name}</Text>
                </TouchableOpacity>
              })
            }
          </View>
        </ScrollView>

      </View>
      <View style={{flex: 3, backgroundColor: "darkorange"}}/>
    </View>







    // <View style={[{
    //   flex: 1,
    //   padding: 20,
    // }, {
    //   // Try setting `flexDirection` to `"row"`.
    //   flexDirection: "column"
    // }]}>
    //
    //
    //   <View style={{flex: 6, backgroundColor: "red"}}>
    //     <ScrollView style={{flex: 6, backgroundColor: 'red'}}>
    //       <View style={styles.container}>
    //         {
    //           users.map(user => {
    //             return <TouchableOpacity onPress={() => {
    //               navigation.navigate('UserDetails', {id: user.id})
    //             }}>
    //               <Text style={{height: 80}}>{user.name}</Text>
    //             </TouchableOpacity>
    //           })
    //         }
    //       </View>
    //     </ScrollView>
    //   </View>
    //   <View style={{flex: 2, backgroundColor: "darkorange"}}/>
    //   <View style={{flex: 3, backgroundColor: "green"}}/>
    // </View>


    // <SafeAreaView style={styles.container}>
    //     <ScrollView style={{flex: 1, backgroundColor: 'red'}}>
    //         <Text style={styles.text}>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //             minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //             aliquip ex ea commodo consequat. Duis aute irure dolor in
    //             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //             culpa qui officia deserunt mollit anim id est laborum.
    //         </Text>
    //     </ScrollView>
    //     <ScrollView style={{flex: 2, backgroundColor: 'pink'}}>
    //         <Text style={styles.text}>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //             minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //             aliquip ex ea commodo consequat. Duis aute irure dolor in
    //             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //             culpa qui officia deserunt mollit anim id est laborum.
    //         </Text>
    //     </ScrollView>
    // </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: 'blue'
  },
});

export default HomeScreen;
