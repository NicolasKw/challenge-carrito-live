import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Producto } from '../models/Producto';

interface ProductosState {
    productosSeleccionados: Producto[]
};

const initialState: ProductosState = {
    productosSeleccionados: []
};

export const productosSlice = createSlice({
  name: 'productos',
  initialState,
  reducers: {
    agregarProducto: (state, action: PayloadAction<Producto>) => {
        state.productosSeleccionados.push(action.payload);
    },
    quitarProducto: (state, action: PayloadAction<Producto>) => {
        state.productosSeleccionados = state.productosSeleccionados.filter(producto => producto.id !== action.payload.id);
    },
    vaciarCarrito: (state) => {
      state.productosSeleccionados = []
    }
  },
});

export const { agregarProducto, quitarProducto, vaciarCarrito } = productosSlice.actions;
export default productosSlice.reducer;
