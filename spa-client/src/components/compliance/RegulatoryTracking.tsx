
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Clock, FileText, ExternalLink } from "lucide-react";

const RegulatoryTracking = () => {
  const regulations = [
    {
      id: 1,
      title: "Réglementation Température",
      description: "Contrôle chaîne du froid 2-8°C",
      status: "compliant",
      lastCheck: "2024-01-20",
      nextCheck: "2024-02-20",
      authority: "ANSM",
      criticality: "high"
    },
    {
      id: 2,
      title: "Gestion Stupéfiants",
      description: "Registre et sécurisation",
      status: "compliant",
      lastCheck: "2024-01-18",
      nextCheck: "2024-02-18",
      authority: "ANSM",
      criticality: "high"
    },
    {
      id: 3,
      title: "Pharmacovigilance",
      description: "Déclaration effets indésirables",
      status: "attention",
      lastCheck: "2024-01-10",
      nextCheck: "2024-02-10",
      authority: "CRPV",
      criticality: "medium"
    },
    {
      id: 4,
      title: "DPC Formation",
      description: "Formation continue obligatoire",
      status: "non-compliant",
      lastCheck: "2023-12-15",
      nextCheck: "2024-01-15",
      authority: "OGDPC",
      criticality: "medium"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "compliant":
        return <Badge className="bg-green-100 text-green-800">Conforme</Badge>;
      case "attention":
        return <Badge className="bg-yellow-100 text-yellow-800">Attention</Badge>;
      case "non-compliant":
        return <Badge className="bg-red-100 text-red-800">Non-conforme</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Inconnu</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "compliant":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "attention":
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      case "non-compliant":
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-600" />;
    }
  };

  const getCriticalityColor = (criticality: string) => {
    switch (criticality) {
      case "high":
        return "border-l-red-500";
      case "medium":
        return "border-l-yellow-500";
      case "low":
        return "border-l-green-500";
      default:
        return "border-l-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Suivi Réglementaire</h3>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          Nouveau Contrôle
        </Button>
      </div>

      <div className="grid gap-4">
        {regulations.map((regulation) => (
          <Card key={regulation.id} className={`border-0 shadow-lg border-l-4 ${getCriticalityColor(regulation.criticality)}`}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  {getStatusIcon(regulation.status)}
                  <div>
                    <CardTitle className="text-lg">{regulation.title}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">{regulation.description}</p>
                  </div>
                </div>
                {getStatusBadge(regulation.status)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500">Autorité</p>
                  <p className="font-medium">{regulation.authority}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Dernier contrôle</p>
                  <p className="font-medium">{new Date(regulation.lastCheck).toLocaleDateString('fr-FR')}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Prochain contrôle</p>
                  <p className="font-medium">{new Date(regulation.nextCheck).toLocaleDateString('fr-FR')}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Criticité</p>
                  <p className="font-medium capitalize">{regulation.criticality}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <FileText className="h-4 w-4 mr-1" />
                  Documents
                </Button>
                <Button size="sm" variant="outline">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Réglementation
                </Button>
                {regulation.status !== "compliant" && (
                  <Button size="sm">
                    Mise en conformité
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export { RegulatoryTracking };
