import * as React from "react";
import classNames from "classnames/bind";
import {
  PrimaryButton,
  DefaultButton,
  Dialog,
  DialogFooter
} from "@gui/fluent-ui-allure";

import styles from "../Dialog.module.scss";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(styles);

export const DialogConfirm = () => {
  const [t] = useTranslation(["dialog", "common"]);

  const [isDialogClosed, setDialogClosed] = React.useState(true);

  return (
    <div>
      <div className={cx("button")}>
        <DefaultButton onClick={() => setDialogClosed(false)}>
          {t("open")}
        </DefaultButton>
      </div>
      <Dialog hidden={isDialogClosed} title={t("confirm")} maxWidth="480px">
        <div>{t("email_text")}</div>
        <DialogFooter>
          <PrimaryButton
            onClick={() => setDialogClosed(true)}
            text={t("common:ok")}
          />
        </DialogFooter>
      </Dialog>
    </div>
  );
};
