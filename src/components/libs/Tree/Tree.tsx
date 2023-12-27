import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { heading, desc, usage } from "data/tree";
import { SampleBasic } from "./Example/BasicTree";
import { SampleDragDrop } from "./Example/DragAndDropTree";
import { SampleIcon } from "./Example/IconTree";
import { SampleCheckbox } from "./Example/SelectAbleTree";
import { SampleFilter } from "./Example/FilterTree";
import { SampleDirectory } from "./Example/DirectoryTree";
import { SampleLoading } from "./Example/LoadingTree";

function Tree() {
  return (
    <Content title={heading} desc={desc}>
      <SectionContent
        title={usage.basic.title}
        extraCode={usage.basic.code}
        component={<SampleBasic />}
      />
      <SectionContent
        title={usage.custom.title}
        extraCode={usage.custom.code}
        component={<SampleIcon />}
      />
      <SectionContent
        title={usage.dragNDrop.title}
        extraCode={usage.dragNDrop.code}
        component={<SampleDragDrop />}
      />
      <SectionContent
        title={usage.selectable.title}
        extraCode={usage.selectable.code}
        component={<SampleCheckbox />}
      />
      <SectionContent
        title={usage.filter.title}
        extraCode={usage.filter.code}
        component={<SampleFilter />}
      />
      <SectionContent
        title={usage.directory.title}
        extraCode={usage.directory.code}
        component={<SampleDirectory />}
      />
      <SectionContent
        title={usage.loading.title}
        extraCode={usage.loading.code}
        component={<SampleLoading />}
      />
    </Content>
  );
}

export default Tree;
