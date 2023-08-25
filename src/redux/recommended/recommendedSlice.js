import { createSlice } from '@reduxjs/toolkit';
import { randomChoice } from '../../utils/randomChoice';

const INITITAL_STATE = {
    recommended: randomChoice(4)
}


export const recommendedSlice = createSlice({
    name: 'recommended',
    initialState: INITITAL_STATE,
    reducers: {
        randomRecommended: (state) =>{
            return state
        }
    }

})

export const {randomRecommended} = recommendedSlice.actions

export default recommendedSlice.reducer