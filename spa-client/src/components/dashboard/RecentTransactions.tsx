
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RecentTransactions = () => {
  const transactions = [
    {
      id: "TXN-001",
      pharmacy: "CVS Health #4521",
      product: "Amoxicillin 500mg",
      amount: "$45.99",
      quantity: 30,
      time: "2 minutes ago",
      status: "completed"
    },
    {
      id: "TXN-002",
      pharmacy: "Walgreens #2103",
      product: "Lisinopril 10mg",
      amount: "$23.50",
      quantity: 90,
      time: "5 minutes ago",
      status: "completed"
    },
    {
      id: "TXN-003",
      pharmacy: "Independent Rx",
      product: "Metformin 500mg",
      amount: "$12.75",
      quantity: 60,
      time: "8 minutes ago",
      status: "pending"
    },
    {
      id: "TXN-004",
      pharmacy: "Rite Aid #1876",
      product: "Ibuprofen 200mg",
      amount: "$8.99",
      quantity: 100,
      time: "12 minutes ago",
      status: "completed"
    },
    {
      id: "TXN-005",
      pharmacy: "CVS Health #3401",
      product: "Atorvastatin 20mg",
      amount: "$89.99",
      quantity: 30,
      time: "15 minutes ago",
      status: "failed"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">Recent Transactions</CardTitle>
        <CardDescription>Latest pharmacy transactions across the network</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="flex-1 space-y-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium text-gray-900">{transaction.pharmacy}</h4>
                  <Badge className={getStatusColor(transaction.status)}>
                    {transaction.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{transaction.product}</p>
                <p className="text-xs text-gray-500">Qty: {transaction.quantity} • {transaction.time}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">{transaction.amount}</p>
                <p className="text-xs text-gray-500">{transaction.id}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { RecentTransactions };
