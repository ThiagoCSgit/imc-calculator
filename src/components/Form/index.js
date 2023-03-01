import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./styles";

export default function Form() {
  const [imc, setImc] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha a altura e o peso");
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [textButton, setTextButton] = useState("Calcular IMC");
  const [errorMessage, setErrorMessage] = useState(null);

  function imcCalculator() {
    return setImc((weight / height ** 2).toFixed(2));
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setMessageImc("Seu imc é igual a");
      setTextButton("Calcular novamente");
      setHeight(null);
      setWeight(null);
      return;
    }
    setImc(null);
    setTextButton("Calcular IMC");
    setMessageImc("Preencha a altura e o peso");
    setErrorMessage(null);
  }

  function verirficationImc() {
    if (imc == null) {
      setErrorMessage("Campo obrigatório*");
    }
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessage}>{{ errorMessage }}</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Ex: 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height}
        />

        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Ex: 75.5"
          keyboardType="numeric"
          onChangeText={setWeight}
          value={weight}
        />
        <TouchableOpacity onPress={validationImc} style={styles.formButton}>
          <Text style={styles.textButton}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
