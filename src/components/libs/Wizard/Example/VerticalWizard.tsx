import * as React from "react";
import {
  Stepper,
  Step,
  Text,
  IStepProps,
  Stack,
  DefaultButton,
  PrimaryButton
} from "@gui/fluent-ui-allure";
import { initialize } from "@gui/common-i18n-terms";
import { useTranslation } from "react-i18next";

initialize("en");

export const SampleVertical = () => {
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

  const verticalStepperStyles: React.CSSProperties = {
    width: "330px"
  };

  return (
    <Stack horizontal>
      <div style={verticalStepperStyles}>
        <Stepper
          orientation="vertical"
          activeStep={activeStep}
          onStepClick={onStepClick}
        >
          <Step header={t("general")}>
            <div>
              <Text style={{ fontSize: 13 }}>{t("general_detail")}</Text>
            </div>
          </Step>
          <Step header={t("security")}>
            <div>
              <Text style={{ fontSize: 13 }}>{t("security")}</Text>
            </div>
          </Step>
          <Step header={t("summary")}>
            <div>
              <Text style={{ fontSize: 13 }}>{t("summary")}</Text>
              <ul style={{ fontSize: 13 }}>
                <li>{t("general")}</li>
                <li>{t("security")}</li>
              </ul>
            </div>
          </Step>
        </Stepper>
      </div>
      <Stack verticalAlign="space-between" style={{ width: "100%" }}>
        <div style={{ padding: 15, textAlign: "center" }}>
          {activeStep == 0 && <div>{`${t("general")} ${t("content")}`}</div>}
          {activeStep == 1 && <div>{t("security")}</div>}
          {activeStep == 2 && <div>{t("summary")}</div>}
          {activeStep == 3 && <div>{t("finish")}</div>}
        </div>

        <Stack horizontal tokens={{ childrenGap: 10 }} horizontalAlign="end">
          {activeStep != 0 && (
            <DefaultButton onClick={handleBack}>{t("back")}</DefaultButton>
          )}
          {activeStep != 3 && (
            <PrimaryButton onClick={handleNext}>{t("next")}</PrimaryButton>
          )}
          {activeStep == 3 && <PrimaryButton>{t("finish")}</PrimaryButton>}
        </Stack>
      </Stack>
    </Stack>
  );
};
