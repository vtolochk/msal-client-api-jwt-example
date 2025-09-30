
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Package, Users, Star } from "lucide-react";

const ProfitabilityAnalysis = () => {
  const profitableProducts = [
    {
      name: "Doliprane 1000mg",
      revenue: "€15,420",
      margin: "32%",
      sales: 1240,
      trend: "+12%"
    },
    {
      name: "Vitamines C",
      revenue: "€8,950",
      margin: "45%",
      sales: 890,
      trend: "+8%"
    },
    {
      name: "Masques FFP2",
      revenue: "€12,300",
      margin: "28%",
      sales: 2100,
      trend: "+15%"
    }
  ];

  const customerSegments = [
    {
      segment: "Clients fidèles",
      revenue: "€145,600",
      percentage: "65%",
      count: 456
    },
    {
      segment: "Nouveaux clients",
      revenue: "€67,800",
      percentage: "30%",
      count: 234
    },
    {
      segment: "Clients occasionnels",
      revenue: "€11,200",
      percentage: "5%",
      count: 89
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Produits les Plus Rentables
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {profitableProducts.map((product, index) => (
              <div key={index} className="p-3 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{product.name}</h4>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">{product.trend}</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500">CA</p>
                    <p className="font-medium">{product.revenue}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Marge</p>
                    <p className="font-medium text-green-600">{product.margin}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Ventes</p>
                    <p className="font-medium">{product.sales}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Analyse par Segments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customerSegments.map((segment, index) => (
              <div key={index} className="p-3 rounded-lg border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-gray-900">{segment.segment}</h4>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">{segment.percentage}</span>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">CA: <span className="font-medium text-gray-900">{segment.revenue}</span></span>
                  <span className="text-gray-500">Clients: <span className="font-medium text-gray-900">{segment.count}</span></span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { ProfitabilityAnalysis };
