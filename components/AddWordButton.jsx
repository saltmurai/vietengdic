import { ActionIcon, Modal, Input, Select, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";

function AddWordButton({ setWordList }) {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      word: "",
      type: "",
      category: "",
    },
    validate: {
      // validate non-empty word
      word: (value) => value.trim().length === 0,
      type: (value) => value.trim().length === 0 || value === undefined,
    },
  });

  function handleSubmit(values) {
    console.log(values);
    // {word: "test", type: "Noun", category: "test"}
    // [values.word, values.type, values.category]
    setWordList((prev) => [
      ...prev,
      [values.word, values.type, values.category],
    ]);
    close();
  }

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
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <div className="flex flex-col gap-4">
            <Input
              size="md"
              radius="md"
              placeholder="Input word"
              {...form.getInputProps("word")}
            />
            <Select
              required={true}
              placeholder="Pick word type"
              data={["Noun", "Verb", "Adj", "Adverb"]}
              {...form.getInputProps("type")}
            />
            <Input
              placeholder="Catergory"
              {...form.getInputProps("category")}
            />
          </div>
          <div className="mt-5 flex items-center justify-center">
            <Button type="submit">Add to dictionary</Button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default AddWordButton;
