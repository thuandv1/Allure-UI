import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { desc, heading, usage, dontUse } from "data/breadcrumb";
import { SampleRoot } from "./Example/SampleRoot";
import { SampleNonClickable } from "./Example/SampleNonClick";
import { SampleBasic } from "./Example/SampleBasic";
import { SampleOverflowIndex } from "./Example/SampleOverFlowIndex";
import { SampleMaxDisplayedItems } from "./Example/SampleMaxDisplay";

function Breadcrumb() {
  return (
    <Content title={heading} desc={desc}>
      <SectionContent title="" desc={usage.basic.desc}>
        <p>
          <b>{dontUse.title}</b>
        </p>
        <br />
        {dontUse.uses.map((item) => (
          <p>- {item}</p>
        ))}
      </SectionContent>
      <SectionContent
        title={usage.basic.title}
        desc={usage.basic.desc}
        extraCode={usage.basic.code}
        component={<SampleRoot />}
      />
      <SectionContent
        title={usage.basic.title}
        desc={usage.second.desc}
        extraCode={usage.second.code}
        component={<SampleNonClickable />}
      />
      <SectionContent
        title=""
        desc={usage.third.desc}
        extraCode={usage.third.code}
        component={<SampleBasic />}
      />
      <SectionContent
        title=""
        desc={usage.fourth.desc}
        extraCode={usage.fourth.code}
        component={<SampleOverflowIndex />}
      />
      <SectionContent
        title=""
        desc={usage.fourth.desc}
        extraCode={usage.fourth.code}
        component={<SampleMaxDisplayedItems />}
      />
    </Content>
  );
}

export default Breadcrumb;
