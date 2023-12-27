import { Icon, Stack } from "@gui/fluent-ui-allure";
import classNames from "classnames/bind";

import styles from "./IconGalleryContent.module.scss";
import { useState } from "react";
import { ModalCustom } from "components/base/Modal/Modal";
import IconModal from "./IconModal";
import NotFound from "components/base/NotFound";

const cx = classNames.bind(styles);

export type IconState = {
  name: string;
  ord: number;
};

const initialIconState: IconState = {
  name: "",
  ord: 0
};

interface Props {
  icons: string[];
  keyword: string;
}

function IconList(props: Props) {
  const { icons, keyword } = props;

  const [isModalOpen, setModalOpen] = useState(false);
  const [iconActive, setIconActive] = useState<IconState>(initialIconState);

  const handleOpenModal = (name: string, ord: number) => {
    setModalOpen(true);
    setIconActive({ name, ord });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Stack horizontal wrap className={cx("wrapper")}>
      {icons.length ? (
        icons.map((icon, index) => (
          <Stack
            key={index}
            onClick={() => handleOpenModal(icon, index + 1)}
            verticalAlign="center"
            horizontalAlign="center"
            className={cx("icon")}
          >
            <Icon iconName={icon} />
            <h6>{icon}</h6>
          </Stack>
        ))
      ) : (
        <Stack
          horizontalAlign="center"
          verticalAlign="center"
          style={{ width: "100%" }}
        >
          <NotFound keyword={keyword} />
        </Stack>
      )}

      <ModalCustom isModalOpen={isModalOpen} onModalClose={handleCloseModal}>
        <IconModal icon={iconActive} />
      </ModalCustom>
    </Stack>
  );
}

export default IconList;
