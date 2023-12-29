const usage = {
  basic: {
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

export { usage };
