
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Star, Gift } from "lucide-react";

const TopMembers = () => {
  const topMembers = [
    {
      id: 1,
      name: "Marie Dubois",
      points: 2450,
      level: "Platine",
      purchases: 23,
      totalSpent: "€1,245",
      rank: 1
    },
    {
      id: 2,
      name: "Jean Martin",
      points: 1890,
      level: "Or",
      purchases: 18,
      totalSpent: "€945",
      rank: 2
    },
    {
      id: 3,
      name: "Sophie Leroy",
      points: 1650,
      level: "Or",
      purchases: 15,
      totalSpent: "€825",
      rank: 3
    },
    {
      id: 4,
      name: "Pierre Durand",
      points: 1200,
      level: "Argent",
      purchases: 12,
      totalSpent: "€600",
      rank: 4
    },
    {
      id: 5,
      name: "Claire Moreau",
      points: 980,
      level: "Argent",
      purchases: 9,
      totalSpent: "€490",
      rank: 5
    }
  ];

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "Platine":
        return <Badge className="bg-purple-100 text-purple-800">Platine</Badge>;
      case "Or":
        return <Badge className="bg-yellow-100 text-yellow-800">Or</Badge>;
      case "Argent":
        return <Badge className="bg-gray-100 text-gray-800">Argent</Badge>;
      default:
        return <Badge className="bg-blue-100 text-blue-800">Bronze</Badge>;
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="h-4 w-4 text-yellow-500" />;
    if (rank <= 3) return <Star className="h-4 w-4 text-orange-500" />;
    return <Gift className="h-4 w-4 text-purple-500" />;
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle>Top Membres Fidélité</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topMembers.map((member) => (
            <div key={member.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {getRankIcon(member.rank)}
                  <span className="font-bold text-lg">#{member.rank}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{member.name}</h4>
                  <p className="text-sm text-gray-600">{member.purchases} achats • {member.totalSpent}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-purple-600">{member.points} pts</span>
                  {getLevelBadge(member.level)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { TopMembers };
