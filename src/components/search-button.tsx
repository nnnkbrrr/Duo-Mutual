export interface SearchButtonProps {
    className?: string;
    label: string;
}

export const SearchButton: React.FC<SearchButtonProps> = (
    {
        className="",
        label
    }
) => {
    return (
        <button
            className={"bg-accent-primary button-shadow px-6 py-3 rounded-lg ring-2 ring-tertiary focus:outline-none w-full" + className}
            type="submit"
        >
            { label }
        </button>
    );
};
