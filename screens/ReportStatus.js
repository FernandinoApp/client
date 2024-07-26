import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { AuthContext } from "../context/authContext";
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ReportStatus = () => {
    const [state, setState, addRespondedReport] = useContext(AuthContext);
    const navigation = useNavigation();

    const renderReportItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Report Details", { report: item })}>
            <View>
                <Text style={{ fontWeight: 'bold' }}>{item.type}: {item.category}</Text>
                <Text>{new Date(item.createdAt).toLocaleString()}</Text>
                <Text>
                    {state.respondedReports[item._id] 
                        ? <FontAwesome name="check-circle" size={24} color="green" /> 
                        : <FontAwesome name="clock-o" size={24} color="grey" />}
                </Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={state.reports}
            renderItem={renderReportItem}
            keyExtractor={item => item._id}
        />
    );
};

export default ReportStatus;