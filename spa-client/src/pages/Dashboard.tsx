import { useEffect, useState } from "react";

import { api } from "@/api";
import { Navigation } from "@/components/layout/Navigation";
import useAuthStore from "@/store/auth";

const Dashboard = () => {
  const { accessToken, username } = useAuthStore();
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      api.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }).then((res) => {
        setIsSuccess(res?.data?.success);
      });
    }, 1000);
  }, []);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-6">
        <div className="max-w-7xl mx-auto space-y-8">

          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Msal Example
            </h1>
          </div>

          {isSuccess && (
            <div>
              Token successfully validated
            </div>
          )}

            <div>
              Username: {username}
            </div>
            <div>
              AccessToken: {accessToken}
            </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
