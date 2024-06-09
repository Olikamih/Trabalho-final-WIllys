import React from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import styles from '../../styles';

type MenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Menu'>;

type Props = {
  navigation: MenuScreenNavigationProp;
};

const MenuScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://via.placeholder.com/300' }} 
        style={styles.backgroundImage} 
      />
      <Button
        title="Entrar"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
};

export default MenuScreen;
