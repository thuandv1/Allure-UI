const heading = "Dialog";
const desc =
  "Dialogs are modal control. It is a temporary popup that requires users to interact with the application.";

const whenToUse = {
  title: "When to use",
  uses: [
    "It is used for confirming actions, such as delete/cancel an item, asking people to notice.",
    "The user must make some choices before the next step. When the error result needs the user to pay attention to, use dialog to show the alert."
  ]
};

const usage = {
  basic: {
    title: "Basic Usage",
    layout: {
      title: "Layout",
      desc: "Default width: 480px, max height can be 80%x current. Browser-height. When the content space is full, it should begin to scroll vertically. You should avoid horizontal scrolling."
    },
    header: {
      title: "Header",
      desc: "Provide a title on the left and keep the title as simple and intuitive as possible, such as “Delete” “Warning”"
    },
    button: {
      title: "Button",
      desc: "Includes one primary button. A secondary button is optional. Primary confirmation button is always placed on the right side. Write button labels that are specific responses to the main information in the title. The title “Delete this file?” could have buttons labeled “Delete” and “Cancel” The Esc key acts like a “Cancel” effect."
    },
    code: `import * as React from "react";
import { PrimaryButton, DefaultButton, Dialog, DialogFooter } from "@gui/fluent-ui-allure";

export const SampleBasic = () => {
    const [isDialogClosed, setDialogClosed] = React.useState(true);
    return (
        <div>
            <DefaultButton onClick={() => setDialogClosed(false)}>Open dialog</DefaultButton>
            <Dialog hidden={isDialogClosed} title="Email Confirm" maxWidth="480px" minWidth="480px">
                <div style={{ maxHeight: 100 }}>
                    <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
                    <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
                    <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
                    <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
                </div>
                <DialogFooter>
                    <DefaultButton onClick={() => setDialogClosed(true)}>Cancel</DefaultButton>
                    <PrimaryButton onClick={() => setDialogClosed(true)}>Submit</PrimaryButton>
                </DialogFooter>
            </Dialog>
        </div>
    );
};`
  },
  confirm: {
    title: "Confirm",
    code: `import * as React from "react";
import { PrimaryButton, DefaultButton, Dialog, DialogFooter } from "@gui/fluent-ui-allure";

export const SampleNoDismiss = () => {
    const [isDialogClosed, setDialogClosed] = React.useState(true);
    return (
        <div>
            <DefaultButton onClick={() => setDialogClosed(false)}>Open dialog</DefaultButton>
            <Dialog hidden={isDialogClosed} title="Confirm" maxWidth="480px">
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque, excepturi, veniam, odit quos eveniet laudantium ea aut amet in est possimus minima rerum explicabo ducimus
                    quisquam optio! Alias, totam?
                </div>
                <DialogFooter>
                    <PrimaryButton onClick={() => setDialogClosed(true)} text="OK" />
                </DialogFooter>
            </Dialog>
        </div>
    );
};`
  }
};

export { heading, desc, whenToUse, usage };
