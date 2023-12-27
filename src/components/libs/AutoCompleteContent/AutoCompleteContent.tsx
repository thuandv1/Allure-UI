import { AutoComplete } from "@gui/fluent-ui-allure";
import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { desc, heading, usage, whenToUse } from "data/autoComplete";

function AutoCompleteContent() {
  return (
    <Content title={heading} desc={desc}>
      <SectionContent title={whenToUse.title} uses={whenToUse.uses} />
      <SectionContent
        title={usage.basic.title}
        desc={usage.basic.desc}
        component={
          <div style={{ width: 280 }}>
            <AutoComplete placeholder="Input" />
          </div>
        }
        extraCode={usage.basic.code}
      />
      <SectionContent
        title={usage.search.title}
        desc={usage.search.desc}
        component={
          <div style={{ width: 280 }}>
            <AutoComplete placeholder="Input" showIcon />
          </div>
        }
        extraCode={usage.basic.code}
      />
    </Content>
  );
}

export default AutoCompleteContent;
