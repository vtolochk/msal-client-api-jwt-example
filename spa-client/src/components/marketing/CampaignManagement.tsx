
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Play, Pause, BarChart, Users, Calendar } from "lucide-react";

const CampaignManagement = () => {
  const campaigns = [
    {
      id: 1,
      name: "Promo Vitamines Hiver",
      type: "Promotion",
      status: "active",
      startDate: "2024-01-15",
      endDate: "2024-02-15",
      budget: 1500,
      reach: 2340,
      conversions: 89,
      roi: 245
    },
    {
      id: 2,
      name: "Newsletter Santé",
      type: "Newsletter",
      status: "active",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      budget: 800,
      reach: 1890,
      conversions: 67,
      roi: 189
    },
    {
      id: 3,
      name: "Campagne Anti-Grippe",
      type: "Saisonnière",
      status: "paused",
      startDate: "2024-02-01",
      endDate: "2024-03-31",
      budget: 2000,
      reach: 3200,
      conversions: 156,
      roi: 312
    },
    {
      id: 4,
      name: "Fidélité Printemps",
      type: "Fidélité",
      status: "draft",
      startDate: "2024-03-15",
      endDate: "2024-05-15",
      budget: 1200,
      reach: 0,
      conversions: 0,
      roi: 0
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Actif</Badge>;
      case "paused":
        return <Badge className="bg-yellow-100 text-yellow-800">En pause</Badge>;
      case "draft":
        return <Badge className="bg-gray-100 text-gray-800">Brouillon</Badge>;
      case "completed":
        return <Badge className="bg-blue-100 text-blue-800">Terminé</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Inconnu</Badge>;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Gestion des Campagnes</h3>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Plus className="h-4 w-4 mr-2" />
          Nouvelle Campagne
        </Button>
      </div>

      <div className="grid gap-4">
        {campaigns.map((campaign) => (
          <Card key={campaign.id} className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{campaign.name}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">
                    Type: {campaign.type} • {new Date(campaign.startDate).toLocaleDateString('fr-FR')} - {new Date(campaign.endDate).toLocaleDateString('fr-FR')}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(campaign.status)}
                  {campaign.status === "active" && (
                    <Button size="sm" variant="outline">
                      <Pause className="h-4 w-4" />
                    </Button>
                  )}
                  {campaign.status === "paused" && (
                    <Button size="sm" variant="outline">
                      <Play className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Budget</p>
                  <p className="font-medium">{formatCurrency(campaign.budget)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Portée</p>
                  <p className="font-medium flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {campaign.reach.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Conversions</p>
                  <p className="font-medium">{campaign.conversions}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">ROI</p>
                  <p className="font-medium text-green-600">{campaign.roi}%</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <BarChart className="h-4 w-4 mr-1" />
                    Stats
                  </Button>
                  <Button size="sm" variant="outline">
                    Modifier
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export { CampaignManagement };
