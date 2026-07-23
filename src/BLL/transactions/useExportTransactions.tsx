import type { GetTransactions } from "../../DAL/api";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import autoTable from "jspdf-autotable";
import toast from "react-hot-toast";

export function useExportTransactions(transactions: GetTransactions[] | null, format: string) {

    if (format === 'CSV') {
        const exportToCSV = () => {
            if (!transactions || transactions.length === 0) {
                toast.error('Нет транзакций для экспорта')
                return
            }

            const headers = ['Title', 'Description', 'Category', 'Currency', 'Amount']

            let csvString = headers.join(';') + '\n'

            transactions.forEach(row => {
                const values = [row.title, row.description, row.category, row.currency, row.amount]
                csvString += values.join(';') + '\n'
            })

            const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' })
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = 'Transactions.csv'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            URL.revokeObjectURL(url)
            toast.success('CSV экспортирован')
        }

        return exportToCSV
    } else if (format === 'PDF') {
        const exportToPDF = () => {
            if (!transactions || transactions.length === 0) {
                toast.error('Нет транзакций для экспорта')
                return
            }

            try {
                const doc = new jsPDF()
                doc.text('Transactions', 14, 10)

                const headers = [['Title', 'Description', 'Category', 'Currency', 'Amount', 'Date']]

                const rows = transactions.map(t => [
                    t.title,
                    t.description,
                    t.category,
                    t.currency,
                    t.amount,
                    t.date
                ])

                autoTable(doc, {
                    head: headers,
                    body: rows,
                    theme: 'grid',
                    styles: {
                        cellPadding: 2,
                        fontSize: 10
                    },
                    margin: { top: 30 }
                })

                doc.save('Transactions.pdf')
                toast.success('PDF экспортирован')
            } catch {
                toast.error('Ошибка при создании PDF')
            }
        }

        return exportToPDF
    } else if (format === 'Excel') {
        const exportToExcel = () => {
            if (!transactions || transactions.length === 0) {
                toast.error('Нет транзакций для экспорта')
                return
            }

            try {
                const book = XLSX.utils.book_new()
                const worksheet = XLSX.utils.json_to_sheet(transactions)
                XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1')
                const excelBuffer = XLSX.write(book, { bookType: 'xlsx', type: 'array' })
                const blob = new Blob([excelBuffer], { type: 'application/octet-stream' })
                saveAs(blob, 'Transactions.xlsx')
                toast.success('Excel экспортирован')
            } catch {
                toast.error('Ошибка при создании Excel')
            }
        }

        return exportToExcel
    }
}