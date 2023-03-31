import { createSlice, createAsyncThunk,PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostState {
 loading: boolean
  posts: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PostState = {
loading: false,
  posts: [],
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    return  axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>response.data)
});

// export const fetchPosts = createAsyncThunk<Post[], void, { rejectValue: string }>(
//  'posts/fetchPosts',
//     async (_, thunkAPI) => {
//       try {
//         const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
//         return console.log(response.data);
//       } catch (error) {
//         return thunkAPI.rejectWithValue('Failed to fetch posts');
//       }
//     }
//   );

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false
        state.posts = action.payload
        state.error = ''
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false
        state.posts = []
        state.error = action.error.message || 'Something went wrong'
      });
  },
});

export default postSlice.reducer;
