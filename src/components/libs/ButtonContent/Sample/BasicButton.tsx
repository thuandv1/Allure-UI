import {
  DashedButton,
  DefaultButton,
  PrimaryButton,
  Stack,
  Link as LinkButton,
  TextButton
} from "@gui/fluent-ui-allure";
import { useTranslation } from "react-i18next";

function BasicButton() {
  const [t] = useTranslation("button");

  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <TextButton title="Normal Button">{t("normal")}</TextButton>

      <DefaultButton>{t("outline")}</DefaultButton>

      <PrimaryButton>{t("normal")}</PrimaryButton>

      <DashedButton>{t("dashed")}</DashedButton>

      <LinkButton underline>{t("link")}</LinkButton>
    </Stack>
  );
}

export default BasicButton;
