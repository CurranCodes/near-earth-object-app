import { StyledButton } from "@/components/StyledButton";
import { DatePicker } from "@/components/DatePicker";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index(){
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DatePicker></DatePicker>
      <StyledButton 
        text="Lookup NEOs"
        fontSize={30}>

      </StyledButton>
    </SafeAreaView>
  );
}
