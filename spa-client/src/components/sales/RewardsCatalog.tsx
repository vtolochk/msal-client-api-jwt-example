
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Gift, Star } from "lucide-react";

const RewardsCatalog = () => {
  const rewards = [
    {
      id: 1,
      name: "Bon d'achat 10€",
      points: 500,
      description: "Valable sur tous les produits",
      category: "Bon d'achat",
      available: true
    },
    {
      id: 2,
      name: "Consultation gratuite",
      points: 800,
      description: "Consultation pharmaceutique offerte",
      category: "Service",
      available: true
    },
    {
      id: 3,
      name: "Kit de voyage",
      points: 1200,
      description: "Trousse de premiers secours",
      category: "Produit",
      available: false
    },
    {
      id: 4,
      name: "Bon d'achat 25€",
      points: 1500,
      description: "Valable sur tous les produits",
      category: "Bon d'achat",
      available: true
    }
  ];

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Catalogue des Récompenses</CardTitle>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {rewards.map((reward) => (
            <div key={reward.id} className={`p-4 border rounded-lg ${!reward.available ? 'opacity-50' : ''}`}>
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-start gap-2">
                  <Gift className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{reward.name}</h4>
                    <p className="text-sm text-gray-600">{reward.description}</p>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded mt-1 inline-block">
                      {reward.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-purple-600 font-bold">
                    <Star className="h-4 w-4" />
                    {reward.points} pts
                  </div>
                  {!reward.available && (
                    <span className="text-xs text-red-500">Indisponible</span>
                  )}
                </div>
              </div>
              {reward.available && (
                <Button size="sm" variant="outline" className="w-full">
                  Échanger
                </Button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { RewardsCatalog };
