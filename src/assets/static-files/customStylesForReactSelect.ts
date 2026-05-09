type Option = {
    isFocused: boolean
    isSelected: boolean
}

export const customStylesForReactSelect = {
    control: (base: object) => ({
        ...base,
        backgroundColor: "#0A0A0A",
        borderColor: "#333333",
        borderWidth: "1px",
        borderRadius: "0.5rem",
        minHeight: "48px",
        boxShadow: "none",
        "&:hover": {
            borderColor: "#555555",
        },
    }),
    menu: (base: object) => ({
        ...base,
        backgroundColor: "#0A0A0A",
        border: "1px solid #333333",
        borderRadius: "0.5rem",
        marginTop: "4px",
    }),
    option: (base: object, { isFocused, isSelected }: Option) => ({
        ...base,
        backgroundColor: isSelected
            ? "#FFFFFF"
            : isFocused
                ? "#1A1A1A"
                : "#0A0A0A",
        color: isSelected ? "#000000" : "#FFFFFF",
        cursor: "pointer",
        "&:active": {
            backgroundColor: "#333333",
        },
    }),
    singleValue: (base: object) => ({
        ...base,
        color: "#FFFFFF",
    }),
    input: (base: object) => ({
        ...base,
        color: "#FFFFFF",
    }),
    placeholder: (base: object) => ({
        ...base,
        color: "#666666",
    }),
    dropdownIndicator: (base: object) => ({
        ...base,
        color: "#888888",
        "&:hover": {
            color: "#FFFFFF",
        },
    }),
    indicatorSeparator: (base: object) => ({
        ...base,
        backgroundColor: "#333333",
    }),
}
