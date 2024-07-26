import { View, Text, StyleSheet } from "react-native";
import React from "react"; 
import moment from "moment";

const PostCard = ({posts}) => {
  return (
    <View>
      <Text style={styles.heading}>Total Posts {posts?.length}</Text>
        {posts?.map((post,i) => (
            <View style={styles.card}>
            <Text>Title: {post?.title}</Text>
            <Text> {post?.description}</Text>
            <View>
            <Text> {post?.postedBy?.name}</Text>
            <Text> {moment(post?.createdAt).format("DD:MM:YYYY")}</Text>

            </View>
            </View>
        ))}
    </View>
  );
};
const styles = StyleSheet.create({
    heading: {
        color: "green",
        textAlign: "center",
},
    card:{
        width: "100",
        backgroundColor: "White",
        borderWidth: 1,
    },
});

export default PostCard;