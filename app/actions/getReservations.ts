import prisma from '@/app/libs/prismadb';

interface IParams {
    listingId?: string;
    userId?: string;
    authorId?: string;
}

export default async function getReservations(params: IParams) {
    try {
        const { listingId, userId, authorId } = params;
    
        const query: any = {};
    
        if (listingId) {
            query.listingId = listingId;
        }
    
        if (userId) {
            query.userId = userId;
        }
    
        if (authorId) {
            query.listing = { userId: authorId };
        }
    
        const reservations = await prisma.reservation.findMany({
            where: query,
            include: {
                listing: true,
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
    
        // ✅ FILTER OUT INVALID RESERVATIONS
        const validReservations = reservations.filter((reservation) => {
            const isValid = 
                reservation.createdAt &&
                reservation.startDate &&
                reservation.endDate &&
                reservation.listing &&
                reservation.listing.createdAt;
            
            if (!isValid) {
                console.warn('⚠️ Skipping invalid reservation:', {
                    id: reservation.id,
                    missingCreatedAt: !reservation.createdAt,
                    missingStartDate: !reservation.startDate,
                    missingEndDate: !reservation.endDate,
                    missingListing: !reservation.listing,
                    missingListingCreatedAt: !reservation.listing?.createdAt
                });
            }
            
            return isValid;
        });
    
        // ✅ NOW SAFE TO CONVERT
        const safeReservations = validReservations.map((reservation) => ({
            ...reservation,
            createdAt: reservation.createdAt.toISOString(),
            startDate: reservation.startDate.toISOString(),
            endDate: reservation.endDate.toISOString(),
            listing: {
                ...reservation.listing,
                createdAt: reservation.listing.createdAt.toISOString()
            }
        }));

        return safeReservations;
    } catch (error: any) {
        console.error('Error in getReservations:', error);
        // Return empty array instead of throwing
        return [];
    }
}