import { useTranslation } from "react-i18next";
import classNames from "classnames/bind";

import styles from "./ButtonContent.module.scss";
import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { usage } from "data/button";
import BasicButton from "./Sample/BasicButton";
import { DisableButton } from "./Sample/DisableButton";
import { IconButton } from "./Sample/IconButton";
import { ContextMenuButton } from "./Sample/ContextMenuButton";
import { LoadingButton } from "./Sample/LoadingButton";

const cx = classNames.bind(styles);

function ButtonContent() {
  const [t] = useTranslation(["button", "common"]);

  return (
    <Content title={t("title")} desc={t("desc")}>
      <SectionContent
        orderList={false}
        title={t("common:when_to_use")}
        desc={t("use_need")}
        uses={[t("uses_1"), t("uses_2"), t("uses_3")]}
      />
      <p
        className={cx("sub-desc")}
        dangerouslySetInnerHTML={{
          __html: t("use_link").replace(
            "_",
            '<a href="https://3.7designs.co/blog/2009/01/03/the-gutenburg-diagram-in-design/" target="_blank">&nbsp;Gutenburg diagram</a>'
          )
        }}
      ></p>
      <SectionContent
        title={t("common:basic_usage")}
        desc={t("basic_desc")}
        extraCode={usage.basic.code}
        component={<BasicButton />}
      />
      <SectionContent
        title={t("disable")}
        extraCode={usage.disable.code}
        component={<DisableButton />}
      />
      <SectionContent
        title={t("icon")}
        extraCode={usage.icon.code}
        component={<IconButton />}
      />
      <SectionContent
        title={t("context_menu")}
        extraCode={usage.context.code}
        component={<ContextMenuButton />}
      />
      <SectionContent
        title={t("loading")}
        extraCode={usage.loading.code}
        component={<LoadingButton />}
      />
    </Content>
  );
}

export default ButtonContent;
