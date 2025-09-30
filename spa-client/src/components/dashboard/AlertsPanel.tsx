
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, AlertCircle, Info, CheckCircle, X } from "lucide-react";

const AlertsPanel = () => {
  const alerts = [
    {
      id: 1,
      type: "critical",
      title: "Stock épuisé",
      message: "Doliprane 1000mg - Stock à zéro, commande urgente requise",
      category: "Inventaire",
      time: "Il y a 2 min",
      actions: ["Passer commande", "Reporter"]
    },
    {
      id: 2,
      type: "warning",
      title: "Péremption proche",
      message: "15 produits arrivent à péremption dans les 30 prochains jours",
      category: "Qualité",
      time: "Il y a 15 min",
      actions: ["Voir la liste", "Programmer promotion"]
    },
    {
      id: 3,
      type: "info",
      title: "Commande livrée",
      message: "Livraison Grossiste Martin - 89 articles reçus et vérifiés",
      category: "Logistique",
      time: "Il y a 1h",
      actions: ["Voir détails"]
    },
    {
      id: 4,
      type: "warning",
      title: "Objectif ventes",
      message: "Ventes du mois à 78% de l'objectif - 5 jours restants",
      category: "Commercial",
      time: "Il y a 2h",
      actions: ["Voir analytics", "Plan d'action"]
    },
    {
      id: 5,
      type: "critical",
      title: "Système de sauvegarde",
      message: "Dernière sauvegarde échouée - Intervention technique requise",
      category: "Technique",
      time: "Il y a 3h",
      actions: ["Contacter support", "Relancer sauvegarde"]
    },
    {
      id: 6,
      type: "success",
      title: "Audit de conformité",
      message: "Audit réglementaire passé avec succès - Score 98.5%",
      category: "Conformité",
      time: "Hier",
      actions: ["Voir rapport"]
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case "warning":
        return <AlertCircle className="h-5 w-5 text-orange-500" />;
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Info className="h-5 w-5 text-gray-500" />;
    }
  };

  const getAlertBadgeColor = (type: string) => {
    switch (type) {
      case "critical":
        return "bg-red-100 text-red-800";
      case "warning":
        return "bg-orange-100 text-orange-800";
      case "info":
        return "bg-blue-100 text-blue-800";
      case "success":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getAlertTypeText = (type: string) => {
    switch (type) {
      case "critical":
        return "Critique";
      case "warning":
        return "Attention";
      case "info":
        return "Info";
      case "success":
        return "Succès";
      default:
        return "Info";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Centre d'Alertes</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">Tout marquer comme lu</Button>
          <Button variant="outline" size="sm">Filtrer</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {alerts.map((alert) => (
          <Card key={alert.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  {getAlertIcon(alert.type)}
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {alert.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge className={`${getAlertBadgeColor(alert.type)} text-xs`}>
                        {getAlertTypeText(alert.type)}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {alert.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="p-1">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">{alert.message}</p>
              <p className="text-xs text-gray-500">{alert.time}</p>
              
              <div className="flex flex-wrap gap-2">
                {alert.actions.map((action, index) => (
                  <Button 
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    size="sm"
                    className="text-xs"
                  >
                    {action}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export { AlertsPanel };
