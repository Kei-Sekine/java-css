import { InlineStyle } from "./components/inlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/Styled.jsx";
import "./styles.css";
import { StyledComponents } from "./components/StyledComponents";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </div>
  );
}
