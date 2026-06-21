import getCurrentUser from "../actions/getCurrentUser"
import getListings from "../actions/getListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import PropertiesClient from "./PropertiesClient";




const PropertiesPage = async ()=>{
    const currentUser = await getCurrentUser();

    if(!currentUser){
        return (
            <ClientOnly>
                <EmptyState
                    title="Unauthorized Access!"
                    subtitle="Please log in to access this featur"
                />
            </ClientOnly>
        )
    }

    const listings = await getListings(Promise.resolve({
        userId:currentUser.id
    }));

    if(listings.length=== 0){
        return (
            <ClientOnly>
                <EmptyState
                    title="No properties found"
                    subtitle="Looks like you haven't no properties "
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <PropertiesClient
                listings={ listings }
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default PropertiesPage;