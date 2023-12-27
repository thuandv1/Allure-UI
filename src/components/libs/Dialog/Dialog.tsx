import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { heading, desc, whenToUse, usage } from "data/dialog";
import { DialogSample } from "./Sample/DialogSample";
import { DialogConfirm } from "./Sample/DialogConfirm";

function Dialog() {
  return (
    <Content title={heading} desc={desc}>
      <SectionContent title={whenToUse.title} uses={whenToUse.uses} />
      <SectionContent title={usage.basic.title} extraCode={usage.basic.code}>
        <DialogSample />
      </SectionContent>
      <SectionContent
        title={usage.confirm.title}
        extraCode={usage.confirm.code}
      >
        <DialogConfirm />
      </SectionContent>
    </Content>
  );
}

export default Dialog;
