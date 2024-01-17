import { http, HttpResponse } from "msw";
import { nanoid } from "nanoid";

const mockdb = [];

function calculatePrice(lanes, people) {
  return 120 * lanes + 100 * people;
}

export const handlers = [
  http.post('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', async ({ request }) => {
    // Hämta vår body som JSON
    const data = await request.json();

    mockdb.push(data);
    mockdb[0].active = true;
    mockdb[0].id = nanoid();
    mockdb[0].price = calculatePrice(data.lanes, data.people);

    return HttpResponse.json(mockdb[0]);
  })
]