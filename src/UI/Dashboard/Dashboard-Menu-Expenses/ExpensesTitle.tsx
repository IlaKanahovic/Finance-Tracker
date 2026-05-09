type Props = {
    title: string 
}

export function ExpensesTitle(props: Props) {
    return (
        <p className="text-sm font-medium text-gray-500 "> {props.title} </p>
    )
}