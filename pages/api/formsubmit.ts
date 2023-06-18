import { NextApiRequest, NextApiResponse } from "next";

interface FormData {
  name: string;
  email: string;
  brief: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const formData: FormData = req.body;
    console.log(formData);
    res.status(200).json({ formData });
  } catch (error) {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
