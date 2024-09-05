"use client"

import { Button, Modal, Title, TextInput, Group, Container, Select, Radio, Checkbox, Text, Anchor, Space } from "@mantine/core";
import { runningPlans } from "@components/libs/runningPlans";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

export default function Home() {
  const [opened, {open, close}] = useDisclosure(false); //เริ่มต้น Modal เป็น false
  const [termAccepted, setTermAccepted] = useState(false);

  return (
  <div>

    <Container size={"500px"}>
    <Title fs="italic" ta="center">Register CMU Marathon</Title>

    <Group grow>
    <TextInput label="First Name" placeholder="Input First Name" required/>
    <TextInput label="Last Name" placeholder="Input Last Name" required/>
    </Group>

    <Select
    label = "Running Plan: "
    data = {runningPlans}
    placeholder = "Select Running Plan"
    searchable = {true}
    required
    />

    <Space h = "lg"/>
    <Radio.Group label = "Gender">
    <Radio labelPosition="right" value = "male" label="Male" color="indigo"/>
    <Radio labelPosition="right" value = "female" label="Female" color="indigo"/>
    </Radio.Group>

    <Space h = "lg"/>
    <Group>
    <Checkbox 
    checked = {termAccepted} 
    onChange={(event) => setTermAccepted(event.target.checked)}/>
    <Text> I accept 
      <Anchor onClick={open}> terms and conditions</Anchor>
    </Text>
    </Group>

    <Group grow>
      <Button mt = "sm" onClick={open} disabled = {!termAccepted}>Register</Button>
    </Group>

    </Container>

    <Modal opened = {opened} onClose={close} title = "Terms and conditions">
      <Text>
        1. Some terms and conditions ... <br />
        2. Second terms and conditions ... <br />
        3. Third terms and conditions ... <br />
      </Text>
      <Button onClick={close}>Confirm</Button>
    </Modal>

  </div>);
}
