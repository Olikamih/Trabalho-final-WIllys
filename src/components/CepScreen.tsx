import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

const CepScreen: React.FC = () => {
  return (
    <View style={commonStyles.container}>
      <Text>CEP Screen</Text>
    </View>
  );
};
  const [cep, setCep] = useState('');
  const [result, setResult] = useState<any>(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://cep.republicavirtual.com.br/web_cep.php?cep=${cep}&formato=json`);
      setResult(response.data);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Digite o CEP"
        onChangeText={text => setCep(text)}
        value={cep}
      />
      <Button title="Buscar" onPress={handleSearch} />
      {result && result.resultado === '1' && (
        <View>
          <Text>CEP: {result.cep}</Text>
          <Text>Logradouro: {result.logradouro}</Text>
          <Text>Bairro: {result.bairro}</Text>
          <Text>Cidade: {result.cidade}</Text>
          <Text>Estado: {result.uf}</Text>
        </View>
      )}
      {result && result.resultado === '0' && (
        <Text>CEP não encontrado</Text>
      )}
    </View>
  );
};

export default CepScreen;
