import { FC } from "react";

interface SelectInputProps {
  type: "checkbox" | "radio";
  id: string;
  text: string;
  selectedOptions: string[];
  setSelectedOptions: (newValue: string[]) => void;
  allowMultiple?: boolean;
}

const SelectInput: FC<SelectInputProps> = ({
  id,
  selectedOptions,
  setSelectedOptions,
  text,
  type,
  allowMultiple,
}) => {
  const handleOptionChange = (option: string) => {
    if (allowMultiple) {
      const currentIndex = selectedOptions.indexOf(option);
      const newSelectedOptions = [...selectedOptions];
      if (currentIndex === -1) {
        newSelectedOptions.push(option);
      } else {
        newSelectedOptions.splice(currentIndex, 1);
      }
      setSelectedOptions(newSelectedOptions);
    } else {
      const newSelectedOptions = [option];
      setSelectedOptions(newSelectedOptions);
    }
  };
  return (
    <div className="flex items-center gap-x-2">
      <input
        type={type}
        id={id}
        checked={selectedOptions.includes(id)}
        onChange={() => handleOptionChange(id)}
        className="w-[15px] h-[15px] !rounded-xl !bg-transparent"
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default SelectInput;
