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

export const customStylesForReactSelectForFilter = {
    control: (base: object) => ({
        ...base,
        backgroundColor: "#0A0A0A",
        borderColor: "transparent",
        borderWidth: "0",
        borderRadius: "0",
        boxShadow: "none",
        color: "inherit",
        fontSize: "0.875rem",
        lineHeight: "1.5",
        minHeight: "auto",
        cursor: "pointer",
        "&:hover": {
            borderColor: "transparent",
        },
    }),
    valueContainer: (base: object) => ({
        ...base,
        padding: 0,
    }),
    indicatorsContainer: (base: object) => ({
        ...base,
        padding: 0,
    }),
    menu: (base: object) => ({
        ...base,
        backgroundColor: "#0A0A0A",
        border: "1px solid #333333",
        borderRadius: "0",
        marginTop: "4px",
    }),
    menuList: (base: object) => ({
        ...base,
        "::-webkit-scrollbar": {
            display: "none" as const,
        },
        scrollbarWidth: "none" as const,
        msOverflowStyle: "none" as const,
    }),
    option: (base: object, { isFocused, isSelected }: any) => ({
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
        color: "inherit",
    }),
    input: (base: object) => ({
        ...base,
        color: "inherit",
    }),
    placeholder: (base: object) => ({
        ...base,
        display: "none",
    }),
    dropdownIndicator: (base: object) => ({
        ...base,
        color: "inherit",
        "&:hover": {
            color: "inherit",
        },
    }),
    indicatorSeparator: (base: object) => ({
        ...base,
        display: "none",
    }),
}

export const customStylesForReactSelectForSettings = {
    control: (base: object) => ({
        ...base,
        backgroundColor: "#0A0A0A",
        borderColor: "#364153",
        borderWidth: "1px",
        borderRadius: "0.5rem",
        minHeight: "48px",
        boxShadow: "none",
        "&:hover": {
            borderColor: "#ffffff",
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
        color: "#364153",
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