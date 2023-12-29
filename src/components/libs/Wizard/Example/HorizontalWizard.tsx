import * as React from "react";
import {
  Stepper,
  Step,
  SecondaryText,
  IStepProps,
  Stack,
  DefaultButton,
  PrimaryButton
} from "@gui/fluent-ui-allure";
import { useTranslation } from "react-i18next";

export const SampleHorizontal = () => {
  const [t] = useTranslation("wizard");

  const [activeStep, setActiveStep] = React.useState(0);
  function handleNext() {
    setActiveStep((previousStep) => previousStep + 1);
  }

  function handleBack() {
    setActiveStep((previousStep) => previousStep - 1);
  }

  function onStepClick(step: IStepProps, index: number) {
    if (index < activeStep) {
      setActiveStep(index);
    }
  }
  return (
    <div>
      <Stepper
        style={{ borderBottom: "1px solid #e7eaeb" }}
        orientation="horizontal"
        activeStep={activeStep}
        onStepClick={onStepClick}
      >
        <Step header={t("general")}></Step>
        <Step header={t("template")}>
          <SecondaryText style={{ fontSize: 13 }}>
            {t("optional")}
          </SecondaryText>
        </Step>
        <Step header={t("authentication")}></Step>
        <Step header={t("review")}></Step>
      </Stepper>

      <div style={{ padding: 15, textAlign: "center" }}>
        {activeStep == 0 && <div>{`${t("general")} ${t("content")}`}</div>}
        {activeStep == 1 && <div>{`${t("template")} ${t("content")}`}</div>}
        {activeStep == 2 && (
          <div>{`${t("authentication")} ${t("content")}`}</div>
        )}
        {activeStep == 3 && <div>{`${t("review")} ${t("content")}`}</div>}
        {activeStep == 4 && <div>{`${t("finish")} ${t("content")}`}</div>}
      </div>

      <Stack horizontal tokens={{ childrenGap: 10 }} horizontalAlign="end">
        {activeStep != 0 && (
          <DefaultButton onClick={handleBack}>{t("back")}</DefaultButton>
        )}
        {activeStep != 4 && (
          <PrimaryButton onClick={handleNext}>{t("next")}</PrimaryButton>
        )}
        {activeStep == 4 && <PrimaryButton>{t("finish")}</PrimaryButton>}
      </Stack>
    </div>
  );
};
