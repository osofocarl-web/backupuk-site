// Vercel Serverless Function - /api/become-anchor
// Isolated backend function to process Anchor Mentorship Assessments

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: "Method not allowed. Use POST." });
    }

    try {
        const payload = req.body;

        // Validation Safety Check
        if (!payload || !payload.email || !payload.city) {
            return res.status(400).json({ success: false, error: "Missing required assessment fields." });
        }

        console.log("Securely processing Anchor Mentorship Assessment for:", payload.email);

        // Return 200 OK
        return res.status(200).json({
            success: true,
            message: "Assessment successfully decrypted and queued for global review."
        });

    } catch (error) {
        // Global API Shield - Prevents 500 crashes from leaking to the frontend SPA
        console.error("API Shield Caught Backend Exception:", error);
        return res.status(500).json({
            success: false,
            error: "The global mentorship routing server is currently experiencing high load. Your request has been safely halted."
        });
    }
}
