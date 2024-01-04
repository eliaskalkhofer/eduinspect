import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../path/to/mongo'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { client, db } = await connectToDatabase(process.env.MONGODB_URI);

    // Führe hier deine MongoDB-Operationen durch, z.B.
    const result = await db.collection('deineSammlung').find({}).toArray();

    // Schließe die Verbindung, wenn sie nicht mehr benötigt wird
    await client.close();

    res.status(200).json({ data: result });
  } catch (error) {
    console.error('Fehler beim Verbindungsaufbau zu MongoDB:', error);
    res.status(500).json({ error: 'Interner Serverfehler' });
  }
}