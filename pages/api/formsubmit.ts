import { NextApiRequest, NextApiResponse } from "next";

interface FormData {
  name: string;
  email: string;
  brief: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST" || req.method === 'GET' ) {
    const formData: FormData = req.body;
    console.log(formData);
    // Process the form data, e.g., save it to a database

    // Send a response back to the frontend
    res.status(200).json({formData});
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
