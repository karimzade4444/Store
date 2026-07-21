import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import type { ComponentProps, ReactElement } from "react";

interface ICustomInput extends ComponentProps<"input"> {
  start?: ReactElement;
  end?: ReactElement;
}

const CustomInput = ({ start, end, placeholder, ...props }: ICustomInput) => {
  return (
    <InputGroup {...props}>
      <InputGroupInput placeholder={placeholder} />
      <InputGroupAddon>{start && start}</InputGroupAddon>
      <InputGroupAddon align="inline-end">{end && end}</InputGroupAddon>
    </InputGroup>
  );
};

export default CustomInput;
