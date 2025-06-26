import axios from 'axios';

export interface FormData {
  name: string;
  email: string;
  role: string;
 portfolioFile: File | null; // new
  reason: string;
}

export const submitForm = async (formData: FormData) => {
  const FORMSPARK_ACTION_URL = 'https://formspree.io/f/xkgbgpez'; // Replace with your Formspark form ID
  try {
    await axios.post(FORMSPARK_ACTION_URL, {
      ...formData,
      _email: {
        from: 'Duvano Studio',
        subject: 'New Application Submission',
      },
    });
    return { success: true };
  } catch (error) {
    console.error('Form submission error:', error);
    return { success: false, error: 'Submission failed. Please try again.' };
  }
};