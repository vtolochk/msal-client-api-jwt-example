
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Send, Edit, Eye, Users } from "lucide-react";

const NewsletterManagement = () => {
  const newsletters = [
    {
      id: 1,
      title: "Conseils Santé de Janvier",
      status: "sent",
      subscribers: 1247,
      openRate: "68.2%",
      clickRate: "12.5%",
      sentDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Promotions Vitamines Hiver",
      status: "draft",
      subscribers: 1247,
      openRate: "0%",
      clickRate: "0%",
      sentDate: null
    },
    {
      id: 3,
      title: "Nouveautés du Mois",
      status: "scheduled",
      subscribers: 1247,
      openRate: "0%",
      clickRate: "0%",
      sentDate: "2024-02-01"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "sent":
        return <Badge className="bg-green-100 text-green-800">Envoyé</Badge>;
      case "draft":
        return <Badge className="bg-gray-100 text-gray-800">Brouillon</Badge>;
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-800">Programmé</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Inconnu</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Gestion Newsletter</h3>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Plus className="h-4 w-4 mr-2" />
          Nouvelle Newsletter
        </Button>
      </div>

      <div className="grid gap-4">
        {newsletters.map((newsletter) => (
          <Card key={newsletter.id} className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{newsletter.title}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">
                    <Users className="h-4 w-4 inline mr-1" />
                    {newsletter.subscribers.toLocaleString()} abonnés
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(newsletter.status)}
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  {newsletter.status === "draft" && (
                    <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                      <Send className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Taux d'ouverture</p>
                  <p className="font-medium text-lg">{newsletter.openRate}</p>
                </div>
                <div>
                  <p className="text-gray-500">Taux de clic</p>
                  <p className="font-medium text-lg">{newsletter.clickRate}</p>
                </div>
                <div>
                  <p className="text-gray-500">Date d'envoi</p>
                  <p className="font-medium">
                    {newsletter.sentDate ? new Date(newsletter.sentDate).toLocaleDateString('fr-FR') : "Non programmé"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export { NewsletterManagement };
