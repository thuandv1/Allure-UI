import { SketchPicker, ColorResult } from "react-color";
import { Callout, DirectionalHint, Stack } from "@gui/fluent-ui-allure";
import { useEffect, useState } from "react";

interface IColorPickerProps {
  name: string;
  defaultColor?: string;
  onColorChange: (name: string, color: string) => void;
}

const ColorPicker = (props: IColorPickerProps) => {
  const { defaultColor, name, onColorChange } = props;

  const [color, setColor] = useState(defaultColor);
  const [showPicker, setShowPicker] = useState<boolean>(false);

  useEffect(() => {
    setColor(defaultColor);
  }, [defaultColor]);

  const onColorChanged = (color: ColorResult) => {
    setColor(color.hex);
  };

  const onColorChangeComplete = (color: ColorResult) => {
    onColorChange(name, color.hex);
  };

  return (
    <>
      <Stack
        horizontal
        horizontalAlign="space-between"
        style={{ marginTop: 8, height: 20 }}
        verticalAlign="center"
      >
        <span
          style={{
            display: "inline-block",
            width: 150,
            textOverflow: "ellipsis",
            overflow: "hidden",
            fontSize: 13
          }}
          title={name}
        >
          {name}
        </span>
        <Stack
          horizontal
          verticalAlign="center"
          style={{ cursor: "pointer" }}
          onClick={() => setShowPicker(true)}
        >
          <span
            id={"picker" + name}
            style={{
              display: "inline-block",
              width: 16,
              height: 16,
              backgroundColor: color,
              border: "1px solid #C4C6C8",
              marginRight: 5
            }}
          ></span>
          <span style={{ display: "inline-block", width: 57 }}>{color}</span>
        </Stack>
      </Stack>
      {showPicker && (
        <Callout
          doNotLayer={true}
          target={"#picker" + name}
          onDismiss={() => setShowPicker(false)}
          isBeakVisible={false}
          directionalHint={DirectionalHint.bottomCenter}
        >
          <SketchPicker
            disableAlpha={true}
            presetColors={[]}
            color={color}
            onChange={(c, _) => onColorChanged(c)}
            onChangeComplete={(c, _) => onColorChangeComplete(c)}
          />
        </Callout>
      )}
    </>
  );
};

export default ColorPicker;
