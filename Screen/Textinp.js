import React, { useState } from 'react';
import { Text,Button, TextInput, View,Alert } from 'react-native';

const Textinp = () => {
  const [text, setText] = useState('');
  const [pasword, setPassword] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40,borderWidth:1,width:200,marginVertical:5}}
        placeholder="email"
        onChangeText={text => setText(text)}
        defaultValue={text}
        />
      <TextInput
      style={{height: 40,borderWidth:1,width:200,marginVertical:5}}
      placeholder="password"
      onChangeText={pasword => setPassword(pasword)}
      secureTextEntry={true}
      
      />
      <Button
        title="Login"
         onPress={() => Alert.alert(text+' '+pasword)
         
        }
      />
     {/* <Text style={{padding: 10, fontSize: 42}}>
        { {text.split(' ').map((word) => word && '🍕').join(' ')} }
      </Text>  */}
    </View>
  );
}

export default Textinp;