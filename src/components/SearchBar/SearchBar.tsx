import { useState, useMemo } from "react";
import {
  Stack,
  IAutoCompleteStyles,
  SearchBox,
  Icon
} from "@gui/fluent-ui-allure";
import classNames from "classnames/bind";

import styles from "./SearchBar.module.scss";
import { ModalCustom } from "components/base/Modal/Modal";
import { LeftBarModules } from "constants/leftBarModules";
import { Link } from "react-router-dom";
import { nameToPath } from "helpers";
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

  const handleSearch = (value = "") => {
    const searchValue = value.trim();

    if (!searchValue) {
      setSearchResult(initialResult);
      return;
    }

    setSearchTerm(searchValue);

    setSearchResult(
      modulesName.filter((module) =>
        module.toLowerCase().includes(searchValue.toLowerCase())
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
    root: { width: 220, height: 40 }
  };

  return (
    <Stack>
      <SearchBox
        onClick={handleOpenModal}
        styles={styles}
        placeholder={placeholder}
      />
      <ModalCustom
        heading="What are you looking for?"
        isModalOpen={isModalOpen}
        onModalClose={handleCloseModal}
      >
        <div className={cx("wrapper")}>
          <div className={cx("search")}>
            <input
              onChange={(e) => handleSearch(e?.currentTarget?.value)}
              autoFocus
              type="text"
              placeholder="Search docs"
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
                  {module}
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
