import { create } from 'zustand';

interface AuthState {
  user: null | {
    email: string;
    name: string;
    picture: string;
  };
  setUser: (user: AuthState['user']) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));