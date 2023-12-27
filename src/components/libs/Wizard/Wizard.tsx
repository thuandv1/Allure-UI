import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { heading, desc, usage, whenToUse } from "data/wizard";
import { SampleHorizontal } from "./Example/HorizontalWizard";
import { SampleVertical } from "./Example/VerticalWizard";

function Wizard() {
  return (
    <Content title={heading} desc={desc}>
      <SectionContent title={whenToUse.title} desc={whenToUse.desc} />
      <SectionContent
        title={usage.horizontal.title}
        desc={usage.horizontal.desc}
        component={<SampleHorizontal />}
      />
      <SectionContent
        title={usage.vertical.title}
        desc={usage.vertical.desc}
        component={<SampleVertical />}
      />
    </Content>
  );
}

export default Wizard;
