import { Icon } from "@gui/fluent-ui-allure";
import classNames from "classnames/bind";

import { heading, principles } from "data/designPrinciple";
import Content from "components/base/Content";
import styles from "./DesignPrincipleContent.module.scss";

const cx = classNames.bind(styles);

function DesignPrincipleContent() {
  return (
    <Content title={heading}>
      <ul className={cx("principles")}>
        {principles.map((principle) => (
          <li>
            <Icon iconName={principle.icon} />
            <div className={cx("info")}>
              <h6>{principle.title}</h6>
              <p>{principle.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </Content>
  );
}

export default DesignPrincipleContent;
