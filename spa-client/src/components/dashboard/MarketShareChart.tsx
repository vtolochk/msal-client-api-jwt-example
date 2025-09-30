
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const MarketShareChart = () => {
  const data = [
    { name: "CVS Health", value: 28.5, color: "#3b82f6" },
    { name: "Walgreens", value: 24.2, color: "#10b981" },
    { name: "Rite Aid", value: 18.7, color: "#f59e0b" },
    { name: "Independent", value: 15.3, color: "#8b5cf6" },
    { name: "Others", value: 13.3, color: "#ef4444" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800">Market Share Distribution</CardTitle>
          <CardDescription>Pharmacy chains market dominance</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Market Share']}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800">Market Leaders</CardTitle>
          <CardDescription>Top performing pharmacy chains</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-4 h-4 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="font-medium text-gray-800">{item.name}</span>
              </div>
              <span className="text-lg font-bold text-gray-900">{item.value}%</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export { MarketShareChart };
