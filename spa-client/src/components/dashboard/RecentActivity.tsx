
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Package, ShoppingCart, Users, AlertTriangle } from "lucide-react";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "stock",
      title: "Stock critique détecté",
      description: "Amoxicilline 500mg - 5 unités restantes",
      time: "Il y a 5 min",
      icon: AlertTriangle,
      priority: "high"
    },
    {
      id: 2,
      type: "sale",
      title: "Vente importante",
      description: "Commande de €450 - Client entreprise",
      time: "Il y a 12 min",
      icon: ShoppingCart,
      priority: "normal"
    },
    {
      id: 3,
      type: "delivery",
      title: "Livraison reçue",
      description: "Grossiste Pharma+ - 156 articles",
      time: "Il y a 25 min",
      icon: Package,
      priority: "normal"
    },
    {
      id: 4,
      type: "customer",
      title: "Nouveau client fidélité",
      description: "Mme Dubois - Carte fidélité activée",
      time: "Il y a 1h",
      icon: Users,
      priority: "low"
    },
    {
      id: 5,
      type: "stock",
      title: "Réapprovisionnement planifié",
      description: "Commande automatique fournisseur X",
      time: "Il y a 2h",
      icon: Package,
      priority: "normal"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "normal":
        return "bg-blue-100 text-blue-800";
      case "low":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getIconColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-500";
      case "normal":
        return "text-blue-500";
      case "low":
        return "text-gray-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <Card className="border-0 shadow-lg h-fit">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
          <Clock className="h-5 w-5 mr-2" />
          Activité Récente
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className={`p-2 rounded-full bg-gray-100`}>
              <activity.icon className={`h-4 w-4 ${getIconColor(activity.priority)}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-900 truncate">
                  {activity.title}
                </h4>
                <Badge className={`ml-2 ${getPriorityColor(activity.priority)} text-xs`}>
                  {activity.priority === "high" ? "Urgent" : 
                   activity.priority === "normal" ? "Normal" : "Info"}
                </Badge>
              </div>
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                {activity.description}
              </p>
              <p className="text-xs text-gray-500 mt-1 flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {activity.time}
              </p>
            </div>
          </div>
        ))}
        
        <div className="pt-3 border-t">
          <button className="w-full text-sm text-blue-600 hover:text-blue-800 font-medium">
            Voir toute l'activité →
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export { RecentActivity };
