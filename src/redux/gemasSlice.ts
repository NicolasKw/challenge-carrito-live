import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { gemasDisponibles } from '../configParametros';

interface GemasState {
    gemasDisponibles: number
};

const initialState: GemasState = {
    gemasDisponibles: gemasDisponibles
};

export const gemasSlice = createSlice({
  name: 'gemas',
  initialState,
  reducers: {
    operarGemas: (state, action: PayloadAction<number>) => {
        state.gemasDisponibles = state.gemasDisponibles + action.payload;
    }
  },
});

export const { operarGemas } = gemasSlice.actions;
export default gemasSlice.reducer;
