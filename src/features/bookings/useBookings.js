import {useQuery} from "@tanstack/react-query"
import {getBookings} from "../../services/apiBookings.js"
import {useSearchParams} from "react-router-dom"

export function useBookings() {
    const [searchParams] = useSearchParams()

    // FILTER
    const filteredValue = searchParams.get('status')
    const filter = !filteredValue || filteredValue === 'all'
        ? null
        : {field: 'status', value: filteredValue}

    const {isLoading, data: bookings, error} = useQuery({
        queryKey: ['bookings', filter],
        queryFn: () => getBookings({filter}),
    })

    return {isLoading, bookings, error }
}

