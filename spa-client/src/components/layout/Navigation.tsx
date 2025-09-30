
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => navigate('/')}>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Msal Example
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {!isHomePage && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(-1)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Retour
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/')}
                  className="text-blue-600 border-blue-600 hover:bg-blue-50"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Accueil
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navigation };
