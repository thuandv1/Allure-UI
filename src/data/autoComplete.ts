const heading = "AutoComplete";

const desc =
  "The date field can be automatically filled or show users an option list that stored previous information, such as a user's name or address. When a user enters a value, the selection control can auto-load the matched results.";

const whenToUse = {
  title: "When to use",
  uses: [
    "Use auto-complete field when the user tends to use the data that he/she already entered before.",
    "Search for matched values from list",
    "Global search, anything that matched the keywords will be displayed"
  ]
};

const usage = {
  basic: {
    title: "Basic Usage",
    desc: "Enter a keyword for name, email address, postal code, and so on.",
    code: `import * as React from "react";
import { Stack, AutoComplete, IAutoCompleteStyles, AutoCompleteOptions } from "@gui/fluent-ui-allure";

const expanding: AutoCompleteOptions[] = [
    {
        key: "blue",
        text: "Blue",
    },
    {
        key: "black",
        text: "Black",
    },
    {
        key: "blue-key",
        text: "Blue Key",
    },
];

export const SampleBasic = () => {
    const styles: Partial<IAutoCompleteStyles> = { root: { width: 280, height: 40 } };
    const [value, setValue] = React.useState<string>();
    const elementRef = React.useRef<HTMLDivElement>();
    return (
        <Stack horizontal tokens={{ childrenGap: 16 }}>
            <AutoComplete
                id={"ms-basic-complete"}
                calloutWidth={280}
                styles={styles}
                elementRef={elementRef}
                expanding={expanding}
                placeholder={"Input"}
                value={value}
                onSelectedItem={(i) => setValue(i.text)}
                onChange={(e, v) => setValue(v)}
            />
        </Stack>
    );
};`
  },
  search: {
    title: "Search",
    desc: "Enter keywords with a search icon.",
    code: `import * as React from "react";
import { Stack, AutoComplete, IAutoCompleteStyles, AutoCompleteOptions } from "@gui/fluent-ui-allure";

const expanding: AutoCompleteOptions[] = [
    {
        key: "blue",
        text: "Blue",
    },
    {
        key: "black",
        text: "Black",
    },
    {
        key: "blue-key",
        text: "Blue Key",
    },
];

export const SampleSearch = () => {
    const styles: Partial<IAutoCompleteStyles> = { root: { width: 280, height: 40 } };
    const [value, setValue] = React.useState<string>();
    const elementRef = React.useRef<HTMLDivElement>();

    const onSelectedItem = (i: AutoCompleteOptions) => {
        console.log("text", i.text);
        console.log("befValue", value);
        setValue(i.text);
    };

    const onChange = (i: string) => {
        console.log("value", value);
        setValue(i);
    };

    return (
        <Stack horizontal tokens={{ childrenGap: 16 }}>
            <AutoComplete
                id="ms-icon-complete"
                calloutWidth={280}
                styles={styles}
                expanding={expanding}
                placeholder={"Input"}
                value={value}
                showIcon
                elementRef={elementRef}
                onSelectedItem={onSelectedItem}
                onChange={(e, v) => onChange(v)}
            />
        </Stack>
    );
};`
  }
};

export { heading, desc, whenToUse, usage };
