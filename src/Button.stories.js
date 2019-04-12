import React from "react";

import { storiesOf } from "@storybook/react";
import { Button } from "./Button";

storiesOf("Button", module)
  .add("With RED Background", () => <Button bg="red">Red Button</Button>)
  .add("With GREEN Background", () => <Button bg="green">Green Button</Button>);
