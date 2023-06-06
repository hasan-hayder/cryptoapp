import { Fragment } from "react"

interface TableProps {
    data: any[],
    config: any[]
}

export default function Table({data, config}: TableProps) {
const renderedHeaders = config.map((column) => {
    if (column.header) {
        return <Fragment key={column.key}>{column.label}</Fragment>
    }
    return (
        <th className="border-r p-2 border-burgundy" key={column.key}>{column.label}</th>
    )
})

const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {

        return <td className="p-2" key={column.key}>{column.render(rowData)}</td>
    })

    return (
        <tr  key={rowData.id}>{renderedCells}</tr>
    )
})

    return (
        <table className="table-auto  bg-logo  rounded-md">
            <thead>
                <tr className="border-b-8 border-b-burgundy text-forest-green">{renderedHeaders}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    )
}