import * as React from "react";
import {
  PrimaryButton,
  DefaultButton,
  Dialog,
  DialogFooter
} from "@gui/fluent-ui-allure";
import classNames from "classnames/bind";

import styles from "../Dialog.module.scss";
import { usage } from "data/dialog";

const cx = classNames.bind(styles);

export const DialogSample = () => {
  const {
    basic: { layout, header, button }
  } = usage;

  const [isDialogClosed, setDialogClosed] = React.useState(true);
  return (
    <div>
      <p className={cx("title")}>{layout.title}</p>
      <p>{layout.desc}</p>
      <p className={cx("title")}>{header.title}</p>
      <p>{header.desc}</p>
      <p className={cx("title")}>{button.title}</p>
      <p>{button.desc}</p>
      <div className={cx("button")}>
        <DefaultButton onClick={() => setDialogClosed(false)}>
          Open dialog
        </DefaultButton>
      </div>
      <Dialog
        hidden={isDialogClosed}
        title="Email Confirm"
        maxWidth="480px"
        minWidth="480px"
      >
        <div style={{ maxHeight: 100 }}>
          <p>
            Do you want to send this message without a subject? If you want to
            send, please click 'Send', or you can cancel by pressing 'Don't
            send' or 'Close'.
          </p>
          <p>
            Do you want to send this message without a subject? If you want to
            send, please click 'Send', or you can cancel by pressing 'Don't
            send' or 'Close'.
          </p>
          <p>
            Do you want to send this message without a subject? If you want to
            send, please click 'Send', or you can cancel by pressing 'Don't
            send' or 'Close'.
          </p>
          <p>
            Do you want to send this message without a subject? If you want to
            send, please click 'Send', or you can cancel by pressing 'Don't
            send' or 'Close'.
          </p>
        </div>
        <DialogFooter>
          <DefaultButton onClick={() => setDialogClosed(true)}>
            Cancel
          </DefaultButton>
          <PrimaryButton onClick={() => setDialogClosed(true)}>
            Submit
          </PrimaryButton>
        </DialogFooter>
      </Dialog>
    </div>
  );
};
