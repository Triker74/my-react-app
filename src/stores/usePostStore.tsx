import { create } from 'zustand';
import { getPosts } from '../app/api//requests/posts/getPosts';
import { Post } from '../app/api/entities/Devices/IPost';

interface PostStore {
  posts: Post[];
  selectedPost: Post | null;
  fetchPosts: () => Promise<void>;
  selectPost: (post: Post) => void;
  clearSelectedPost: () => void;
}

const usePostStore = create<PostStore>((set) => ({
  posts: [],
  selectedPost: null,
  fetchPosts: async () => {
    const data = await getPosts();
    set({ posts: data });
  },
  selectPost: (post) => set({ selectedPost: post }),
  clearSelectedPost: () => set({ selectedPost: null }),
}));

export default usePostStore;
