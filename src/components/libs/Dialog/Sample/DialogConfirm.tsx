import * as React from "react";
import classNames from "classnames/bind";
import {
  PrimaryButton,
  DefaultButton,
  Dialog,
  DialogFooter
} from "@gui/fluent-ui-allure";

import styles from "../Dialog.module.scss";

const cx = classNames.bind(styles);

export const DialogConfirm = () => {
  const [isDialogClosed, setDialogClosed] = React.useState(true);
  return (
    <div>
      <div className={cx("button")}>
        <DefaultButton onClick={() => setDialogClosed(false)}>
          Open dialog
        </DefaultButton>
      </div>
      <Dialog hidden={isDialogClosed} title="Confirm" maxWidth="480px">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque,
          excepturi, veniam, odit quos eveniet laudantium ea aut amet in est
          possimus minima rerum explicabo ducimus quisquam optio! Alias, totam?
        </div>
        <DialogFooter>
          <PrimaryButton onClick={() => setDialogClosed(true)} text="OK" />
        </DialogFooter>
      </Dialog>
    </div>
  );
};
