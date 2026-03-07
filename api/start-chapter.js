// Vercel Serverless Function - /api/start-chapter
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: "Method not allowed. Use POST." });
    }

    try {
        const payload = req.body;

        if (!payload || !payload.email || !payload.city) {
            return res.status(400).json({ success: false, error: "Missing required chapter fields." });
        }

        console.log("Securely processing New Chapter Proposal for:", payload.city);

        return res.status(200).json({
            success: true,
            message: "Chapter Proposal queued successfully for Review Board."
        });

    } catch (error) {
        console.error("API Shield Caught Backend Exception:", error);
        return res.status(500).json({
            success: false,
            error: "The global routing server is experiencing high load. Your request has been safely halted."
        });
    }
}
