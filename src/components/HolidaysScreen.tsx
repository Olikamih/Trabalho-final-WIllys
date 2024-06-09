// HolidaysScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../../styles';

const HolidaysScreen: React.FC = () => {
  return (
    <View style={commonStyles.container}>
      <Text>Holidays Screen</Text>
    </View>
  );
};
  const [ano, setAno] = useState('');
  const [feriados, setFeriados] = useState<any[]>([]);

  const buscarFeriados = async () => {
    try {
      const response = await fetch(`https://calendario.com.br/api/api feriados?json=true&ano=${ano}`);
      const data = await response.json();
      setFeriados(data);
    } catch (error) {
      console.error('Erro ao buscar feriados:', error);
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Text>Digite o ano desejado:</Text>
      <TextInput
        placeholder="Ano"
        value={ano}
        onChangeText={setAno}
        style={styles.input}
      />
      <Button title="Buscar Feriados" onPress={buscarFeriados} />
      {feriados.length > 0 && (
        <View>
          <Text>Feriados:</Text>
          {feriados.map((feriado, index) => (
            <Text key={index}>{feriado.date}: {feriado.name}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default HolidaysScreen;
