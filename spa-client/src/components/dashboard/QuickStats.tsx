import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle, Users, Package } from "lucide-react";

const QuickStats = () => {
  const todayStats = [
    {
      label: "Ventes du jour",
      value: "€3,420",
      change: "+12%",
      trend: "up",
      progress: 68
    },
    {
      label: "Prescriptions traitées",
      value: "89",
      change: "+5%",
      trend: "up",
      progress: 74
    },
    {
      label: "Stock critique",
      value: "23 articles",
      change: "-3",
      trend: "down",
      progress: 15,
      isAlert: true
    },
    {
      label: "Satisfaction client",
      value: "4.8/5",
      change: "+0.2",
      trend: "up",
      progress: 96
    },
    {
      label: "Clients du jour",
      value: "127",
      change: "+8%",
      trend: "up",
      progress: 82
    },
    {
      label: "Commandes en attente",
      value: "12",
      change: "+3",
      trend: "up",
      progress: 35,
      isAlert: true
    }
  ];

  const systemStatus = [
    { name: "Système de caisse", status: "operational", uptime: "99.9%" },
    { name: "Gestion des stocks", status: "operational", uptime: "99.7%" },
    { name: "Réseau fournisseurs", status: "maintenance", uptime: "95.2%" },
    { name: "Sauvegarde données", status: "operational", uptime: "100%" }
  ];

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800">Activité du Jour</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {todayStats.map((stat, index) => (
              <div key={index} className="space-y-2 p-4 rounded-lg bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">{stat.label}</span>
                    {stat.isAlert && <AlertCircle className="h-4 w-4 text-orange-500" />}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">{stat.value}</span>
                    <div className={`flex items-center text-xs ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}>
                      {stat.trend === "up" ? (
                        <TrendingUp className="h-3 w-3 mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 mr-1" />
                      )}
                      {stat.change}
                    </div>
                  </div>
                </div>
                <Progress 
                  value={stat.progress} 
                  className={`h-2 ${stat.isAlert ? "bg-orange-100" : ""}`}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800">État des Systèmes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {systemStatus.map((system, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
              <div className="flex items-center space-x-3">
                {system.status === "operational" ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-orange-500" />
                )}
                <span className="font-medium text-gray-900">{system.name}</span>
              </div>
              <div className="text-right">
                <div className={`text-xs font-medium ${
                  system.status === "operational" ? "text-green-600" : "text-orange-600"
                }`}>
                  {system.status === "operational" ? "Opérationnel" : "Maintenance"}
                </div>
                <div className="text-xs text-gray-500">{system.uptime} uptime</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export { QuickStats };
