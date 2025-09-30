
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const InventoryChart = () => {
  const data = [
    { category: "Pain Relief", inStock: 15000, lowStock: 2000, outOfStock: 500 },
    { category: "Antibiotics", inStock: 8000, lowStock: 1200, outOfStock: 300 },
    { category: "Vitamins", inStock: 12000, lowStock: 1800, outOfStock: 200 },
    { category: "Heart Med", inStock: 6000, lowStock: 800, outOfStock: 150 },
    { category: "Diabetes", inStock: 9000, lowStock: 1000, outOfStock: 250 },
    { category: "Respiratory", inStock: 7500, lowStock: 900, outOfStock: 180 },
  ];

  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">Inventory Status by Category</CardTitle>
        <CardDescription>Current stock levels across all pharmacy locations</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="category" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            />
            <Bar dataKey="inStock" fill="#10b981" name="In Stock" radius={[4, 4, 0, 0]} />
            <Bar dataKey="lowStock" fill="#f59e0b" name="Low Stock" radius={[4, 4, 0, 0]} />
            <Bar dataKey="outOfStock" fill="#ef4444" name="Out of Stock" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export { InventoryChart };
