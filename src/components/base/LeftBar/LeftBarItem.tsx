import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import { TooltipHost } from "@gui/fluent-ui-allure";
import { Icon } from "@gui/fluent-ui-allure";

import styles from "./LeftBar.module.scss";
import { ModuleItem } from "types/LeftBar";
import { nameToPath } from "helpers";

const cx = classNames.bind(styles);

interface ILeftBarItemProps {
  barItem: ModuleItem;
}

function LeftBarItem(props: ILeftBarItemProps) {
  const {
    barItem: { module, children }
  } = props;

  return (
    <>
      <div className={cx("item")}>
        <h6 className={cx("module")}>{module}</h6>
        {children.map((c, index) => (
          <div key={index} className={cx("element")}>
            {c.notVerify && (
              <TooltipHost content={<span>Not production verified</span>}>
                <Icon iconName="fas-vial" />
              </TooltipHost>
            )}
            <NavLink
              className={({ isActive }) => cx(isActive && "active")}
              to={c.link ?? nameToPath(c.name)}
              target={c.outPath ? "_blank" : undefined}
            >
              {c.name}
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
}

export default LeftBarItem;
