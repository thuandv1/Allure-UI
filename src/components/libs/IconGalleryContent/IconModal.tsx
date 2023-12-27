import { Icon, Stack, TooltipHost } from "@gui/fluent-ui-allure";
import classNames from "classnames/bind";
import { useMemo } from "react";

import styles from "./IconGalleryContent.module.scss";
import Code from "components/base/Code";
import { coppyToClipBoard, padWithLeadingZeros } from "helpers";
import { IconState } from "./IconList";

const cx = classNames.bind(styles);

interface Props {
  icon: IconState;
}

function IconModal(props: Props) {
  const {
    icon: { name, ord }
  } = props;

  const htmlCode = useMemo(() => `<i class="${name}"></i>`, [name]);

  const reactCode = useMemo(() => `<Icon iconName="${name}" />`, [name]);

  return (
    <Stack className={cx("content")}>
      <Stack horizontal horizontalAlign="space-between">
        <TooltipHost content={<span>Copy Icon Name</span>}>
          <h3 onClick={() => coppyToClipBoard(name)} className={cx("name")}>
            {name}
          </h3>
        </TooltipHost>
        <Stack
          horizontal
          verticalAlign="center"
          horizontalAlign="center"
          style={{ gap: 18 }}
        >
          <Icon iconName={name} />
          EA{padWithLeadingZeros(ord, 2)}
        </Stack>
      </Stack>
      <Stack horizontal className={cx("left")}>
        <Stack
          className={cx("icon")}
          verticalAlign="center"
          horizontalAlign="center"
        >
          <Icon iconName={name} />
        </Stack>
        <div>
          <h6>HTML code</h6>
          <TooltipHost content={<span>Copy Code Snippet</span>}>
            <div onClick={() => coppyToClipBoard(htmlCode)}>
              <Code customStyle={{ cursor: "pointer" }} border={true}>
                {htmlCode}
              </Code>
            </div>
          </TooltipHost>

          <h6>React code</h6>
          <TooltipHost content={<span>Copy Code Snippet</span>}>
            <div onClick={() => coppyToClipBoard(reactCode)}>
              <Code customStyle={{ cursor: "pointer" }} border={true}>
                {reactCode}
              </Code>
            </div>
          </TooltipHost>
        </div>
      </Stack>
    </Stack>
  );
}

export default IconModal;
