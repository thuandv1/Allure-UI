import * as React from "react";
import {
  Stack,
  Text,
  SecondaryText,
  HeadingText,
  PageHeaderText,
  HeadingType
} from "@gui/fluent-ui-allure";
import { useTranslation } from "react-i18next";

export const SampleText = () => {
  const [t] = useTranslation("typography");

  return (
    <Stack horizontal tokens={{ childrenGap: 120 }}>
      <Stack tokens={{ childrenGap: 10 }}>
        <PageHeaderText block>{t("page_header")}</PageHeaderText>
        <HeadingText type={HeadingType.LargeBold} block>
          {t("large_header")}
        </HeadingText>
        <HeadingText type={HeadingType.MediumBold} block>
          {t("medium_header")}
        </HeadingText>
        <HeadingText type={HeadingType.DefaultBold} block>
          {t("bold_header")}
        </HeadingText>
        <HeadingText type={HeadingType.Semibold} block>
          {t("semi_header")}
        </HeadingText>
        <Text block>{t("default")}</Text>
        <SecondaryText block>{t("secondary")}</SecondaryText>
      </Stack>
      <Stack tokens={{ childrenGap: 10 }}>
        <PageHeaderText block>23px, regular</PageHeaderText>
        <HeadingText type={HeadingType.LargeBold} block>
          18px, bold
        </HeadingText>
        <HeadingText type={HeadingType.MediumBold} block>
          16px, bold
        </HeadingText>
        <HeadingText type={HeadingType.DefaultBold} block>
          14px, bold
        </HeadingText>
        <HeadingText type={HeadingType.Semibold} block>
          14px, semibold
        </HeadingText>
        <Text block>14px, regular</Text>
        <SecondaryText block>14px, italic</SecondaryText>
        {/* <Link underline>Text link</Link> */}
      </Stack>
      <Stack tokens={{ childrenGap: 10 }}>
        <PageHeaderText block>{t("breadcrumb")}</PageHeaderText>
        <HeadingText type={HeadingType.LargeBold} block>
          {t("calendar")}
        </HeadingText>
        <HeadingText type={HeadingType.MediumBold} block>
          {t("panel")}
        </HeadingText>
        <HeadingText type={HeadingType.DefaultBold} block>
          {t("section")}
        </HeadingText>
        <HeadingText type={HeadingType.Semibold} block>
          {t("label")}
        </HeadingText>
        <Text block>{t("body")}</Text>
        <SecondaryText block>{t("watermark")}</SecondaryText>
      </Stack>
    </Stack>
  );
};
