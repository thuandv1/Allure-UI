import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./CommonI18NTerms.module.scss";
import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { heading, desc, whenToUse, usage } from "data/button";
import BasicButton from "./Sample/BasicButton";
import { DisableButton } from "./Sample/DisableButton";
import { IconButton } from "./Sample/IconButton";
import { ContextMenuButton } from "./Sample/ContextMenuButton";
import { LoadingButton } from "./Sample/LoadingButton";

const cx = classNames.bind(styles);

function CommonI18NTerms() {
  return (
    <Content title={heading} desc={desc}>
      <SectionContent
        orderList={false}
        title={whenToUse.title}
        desc={whenToUse.desc}
        uses={whenToUse.uses}
      />
      <p className={cx("sub-desc")}>
        Primary button always on the right . Please refer to principle &nbsp;
        <Link
          to="https://3.7designs.co/blog/2009/01/03/the-gutenburg-diagram-in-design/"
          target="_blank"
        >
          Gutenburg diagram
        </Link>
        &nbsp;
        (https://3.7designs.co/blog/2009/01/03/the-gutenburg-diagram-in-design/)
      </p>
      <SectionContent
        title={usage.basic.title}
        desc={usage.basic.desc}
        extraCode={usage.basic.code}
        component={<BasicButton />}
      />
      <SectionContent
        title={usage.disable.title}
        extraCode={usage.disable.code}
        component={<DisableButton />}
      />
      <SectionContent
        title={usage.icon.title}
        extraCode={usage.icon.code}
        component={<IconButton />}
      />
      <SectionContent
        title={usage.context.title}
        extraCode={usage.context.code}
        component={<ContextMenuButton />}
      />
      <SectionContent
        title={usage.loading.title}
        extraCode={usage.loading.code}
        component={<LoadingButton />}
      />
    </Content>
  );
}

export default CommonI18NTerms;
