
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Search, Plus, Star, Phone, Mail } from "lucide-react";

const CustomerList = () => {
  const customers = [
    {
      id: "CLT001",
      name: "Marie Dubois",
      email: "marie.dubois@email.com",
      phone: "+33 6 12 34 56 78",
      birthDate: "1975-03-15",
      lastVisit: "2024-12-23",
      totalSpent: "€1,245.60",
      visits: 34,
      loyaltyPoints: 2450,
      type: "premium",
      prescriptions: 12
    },
    {
      id: "CLT002",
      name: "Jean Martin",
      email: "jean.martin@email.com",
      phone: "+33 6 98 76 54 32",
      birthDate: "1962-08-22",
      lastVisit: "2024-12-24",
      totalSpent: "€2,890.40",
      visits: 67,
      loyaltyPoints: 5780,
      type: "vip",
      prescriptions: 28
    },
    {
      id: "CLT003",
      name: "Sophie Leroy",
      email: "sophie.leroy@email.com",
      phone: "+33 6 45 67 89 01",
      birthDate: "1988-11-07",
      lastVisit: "2024-12-22",
      totalSpent: "€458.90",
      visits: 15,
      loyaltyPoints: 920,
      type: "regular",
      prescriptions: 6
    },
    {
      id: "CLT004",
      name: "Pierre Moreau",
      email: "pierre.moreau@email.com",
      phone: "+33 6 23 45 67 89",
      birthDate: "1954-01-30",
      lastVisit: "2024-12-21",
      totalSpent: "€3,567.80",
      visits: 89,
      loyaltyPoints: 7130,
      type: "vip",
      prescriptions: 45
    },
    {
      id: "CLT005",
      name: "Amélie Bernard",
      email: "amelie.bernard@email.com",
      phone: "+33 6 78 90 12 34",
      birthDate: "1992-06-18",
      lastVisit: "2024-12-24",
      totalSpent: "€234.50",
      visits: 8,
      loyaltyPoints: 470,
      type: "new",
      prescriptions: 3
    }
  ];

  const getCustomerTypeBadge = (type: string) => {
    switch (type) {
      case "vip":
        return <Badge className="bg-purple-100 text-purple-800">VIP</Badge>;
      case "premium":
        return <Badge className="bg-blue-100 text-blue-800">Premium</Badge>;
      case "regular":
        return <Badge className="bg-green-100 text-green-800">Régulier</Badge>;
      case "new":
        return <Badge className="bg-orange-100 text-orange-800">Nouveau</Badge>;
      default:
        return null;
    }
  };

  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    const age = today.getFullYear() - birth.getFullYear();
    return age;
  };

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Base Clients ({customers.length})
            </CardTitle>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Nouveau Client
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un client..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <Button variant="outline">Filtres</Button>
          </div>

          <div className="space-y-4">
            {customers.map((customer) => (
              <div
                key={customer.id}
                className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900">{customer.name}</h4>
                      {getCustomerTypeBadge(customer.type)}
                      {customer.loyaltyPoints > 5000 && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
                      <div>
                        <p className="text-xs text-gray-500">Contact</p>
                        <div className="flex items-center gap-1 text-sm">
                          <Phone className="h-3 w-3 text-gray-400" />
                          <span>{customer.phone}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Mail className="h-3 w-3 text-gray-400" />
                          <span>{customer.email}</span>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-xs text-gray-500">Informations</p>
                        <p className="text-sm font-medium">{calculateAge(customer.birthDate)} ans</p>
                        <p className="text-sm text-gray-600">Dernière visite: {customer.lastVisit}</p>
                      </div>
                      
                      <div>
                        <p className="text-xs text-gray-500">Activité</p>
                        <p className="text-sm font-medium">{customer.visits} visites</p>
                        <p className="text-sm text-gray-600">{customer.prescriptions} prescriptions</p>
                      </div>
                      
                      <div>
                        <p className="text-xs text-gray-500">Fidélité</p>
                        <p className="text-sm font-medium">{customer.loyaltyPoints} points</p>
                        <p className="text-sm text-gray-600">Total: {customer.totalSpent}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 ml-4">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Voir Profil
                    </Button>
                    <Button size="sm" variant="outline">
                      Historique
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t">
            <button className="w-full text-sm text-purple-600 hover:text-purple-800 font-medium">
              Voir tous les clients →
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { CustomerList };
