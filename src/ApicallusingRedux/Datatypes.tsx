
export interface Data {
    id: number;
    name: string;
  }
  export interface DataState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    data: Data[] | null;
    error: string | null;
  }