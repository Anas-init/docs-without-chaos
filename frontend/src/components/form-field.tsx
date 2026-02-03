import { Controller } from "react-hook-form";
import type { Control, FieldValues, Path } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

type FormFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  id?: string;
};

export function FormField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  id,
}: FormFieldProps<T>) {
  const inputId = id ?? `${name}-field`;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={inputId}>{label}</FieldLabel>
          <Input
            {...field}
            id={inputId}
            type={type}
            placeholder={placeholder}
            aria-invalid={fieldState.invalid}
            className="rounded-none"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
