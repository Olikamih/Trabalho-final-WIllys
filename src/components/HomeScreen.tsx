// HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../../styles';

const HomeScreen: React.FC = () => {
  return (
    <View style={commonStyles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};
  const [estado, setEstado] = useState('');
  const [resultado, setResultado] = useState<any>(null); // any para os resultados da API do IBGE

  const buscarEstado = async () => {
    try {
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}`);
      const data = await response.json();
      setResultado(data); 
    } catch (error) {
      console.error('Erro ao buscar estado:', error);
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Text>Digite a UF do estado que deseja buscar:</Text>
      <TextInput
        placeholder="UF do Estado (ex: SP)"
        value={estado}
        onChangeText={setEstado}
        style={styles.input}
      />
      <Button title="Buscar Estado" onPress={buscarEstado} />
      {resultado && (
        <View>
          <Text>Nome: {resultado.nome}</Text>
          <Text>Sigla: {resultado.sigla}</Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
