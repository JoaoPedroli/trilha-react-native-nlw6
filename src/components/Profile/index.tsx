import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Avatar } from '../Avatar';

export const Profile = () => {
  return (
    <View style={styles.container}>
      <Avatar urlImage='https://github.com/Joao010.png' />
      <View style={styles.user}>
        <View>
          <Text style={styles.greeting}>Olá</Text>

          <Text style={styles.username}>JP</Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>
    </View>
  )
}