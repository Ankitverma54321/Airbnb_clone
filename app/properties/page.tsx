import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";

import PropertiesClient from "./PropertiesClient";
import getListings from "../actions/getListings";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
    
        <EmptyState
          title="Unauthorized"
          subtitle="Please login"
        />
    )
      
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
    
        <EmptyState
          title="No Propertis found"
          subtitle="Looks like you have no properties."
        />
      
    );
  }

  return (
    
      <PropertiesClient
        listings={listings}
        currentUser={currentUser}
      />
    
  );
}
 
export default PropertiesPage;