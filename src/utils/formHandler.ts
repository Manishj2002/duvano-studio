// src/utils/formHandler.ts
import axios from 'axios';

export interface JoinFormData {
  name: string;
  email: string;
  role: string;
  portfolio: string;           // ✅ Cloudinary or user-provided link
  portfolioFile: File | null;  // ✅ Used for upload only
  reason: string;
}

export const submitForm = async (formData: JoinFormData) => {
  const FORMSPARK_ACTION_URL = 'https://formspree.io/f/xkgbgpez';

  try {
    // ✅ This is the data you'll receive in email
    const submissionData = {
      name: formData.name,
      email: formData.email,
      role: formData.role,
      reason: formData.reason,
      portfolio: formData.portfolio || 'No link provided',
    };

    await axios.post(FORMSPARK_ACTION_URL, submissionData);

    return { success: true };
  } catch (error) {
    console.error('Form submission error:', error);
    return { success: false, error: 'Submission failed. Please try again.' };
  }
};
