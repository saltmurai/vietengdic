import { ActionIcon, Modal, Input, Select, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function AddWordButton() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <ActionIcon
        onClick={open}
        variant="filled"
        color="violet"
        size="lg"
        radius="md"
        aria-label="Settings"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-plus"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>
      </ActionIcon>
      <Modal opened={opened} onClose={close} title="Add new word">
        <div className="flex flex-col gap-4">
          <Input size="md" radius="md" placeholder="Input word" />
          <Select
            placeholder="Pick word type"
            data={["Noun", "Verb", "Adj", "Adverb"]}
          />
          <Input
            placeholder="Catergory"
            data={["Noun", "Verb", "Adj", "Adverb"]}
          />
        </div>
        <div className="mt-5 flex items-center justify-center">
          <Button>Add to dictionary</Button>
        </div>
      </Modal>
    </>
  );
}

export default AddWordButton;
