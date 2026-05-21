import { View, Text } from "react-native";
import { colors, space } from "../../../themes";

export const Display = ({ value }: any) => (
  <View style={{ padding: space.l, backgroundColor: colors.black }}>
    <Text style={{ color: colors.white, fontSize: 40, textAlign: "right" }}>
      {value}
    </Text>
  </View>
);