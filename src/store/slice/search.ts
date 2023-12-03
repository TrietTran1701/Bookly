import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
  isOpenSearch: boolean;
  status: string;
  error: {
    type: string;
    message: string;
  };
}
const initialState: SearchState = {
  isOpenSearch: false,
  status: '',
  error: {
    type: '',
    message: '',
  },
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    openSearch: (state) => {
      state.isOpenSearch = true;
    },

    closeSearch: (state) => {
      state.isOpenSearch = false;
    },
  },
});

export const { openSearch, closeSearch } = searchSlice.actions;
export default searchSlice.reducer;
