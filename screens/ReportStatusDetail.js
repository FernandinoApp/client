import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ReportStatusDetail = () => {
    const route = useRoute();
    const { report } = route.params;

    return (
        <View>
            <Text>Name: {report.name}</Text>
            <Text>Location: {report.location}</Text>
            <Text>Comment: {report.comment}</Text>
            <Image source={{ uri: report.photo }} style={{ width: 100, height: 100 }} />
            <Text>
                Status: 
                {report.responded ? 
                    <Text style={{ color: 'green' }}> Responded</Text> : 
                    <Text style={{ color: 'grey' }}> Pending</Text>}
            </Text>
        </View>
    );
};

export default ReportStatusDetail;
