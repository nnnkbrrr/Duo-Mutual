import { ChangeEventHandler } from "react";

export interface TextFieldProps {
    className?: string;
    id?: string;
    placeholder: string | undefined;
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>
    trailingContent?: React.ReactNode
}

export const TextField: React.FC<TextFieldProps> = (
    {
        className="",
        id = "textfield",
        placeholder,
        value,
        onChange,
        trailingContent
    }
) => {
    return (
        <div
            className={"bg-secondary rounded-lg ring-2 ring-tertiary w-full mb-3 flex items-center w-full" + className}
        >
            <input
                className="bg-secondary px-6 py-3 rounded-lg focus:outline-none w-full"
                id={id}
                type="text"
                placeholder={placeholder}
                name="text-field"
                value={value}
                onChange={onChange}
            />

            { trailingContent }
        </div>
    );
};
