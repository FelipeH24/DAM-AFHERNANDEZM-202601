import { View } from "react-native";
import { Button, Display, ButtonRow } from "../../";
import { useCalculator } from "../../../hooks";
import { space } from "../../../themes";

export const Calculator = () => {
  const { current, total, handleNumber, handleOperation, calculate } =
    useCalculator();

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: space.l }}>
      <Display value={current !== 0 ? current : total} />

      <ButtonRow>
        <Button label="1" onPress={() => handleNumber(1)} />
        <Button label="2" onPress={() => handleNumber(2)} />
        <Button label="3" onPress={() => handleNumber(3)} />
      </ButtonRow>

      <ButtonRow>
        <Button label="4" onPress={() => handleNumber(4)} />
        <Button label="5" onPress={() => handleNumber(5)} />
        <Button label="6" onPress={() => handleNumber(6)} />
      </ButtonRow>

      <ButtonRow>
        <Button label="7" onPress={() => handleNumber(7)} />
        <Button label="8" onPress={() => handleNumber(8)} />
        <Button label="9" onPress={() => handleNumber(9)} />
      </ButtonRow>

      <ButtonRow>
        <Button label="0" onPress={() => handleNumber(0)} />
      </ButtonRow>

      <ButtonRow>
        <Button label="+" onPress={() => handleOperation("+")} />
        <Button label="-" onPress={() => handleOperation("-")} />
        <Button label="*" onPress={() => handleOperation("*")} />
        <Button label="/" onPress={() => handleOperation("/")} />
      </ButtonRow>

      <Button label="=" onPress={calculate} />
    </View>
  );
};