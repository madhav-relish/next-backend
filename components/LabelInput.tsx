import React, { ChangeEventHandler } from "react";

const LabelInput = ({
  value,
  handleChange,
  type,
  placeholder,
  label

}: LabeledInputType) => {
  return (
    <div>
        <label  className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
      <input
        value={value}
        onChange={handleChange}
        type={type || "text"}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

interface LabeledInputType {
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  type: string;
  placeholder: string;
  label: string
}

export default LabelInput;
