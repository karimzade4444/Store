import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { Input } from "../ui/input";
import type { ComponentProps } from "react";

interface IFormInput<T extends FieldValues> extends ComponentProps<"input"> {
  name: Path<T>;
  control: Control<T>;
  placeholder?: string;
}

const FormInput = <T extends FieldValues>({
  control,
  name,
  placeholder,
  ...props
}: IFormInput<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <Input
            placeholder={placeholder}
            aria-invalid={!!fieldState.error}
            {...field}
            {...props}
            className="border border-black/30"
          />

          <p className="text-red-500 text-sm">{fieldState.error?.message}</p>
        </>
      )}
    />
  );
};

export default FormInput;
