import * as React from "react";
import {
  PrimaryButton,
  DefaultButton,
  Dialog,
  DialogFooter
} from "@gui/fluent-ui-allure";
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";

import styles from "../Dialog.module.scss";

const cx = classNames.bind(styles);

export const DialogSample = () => {
  const [t] = useTranslation(["dialog", "common"]);

  const [isDialogClosed, setDialogClosed] = React.useState(true);
  return (
    <div>
      <p className={cx("title")}>{t("layout")}</p>
      <p>{t("layout_desc")}</p>
      <p className={cx("title")}>{t("header")}</p>
      <p>{t("header_desc")}</p>
      <p className={cx("title")}>{t("button")}</p>
      <p>{t("button_desc")}</p>
      <div className={cx("button")}>
        <DefaultButton onClick={() => setDialogClosed(false)}>
          {t("open")}
        </DefaultButton>
      </div>
      <Dialog
        hidden={isDialogClosed}
        title={t("email_confirm")}
        maxWidth="480px"
        minWidth="480px"
      >
        <div style={{ maxHeight: 100 }}>
          <p>{t("email_text")}</p>
          <p>{t("email_text")}</p>
          <p>{t("email_text")}</p>
          <p>{t("email_text")}</p>
        </div>
        <DialogFooter>
          <DefaultButton onClick={() => setDialogClosed(true)}>
            {t("common:cancel")}
          </DefaultButton>
          <PrimaryButton onClick={() => setDialogClosed(true)}>
            {t("common:submit")}
          </PrimaryButton>
        </DialogFooter>
      </Dialog>
    </div>
  );
};
