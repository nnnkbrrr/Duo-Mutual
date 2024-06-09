import {ChangeEventHandler} from "react";

export interface TextFieldProps {
    className?: string;
    id?: string;
    placeholder: string | undefined;
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}

export const TextField: React.FC<TextFieldProps> = (
    {
        className="",
        id = "textfield",
        placeholder,
        value,
        onChange
    }
) => {
    return (
        <input
            id={id}
            className={"bg-secondary px-6 py-3 rounded-lg ring-2 ring-tertiary focus:outline-none w-full mb-3" + className}
            type="text"
            placeholder={placeholder}
            name="text-field"
            value={value}
            onChange={onChange}
        />
    );
};
