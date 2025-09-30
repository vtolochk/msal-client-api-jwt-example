
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const TopProducts = () => {
  const products = [
    { name: "Amoxicillin 500mg", sales: 15420, percentage: 100, revenue: "$234,567" },
    { name: "Lisinopril 10mg", sales: 12850, percentage: 83, revenue: "$198,450" },
    { name: "Metformin 500mg", sales: 11200, percentage: 73, revenue: "$167,890" },
    { name: "Atorvastatin 20mg", sales: 9650, percentage: 63, revenue: "$145,230" },
    { name: "Omeprazole 20mg", sales: 8900, percentage: 58, revenue: "$134,567" },
    { name: "Amlodipine 5mg", sales: 7800, percentage: 51, revenue: "$118,900" },
  ];

  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">Top Selling Products</CardTitle>
        <CardDescription>Best performing medications by sales volume</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {products.map((product, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">{product.name}</h4>
                <p className="text-sm text-gray-600">{product.sales.toLocaleString()} units sold</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{product.revenue}</p>
              </div>
            </div>
            <Progress value={product.percentage} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export { TopProducts };
