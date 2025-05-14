import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface UserCardProps {
  name: string;
  email: string;
}

export const UserCard: React.FC<UserCardProps> = ({name, email}) => {
  return (
    <View style={styles.userItem}>
      <Text style={styles.userName}>{name}</Text>
      <Text style={styles.userEmail}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#555',
  },
});
