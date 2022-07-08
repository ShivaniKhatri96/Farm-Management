import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../app/store'

// Defining a type for the slice state
interface headerState {
    active: boolean
}

// Defining the initial state using that type
const initialState: headerState = {
    active: false
}

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        toggleActive: (state) => {
            state.active = !state.active;
        }
    }
})

export const { toggleActive } = headerSlice.actions
export default headerSlice.reducer