const API_CONFIG = {
    GEMINI_API_KEY: 'AIzaSyD2ihzKvPnTsl3lKyfeHjPC_vlxG2fRtpo', // Replace with your actual Gemini API key
};

function getGeminiKey() {
    try {
        if (!API_CONFIG.GEMINI_API_KEY) {
            throw new Error('Gemini API key is not configured');
        }
        return API_CONFIG.GEMINI_API_KEY;
    } catch (error) {
        reportError(error);
        return null;
    }
}
