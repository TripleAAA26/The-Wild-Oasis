import styled from "styled-components"
import {useRecentBookings} from "./useRecentBookings.js"
import Spinner from "../../ui/Spinner.jsx"
import {useRecentStays} from "./useRecentStays.js"

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`


function DashboardLayout() {
    const {bookings, isLoading: isLoading1} = useRecentBookings()
    const {stays, isLoading: isLoading2, confirmedStays} = useRecentStays()

    if(isLoading1 || isLoading2) return <Spinner />

    return (
        <StyledDashboardLayout>
            <div>Statistics</div>
            <div>Today activity</div>
            <div>Chart stay duration</div>
            <div>Chart Sales</div>
        </StyledDashboardLayout>
    )
}

export default DashboardLayout