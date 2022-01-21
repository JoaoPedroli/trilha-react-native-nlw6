import { useState } from "react";
import { Image, StatusBar, Text, View } from "react-native";
import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from "./styles";

export const Signin = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image source={IllustrationImg} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {"\n"}
          suas jogatinas {"\n"}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar sesus games {"\n"}
          favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com o discord" activeOpacity={0.7} />
      </View>
    </View>
  );
};