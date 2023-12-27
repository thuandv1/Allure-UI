import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { heading, desc, usage } from "data/typography";
import { SampleText } from "./Sample/SampleText";

function Typography() {
  return (
    <Content title={heading} desc={desc}>
      <SectionContent title={usage.spacing.title} desc={usage.spacing.desc} />
      <SectionContent
        title={usage.font.title}
        extraCode={usage.font.code}
        component={<SampleText />}
      />
    </Content>
  );
}

export default Typography;
