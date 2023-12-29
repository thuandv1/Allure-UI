import { useTranslation } from "react-i18next";

import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { usage } from "data/tree";
import { SampleBasic } from "./Example/BasicTree";
import { SampleDragDrop } from "./Example/DragAndDropTree";
import { SampleIcon } from "./Example/IconTree";
import { SampleCheckbox } from "./Example/SelectAbleTree";
import { SampleFilter } from "./Example/FilterTree";
import { SampleDirectory } from "./Example/DirectoryTree";
import { SampleLoading } from "./Example/LoadingTree";

function Tree() {
  const [t] = useTranslation(["tree", "common"]);

  return (
    <Content title={t("title")} desc={t("desc")}>
      <SectionContent
        title={t("common:basic_usage")}
        extraCode={usage.basic.code}
        component={<SampleBasic />}
      />
      <SectionContent
        title={t("custom")}
        extraCode={usage.custom.code}
        component={<SampleIcon />}
      />
      <SectionContent
        title={t("drag_drop")}
        extraCode={usage.dragNDrop.code}
        component={<SampleDragDrop />}
      />
      <SectionContent
        title={t("selectable")}
        extraCode={usage.selectable.code}
        component={<SampleCheckbox />}
      />
      <SectionContent
        title={t("filter")}
        extraCode={usage.filter.code}
        component={<SampleFilter />}
      />
      <SectionContent
        title={t("directory")}
        extraCode={usage.directory.code}
        component={<SampleDirectory />}
      />
      <SectionContent
        title={t("loading")}
        extraCode={usage.loading.code}
        component={<SampleLoading />}
      />
    </Content>
  );
}

export default Tree;
