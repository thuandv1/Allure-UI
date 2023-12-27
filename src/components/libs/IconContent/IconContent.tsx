import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./IconContent.module.scss";
import Content from "components/base/Content";
import { heading, desc, refer, usage } from "data/icon";
import TypoUsage from "components/TypoUsage/TypoUsage";
import SectionContent from "components/SectionContent";
import { BasicIcon } from "./Sample/BasicIcon";
import { ColorIcon } from "./Sample/ColorIcon";
import { OfficeIcon } from "./Sample/OfficeIcon";
import { OfficeColorIcon } from "./Sample/OfficeColorIcon";

const cx = classNames.bind(styles);

function IconContent() {
  return (
    <Content title={heading}>
      <p className={cx("text")}>
        {refer.awesome.title} &nbsp;
        <Link to={refer.awesome.link}>{refer.awesome.link}</Link>
      </p>
      <p>
        {refer.microsoft.title} &nbsp;
        <Link to={refer.microsoft.link}>{refer.microsoft.link}</Link>
      </p>
      <TypoUsage text={desc} />
      <SectionContent
        title={usage.basic.title}
        extraCode={usage.basic.code}
        component={<BasicIcon />}
      />
      <SectionContent
        title={usage.color.title}
        extraCode={usage.color.code}
        component={<ColorIcon />}
      />
      <SectionContent
        title={usage.office.title}
        extraCode={usage.office.code}
        component={<OfficeIcon />}
      />
      <SectionContent
        title={usage.officeColor.title}
        extraCode={usage.officeColor.code}
        component={<OfficeColorIcon />}
      />
    </Content>
  );
}

export default IconContent;
