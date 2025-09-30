import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { azureAuthConfig } from "@/config/azure-config";
import { PublicClientApplication } from '@azure/msal-browser';

const useAuthStore = create(
  persist(
    (set, get) => ({
      username: "",
      accessToken: "",
      isAuthenticated: false,
      loading: false,
      msalInstance: null,
      setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
      setUsername: (username: string) => set({ username }),
      setAccessToken: (accessToken: string) => set({ accessToken }),

      initializeApp: async () => {
        set({ loading: true });
        try {
          console.log('azureAuthConfig', azureAuthConfig);
          const instance = new PublicClientApplication(azureAuthConfig);
          await instance.initialize()
          set({ msalInstance: instance, loading: false });
        } catch (error) {
          set({ loading: false });
          console.error('Failed to initialize app instance:', error);
        }
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useAuthStore;
