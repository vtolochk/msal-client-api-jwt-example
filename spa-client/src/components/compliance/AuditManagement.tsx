
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle, AlertTriangle, Clock, FileText } from "lucide-react";

const AuditManagement = () => {
  const audits = [
    {
      id: 1,
      type: "ANSM",
      title: "Audit Réglementaire ANSM",
      date: "2024-01-15",
      status: "completed",
      inspector: "Dr. Martin",
      score: 98,
      findings: 2
    },
    {
      id: 2,
      type: "Interne",
      title: "Audit Qualité Interne",
      date: "2024-02-10",
      status: "completed",
      inspector: "Équipe Qualité",
      score: 95,
      findings: 3
    },
    {
      id: 3,
      type: "Fournisseur",
      title: "Audit Fournisseur Principal",
      date: "2024-03-05",
      status: "in-progress",
      inspector: "Mme Dubois",
      score: null,
      findings: 0
    },
    {
      id: 4,
      type: "ANSM",
      title: "Audit de Suivi",
      date: "2024-03-20",
      status: "scheduled",
      inspector: "Dr. Bernard",
      score: null,
      findings: 0
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Terminé</Badge>;
      case "in-progress":
        return <Badge className="bg-blue-100 text-blue-800">En cours</Badge>;
      case "scheduled":
        return <Badge className="bg-yellow-100 text-yellow-800">Planifié</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Inconnu</Badge>;
    }
  };

  const getScoreColor = (score: number | null) => {
    if (!score) return "text-gray-500";
    if (score >= 95) return "text-green-600";
    if (score >= 85) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Gestion des Audits</h3>
        <Button>
          <Calendar className="h-4 w-4 mr-2" />
          Planifier Audit
        </Button>
      </div>

      <div className="grid gap-4">
        {audits.map((audit) => (
          <Card key={audit.id} className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{audit.title}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">
                    Type: {audit.type} • Inspecteur: {audit.inspector}
                  </p>
                </div>
                {getStatusBadge(audit.status)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Date</p>
                  <p className="font-medium">{new Date(audit.date).toLocaleDateString('fr-FR')}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Score</p>
                  <p className={`font-medium ${getScoreColor(audit.score)}`}>
                    {audit.score ? `${audit.score}%` : '-'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Observations</p>
                  <p className="font-medium">{audit.findings} points</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <FileText className="h-4 w-4 mr-1" />
                    Rapport
                  </Button>
                  {audit.status === "scheduled" && (
                    <Button size="sm">
                      Commencer
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export { AuditManagement };
