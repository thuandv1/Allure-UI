const usage = {
  basic: {
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

export { usage };
