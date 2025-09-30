
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, DollarSign, Users, ShoppingCart } from "lucide-react";

const SalesDashboard = () => {
  const dailySales = [
    { hour: "08h", sales: 1200, customers: 12 },
    { hour: "09h", sales: 1800, customers: 18 },
    { hour: "10h", sales: 2400, customers: 24 },
    { hour: "11h", sales: 2100, customers: 21 },
    { hour: "12h", sales: 1800, customers: 18 },
    { hour: "13h", sales: 1200, customers: 12 },
    { hour: "14h", sales: 2700, customers: 27 },
    { hour: "15h", sales: 3200, customers: 32 },
    { hour: "16h", sales: 2900, customers: 29 },
    { hour: "17h", sales: 2600, customers: 26 },
    { hour: "18h", sales: 1900, customers: 19 },
    { hour: "19h", sales: 1400, customers: 14 }
  ];

  const weeklyStats = [
    { day: "Lun", sales: 15420, prescriptions: 89, otc: 156 },
    { day: "Mar", sales: 18650, prescriptions: 102, otc: 189 },
    { day: "Mer", sales: 16890, prescriptions: 95, otc: 167 },
    { day: "Jeu", sales: 19250, prescriptions: 108, otc: 201 },
    { day: "Ven", sales: 21340, prescriptions: 115, otc: 218 },
    { day: "Sam", sales: 14560, prescriptions: 78, otc: 142 },
    { day: "Dim", sales: 8920, prescriptions: 45, otc: 89 }
  ];

  const kpis = [
    {
      title: "CA Aujourd'hui",
      value: "€3,420",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Clients Servis",
      value: "127",
      change: "+8.3%",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Ventes Moyennes",
      value: "€26.93",
      change: "+3.8%",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Prescriptions",
      value: "89",
      change: "+15.2%",
      icon: ShoppingCart,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {kpi.title}
              </CardTitle>
              <div className={`p-2 rounded-full ${kpi.bgColor}`}>
                <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{kpi.value}</div>
              <p className="text-xs text-green-500 mt-1">{kpi.change} vs hier</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Ventes par Heure</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dailySales}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="hour" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="#8b5cf6" 
                  strokeWidth={3}
                  dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Performance Hebdomadaire</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="prescriptions" fill="#ec4899" name="Prescriptions" />
                <Bar dataKey="otc" fill="#06b6d4" name="Vente libre" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export { SalesDashboard };
