import { useMemo, useState } from "react";
import { DefaultButton, Icon } from "@fluentui/react";
import classNames from "classnames/bind";

import styles from "./SectionContent.module.scss";
import Code from "components/base/Code";

const cx = classNames.bind(styles);

interface ISectionContentProps {
  title: string;
  desc?: string;
  uses?: string[];
  descUses?: string;
  component?: React.ReactNode;
  extraCode?: string;
  children?: React.ReactNode;
  orderList?: boolean;
}

function SectionContent(props: ISectionContentProps) {
  const {
    desc = "", //this is default value props
    title = "",
    uses,
    descUses,
    children,
    component,
    extraCode,
    orderList = true
  } = props;

  const [showCode, setShowCode] = useState(false);

  const showExtraCode = () => setShowCode((prevState) => !prevState);

  const renderList = useMemo(() => {
    if (orderList) {
      return (
        <ol>
          {descUses && <p>{descUses}</p>}
          {uses?.map((use, index) => (
            <li key={index}>{use}</li>
          ))}
        </ol>
      );
    }

    return (
      <ul>
        {descUses && <p>{descUses}</p>}
        {uses?.map((use, index) => (
          <li key={index}>{use}</li>
        ))}
      </ul>
    );
  }, [descUses, orderList, uses]);

  return (
    <div className={cx("section")}>
      <h3 className={cx("title")}>{title}</h3>
      {desc && (
        <p style={{ whiteSpace: "pre-line" }} className={cx("desc")}>
          {desc}
        </p>
      )}
      {uses && renderList}
      {component && <div className={cx("component")}>{component}</div>}
      {children}

      {extraCode && (
        <div className={cx("code")}>
          {showCode && extraCode && (
            <div className={cx("wrapper")}>
              <Code>{extraCode}</Code>
            </div>
          )}

          <DefaultButton onClick={showExtraCode}>
            {showCode ? (
              <Icon iconName="fas-caret-up" />
            ) : (
              <Icon iconName="fas-code" />
            )}
          </DefaultButton>
        </div>
      )}
    </div>
  );
}

export default SectionContent;
