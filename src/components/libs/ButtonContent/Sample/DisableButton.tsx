import * as React from "react";
import {
  Stack,
  DefaultButton,
  PrimaryButton,
  Link,
  IconButton,
  TextButton,
  DashedButton,
  Toggle,
  TooltipHost
} from "@gui/fluent-ui-allure";

export const DisableButton = () => {
  const [enableFocus, setEnableFocus] = React.useState(false);
  return (
    <Stack>
      <Toggle
        checked={enableFocus}
        onChange={(_, checked = false) => {
          setEnableFocus(checked);
        }}
        label="Enable focus on disabled buttons"
        inlineLabel
      />
      <Stack horizontal tokens={{ childrenGap: 16 }}>
        <TooltipHost content="This button is disabled because we set disabled property">
          <TextButton allowDisabledFocus={enableFocus} disabled>
            Normal button
          </TextButton>
        </TooltipHost>
        <TooltipHost content="This button is disabled because we set disabled property">
          <DefaultButton allowDisabledFocus={enableFocus} disabled>
            Outline
          </DefaultButton>
        </TooltipHost>
        <TooltipHost content="This button is disabled because we set disabled property">
          <DefaultButton
            allowDisabledFocus={enableFocus}
            disabled
            iconProps={{ iconName: "fas-rotate-right" }}
          >
            Outline
          </DefaultButton>
        </TooltipHost>
        <TooltipHost content="This button is disabled because we set disabled property">
          <PrimaryButton allowDisabledFocus={enableFocus} disabled>
            Filled button
          </PrimaryButton>
        </TooltipHost>
        <TooltipHost content="This button is disabled because we set disabled property">
          <PrimaryButton
            allowDisabledFocus={enableFocus}
            disabled
            iconProps={{ iconName: "fas-rotate-right" }}
          >
            Filled button
          </PrimaryButton>
        </TooltipHost>
        <TooltipHost
          styles={{ root: { display: "flex !important" } }}
          content="This button is disabled because we set disabled property"
        >
          <Link disabled>Link button</Link>
        </TooltipHost>
        <TooltipHost content="This button is disabled because we set disabled property">
          <DashedButton allowDisabledFocus={enableFocus} disabled>
            Dashed button
          </DashedButton>
        </TooltipHost>
        <TooltipHost content="This button is disabled because we set disabled property">
          <IconButton
            allowDisabledFocus={enableFocus}
            bordered
            disabled
            iconProps={{ iconName: "fas-bell" }}
          ></IconButton>
        </TooltipHost>
      </Stack>
    </Stack>
  );
};
