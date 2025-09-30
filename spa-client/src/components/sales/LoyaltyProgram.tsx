
import { LoyaltyStats } from "./LoyaltyStats";
import { TopMembers } from "./TopMembers";
import { RewardsCatalog } from "./RewardsCatalog";

const LoyaltyProgram = () => {
  return (
    <div className="space-y-6">
      {/* Statistics */}
      <LoyaltyStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Members */}
        <TopMembers />

        {/* Rewards Catalog */}
        <RewardsCatalog />
      </div>
    </div>
  );
};

export { LoyaltyProgram };
