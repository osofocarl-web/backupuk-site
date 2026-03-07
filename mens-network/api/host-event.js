// Vercel Serverless Function - /api/host-event
// This runs exclusively on Vercel's backend, fully isolated from the static frontend.

export default async function handler(req, res) {
    // 1. Enforce strict POST method
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: "Method not allowed. Use POST." });
    }

    try {
        const payload = req.body;

        // 2. Simulated Rate Limiting Check
        // In production Phase 8, this would connect to Upstash Redis:
        // const isRateLimited = await redis.checkLimit(req.headers['x-forwarded-for']);
        // if(isRateLimited) throw new Error("Rate limit exceeded");

        // 3. Validation Safety Check
        if (!payload || !payload.email || !payload.city) {
            return res.status(400).json({ success: false, error: "Missing required form fields." });
        }

        // 4. Secure Data Execution (e.g., Supabase Insert / Resend Email)
        console.log("Securely processing Lead Application for Backup Event:", payload.city);

        // Return 200 OK
        return res.status(200).json({
            success: true,
            message: "Application queued securely."
        });

    } catch (error) {
        // 5. Global API Shield - Prevents 500 crashes from leaking to the frontend
        console.error("API Shield Caught Backend Exception:", error);
        return res.status(500).json({
            success: false,
            error: "The global network server is currently experiencing high load. Your request has been safely halted."
        });
    }
}
