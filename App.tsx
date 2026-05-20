import { SafeAreaProvider } from "react-native-safe-area-context";
import { CalculatorScreen } from "./src/presentation/screens/CalculatorScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <CalculatorScreen />
    </SafeAreaProvider>
  );
}
