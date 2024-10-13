import * as Dialog from "@radix-ui/react-dialog";

export const ExampleDialog = () => (
  <Dialog.Root>
    <Dialog.Trigger className="btn">Open Dialog</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="overlay" />
      <Dialog.Content className="dialog-content">
        <Dialog.Title>Dialog Title</Dialog.Title>
        <Dialog.Description>Description here</Dialog.Description>
        <Dialog.Close className="btn">Close</Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
