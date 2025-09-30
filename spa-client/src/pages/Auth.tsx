import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { loginRequest } from "@/config/azure-config";
import useAuthStore from "@/store/auth";


// function signOut() {
//   /**
//    * You can pass a custom request object below. This will override the initial configuration. For more information, visit:
//    * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/request-response-object.md#request
//    */

//   // Choose which account to logout from by passing a username.
//   const logoutRequest = {
//       account: myMSALObj.getAccountByUsername(username),
//   };
//   myMSALObj.logoutPopup(logoutRequest).then(() => {
//       window.location.reload();
//   });
// }

const Auth = () => {
  const navigate = useNavigate();
  const { msalInstance, initializeApp, setUsername, setAccessToken, setIsAuthenticated } = useAuthStore();

  useEffect(() => {
    initializeApp();
}, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!msalInstance) {
      return;
    }

    msalInstance.loginPopup(loginRequest)
    .then((res) => {
      console.log('loginPopup account', res.account);
      console.log('loginPopup access_token', res);

      if (res.accessToken) {
        setUsername(res.account.username);
        setAccessToken(res.accessToken);
        setIsAuthenticated(true);
        navigate("/dashboard");
      }
    })
    .catch((error) => {
        console.log(error);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Return
        </Button>

        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              MSAL Example
            </CardTitle>
            <CardDescription>
              Access your space
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
              >
                Connect
              </Button>
            </form>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default Auth;
