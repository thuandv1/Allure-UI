import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Stack,
  IAutoCompleteStyles,
  SearchBox,
  Icon
} from "@gui/fluent-ui-allure";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./SearchBar.module.scss";
import { ModalCustom } from "components/base/Modal/Modal";
import { LeftBarModules } from "constants/leftBarModules";
import { nameToPath, nameToKey } from "helpers";
import NotFound from "components/base/NotFound/NotFound";

interface ISearchBarProps {
  placeholder: string;
}

const cx = classNames.bind(styles);

const modulesName = LeftBarModules.flatMap((module) =>
  module.children.map((child) => child.name)
);

const initialResult = modulesName.slice(0, 4);

const SearchBar = (props: ISearchBarProps) => {
  const { placeholder } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(initialResult);

  const [t] = useTranslation(["left_bar", "common"]);

  const handleSearch = (value = "") => {
    const searchValue = value.trim();

    if (!searchValue) {
      setSearchResult(initialResult);
      return;
    }

    setSearchTerm(searchValue);

    setSearchResult(
      modulesName.filter((module) =>
        t(nameToKey(module)).toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSearchResult(initialResult);
  };

  const styles: Partial<IAutoCompleteStyles> = {
    root: { width: 250, height: 40 }
  };

  return (
    <Stack>
      <SearchBox
        onClick={handleOpenModal}
        styles={styles}
        placeholder={placeholder}
      />
      <ModalCustom
        heading={t("common:question_search")}
        isModalOpen={isModalOpen}
        onModalClose={handleCloseModal}
      >
        <div className={cx("wrapper")}>
          <div className={cx("search")}>
            <input
              onChange={(e) => handleSearch(e?.currentTarget?.value)}
              autoFocus
              type="text"
              placeholder={t("common:search_docs")}
            />
          </div>
          {searchResult.length ? (
            <div className={cx("result")}>
              {searchResult.map((module) => (
                <Link
                  onClick={handleCloseModal}
                  to={nameToPath(module)}
                  key={module}
                >
                  <Icon iconName="far-bookmark" />
                  {t(nameToKey(module))}
                </Link>
              ))}
            </div>
          ) : (
            <NotFound keyword={searchTerm} />
          )}
        </div>
      </ModalCustom>
    </Stack>
  );
};

export default SearchBar;
