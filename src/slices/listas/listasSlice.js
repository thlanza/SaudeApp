import { createSlice } from '@reduxjs/toolkit'
import api from '../../services/api'

export const initialState = {
  loading: false,
  hasErrors: false,
  listas: [],
}


const listasSlice = createSlice({
  name: 'listas',
  initialState,
  reducers: {
    getListas: state => {
      state.loading = true
    },
    getListasSuccess: (state, { payload }) => {
      state.listas = payload
      state.loading = false
      state.hasErrors = false
    },
    getListasFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

// Three actions generated from the slice
export const { getListas, getListasSuccess, getListasFailure } = listasSlice.actions

//The selector
export const listasSelector = state => state.listas


// Asynchronous thunk action
export function fetchListas() {
    return async dispatch => {
      dispatch(getListas())
  
        api.get('/listas')
            .then(res => {
                const dados = res.data.data;
                dispatch(getListasSuccess(dados))
            }).catch(e => {
                dispatch(getListasFailure())
            })

    }
  }

  // The reducer
export default listasSlice.reducer

