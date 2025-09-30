// API Configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'
const FRONTEND_DOMAIN = import.meta.env.VITE_FRONTEND_DOMAIN || 'localhost:5173'
const FRONTEND_PROTOCOL = import.meta.env.VITE_FRONTEND_PROTOCOL || 'http'

// Azure Entra ID Configuration
const AZURE_CLIENT_ID = import.meta.env.VITE_AZURE_CLIENT_ID || ''
const AZURE_TENANT_ID = import.meta.env.VITE_AZURE_TENANT_ID || ''
const AZURE_REDIRECT_URI = import.meta.env.VITE_AZURE_REDIRECT_URI || 'http://localhost:5173'
const AZURE_AUTHORITY = import.meta.env.VITE_AZURE_AUTHORITY || `https://login.microsoftonline.com/${AZURE_TENANT_ID}`
const AZURE_SCOPES = import.meta.env.VITE_AZURE_SCOPES?.split(' ') || ['openid', 'profile', 'email', 'User.Read']

export {
  API_URL,
  FRONTEND_DOMAIN,
  FRONTEND_PROTOCOL,
  AZURE_CLIENT_ID,
  AZURE_TENANT_ID,
  AZURE_REDIRECT_URI,
  AZURE_AUTHORITY,
  AZURE_SCOPES
}
