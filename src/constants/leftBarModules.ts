import { ModuleItem } from "types/LeftBar";

const LeftBarModules: ModuleItem[] = [
  {
    module: "design_system",
    children: [
      { name: "Introduction" },
      { name: "Design principle" },
      {
        name: "Design standard",
        outPath: true,
        link: "https://xd.adobe.com/view/34543319-c6da-4dd9-be05-fe7b01ae133b-6107/"
      },
      { name: "Change log" }
    ]
  },
  {
    module: "basic",
    children: [
      { name: "Button" },
      { name: "Icon Gallery" },
      { name: "Icon" },
      { name: "Common I18N Terms" },
      { name: "Common Product" },
      { name: "Typography" }
    ]
  },
  {
    module: "navigation",
    children: [
      { name: "Breadcrumb" },
      { name: "Navigation Menu" },
      { name: "Navigation Menu Light", notVerify: true },
      { name: "Tab" },
      { name: "Tree" },
      { name: "Wizard" }
    ]
  },
  {
    module: "form",
    children: [
      { name: "AutoComplete" },
      { name: "Avatar" },
      { name: "Checkbox" },
      { name: "DatePicker" },
      { name: "Expander" },
      { name: "FileUploader" },
      { name: "Input" },
      { name: "PeoplePicker" },
      { name: "Radio button" },
      { name: "Select" },
      { name: "Switch" },
      { name: "TimePicker" }
    ]
  },
  {
    module: "data",
    children: [
      { name: "Calendar", notVerify: true },
      { name: "Carousel", notVerify: true },
      { name: "Filters" },
      { name: "Pagination" },
      { name: "Table" },
      { name: "Tooltips" }
    ]
  },
  {
    module: "feedback",
    children: [{ name: "Message" }, { name: "Notification" }]
  },
  {
    module: "others",
    children: [
      { name: "Dialog" },
      { name: "Modal" },
      { name: "Loading" },
      { name: "Panel" },
      { name: "Popover" },
      { name: "Progress" },
      { name: "Waffle" },
      { name: "Activity timeline" }
    ]
  }
];

export { LeftBarModules };
