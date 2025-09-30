
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

const CashFlow = () => {
  const cashFlowData = [
    {
      month: "Janvier",
      inflow: 89420,
      outflow: 67890,
      net: 21530
    },
    {
      month: "Février",
      inflow: 95680,
      outflow: 71200,
      net: 24480
    },
    {
      month: "Mars",
      inflow: 87350,
      outflow: 69450,
      net: 17900
    }
  ];

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Flux de Trésorerie
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {cashFlowData.map((data, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">{data.month}</h4>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-green-600 mb-1">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">Entrées</span>
                  </div>
                  <p className="font-bold text-lg">{formatAmount(data.inflow)}</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-red-600 mb-1">
                    <TrendingDown className="h-4 w-4" />
                    <span className="text-sm font-medium">Sorties</span>
                  </div>
                  <p className="font-bold text-lg">{formatAmount(data.outflow)}</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                    <DollarSign className="h-4 w-4" />
                    <span className="text-sm font-medium">Net</span>
                  </div>
                  <p className="font-bold text-lg">{formatAmount(data.net)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { CashFlow };
