import { useMemo, useState } from "react";
import { Pivot, PivotItem, SearchBox } from "@gui/fluent-ui-allure";
import { useTranslation } from "react-i18next";

import Content from "components/base/Content";
import { tabs, allureIcon, officeIcon, awesomeIcon } from "data/iconGallery";
import TypoUsage from "components/TypoUsage/TypoUsage";
import IconList from "./IconList";

function IconGalleryContent() {
  const [searchTerm, setSearchTerm] = useState("");

  const [t] = useTranslation("icon_gallery");

  const filteredAllureIcons = useMemo(
    () =>
      allureIcon.filter((icon) =>
        icon.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  const filteredOfficeIcons = useMemo(
    () =>
      officeIcon.filter((icon) =>
        icon.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  const filteredAwesomeIcons = useMemo(
    () =>
      awesomeIcon.filter((icon) =>
        icon.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  const iconList = useMemo(
    () => [filteredAllureIcons, filteredAwesomeIcons, filteredOfficeIcons],
    [filteredAllureIcons, filteredAwesomeIcons, filteredOfficeIcons]
  );

  const handleSearch = (value = "") => {
    setSearchTerm(value);
  };

  return (
    <Content title={t("title")} desc={t("desc")}>
      <TypoUsage text={t("use")} />
      <SearchBox
        onChange={(e) => handleSearch(e?.currentTarget?.value)}
        style={{ display: "flex", flexDirection: "row-reverse" }}
        styles={{ root: { height: 40 } }}
        showIcon
        placeholder={t("search")}
      />
      <Pivot style={{ marginTop: 10 }}>
        {tabs.map((tab, index) => (
          <PivotItem key={index} headerText={tab}>
            <IconList keyword={searchTerm} icons={iconList[index]} />
          </PivotItem>
        ))}
      </Pivot>
    </Content>
  );
}

export default IconGalleryContent;
