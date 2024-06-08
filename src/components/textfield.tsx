export interface TextFieldProps {
  placeholder: string | undefined;
}

export const TextField: React.FC<TextFieldProps> = ({ placeholder }) => {
  return (
    <input
      className="bg-secondary px-6 py-3 rounded-lg ring-2 ring-tertiary focus:outline-none"
      type="text"
      placeholder={placeholder}
      name="text-field"
    />
  );
};
