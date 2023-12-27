import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { heading, desc, usage } from "data/navigation";
import { NavView } from "./Example/BasicNav";
import { NavigationCollapsedView } from "./Example/CollapseNav";

function NavigationLight() {
  return (
    <Content title={heading + " Light"} desc={desc}>
      <SectionContent
        title={usage.basic.title}
        uses={usage.uses}
        component={<NavView />}
        extraCode={usage.basic.lightCode}
      />
      <SectionContent
        title={usage.collapsed.title}
        desc={usage.collapsed.desc}
        component={<NavigationCollapsedView />}
        extraCode={usage.collapsed.lightCode}
      />
    </Content>
  );
}

export default NavigationLight;
