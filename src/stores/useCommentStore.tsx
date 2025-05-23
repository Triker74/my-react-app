import { create } from 'zustand';
import { getComments } from '../app/api/requests/posts/comments/getComments';
import { Comment } from '../app/api/entities/Devices/IComments';

interface CommentStore {
  comments: Comment[];
  fetchComments: (postId: number) => Promise<void>;
  clearComments: () => void;
}

const useCommentStore = create<CommentStore>((set) => ({
  comments: [],
  fetchComments: async (postId: number) => {
    const data = await getComments(postId);
    set({ comments: data });
  },
  clearComments: () => set({ comments: [] }),
}));

export default useCommentStore;
