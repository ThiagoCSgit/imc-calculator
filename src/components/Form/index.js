import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Keyboard,
  Pressable,
  FlatList,
} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./styles";

export default function Form() {
  const [imc, setImc] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha a altura e o peso");
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [textButton, setTextButton] = useState("Calcular IMC");
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setImcList] = useState([]);

  function imcCalculator() {
    let totalImc = (
      weight.replace(",", ".") /
      height.replace(",", ".") ** 2
    ).toFixed(2);
    setImcList([...imcList, { id: new Date().getTime(), imc: totalImc }]);
    setImc(totalImc);
  }

  function validationImc() {
    Keyboard.dismiss();
    if (weight != null && height != null) {
      imcCalculator();
      setMessageImc("Seu imc é igual a");
      setTextButton("Calcular novamente");
      setHeight(null);
      setWeight(null);
      setErrorMessage(null);
    } else {
      setImc(null);
      verirficationImc();
      setTextButton("Calcular IMC");
    }
  }

  function verirficationImc() {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage("Campo obrigatório*");
    }
  }

  return (
    <View style={styles.formContext}>
      {imc == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Altura</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Ex: 1.75"
            keyboardType="numeric"
            onChangeText={setHeight}
            value={height}
          />
          <Text style={styles.errorMessage}>{errorMessage}</Text>

          <Text style={styles.formLabel}>Peso</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Ex: 75.5"
            keyboardType="numeric"
            onChangeText={setWeight}
            value={weight}
          />
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TouchableOpacity onPress={validationImc} style={styles.formButton}>
            <Text style={styles.textButton}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={styles.exhibitionResultImc}>
          <ResultImc messageResultImc={messageImc} resultImc={imc} />
          <TouchableOpacity onPress={validationImc} style={styles.formButton}>
            <Text style={styles.textButton}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        style={styles.listImc}
        data={imcList.reverse()}
        renderItem={({ item }) => {
          return (
            <Text style={styles.resultImcItem}>
              <Text style={styles.textResultItemList}>Resultado IMC = </Text>
              {item.imc}
            </Text>
          );
        }}
        keyExtractor={(item) => {
          item.id;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
