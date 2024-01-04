import { useTranslation } from "react-i18next";
import { Accordion, AccordionItem } from "@gui/fluent-ui-allure";
import classNames from "classnames/bind";

import Content from "components/base/Content";
import { VERSION } from "data/changeLog";
import LogSection from "./LogSection";
import HeaderChangeLog from "./HeaderChangeLog";
import styles from "./ChangeLog.module.scss";

const cx = classNames.bind(styles);

function ChangeLog() {
  const [t] = useTranslation(["change_log", "common"]);

  return (
    <Content title={t("title")}>
      {VERSION.map((item) => (
        <div className={cx("container")}>
          <Accordion>
            <AccordionItem
              itemKey="item1"
              header={
                <HeaderChangeLog
                  appName={t("common:app_name", { text: "" })}
                  version={item.ver}
                  time={item.time}
                />
              }
            >
              {item.bug.length && (
                <LogSection title={t("bug")} data={item.bug} />
              )}
              {item.improvement.length && (
                <LogSection title={t("improvement")} data={item.improvement} />
              )}
              {item.task.length && (
                <LogSection title={t("task")} data={item.task} />
              )}
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </Content>
  );
}

export default ChangeLog;
