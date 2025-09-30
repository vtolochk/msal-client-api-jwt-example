
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, Clock } from "lucide-react";

const QualityControl = () => {
  const qualityChecks = [
    {
      category: "Stockage",
      checks: [
        { item: "Température frigo (2-8°C)", status: "OK", value: "4.2°C" },
        { item: "Hygrométrie", status: "OK", value: "45%" },
        { item: "Éclairage UV", status: "Attention", value: "Néon à changer" }
      ]
    },
    {
      category: "Sécurité",
      checks: [
        { item: "Stupéfiants - Coffre", status: "OK", value: "Verrouillé" },
        { item: "Alarme", status: "OK", value: "Fonctionnelle" },
        { item: "Vidéosurveillance", status: "OK", value: "24h/24" }
      ]
    },
    {
      category: "Hygiène",
      checks: [
        { item: "Nettoyage surfaces", status: "OK", value: "Quotidien" },
        { item: "Désinfection", status: "À faire", value: "Retard 1j" },
        { item: "Gestion déchets", status: "OK", value: "DASRI à jour" }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "OK":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "Attention":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case "À faire":
        return <Clock className="h-4 w-4 text-red-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {qualityChecks.map((category, index) => (
        <Card key={index} className="border-0 shadow-lg">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Contrôle {category.category}</CardTitle>
              <Button size="sm" variant="outline">
                Effectuer Contrôle
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {category.checks.map((check, checkIndex) => (
                <div key={checkIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(check.status)}
                    <span className="font-medium">{check.item}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-600">{check.value}</span>
                    <div className="text-xs text-gray-500">{check.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export { QualityControl };
