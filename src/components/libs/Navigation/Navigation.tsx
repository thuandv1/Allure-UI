import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { heading, desc, usage } from "data/navigation";
import { NavView } from "./Example/BasicNav";
import { NavigationCollapsedView } from "./Example/CollapseNav";

function Navigation() {
  return (
    <Content title={heading} desc={desc}>
      <SectionContent
        title={usage.basic.title}
        uses={usage.uses}
        component={<NavView />}
        extraCode={usage.basic.code}
      />
      <SectionContent
        title={usage.collapsed.title}
        desc={usage.collapsed.desc}
        component={<NavigationCollapsedView />}
        extraCode={usage.collapsed.code}
      />
    </Content>
  );
}

export default Navigation;
