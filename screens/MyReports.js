import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { ReportsContext } from '../context/ReportsContext';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const getStatusIcon = (status) => {
  if (status === 'Responded') return <FontAwesome5 name="check-circle" size={24} color="green" />;
  return <FontAwesome5 name="clock" size={24} color="grey" />;
};

const getStatus = (report) => {
  if (report.archived) return 'Archived';
  if (report.responded) return 'Responded';
  return 'Pending';
};

const ReportDetails = ({ report, onBack }) => {
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.title}>{report.category}</Text>
      <Text style={styles.detail}>Location: {report.barangay}, {report.location}</Text>
      <Text style={styles.detail}>Comment: {report.comment}</Text>
      <Text style={styles.detail}>Reported by: {report.fullName}</Text>
      {report.image && <Image source={{ uri: report.image }} style={styles.image} />}
      <View style={styles.statusContainer}>
        {getStatusIcon(getStatus(report))}
        <Text style={styles.statusText}>{getStatus(report)}</Text>
      </View>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
      <FontAwesome5 name="arrow-left" size={30} color="#f15b5b" marginTop={70} marginLeft={65} />
        <Text style={styles.backText}>Back to List</Text>
      </TouchableOpacity>
    </View>
  );
};

const MyReports = () => {
  const { reports, emergencies, loading } = useContext(ReportsContext);
  const [selectedReport, setSelectedReport] = useState(null);

  const renderReport = (report, index) => (
    <TouchableOpacity key={index} style={styles.messageCard} onPress={() => setSelectedReport(report)}>
      <View style={styles.messageInfo}>
        <Text style={styles.messageTitle}>
        {report.reportType ? `${report.reportType}: ` : ''}{report.category}
        </Text>
        <Text style={styles.messageDate}>{new Date(report.createdAt).toLocaleString()}</Text>
      </View>
      {getStatusIcon(getStatus(report))}
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (selectedReport) {
    return <ReportDetails report={selectedReport} onBack={() => setSelectedReport(null)} />;
  }

  return (
    <ImageBackground source={require("./../assets/assets_cover.png")} style={styles.backgroundImage}>
    <View style={styles.container}>
      <ScrollView>
        {reports.length === 0 && emergencies.length === 0 ? (
          <Text style={styles.noReports}>You haven't submitted any reports yet.</Text>
        ) : null}

        {reports.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>INCIDENT REPORTS</Text>
            {reports.map(renderReport)}
          </>
        )}

        {emergencies.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>EMERGENCIES</Text>
            {emergencies.map((report, index) => (
              <TouchableOpacity key={index} style={styles.messageCard} onPress={() => setSelectedReport(report)}>
                <View style={styles.messageInfo}>
                  <Text style={styles.messageTitle}>{report.category}</Text>
                  <Text style={styles.messageDate}>{new Date(report.createdAt).toLocaleString()}</Text>
                </View>
                {getStatusIcon(getStatus(report))}
              </TouchableOpacity>
            ))}
          </>
        )}
      </ScrollView>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  messageCard: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageInfo: {
    flex: 1,
  },
  messageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: "GeologicaSemiBold"
  },
  messageDate: {
    marginTop: 5,
    fontFamily: "GeologicaRegular",
    color: '#666',
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: "GeologicaSemiBold",
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    fontFamily: "GeologicaRegular",
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 270,
    marginTop: 10,
  },
  noReports: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 17,
    fontFamily: "GeologicaSemiBold",
  },
  sectionTitle: {
    textAlign: 'center',
    fontFamily: 'GeologicaBold',
    fontSize: 23,
    marginVertical: 10,
    
  },
  backText: {
    textAlign: 'center',
    marginTop: -30,
    marginLeft: 25,
    fontSize: 30,
    color: '#f15b5b',
    fontFamily: "GeologicaBold",
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  statusText: {
    marginLeft: 5,
    fontSize: 18,
    fontFamily: "GeologicaSemiBold",
  },
});

export default MyReports;
