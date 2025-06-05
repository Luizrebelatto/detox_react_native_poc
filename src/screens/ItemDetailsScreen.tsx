import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  ItemDetails: {
    item: {
      id: number;
      title: string;
      description: string;
    };
  };
};

type Props = NativeStackScreenProps<RootStackParamList, 'ItemDetails'>;

const ItemDetailsScreen: React.FC<Props> = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Information about item</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>ID:</Text>
        <Text style={styles.value}>{item.id}</Text>
        
        <Text style={styles.label}>Title:</Text>
        <Text style={styles.value}>{item.title}</Text>
        
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    marginBottom: 20,
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  detailsContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    color: '#333',
    marginBottom: 15,
  },
});

export default ItemDetailsScreen; 