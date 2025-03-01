import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config';
import { useNavigation } from '@react-navigation/native';
import { useCounterStore } from '../../store/counter-store';

export const SettingsScreen = () => {
  const count = useCounterStore(state => state.count);
  const incrementBy = useCounterStore(state => state.incrementBy);
  const zero = useCounterStore(state => state.setZero);

  const navigate = useNavigation();

  useEffect(() => {
    navigate.setOptions({
      title: `Contador: ${ count }`,
    })
  }, [count, navigate]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: {count}</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => incrementBy(+1)}
      >
        <Text>+1</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() => incrementBy(-1)}
      >
        <Text>-1</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() => zero()}
      >
        <Text>Reiniciar</Text>
      </Pressable>
    </View>
  )
}
