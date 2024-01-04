import {
  Accordion,
  AccordionItem,
  DefaultButton,
  IExtendedPalette,
  Icon,
  Cobalt,
  PrimaryButton,
  Stack,
  createCustomTheme,
  Language
} from "@gui/fluent-ui-allure";
import classNames from "classnames/bind";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import styles from "./ThemeCustom.module.scss";
import ColorPicker from "../ColorPicker";
import { changeThemeCustom } from "_redux/modules/app/slice";
import { themes } from "constants/theme";
import { LocalStorage } from "helpers";

const cx = classNames.bind(styles);

function ThemeCustom() {
  const [t] = useTranslation("themes");
  const [expanded, setExpanded] = useState(false);

  const [palette, setPalette] = useState<IExtendedPalette>(
    Cobalt as IExtendedPalette
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    setExpanded((prev) => !prev);
  };

  const handlePaletteColorChanged = (name: string, color: string) => {
    const newPalette = {
      ...palette,
      [name]: color
    };

    setPalette(newPalette);

    const themeCustom = createCustomTheme(
      "themeCustom",
      Language.EN,
      newPalette
    );

    LocalStorage.add("themeCustom", JSON.stringify(ThemeCustom));

    dispatch(changeThemeCustom(themeCustom));
  };

  return (
    <div className={cx("wrapper")}>
      <div onClick={handleClick} className={cx("color")}>
        <Icon iconName={expanded ? "fas-chevron-right" : "fas-palette"} />
      </div>
      {
        <div className={cx("expanded", expanded && "active")}>
          <h3>{t("custom")}</h3>
          {expanded && (
            <div className={cx("accordion")}>
              <Accordion size="small" multiple defaultExpandedItems={["item1"]}>
                {Object.keys(themes).map((key, index) => (
                  <AccordionItem
                    key={index}
                    itemKey={`item${index + 1}`}
                    headerText={key}
                  >
                    <Stack>
                      {themes[key as keyof typeof themes].map((theme) => (
                        <ColorPicker
                          key={theme}
                          name={theme}
                          defaultColor={palette[theme as keyof typeof palette]}
                          onColorChange={(name, color) =>
                            handlePaletteColorChanged(name, color)
                          }
                        />
                      ))}
                    </Stack>
                  </AccordionItem>
                ))}
                {/* <AccordionItem itemKey="item1" headerText="Primary color">
                  <Stack>
                    <ColorPicker
                      name={"themeDarkest"}
                      defaultColor={palette["themeDarkest"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"themeDarker"}
                      defaultColor={palette["themeDarker"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"themeDark"}
                      defaultColor={palette["themeDark"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"themeDarkAlt"}
                      defaultColor={palette["themeDarkAlt"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"themePrimary"}
                      defaultColor={palette["themePrimary"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"themeSecondary"}
                      defaultColor={palette["themeSecondary"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"themeTertiary"}
                      defaultColor={palette["themeTertiary"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"themeLight"}
                      defaultColor={palette["themeLight"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"themeLighter"}
                      defaultColor={palette["themeLighter"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"themeLighterAlt"}
                      defaultColor={palette["themeLighterAlt"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                  </Stack>
                </AccordionItem>
                <AccordionItem itemKey="item2" headerText="Status color">
                  <Stack>
                    <ColorPicker
                      name={"information"}
                      defaultColor={palette["information"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"informationLight"}
                      defaultColor={palette["informationLight"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"warning"}
                      defaultColor={palette["warning"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"warningLight"}
                      defaultColor={palette["warningLight"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"error"}
                      defaultColor={palette["error"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"errorLight"}
                      defaultColor={palette["errorLight"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"successful"}
                      defaultColor={palette["successful"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"successfulLight"}
                      defaultColor={palette["successfulLight"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                  </Stack>
                </AccordionItem>
                <AccordionItem itemKey="item3" headerText="Neutral color">
                  <Stack>
                    <ColorPicker
                      name={"black"}
                      defaultColor={palette["black"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"galaxy"}
                      defaultColor={palette["galaxy"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"slate"}
                      defaultColor={palette["slate"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"gray9"}
                      defaultColor={palette["gray9"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"gray8"}
                      defaultColor={palette["gray8"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"gray7"}
                      defaultColor={palette["gray7"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"gray6"}
                      defaultColor={palette["gray6"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"gray5"}
                      defaultColor={palette["gray5"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"gray4"}
                      defaultColor={palette["gray4"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"gray3"}
                      defaultColor={palette["gray3"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"gray2"}
                      defaultColor={palette["gray2"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"gray1"}
                      defaultColor={palette["gray1"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                    <ColorPicker
                      name={"white"}
                      defaultColor={palette["white"]}
                      onColorChange={(name, color) =>
                        handlePaletteColorChanged(name, color)
                      }
                    />
                  </Stack>
                </AccordionItem> */}
              </Accordion>
              <Stack
                horizontal
                horizontalAlign="end"
                style={{ height: 60 }}
                verticalAlign="center"
              >
                <DefaultButton
                  iconProps={{ iconName: "fas-rotate-right" }}
                  style={{ marginRight: 18 }}
                >
                  <input
                    style={{ display: "none" }}
                    multiple={false}
                    accept=".json"
                    type="file"
                  />
                  {t("upload")}
                </DefaultButton>
                <PrimaryButton>{t("download")}</PrimaryButton>
              </Stack>
            </div>
          )}
        </div>
      }
    </div>
  );
}

export default ThemeCustom;
