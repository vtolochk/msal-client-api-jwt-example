
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { BarChart3, Download, Calendar, TrendingUp } from "lucide-react";

const SalesReports = () => {
  const monthlyRevenue = [
    { month: "Jan", revenue: 45420, prescriptions: 34500, otc: 10920 },
    { month: "Fév", revenue: 52180, prescriptions: 38900, otc: 13280 },
    { month: "Mar", revenue: 48760, prescriptions: 36200, otc: 12560 },
    { month: "Avr", revenue: 61340, prescriptions: 45600, otc: 15740 },
    { month: "Mai", revenue: 58920, prescriptions: 43100, otc: 15820 },
    { month: "Jun", revenue: 67850, prescriptions: 49200, otc: 18650 },
    { month: "Jul", revenue: 73290, prescriptions: 52800, otc: 20490 },
    { month: "Aoû", revenue: 69150, prescriptions: 50100, otc: 19050 },
    { month: "Sep", revenue: 78420, prescriptions: 56700, otc: 21720 },
    { month: "Oct", revenue: 82560, prescriptions: 59800, otc: 22760 },
    { month: "Nov", revenue: 89340, prescriptions: 64500, otc: 24840 },
    { month: "Déc", revenue: 95280, prescriptions: 68900, otc: 26380 }
  ];

  const categoryBreakdown = [
    { name: "Prescriptions", value: 68900, color: "#8b5cf6" },
    { name: "Vente libre", value: 26380, color: "#06b6d4" },
    { name: "Cosmétiques", value: 12450, color: "#ec4899" },
    { name: "Compléments", value: 8920, color: "#10b981" },
    { name: "Matériel médical", value: 5670, color: "#f59e0b" }
  ];

  const weeklyPerformance = [
    { day: "Lun", target: 3000, actual: 3420, efficiency: 114 },
    { day: "Mar", target: 3200, actual: 3650, efficiency: 114 },
    { day: "Mer", target: 3100, actual: 2890, efficiency: 93 },
    { day: "Jeu", target: 3300, actual: 3850, efficiency: 117 },
    { day: "Ven", target: 3500, actual: 4100, efficiency: 117 },
    { day: "Sam", target: 2800, actual: 2560, efficiency: 91 },
    { day: "Dim", target: 1500, actual: 1320, efficiency: 88 }
  ];

  const reports = [
    {
      title: "Rapport Mensuel Décembre",
      description: "Analyse complète des ventes et marges",
      date: "2024-12-24",
      format: "PDF",
      size: "2.4 MB"
    },
    {
      title: "Top Produits Q4 2024",
      description: "Classement des meilleures ventes trimestrielles",
      date: "2024-12-20",
      format: "Excel",
      size: "1.8 MB"
    },
    {
      title: "Analyse Clientèle 2024",
      description: "Segmentation et comportements d'achat",
      date: "2024-12-15",
      format: "PDF",
      size: "3.2 MB"
    },
    {
      title: "Performance Équipe",
      description: "Statistiques individuelles par vendeur",
      date: "2024-12-10",
      format: "Excel",
      size: "1.5 MB"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Button className="h-20 bg-blue-600 hover:bg-blue-700 flex flex-col gap-2">
          <BarChart3 className="h-6 w-6" />
          <span>Rapport Jour</span>
        </Button>
        <Button className="h-20 bg-green-600 hover:bg-green-700 flex flex-col gap-2">
          <Calendar className="h-6 w-6" />
          <span>Rapport Semaine</span>
        </Button>
        <Button className="h-20 bg-purple-600 hover:bg-purple-700 flex flex-col gap-2">
          <TrendingUp className="h-6 w-6" />
          <span>Rapport Mois</span>
        </Button>
        <Button className="h-20 bg-orange-600 hover:bg-orange-700 flex flex-col gap-2">
          <Download className="h-6 w-6" />
          <span>Export Données</span>
        </Button>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Évolution Chiffre d'Affaires 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
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
                  dataKey="revenue" 
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
            <CardTitle>Répartition par Catégorie</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryBreakdown}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {categoryBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Performance vs Objectifs</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyPerformance}>
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
                <Bar dataKey="target" fill="#e5e7eb" name="Objectif" />
                <Bar dataKey="actual" fill="#8b5cf6" name="Réalisé" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Rapports Récents</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {reports.map((report, index) => (
              <div key={index} className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">{report.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{report.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{report.date}</span>
                      <span>{report.format}</span>
                      <span>{report.size}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export { SalesReports };
