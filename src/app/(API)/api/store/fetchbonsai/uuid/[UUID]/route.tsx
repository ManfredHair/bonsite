import { NextResponse } from 'next/server';
import { fetchBonsaiById } from '../../_queries/id/get';
import { NextRequest } from 'next/server';

import { unstable_noStore as noStore } from 'next/cache';

// This will handle the dynamic route for fetching bonsai by ID
export async function GET(request: NextRequest, { params }: { params: { UUID: string } }) {

  noStore();

  const bonsaiUUID = params.UUID; // Extract the ID from the dynamic route
  
  try {
    const bonsai = await fetchBonsaiById(bonsaiUUID);

    if (!bonsai) {
      return NextResponse.json({ message: 'Bonsai not found' }, { status: 404 });
    }

    return NextResponse.json(bonsai); // Return the bonsai if found
  } catch (error) {
    console.error('Error fetching bonsai by UUID:', error);
    return NextResponse.error(); // Return a generic error response
  }
}