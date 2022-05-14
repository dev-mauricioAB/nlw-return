import React from "react";
import { TouchableOpacity, View, Text, Image, TextInput } from "react-native";
import { ArrowLeft } from "phosphor-react-native";

import { FeedbackType } from "../Widget";
import { ScreenshotButton } from "../ScreenshotButton";

import { theme } from "../../theme";
import { styles } from "./styles";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Button } from "../Button";

interface Props {
  feedbackType: FeedbackType;
}

export function Form({ feedbackType }: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image style={styles.image} source={feedbackTypeInfo.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não esta legal. Faça ficar legal, seu dev meia boca. 🗯  "
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          screenshot="https://avatars.githubusercontent.com/u/62599099?s=400&u=8a8b7794ad4b35e61155aead047e4e92cd6170c2&v=4"
          onRemoveShot={() => {}}
          onTakeShot={() => {}}
        />
        <Button isLoading={false} />
      </View>
    </View>
  );
}
