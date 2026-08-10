import { create } from 'zustand';
import type { User } from '@supabase/supabase-js';

interface AuthStore {
    // Pode ser null (deslogado) ou o objeto User do Supabase
    user: User | null; 
    
    // Booleano para evitar que a tela pisque na primeira vez que o site carrega
    isInitialized: boolean; 
    
    setUser: (user: User | null) => void;
    setInitialized: (status: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    isInitialized: false,
    
    setUser: (user) => set({ user }),
    setInitialized: (status) => set({ isInitialized: status }),
}));