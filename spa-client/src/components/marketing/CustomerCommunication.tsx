
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, MessageSquare, Phone, Mail, Clock } from "lucide-react";

const CustomerCommunication = () => {
  const communications = [
    {
      id: 1,
      customer: "Marie Dubois",
      type: "email",
      subject: "Rappel renouvellement ordonnance",
      status: "sent",
      date: "2024-01-15",
      response: "pending"
    },
    {
      id: 2,
      customer: "Jean Martin",
      type: "sms",
      subject: "Médicament disponible",
      status: "delivered",
      date: "2024-01-14",
      response: "read"
    },
    {
      id: 3,
      customer: "Sophie Leroy",
      type: "phone",
      subject: "Conseil pharmaceutique",
      status: "completed",
      date: "2024-01-14",
      response: "satisfied"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "email":
        return <Mail className="h-4 w-4" />;
      case "sms":
        return <MessageSquare className="h-4 w-4" />;
      case "phone":
        return <Phone className="h-4 w-4" />;
      default:
        return <MessageSquare className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "sent":
        return <Badge className="bg-blue-100 text-blue-800">Envoyé</Badge>;
      case "delivered":
        return <Badge className="bg-green-100 text-green-800">Livré</Badge>;
      case "completed":
        return <Badge className="bg-purple-100 text-purple-800">Terminé</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Inconnu</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Communication Client</h3>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Plus className="h-4 w-4 mr-2" />
          Nouvelle Communication
        </Button>
      </div>

      <div className="grid gap-4">
        {communications.map((comm) => (
          <Card key={comm.id} className="border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 rounded-full">
                    {getTypeIcon(comm.type)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{comm.customer}</h4>
                    <p className="text-sm text-gray-600">{comm.subject}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3" />
                      {new Date(comm.date).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  {getStatusBadge(comm.status)}
                  <p className="text-xs text-gray-500 mt-1 capitalize">
                    Réponse: {comm.response}
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

export { CustomerCommunication };
