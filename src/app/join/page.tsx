'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import InputField from '../../components/ui/InputField';
import Select from '../../components/ui/Select';
import Button from '../../components/ui/Button';
import { submitForm } from '../../utils/formHandler';
import { validateForm } from '../../utils/validators';
import Link from 'next/link';
import { toast } from 'react-toastify';
import type { JoinFormData } from '../../utils/formHandler';

interface FormErrors {
  name?: string;
  email?: string;
  role?: string;
  portfolio?: string;
  reason?: string;
}

const initialState: JoinFormData = {
  name: '',
  email: '',
  role: '',
  portfolio: '',
  portfolioFile: null,
  reason: '',
};

export default function Join() {
  const [formData, setFormData] = useState<JoinFormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formDataUpload = new FormData();
    formDataUpload.append('file', file);
    formDataUpload.append('upload_preset', 'duvano_uploads'); // your Cloudinary preset

    try {
const res = await fetch('https://api.cloudinary.com/v1_1/degoktu3s/raw/upload', {
  method: 'POST',
  body: formDataUpload,
});



      const data = await res.json();
      setFormData((prev) => ({
        ...prev,
        portfolio: data.secure_url,
        
      }));
      toast.success('File uploaded successfully!');
    } catch (err) {
      toast.error('File upload failed.');
      console.error(err);
    
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fix the errors in the form.');
      return;
    }

    setSubmitStatus('submitting');
    const result = await submitForm(formData);

    if (result.success) {
      setSubmitStatus('success');
      toast.success('Application submitted successfully!');
      setFormData(initialState);
    } else {
      setSubmitStatus('error');
      toast.error('Submission failed. Please try again.');
    }
  };

  return (
    <section className="container mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-orbitron text-neon-blue mb-6 text-center">
          Want to be part of India’s first indie anime project?
        </h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <InputField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Your full name"
          />
          <InputField
            label="Email or Discord"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Your email or Discord ID"
          />
          <Select
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            error={errors.role}
            options={[
              { value: '', label: 'Select a role' },
              { value: 'animator', label: 'Animator' },
              { value: 'story-writer', label: 'Story Writer' },
              { value: 'character-designer', label: 'Character Designer' },
              { value: 'mangaka', label: 'Mangaka' },
              { value: 'voice-actor', label: 'Voice Actor' },
              { value: 'music-composer', label: 'Music Composer' },
              { value: 'developer', label: 'Developer' },
              { value: 'editor', label: 'Editor' },
              { value: 'project-manager', label: 'Project Manager' },
            ]}
          />
          <div className="space-y-2">
            <label className="block text-white-highlight font-medium">Portfolio Link or File</label>
            <input
              type="text"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              placeholder="Artstation, YouTube, Instagram, etc."
              className="w-full p-3 border-2 rounded bg-dark-secondary text-white-highlight focus:outline-none"
            />
            <div className="text-center text-white-highlight">— OR —</div>
            <input
              type="file"
              accept=".pdf,.doc,.docx,.zip,.rar,.png,.jpg,.jpeg"
              onChange={handleFileChange}
              className="w-full p-3 rounded bg-dark-secondary text-white-highlight file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-soft-red file:text-white-highlight hover:file:bg-neon-blue"
            />
            {errors.portfolio && <p className="text-soft-red text-sm">{errors.portfolio}</p>}
          </div>
          <InputField
            label="Why do you want to join? (100 words max)"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            error={errors.reason}
            placeholder="Tell us your passion for anime!"
            isTextarea
            maxLength={100}
          />
          <Button
            type="submit"
            disabled={submitStatus === 'submitting'}
            className="w-full bg-soft-red hover:bg-neon-blue"
          >
            {submitStatus === 'submitting' ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
        <p className="text-center mt-6 text-white-highlight">
          Already joined?{' '}
          <Link href="https://discord.gg/FvdSrF6W" className="text-neon-blue hover:text-soft-red">
            Join our Discord
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
