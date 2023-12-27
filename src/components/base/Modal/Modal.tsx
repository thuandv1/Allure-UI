import * as React from "react";
import {
  PrimaryButton,
  DefaultButton,
  Dialog,
  DialogFooter,
  DialogType
} from "@gui/fluent-ui-allure";

export enum MODAL_SIZE {
  SM = "480px",
  MD = "580px",
  LG = "730px"
}

interface Props {
  heading?: string;
  size?: MODAL_SIZE;
  children: React.ReactNode;
  cancelText?: string;
  OkText?: string;
  footer?: React.ReactNode;
  showFooter?: boolean;
  isModalOpen: boolean;
  onModalClose: () => void;
}

export const ModalCustom = (props: Props) => {
  const {
    heading,
    size = MODAL_SIZE.LG,
    children,
    cancelText = "Cancel",
    OkText = "Submit",
    footer,
    showFooter = false,
    isModalOpen,
    onModalClose
  } = props;

  return (
    <div>
      <Dialog
        hidden={!isModalOpen}
        onDismiss={onModalClose}
        dialogContentProps={{
          showCloseButton: true,
          type: DialogType.close,
          styles: { header: { border: "none", paddingBottom: 0 } }
        }}
        title={heading ?? ""}
        maxWidth={size}
        minWidth={size}
      >
        <div>{children}</div>
        {(showFooter && footer) ?? (
          <DialogFooter>
            {cancelText && (
              <DefaultButton onClick={onModalClose}>
                {cancelText}
              </DefaultButton>
            )}
            {OkText && (
              <PrimaryButton onClick={onModalClose}>
                {OkText}
              </PrimaryButton>
            )}
          </DialogFooter>
        )}
      </Dialog>
    </div>
  );
};
