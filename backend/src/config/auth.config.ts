export const authConfig = {
  credentials: {
      tenantID: process.env.AZURE_TENANT_ID,
      clientID: process.env.AZURE_CLIENT_ID,
  },
  metadata: {
    jwksUri: process.env.JWKS_URI,
    jwtIssuer: process.env.JWT_ISSUER,
  },
  protectedRoutes: {
      todolist: {
          endpoint: "/api/todolist",
          delegatedPermissions: {
              read: ["Todolist.Read", "Todolist.ReadWrite"],
              write: ["Todolist.ReadWrite"]
          },
          applicationPermissions: {
              read: ["Todolist.Read.All", "Todolist.ReadWrite.All"],
              write: ["Todolist.ReadWrite.All"]
          }
      }
  }
}
