import { create } from 'zustand';
import { getPosts } from '../app/api//requests/posts/getPosts';
import { Post } from '../app/api/entities/Devices/IPost';

interface PostState {
  posts: Post[];
  selectedPost: Post | null;
}

interface PostActions {
  fetchPosts: () => Promise<void>;
  selectPost: (post: Post) => void;
  clearSelectedPost: () => void;
  clear: () => void;
}

const initState: PostState = {
  posts: [],
  selectedPost: null,
};

const usePostStore = create<PostState & PostActions>((set) => ({
  ...initState,

  fetchPosts: async () => {
    const data: Post[] = await getPosts();
    set({ posts: data });
  },
  selectPost: (post: Post) => set({ selectedPost: post }),
  clearSelectedPost: () => set({ selectedPost: null }),
  clear: () => set(initState),
}));

export default usePostStore;