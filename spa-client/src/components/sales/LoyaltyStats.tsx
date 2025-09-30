
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Star, Gift, Award } from "lucide-react";

const LoyaltyStats = () => {
  const loyaltyStats = [
    {
      title: "Membres Actifs",
      value: "1,247",
      change: "+12.5%",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Points Distribués",
      value: "45,670",
      change: "+8.3%",
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Récompenses Échangées",
      value: "234",
      change: "+15.7%",
      icon: Gift,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Taux de Fidélisation",
      value: "68.4%",
      change: "+3.2%",
      icon: Award,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {loyaltyStats.map((stat, index) => (
        <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-full ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <p className="text-xs text-green-500 mt-1">{stat.change} vs mois dernier</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export { LoyaltyStats };
