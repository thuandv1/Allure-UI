import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface Props {
  children: string;
  language?: string;
  style?: { [key: string]: React.CSSProperties };
  customStyle?: React.CSSProperties;
  border?: boolean;
}

function Code(props: Props) {
  const {
    children,
    language = "javascript",
    style = prism,
    border = false,
    customStyle
  } = props;
  return (
    <SyntaxHighlighter
      customStyle={{
        backgroundColor: "#fff",
        border: border ? "1px solid #f2f3f4" : "none",
        ...customStyle
      }}
      language={language}
      style={style}
    >
      {children}
    </SyntaxHighlighter>
  );
}

export default Code;
