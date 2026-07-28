import type { StylesConfig } from "react-select";

export const customStylesForReactSelect: StylesConfig<{ value: string; label: string }, false> = {
    control: (base) => ({
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
    menu: (base) => ({
        ...base,
        backgroundColor: "#0A0A0A",
        border: "1px solid #333333",
        borderRadius: "0.5rem",
        marginTop: "4px",
    }),
    menuList: (base) => ({
        ...base,
        "::-webkit-scrollbar": {
            display: "none",
        },
        scrollbarWidth: "none",
        msOverflowStyle: "none",
    }),
    option: (base, { isFocused, isSelected }) => ({
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
    singleValue: (base) => ({
        ...base,
        color: "#FFFFFF",
    }),
    input: (base) => ({
        ...base,
        color: "#FFFFFF",
    }),
    placeholder: (base) => ({
        ...base,
        color: "#666666",
    }),
    dropdownIndicator: (base) => ({
        ...base,
        color: "#888888",
        "&:hover": {
            color: "#FFFFFF",
        },
    }),
    indicatorSeparator: (base) => ({
        ...base,
        backgroundColor: "#333333",
    }),
}

export const customStylesForReactSelectForFilter: StylesConfig<{ value: string; label: string }, false> = {
    control: (base) => ({
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
    valueContainer: (base) => ({
        ...base,
        padding: 0,
    }),
    indicatorsContainer: (base) => ({
        ...base,
        padding: 0,
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: "#0A0A0A",
        border: "1px solid #333333",
        borderRadius: "0",
        marginTop: "4px",
    }),
    menuList: (base) => ({
        ...base,
        "::-webkit-scrollbar": {
            display: "none",
        },
        scrollbarWidth: "none",
        msOverflowStyle: "none",
    }),
    option: (base, { isFocused, isSelected }) => ({
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
    singleValue: (base) => ({
        ...base,
        color: "inherit",
    }),
    input: (base) => ({
        ...base,
        color: "inherit",
    }),
    placeholder: (base) => ({
        ...base,
        display: "none",
    }),
    dropdownIndicator: (base) => ({
        ...base,
        color: "inherit",
        "&:hover": {
            color: "inherit",
        },
    }),
    indicatorSeparator: (base) => ({
        ...base,
        display: "none",
    }),
}

export const customStylesForReactSelectForSettings: StylesConfig<{ value: string; label: string }, false> = {
    control: (base) => ({
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
    menu: (base) => ({
        ...base,
        backgroundColor: "#0A0A0A",
        border: "1px solid #333333",
        borderRadius: "0.5rem",
        marginTop: "4px",
    }),
    menuList: (base) => ({
        ...base,
        "::-webkit-scrollbar": {
            display: "none",
        },
        scrollbarWidth: "none",
        msOverflowStyle: "none",
    }),
    option: (base, { isFocused, isSelected }) => ({
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
    singleValue: (base) => ({
        ...base,
        color: "#FFFFFF",
    }),
    input: (base) => ({
        ...base,
        color: "#FFFFFF",
    }),
    placeholder: (base) => ({
        ...base,
        color: "#364153",
    }),
    dropdownIndicator: (base) => ({
        ...base,
        color: "#888888",
        "&:hover": {
            color: "#FFFFFF",
        },
    }),
    indicatorSeparator: (base) => ({
        ...base,
        backgroundColor: "#333333",
    }),
}

export const customStylesForReactSelectLight: StylesConfig<{ value: string; label: string }, false> = {
    control: (base) => ({
        ...base,
        backgroundColor: "#F5F5F5",
        borderColor: "#000000",
        borderWidth: "1px",
        borderRadius: "0.5rem",
        minHeight: "48px",
        boxShadow: "none",
        "&:hover": {
            borderColor: "#000000",
        },
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: "#F5F5F5",
        border: "1px solid #D0D0D0",
        borderRadius: "0.5rem",
        marginTop: "4px",
    }),
    menuList: (base) => ({
        ...base,
        "::-webkit-scrollbar": {
            display: "none",
        },
        scrollbarWidth: "none",
        msOverflowStyle: "none",
    }),
    option: (base, { isFocused, isSelected }) => ({
        ...base,
        backgroundColor: isSelected
            ? "#000000"
            : isFocused
                ? "#E5E5E5"
                : "#F5F5F5",
        color: isSelected ? "#F5F5F5" : "#000000",
        cursor: "pointer",
        "&:active": {
            backgroundColor: "#D0D0D0",
        },
    }),
    singleValue: (base) => ({
        ...base,
        color: "#000000",
    }),
    input: (base) => ({
        ...base,
        color: "#000000",
    }),
    placeholder: (base) => ({
        ...base,
        color: "#999999",
    }),
    dropdownIndicator: (base) => ({
        ...base,
        color: "#666666",
        "&:hover": {
            color: "#000000",
        },
    }),
    indicatorSeparator: (base) => ({
        ...base,
        backgroundColor: "#D0D0D0",
    }),
}

export const customStylesForReactSelectForFilterLight: StylesConfig<{ value: string; label: string }, false> = {
    control: (base) => ({
        ...base,
        backgroundColor: "#F5F5F5",
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
    valueContainer: (base) => ({
        ...base,
        padding: 0,
    }),
    indicatorsContainer: (base) => ({
        ...base,
        padding: 0,
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: "#F5F5F5",
        border: "1px solid #D0D0D0",
        borderRadius: "0",
        marginTop: "4px",
    }),
    menuList: (base) => ({
        ...base,
        "::-webkit-scrollbar": {
            display: "none",
        },
        scrollbarWidth: "none",
        msOverflowStyle: "none",
    }),
    option: (base, { isFocused, isSelected }) => ({
        ...base,
        backgroundColor: isSelected
            ? "#000000"
            : isFocused
                ? "#E5E5E5"
                : "#F5F5F5",
        color: isSelected ? "#FFFFFF" : "#000000",
        cursor: "pointer",
        "&:active": {
            backgroundColor: "#D0D0D0",
        },
    }),
    singleValue: (base) => ({
        ...base,
        color: "inherit",
    }),
    input: (base) => ({
        ...base,
        color: "inherit",
    }),
    placeholder: (base) => ({
        ...base,
        display: "none",
    }),
    dropdownIndicator: (base) => ({
        ...base,
        color: "inherit",
        "&:hover": {
            color: "inherit",
        },
    }),
    indicatorSeparator: (base) => ({
        ...base,
        display: "none",
    }),
}

export const customStylesForReactSelectForSettingsLight: StylesConfig<{ value: string; label: string }, false> = {
    control: (base) => ({
        ...base,
        backgroundColor: "#F5F5F5",
        borderColor: "#000000",
        borderWidth: "1px",
        borderRadius: "0.5rem",
        minHeight: "48px",
        boxShadow: "none",
        "&:hover": {
            borderColor: "#A0A0A0",
        },
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: "#F5F5F5",
        border: "1px solid #D0D0D0",
        borderRadius: "0.5rem",
        marginTop: "4px",
    }),
    menuList: (base) => ({
        ...base,
        "::-webkit-scrollbar": {
            display: "none",
        },
        scrollbarWidth: "none",
        msOverflowStyle: "none",
    }),
    option: (base, { isFocused, isSelected }) => ({
        ...base,
        backgroundColor: isSelected
            ? "#000000"
            : isFocused
                ? "#E5E5E5"
                : "#F5F5F5",
        color: isSelected ? "#FFFFFF" : "#000000",
        cursor: "pointer",
        "&:active": {
            backgroundColor: "#D0D0D0",
        },
    }),
    singleValue: (base) => ({
        ...base,
        color: "#000000",
    }),
    input: (base) => ({
        ...base,
        color: "#000000",
    }),
    placeholder: (base) => ({
        ...base,
        color: "#999999",
    }),
    dropdownIndicator: (base) => ({
        ...base,
        color: "#666666",
        "&:hover": {
            color: "#000000",
        },
    }),
    indicatorSeparator: (base) => ({
        ...base,
        backgroundColor: "#D0D0D0",
    }),
}