import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { heading, desc, usage, whenToUse } from "data/avatar";
import { SampleBasic } from "./Example/BasicAvatar";
import { SampleImage } from "./Example/ImageAvatar";
import { SampleSquare } from "./Example/SquareAvatar";

function Avatar() {
  return (
    <Content title={heading} desc={desc}>
      <SectionContent
        title={whenToUse.title}
        desc={whenToUse.desc}
        uses={whenToUse.uses}
      />
      <SectionContent
        title={usage.basic.title}
        desc={usage.basic.desc}
        extraCode={usage.basic.code}
        component={<SampleBasic />}
      />
      <SectionContent
        title={usage.image.title}
        desc={usage.image.desc}
        extraCode={usage.image.code}
        component={<SampleImage />}
      />
      <SectionContent
        title={usage.square.title}
        desc={usage.square.desc}
        extraCode={usage.square.code}
        component={<SampleSquare />}
      />
    </Content>
  );
}

export default Avatar;
