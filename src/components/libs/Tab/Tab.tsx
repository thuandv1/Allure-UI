import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { heading, desc, usage } from "data/tab";
import { TabBasicView } from "./Example/BasicTab";
import { TabCordView } from "./Example/CardTab";
import { VerticalTabView } from "./Example/VerticalTab";

function Tab() {
  return (
    <Content title={heading} desc={desc}>
      <SectionContent
        title={usage.basic.title}
        desc={usage.basic.desc}
        extraCode={usage.basic.code}
        component={<TabBasicView />}
      />
      <SectionContent
        title={usage.card.title}
        desc={usage.card.desc}
        extraCode={usage.card.code}
        component={<TabCordView />}
      />
      <SectionContent
        title={usage.vertical.title}
        desc={usage.vertical.desc}
        extraCode={usage.vertical.code}
        component={<VerticalTabView />}
      />
    </Content>
  );
}

export default Tab;
