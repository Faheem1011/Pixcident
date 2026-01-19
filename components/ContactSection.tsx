import React, { useState } from 'react';
import { Mail, MapPin, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);

    // Web3Forms payload with custom email template
    const payload = {
      access_key: '89081f8f-b57f-408b-b804-4c83649f7c27',
      name: formData.get('name'),
      email: formData.get('email'),
      projectType: formData.get('projectType'),
      message: formData.get('message'),
      from_name: 'Pixcident Contact Form',
      subject: `New Project Inquiry: ${formData.get('projectType')}`,
      // Custom HTML email template
      template: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #0a0a0a; }
    .email-container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%); }
    .header { background: #FF5500; padding: 40px 20px; text-align: center; }
    .logo { color: white; font-size: 32px; font-weight: bold; letter-spacing: 2px; }
    .content { padding: 40px 30px; color: #e0e0e0; }
    .label { color: #FF5500; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-top: 20px; margin-bottom: 5px; }
    .value { color: #ffffff; font-size: 16px; line-height: 1.6; background: #1a1a1a; padding: 15px; border-left: 3px solid #FF5500; margin-bottom: 15px; }
    .footer { background: #0a0a0a; padding: 30px; text-align: center; border-top: 2px solid #FF5500; }
    .footer-text { color: #888; font-size: 14px; margin: 10px 0; }
    .cta-button { display: inline-block; background: #FF5500; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <div class="logo">PIXCIDENT</div>
      <p style="color: #fff; margin: 10px 0 0 0; font-size: 14px;">New Project Inquiry</p>
    </div>
    <div class="content">
      <h2 style="color: #FF5500; margin-top: 0;">🎯 New Lead from Your Website!</h2>
      <p style="font-size: 16px; line-height: 1.6;">You have received a new project inquiry. Here are the details:</p>
      
      <div class="label">Client Name</div>
      <div class="value">{{name}}</div>
      
      <div class="label">Email Address</div>
      <div class="value">{{email}}</div>
      
      <div class="label">Project Type</div>
      <div class="value">{{projectType}}</div>
      
      <div class="label">Message</div>
      <div class="value">{{message}}</div>
      
      <p style="margin-top: 30px; padding: 20px; background: #1a1a1a; border-left: 3px solid #00ff88; color: #00ff88;">
        💡 <strong>Pro Tip:</strong> Reply within 1 hour to increase conversion by 60%!
      </p>
    </div>
    <div class="footer">
      <a href="mailto:{{email}}" class="cta-button">Reply to Client</a>
      <p class="footer-text">This email was sent from your Pixcident contact form</p>
      <p class="footer-text" style="color: #555; font-size: 12px;">Contact@pixcident.com | www.pixcident.com</p>
    </div>
  </div>
</body>
</html>
      `
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setFormState('success');
        e.currentTarget.reset();
      } else {
        setFormState('error');
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setFormState('error');
      setErrorMessage('Network error. Please try again or email us directly at Contact@pixcident.com');
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 uppercase">
              Let's Create <br />
              <span className="text-brand-orange">The Future</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-md">
              Whether you need high-end ArchViz, game-ready assets, or an AI-driven campaign, Pixcident is ready to bring your vision to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 rounded-lg text-brand-orange">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Email Us</h4>
                  <p className="text-zinc-400">Contact@pixcident.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 rounded-lg text-brand-orange">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Studio</h4>
                  <p className="text-zinc-400">Global Digital Studio<br />Based in the Cloud</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-black border border-zinc-800 p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-[400px] text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                  <p className="text-zinc-400">We'll be in touch shortly.</p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-6 text-brand-orange text-sm font-bold uppercase hover:underline"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : formState === 'error' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-[400px] text-center"
                >
                  <div className="w-20 h-20 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mb-6">
                    <AlertCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h3>
                  <p className="text-zinc-400 mb-4 max-w-md">{errorMessage}</p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-6 px-6 py-3 bg-brand-orange text-white font-bold rounded hover:bg-orange-600 transition-colors uppercase tracking wider"
                  >
                    Try Again
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Name</label>
                      <input required type="text" name="name" className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded focus:outline-none focus:border-brand-orange transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Email</label>
                      <input required type="email" name="email" className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded focus:outline-none focus:border-brand-orange transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mb-6">
                    <label htmlFor="project-type" className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Project Type</label>
                    <select id="project-type" name="projectType" className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded focus:outline-none focus:border-brand-orange transition-colors">
                      <option>3D Animation</option>
                      <option>Architectural Viz</option>
                      <option>Unreal Engine Dev</option>
                      <option>Game Assets</option>
                      <option>AI Solutions</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Honeypot field - hidden from users, catches bots */}
                  <input type="text" name="website" className="absolute left-[-9999px]" tabIndex={-1} autoComplete="off" aria-label="Leave this field empty" />

                  <div className="flex flex-col gap-2 mb-8">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Message</label>
                    <textarea required rows={4} name="message" className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded focus:outline-none focus:border-brand-orange transition-colors" placeholder="Tell us about your project..." />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-brand-orange text-white font-bold py-4 rounded hover:bg-orange-600 transition-colors uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} /> Sending...
                      </>
                    ) : formState === 'error' ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center h-[400px] text-center"
                      >
                        <div className="w-20 h-20 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mb-6">
                          <AlertCircle size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h3>
                        <p className="text-zinc-400 mb-4">{errorMessage}</p>
                        <button
                          onClick={() => setFormState('idle')}
                          className="mt-6 px-6 py-3 bg-brand-orange text-white font-bold rounded hover:bg-orange-600 transition-colors"
                        >
                          Try Again
                        </button>
                      </motion.div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-900/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default ContactSection;