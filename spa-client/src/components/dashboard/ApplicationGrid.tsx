import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/layout/Navigation";
import { 
  Package, 
  TrendingUp, 
  ShoppingCart, 
  Truck, 
  DollarSign, 
  Users, 
  Shield, 
  Megaphone,
  Pill
} from "lucide-react";

const ApplicationGrid = () => {
  const applications = [
    {
      title: "Gestion des Stocks",
      description: "Suivi en temps réel, alertes et optimisation des stocks pharmaceutiques",
      icon: Package,
      color: "from-blue-600 to-green-600",
      bgColor: "from-blue-50 to-green-50",
      href: "/inventory",
      features: ["Suivi des lots", "Alertes de péremption", "Optimisation des commandes"]
    },
    {
      title: "Ventes & CRM",
      description: "Gestion des ventes, fidélisation client et analyse des performances",
      icon: TrendingUp,
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      href: "/sales-crm",
      features: ["Suivi des ventes", "Gestion des clients", "Programmes de fidélité"]
    },
    {
      title: "Achats",
      description: "Gestion des commandes fournisseurs, suivi des coûts et optimisation des achats",
      icon: ShoppingCart,
      color: "from-orange-600 to-yellow-600",
      bgColor: "from-orange-50 to-yellow-50",
      href: "/purchasing",
      features: ["Gestion des fournisseurs", "Suivi des commandes", "Analyse des coûts"]
    },
    {
      title: "Logistique & Livraisons",
      description: "Gestion des livraisons et optimisation des tournées",
      icon: Truck,
      color: "from-indigo-600 to-blue-600",
      bgColor: "from-indigo-50 to-blue-50",
      href: "/logistics",
      features: ["Suivi des livraisons", "Optimisation des tournées", "Gestion des transporteurs"]
    },
    {
      title: "Finance & Comptabilité",
      description: "Suivi financier et analyse de rentabilité",
      icon: DollarSign,
      color: "from-yellow-600 to-orange-600",
      bgColor: "from-yellow-50 to-orange-50",
      href: "/finance",
      features: ["Suivi des revenus", "Gestion des dépenses", "Analyse de rentabilité"]
    },
    {
      title: "Ressources Humaines",
      description: "Gestion du personnel, suivi des compétences et conformité réglementaire",
      icon: Users,
      color: "from-red-600 to-pink-600",
      bgColor: "from-red-50 to-pink-50",
      href: "/hr",
      features: ["Gestion des employés", "Suivi des compétences", "Conformité réglementaire"]
    },
    {
      title: "Conformité",
      description: "Assurer la conformité réglementaire et la sécurité des opérations",
      icon: Shield,
      color: "from-gray-600 to-zinc-600",
      bgColor: "from-gray-50 to-zinc-50",
      href: "/compliance",
      features: ["Conformité réglementaire", "Sécurité des données", "Gestion des risques"]
    },
    {
      title: "Marketing",
      description: "Gestion des campagnes marketing et communication client",
      icon: Megaphone,
      color: "from-teal-600 to-cyan-600",
      bgColor: "from-teal-50 to-cyan-50",
      href: "/marketing",
      features: ["Campagnes marketing", "Communication client", "Analyse des performances"]
    },
    {
      title: "Délivrance",
      description: "Système de délivrance pharmaceutique avec contrôles de sécurité",
      icon: Pill,
      color: "from-green-600 to-blue-600",
      bgColor: "from-green-50 to-blue-50",
      href: "/dispensing",
      features: ["Vérification ordonnances", "Contrôles sécurité", "Historique délivrances"]
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {applications.map((app, index) => (
        <Card key={index} className={`border-0 shadow-lg bg-gradient-to-br ${app.bgColor} hover:scale-105 transition-transform duration-200`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center space-x-2">
              <app.icon className={`h-4 w-4 text-white`} />
              <span className={`bg-gradient-to-r ${app.color} bg-clip-text text-transparent font-bold`}>{app.title}</span>
            </CardTitle>
            {/* <MoreHorizontal className="h-4 w-4 text-muted-foreground" /> */}
          </CardHeader>
          <CardContent>
            <CardDescription className="text-xs text-gray-500">{app.description}</CardDescription>
            <ul className="mt-4 space-y-2">
              {app.features.map((feature, i) => (
                <li key={i} className="text-gray-700 text-sm">• {feature}</li>
              ))}
            </ul>
            <Button asChild className="w-full mt-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              <a href={app.href}>Accéder</a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export { ApplicationGrid };
