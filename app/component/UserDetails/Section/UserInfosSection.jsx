import React from "react";
import {Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Map from "../Map";

const UserInfosSection = ({user}) => {
    return (
        <View>
            <View style={styles.infosSection}>
                <View style={{padding: 20}}>
                    <View style={styles.userImage}>
                        <Ionicons style={styles.userIcon} name="person" size={25} color="white" />
                    </View>
                    <Text style={styles.infoName}>{user.name}</Text>
                    <Text style={styles.infoCompany}>{user?.company?.name}</Text>


                    <View style={styles.infoGroup}>
                        <Text style={styles.infoLabel}>Téléphone</Text>
                        <Text style={styles.infoLine}>{user.phone}</Text>
                    </View>

                    <View style={styles.infoGroup}>
                        <Text style={styles.infoLabel}>Email</Text>
                        <Text style={styles.infoLine}>{user.email}</Text>
                    </View>
                </View>

                {
                    user.name ? <Map user_id={user.id} title={user.name} lat={user.address.geo.lat} lng={user.address.geo.lng} /> : <Text>Loading...</Text>
                }
            </View>
        </View>
    )
}


const styles = {
    infosSection: {
        border: 1,
        borderColor: '#eee',
        backgroundColor: '#fff',
    },
    infoGroup: {
        borderBottomWidth: 1,
        borderBottomColor: '#909090',
        paddingBottom: 5,
        marginTop: 20
    },
    infoName: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '600',
        marginTop: 15
    },
    infoCompany: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 5
    },
    infoLabel: {
    },
    infoLine: {
        fontSize: 20,
        color: '#46AAF2'
    },
    userImage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: 50,
        width: 50,
        backgroundColor: '#e6e4e6',
        borderRadius: 500,
        marginRight: 15
    },
    map: {
        height: 250
    }
}

export default UserInfosSection;
