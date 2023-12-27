import {
  DashedButton,
  DefaultButton,
  PrimaryButton,
  Stack,
  Link as LinkButton,
  TextButton
} from "@gui/fluent-ui-allure";

function BasicButton() {
  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <TextButton title="Normal Button">Normal button</TextButton>

      <DefaultButton>Outline</DefaultButton>

      <PrimaryButton>Filled Button</PrimaryButton>

      <DashedButton>Dashed button</DashedButton>

      <LinkButton underline>Link button</LinkButton>
    </Stack>
  );
}

export default BasicButton;
