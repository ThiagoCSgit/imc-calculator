import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./styles";

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: `Mensagem enviada pelo app, e meu imc é ${props.resultImc}`,
    });
  };
  return (
    <View style={styles.resultImc}>
      <View style={styles.boxShareButton}>
        <Text style={styles.message}>{props.messageResultImc}</Text>
        <Text style={styles.imcValue}>{props.resultImc}</Text>
        <TouchableOpacity style={styles.share} onPress={onShare}>
          <Text style={styles.sharedText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
