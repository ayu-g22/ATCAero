import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export const dynamic = "force-dynamic"; 

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Received:", body);

    // Parse credentials from env
    const creds = JSON.parse(process.env.GSHEET_KEY!);

    // Create auth client
    const serviceAuth = new JWT({
      email: creds.client_email,
      key: creds.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Initialize spreadsheet
    const doc = new GoogleSpreadsheet(process.env.SHEET_ID!, serviceAuth);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0]; // first sheet (Sheet1)

    // Append row
    await sheet.addRow({
      FirstName: body.firstName,
      LastName: body.lastName,
      Phone: body.phone,
      Email: body.email,
      Course: body.course,
      Message: body.message,
    });

    return Response.json({ success: true });

  } catch (err: any) {
    console.error("API ERROR:", err);
    return new Response(JSON.stringify({
      success: false,
      error: err.message,
      stack: err.stack
    }), { status: 500 });
  }
}
