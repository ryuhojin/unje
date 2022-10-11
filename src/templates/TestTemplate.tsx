import { ThemeProvider } from "styled-components";
import useTheme from "@/libs/hooks/useTheme";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const TestTemplate = ({ children }: Props) => {
  const [theme] = useTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default TestTemplate;
