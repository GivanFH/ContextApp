import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useProfileStore } from '../../store/profile-store'
import { styles } from '../../../config';

export const ProfileScreen = () => {

  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({ name: 'Ivan Flores' })}
      >
        <Text>Cambiar nombre</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({ email: 'ivan_2333@outlook.com' })}
      >
        <Text>Cambiar email</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile('John Doe', 'johndoe@gmail.com')}
      >
        <Text>Revertir cambios</Text>
      </Pressable>
    </View>
  )
}
