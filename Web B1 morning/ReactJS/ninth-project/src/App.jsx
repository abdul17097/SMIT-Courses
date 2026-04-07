import { useDisclosure } from "@mantine/hooks";
import "./App.css";
import { Button, Drawer, Modal } from "@mantine/core";

const App = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [modalOpened, { open: openModal, close: closeModal }] =
    useDisclosure(false);
  return (
    <div>
      <h1>hello world</h1>
      <Button>Click</Button>
      <Button variant="default" color="orange" size="md">
        Button
      </Button>
      <Drawer
        opened={opened}
        position="right"
        onClose={close}
        title="Authentication"
      ></Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
      <Modal opened={modalOpened} onClose={closeModal} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={openModal}>
        Open modal
      </Button>
    </div>
  );
};

export default App;
