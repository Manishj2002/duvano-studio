import type { JoinFormData } from './formHandler';

export const validateForm = (formData: JoinFormData) => {
  const errors: { [key: string]: string } = {};

  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email or Discord ID is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$|^[^@#]+#[0-9]{4}$/.test(formData.email)) {
    errors.email = 'Enter a valid email or Discord ID (e.g., username#1234)';
  }

  if (!formData.role) {
    errors.role = 'Please select a role';
  }

  if (!formData.portfolio.trim()) {
    errors.portfolio = 'Portfolio link is required';
  } else if (!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(formData.portfolio)) {
    errors.portfolio = 'Enter a valid URL';
  }

  if (!formData.reason.trim()) {
    errors.reason = 'Reason to join is required';
  } else if (formData.reason.split(/\s+/).length > 100) {
    errors.reason = 'Reason must be 100 words or less';
  }

  return errors;
};
