
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Clock, CheckCircle, XCircle } from "lucide-react";

const OrdersManagement = () => {
  const orders = [
    {
      id: "VTE-2024-089",
      customer: "Marie Dubois",
      date: "2024-12-24 14:30",
      status: "completed",
      total: "€45.80",
      items: 3,
      paymentMethod: "Carte",
      cashier: "Sophie L.",
      products: [
        { name: "Doliprane 1000mg", qty: 2, price: "€8.90" },
        { name: "Spray nasal", qty: 1, price: "€12.50" },
        { name: "Vitamines C", qty: 1, price: "€15.50" }
      ]
    },
    {
      id: "VTE-2024-090",
      customer: "Jean Martin",
      date: "2024-12-24 13:45",
      status: "pending",
      total: "€128.60",
      items: 5,
      paymentMethod: "Carte vitale",
      cashier: "Marie D.",
      products: [
        { name: "Lisinopril 10mg", qty: 3, price: "€18.20" },
        { name: "Amoxicilline 500mg", qty: 2, price: "€12.50" }
      ]
    },
    {
      id: "VTE-2024-091",
      customer: "Sophie Leroy",
      date: "2024-12-24 12:15",
      status: "cancelled",
      total: "€23.40",
      items: 2,
      paymentMethod: "-",
      cashier: "Pierre M.",
      products: [
        { name: "Paracétamol 500mg", qty: 1, price: "€6.90" },
        { name: "Sirop toux", qty: 1, price: "€16.50" }
      ]
    },
    {
      id: "VTE-2024-092",
      customer: "Pierre Moreau",
      date: "2024-12-24 11:20",
      status: "refunded",
      total: "€67.30",
      items: 4,
      paymentMethod: "Espèces",
      cashier: "Sophie L.",
      products: [
        { name: "Ventoline 100µg", qty: 2, price: "€15.60" },
        { name: "Masques chirurgicaux", qty: 2, price: "€18.05" }
      ]
    },
    {
      id: "VTE-2024-093",
      customer: "Amélie Bernard",
      date: "2024-12-24 10:30",
      status: "processing",
      total: "€156.90",
      items: 6,
      paymentMethod: "Carte",
      cashier: "Marie D.",
      products: [
        { name: "Antibiotique", qty: 1, price: "€45.80" },
        { name: "Compléments", qty: 3, price: "€25.30" },
        { name: "Crème hydratante", qty: 2, price: "€30.50" }
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Terminée</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">En attente</Badge>;
      case "processing":
        return <Badge className="bg-blue-100 text-blue-800">En cours</Badge>;
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800">Annulée</Badge>;
      case "refunded":
        return <Badge className="bg-gray-100 text-gray-800">Remboursée</Badge>;
      default:
        return null;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "processing":
        return <Clock className="h-4 w-4 text-blue-500" />;
      case "cancelled":
        return <XCircle className="h-4 w-4 text-red-500" />;
      case "refunded":
        return <XCircle className="h-4 w-4 text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Gestion des Commandes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(order.status)}
                    <div>
                      <h4 className="font-semibold text-gray-900">{order.id}</h4>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {getStatusBadge(order.status)}
                    <span className="text-lg font-bold text-gray-900">{order.total}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3 text-sm">
                  <div>
                    <p className="text-gray-500">Date & Heure:</p>
                    <p className="font-medium">{order.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Articles:</p>
                    <p className="font-medium">{order.items} produits</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Paiement:</p>
                    <p className="font-medium">{order.paymentMethod}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Caissier:</p>
                    <p className="font-medium">{order.cashier}</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">Produits:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {order.products.map((product, index) => (
                      <div key={index} className="flex justify-between text-sm bg-gray-50 p-2 rounded">
                        <span>{product.name} (x{product.qty})</span>
                        <span className="font-medium">{product.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Voir détails</Button>
                  {order.status === "pending" && (
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">Valider</Button>
                  )}
                  {order.status === "processing" && (
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Finaliser</Button>
                  )}
                  {order.status === "completed" && (
                    <>
                      <Button size="sm" variant="outline">Imprimer</Button>
                      <Button size="sm" variant="outline">Dupliquer</Button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { OrdersManagement };
