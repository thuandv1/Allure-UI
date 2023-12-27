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

initialize("en");

export const SampleVertical = () => {
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
          <Step header="General">
            <div>
              <Text style={{ fontSize: 13 }}>
                When the step is active, we can show a short description here on
                what this step entails.
              </Text>
            </div>
          </Step>
          <Step header="Security Settings">
            <div>
              <Text style={{ fontSize: 13 }}>Security Settings</Text>
            </div>
          </Step>
          <Step header="Summary">
            <div>
              <Text style={{ fontSize: 13 }}>
                You have chosen the following settings:
              </Text>
              <ul style={{ fontSize: 13 }}>
                <li>General</li>
                <li>Security</li>
              </ul>
            </div>
          </Step>
        </Stepper>
      </div>
      <Stack verticalAlign="space-between" style={{ width: "100%" }}>
        <div style={{ padding: 15, textAlign: "center" }}>
          {activeStep == 0 && <div>General Content</div>}
          {activeStep == 1 && <div>Security Settings</div>}
          {activeStep == 2 && <div>Summary</div>}
          {activeStep == 3 && <div>Finish</div>}
        </div>

        <Stack horizontal tokens={{ childrenGap: 10 }} horizontalAlign="end">
          {activeStep != 0 && (
            <DefaultButton onClick={handleBack}>Back</DefaultButton>
          )}
          {activeStep != 3 && (
            <PrimaryButton onClick={handleNext}>Next</PrimaryButton>
          )}
          {activeStep == 3 && <PrimaryButton>Finish</PrimaryButton>}
        </Stack>
      </Stack>
    </Stack>
  );
};
