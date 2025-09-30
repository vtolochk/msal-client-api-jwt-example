
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Send, Eye } from "lucide-react";

const InvoiceManagement = () => {
  const invoices = [
    {
      id: "FAC-2024-001",
      customer: "Sécurité Sociale",
      amount: "€2,450.00",
      date: "2024-01-15",
      dueDate: "2024-02-15",
      status: "Payée"
    },
    {
      id: "FAC-2024-002",
      customer: "Mutuelle Générale",
      amount: "€1,890.50",
      date: "2024-01-14",
      dueDate: "2024-02-14",
      status: "En attente"
    },
    {
      id: "FAC-2024-003",
      customer: "Client Particulier",
      amount: "€156.70",
      date: "2024-01-13",
      dueDate: "2024-02-13",
      status: "Envoyée"
    }
  ];

  const getStatusBadge = (status: string) => {
    const colors = {
      "Payée": "bg-green-100 text-green-800",
      "En attente": "bg-yellow-100 text-yellow-800",
      "Envoyée": "bg-blue-100 text-blue-800",
      "Retard": "bg-red-100 text-red-800"
    };
    return <Badge className={colors[status as keyof typeof colors]}>{status}</Badge>;
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Gestion des Factures
          </CardTitle>
          <Button className="bg-yellow-600 hover:bg-yellow-700">
            Nouvelle Facture
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {invoices.map((invoice) => (
            <div key={invoice.id} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{invoice.id}</h4>
                  <p className="text-sm text-gray-600">{invoice.customer}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">{invoice.amount}</div>
                  {getStatusBadge(invoice.status)}
                </div>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-600">
                <div>
                  <span>Émise: {invoice.date}</span>
                  <span className="mx-2">•</span>
                  <span>Échéance: {invoice.dueDate}</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                  {invoice.status === "En attente" && (
                    <Button size="sm" variant="outline">
                      <Send className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { InvoiceManagement };
