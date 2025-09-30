# MSAL Azure Authentication with JWT Example

A full-stack application demonstrating Microsoft Authentication Library (MSAL) integration with Azure Entra ID, featuring JWT token validation and secure API communication.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Azure AD tenant
- Two registered applications in Azure AD (frontend and backend)

### 1. Clone the Repository

```bash
git clone https://github.com/vtolochk/msal-client-api-jwt-example.git
cd msal-client-api-jwt-example
```

### 2. Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../spa-client
npm install
```

### 3. Azure AD Configuration

Follow the [Microsoft Identity Platform documentation](https://github.com/Azure-Samples/ms-identity-javascript-tutorial/tree/main/3-Authorization-II/1-call-api) to:

1. Register two applications in Azure AD:
   - **Frontend App**: Single Page Application
   - **Backend App**: Web API with delegated permissions

2. Configure the following:
   - Redirect URIs
   - API permissions
   - Authentication flows
   - Token configuration (ensure JWT v2.0)

### 4. Environment Configuration

Create environment files for both applications.
Use .env.example

### 5. Run the Application

```bash
# Start the backend server
cd backend
npm run start:dev

# Start the frontend development server (in a new terminal)
cd spa-client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section
2. Review the Azure AD configuration
3. Open an issue in the repository
4. Consult the Microsoft Identity Platform documentation

---

**Note**: This is a demonstration project. For production use, ensure you follow security best practices and implement proper error handling, logging, and monitoring.
