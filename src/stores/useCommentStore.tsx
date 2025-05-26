import { create } from 'zustand';
import { getComments } from '../app/api/requests/posts/comments/getComments';
import { Comment } from '../app/api/entities/Devices/IComments';

interface CommentState {
  comments: Comment[];
}

interface CommentActions {
  fetchComments: (postId: number) => Promise<void>;
  clearComments: () => void;
  clear: () => void;
}

const initState: CommentState = {
  comments: [],
};

const useCommentStore = create<CommentState & CommentActions>((set) => ({
  ...initState,

  fetchComments: async (postId: number) => {
    const data: Comment[] = await getComments(postId);
    set({ comments: data });
  },
  clearComments: () => set({ comments: [] }),
  clear: () => set(initState),
}));

export default useCommentStore;