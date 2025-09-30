
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const SalesChart = () => {
  const data = [
    { month: "Jan", sales: 45000, prescriptions: 1200 },
    { month: "Feb", sales: 52000, prescriptions: 1400 },
    { month: "Mar", sales: 48000, prescriptions: 1300 },
    { month: "Apr", sales: 61000, prescriptions: 1600 },
    { month: "May", sales: 58000, prescriptions: 1550 },
    { month: "Jun", sales: 67000, prescriptions: 1750 },
    { month: "Jul", sales: 73000, prescriptions: 1900 },
    { month: "Aug", sales: 69000, prescriptions: 1850 },
    { month: "Sep", sales: 78000, prescriptions: 2000 },
    { month: "Oct", sales: 82000, prescriptions: 2100 },
    { month: "Nov", sales: 89000, prescriptions: 2300 },
    { month: "Dec", sales: 95000, prescriptions: 2450 },
  ];

  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">Sales & Prescription Trends</CardTitle>
        <CardDescription>Monthly performance across all pharmacies</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="prescriptions" 
              stroke="#10b981" 
              strokeWidth={3}
              dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export { SalesChart };
