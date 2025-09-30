import { LogLevel } from "@azure/msal-browser/custom-auth";

export const AZURE_AUTH_CLIENT_ID = import.meta.env.VITE_AZURE_CLIENT_ID;
export const AZURE_AUTH_AUTHORITY = import.meta.env.VITE_AZURE_AUTH_AUTHORITY;
export const BACKEND_API_URL = import.meta.env.VITE_API_URL;
export const BACKEND_CLIENT_ID = import.meta.env.VITE_AZURE_BACKEND_CLIENT_ID;
export const KNOWN_AUTHORITIES = import.meta.env.VITE_KNOWN_AUTHORITIES;

export const protectedResources = {
    todolistApi: {
        endpoint: `${BACKEND_API_URL}/api/todolist`,
        scopes: {
            read: [`api://${BACKEND_CLIENT_ID}/Todolist.Read`],
            write: [`api://${BACKEND_CLIENT_ID}/Todolist.Read`],
        },
    },
};

export const loginRequest = {
    scopes: [...protectedResources.todolistApi.scopes.read, ...protectedResources.todolistApi.scopes.write],
};

export const azureAuthConfig = {
    auth: {
        clientId: AZURE_AUTH_CLIENT_ID,
        authority: AZURE_AUTH_AUTHORITY,
        redirectUri: "http://localhost:8080",
        knownAuthorities: KNOWN_AUTHORITIES,
        postLogoutRedirectUri: "",
        navigateToLoginRequestUrl: false,
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    },
    system: {
        loggerOptions: {
            loggerCallback: (level: LogLevel, message: string, containsPii: boolean) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            },
        },
    },
};
