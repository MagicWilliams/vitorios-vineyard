// app/actions/subscribe.ts
'use server';

import { BeehiivClient } from '@beehiiv/sdk';

const client = new BeehiivClient({
  token: process.env.BEEHIIV_API_KEY || '',
});

export async function subscribe(formData: FormData) {
  const name = formData.get('name')?.toString() || '';
  const email = formData.get('email')?.toString() || '';
  const phone = formData.get('phone')?.toString() || '';
  const favoriteWine = formData.get('favoriteWine')?.toString() || '';

  console.log(email);

  try {
    const res = await client.subscriptions.create(
      process.env.BEEHIIV_PUBLICATION_ID_V2 || '',
      {
        email,
        reactivateExisting: true,
        sendWelcomeEmail: true,
        customFields: [
          { name: 'Name', value: name },
          { name: 'Phone', value: phone },
          { name: 'Favorite Wine', value: favoriteWine },
        ],
      }
    );
    return { success: true, res };
  } catch (error) {
    return { success: false, message: 'Failed to subscribe', error };
  }
}
