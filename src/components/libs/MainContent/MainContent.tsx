import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./MainContent.module.scss";
import { Logo } from "assets/images";
import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import Environment from "components/Environment";
import {
  WCAG,
  desc,
  heading,
  install,
  installCode,
  themeCode,
  usage
} from "data/main";
import Code from "components/base/Code";

const cx = classNames.bind(styles);

function MainContent() {
  return (
    <Content
      title={heading}
      desc={desc}
      header={<img src={Logo} alt="Allure Logo" />}
    >
      <SectionContent title={WCAG.title} desc={WCAG.desc}>
        <Link className={cx("w3-link")} to={WCAG.link}>
          WCAG 2 Overview
        </Link>
      </SectionContent>
      <SectionContent title="Environment Support">
        <Environment />
      </SectionContent>
      <SectionContent title={install.title}>
        <div className={cx("install")}>
          <p>
            {install.desc.start}&nbsp;
            <Link className={cx("link")} to={install.link}>
              avepoint-npm
            </Link>
            &nbsp;{install.desc.end}
          </p>
          <Code border={true}>{installCode}</Code>
          <p className={cx("text")}>{install.npm}</p>
          <Code border={true}>{install.syntax}</Code>
        </div>
      </SectionContent>
      <SectionContent title={usage.title} desc={usage.desc}>
        <Code border={true}>{themeCode}</Code>
      </SectionContent>
    </Content>
  );
}

export default MainContent;
