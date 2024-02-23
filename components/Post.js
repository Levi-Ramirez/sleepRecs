import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

function formatDate(timestamp) {
    const date = new Date(timestamp);
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const day = date.getDate();
    const year = date.getFullYear();
    
    return `${month}-${day}-${year}`;
}

const Post = ({ post }) => {

    const navigation = useNavigation()
    // return (
    //     <TouchableOpacity style={styles.item} onPress={() => { navigation.navigate('QuestInfoScreen', { postTitle: post.title, steps: post.steps, day: post.day, caffeine: post.caffeine, sleepQuality: post.sleepQuality, description: post.post }) }}>
    //         <View style={styles.content}>
    //             <View style={{ padding: 15, width: '60%' }}>
    //                 <View style={{ borderRadius: 0, backgroundColor: '#FFF', borderBottomWidth: 2, borderColor: '#3d3dac', marginBottom: 20, padding: 10, alignItems: 'center'}}>
    //                     <Text style={{ fontSize: 20, fontWeight: 800, color: '#3d3dac'}}>{post.day}</Text>
    //                 </View>
    //                 <Text style={{ marginBottom: 30, fontSize: 23, fontWeight: 600, color: '#2b2d42' }}>Caffeine</Text>
    //                 <Text style={{ marginBottom: 30, fontSize: 23, fontWeight: 600, color: '#2b2d42' }}>Steps</Text>
    //                 <Text style={{ marginBottom: 10, fontSize: 23, fontWeight: 600, color: '#2b2d42' }}>Sleep Quality</Text>
    //             </View>
    //             <View style={styles.tag}>
    //                 <Text style={{ marginTop: 65, fontSize: 20, fontWeight: 600, color: '#FFF' }}>{post.caffeine} mg</Text>
    //                 <Text style={{ marginTop: 35, marginBottom: 15, fontSize: 20, fontWeight: 600, color: '#FFF' }}>{post.steps}</Text>
    //                 <Text style={{ marginTop: 20, fontSize: 20, fontWeight: 600, color: '#FFF' }}>{post.sleepQuality}</Text>
    //             </View>
    //         </View>
    //     </TouchableOpacity>
    // )

    return (
        <TouchableOpacity style={styles.item} activeOpacity={1} onPress={() => { }}>
            <View style={styles.content}>
                <View style={{ padding: 15, width: '60%' }}>
                    <View style={{ borderRadius: 0, backgroundColor: '#FFF', borderBottomWidth: 2, borderColor: '#3d3dac', marginBottom: 20, padding: 10, alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 800, color: '#3d3dac' }}>{ formatDate(post.date) }</Text>
                    </View>
                    <Text style={{ marginBottom: 30, fontSize: 23, fontWeight: 600, color: '#2b2d42' }}>Sleep Duration</Text>
                    <Text style={{ marginBottom: 30, fontSize: 23, fontWeight: 600, color: '#2b2d42' }}>Activity Duration</Text>
                </View>
                <View style={styles.tag}>
                    <Text style={{ marginTop: 65, fontSize: 20, fontWeight: 600, color: '#FFF' }}>{post.sleepDuration}</Text>
                    <Text style={{ marginTop: 65, fontSize: 20, fontWeight: 600, color: '#FFF' }}>{post.activityDuration} mins</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Post

const styles = StyleSheet.create({
    item: {
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '10%',
        marginLeft: '10%',
        marginTop: '0%',
        marginBottom: '3%',
        backgroundColor: '#FFF',
        borderWidth: 3,
        borderColor: '#7b2cbf',
        borderRadius: 10,

        // also need to do for android using elevation
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            },
            android: {
                elevation: 5,
            },
        }),

    },
    tag: {
        backgroundColor: '#3d3dac',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flexDirection: 'row',
        flex: 1
    }
})