import { format, parse } from 'date-fns'
import { useSettingsStore } from '../../store/settingsStore'

const formatMap = {
    'DD.MM.YYYY': 'dd.MM.yyyy',
    'MM/DD/YYYY': 'MM/dd/yyyy',
    'YYYY-MM-DD': 'yyyy-MM-dd',
}

export const useFormattedDate = (dateString: string) => {
    const dateFormat = useSettingsStore((state) => state.formatDate)
    const date = parse(dateString, 'dd/MM/yyyy', new Date())
    return format(date, formatMap[dateFormat])
}