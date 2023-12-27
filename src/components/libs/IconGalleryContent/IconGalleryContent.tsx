import { useMemo, useState } from "react";
import { Pivot, PivotItem, SearchBox } from "@gui/fluent-ui-allure";

import Content from "components/base/Content";
import {
  heading,
  desc,
  tabs,
  allureIcon,
  officeIcon,
  awesomeIcon
} from "data/iconGallery";
import TypoUsage from "components/TypoUsage/TypoUsage";
import IconList from "./IconList";
import useDebounce from "hooks/useDebounce";

function IconGalleryContent() {
  const [searchTerm, setSearchTerm] = useState("");

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
    <Content title={heading} desc={desc}>
      <TypoUsage />
      <SearchBox
        onChange={(e) => handleSearch(e?.currentTarget?.value)}
        style={{ display: "flex", flexDirection: "row-reverse" }}
        styles={{ root: { height: 40 } }}
        showIcon
        placeholder="Search..."
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
