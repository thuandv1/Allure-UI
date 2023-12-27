const heading = "Avatar";
const desc = "An avatar component represents a user, an object or entity.";

const whenToUse = {
  title: "When to use",
  desc: "Displays a list of personas. Each circle represents a person and contains their image or initials. Often this control is used when sharing who has access to a specific view or file, or when assigning someone a task within a workflow.",
  uses: [
    "User or group is not the primary information you want to display in a table or list.",
    "There is not enough space to display it."
  ]
};

const usage = {
  basic: {
    title: "Basic Usage",
    desc: "Can put a composition of the person’s initials on a background color when there is no person image, or no image needed.",
    code: `import * as React from 'react';
import { Persona, Stack, PersonaSize } from '@gui/fluent-ui-allure';

export const SampleBasic = () => {
    return (
        <Stack horizontal verticalAlign='center' tokens={{ childrenGap: 16 }}>
            <Persona circled text='Will Wang' />
            <Persona circled size={PersonaSize.size32} text='Will Wang' />
            <Persona circled size={PersonaSize.size24} text='Will Wang' />
        </Stack>
    );
};`
  },
  image: {
    title: "Image",
    desc: "Use this vivid style when there is an image can display.",
    code: `import * as React from 'react';
import { Persona, Stack, PersonaSize } from '@gui/fluent-ui-allure';

const demoImageUrl = "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png";
export const SampleImage = () => {
    return (
        <Stack horizontal verticalAlign='center' tokens={{ childrenGap: 16 }}>
            <Persona circled imageUrl={demoImageUrl} />
            <Persona circled size={PersonaSize.size32} imageUrl={demoImageUrl} />
            <Persona circled size={PersonaSize.size24} imageUrl={demoImageUrl} />
        </Stack>
    );
};`
  },
  square: {
    title: "Square",
    desc: "Only use for the right-top login user in the header zone.",
    code: `import * as React from 'react';
import { Persona, Stack } from '@gui/fluent-ui-allure';


const demoImageUrl = "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png";
export const SampleSquare = () => {
    return (
        <Stack horizontal verticalAlign='center' tokens={{ childrenGap: 16 }}>
            <Persona text='Will Wang' />
            <Persona imageUrl={demoImageUrl} text='Will Wang' />
        </Stack>
    );
};`
  }
};

export { heading, desc, whenToUse, usage };
