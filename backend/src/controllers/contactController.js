export const sendMessage = (req, res) => {
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
  
    // For now, just respond with success (later can save to DB or send email)
    res.status(200).json({ success: true, data: { name, email, message } });
  };
  