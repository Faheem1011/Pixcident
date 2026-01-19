import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('submitting');

    // Web3Forms payload with beautiful email template
    const payload = {
      access_key: '89081f8f-b57f-408b-b804-4c83649f7c27',
      email: email,
      from_name: 'Pixcident Newsletter',
      subject: '🎉 New Newsletter Subscriber!',
      // Custom HTML email template for newsletter
      template: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 0; font-family: 'Arial', sans-serif; background: #0a0a0a; }
    .email-container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%); border: 1px solid #333; }
    .header { background: linear-gradient(135deg, #FF5500 0%, #ff7733 100%); padding: 50px 20px; text-align: center; position: relative; overflow: hidden; }
    .header::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); animation: pulse 4s infinite; }
    @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.1); opacity: 0.8; } }
    .logo { color: white; font-size: 36px; font-weight: bold; letter-spacing: 3px; position: relative; z-index: 1; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
    .tagline { color: rgba(255,255,255,0.9); font-size: 14px; margin: 10px 0; position: relative; z-index: 1; }
    .content { padding: 40px 30px; color: #e0e0e0; }
    .welcome-badge { background: #FF5500; color: white; display: inline-block; padding: 8px 20px; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; }
    .subscriber-email { color: #FF5500; font-size: 18px; font-weight: bold; background: #1a1a1a; padding: 15px; border-radius: 8px; border-left: 4px solid #FF5500; margin: 20px 0; }
    .stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin: 30px 0; }
    .stat-box { background: #1a1a1a; padding: 20px; border-radius: 8px; text-align: center; border: 1px solid #333; }
    .stat-number { color: #FF5500; font-size: 24px; font-weight: bold; }
    .stat-label { color: #888; font-size: 12px; text-transform: uppercase; margin-top: 5px; }
    .action-section { background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%); padding: 30px; border-radius: 10px; margin: 30px 0; border: 1px solid #FF5500; }
    .cta-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 20px; }
    .cta-item { background: #0a0a0a; padding: 15px; border-radius: 8px; border-left: 3px solid #FF5500; }
    .cta-item h4 { color: #FF5500; font-size: 14px; margin: 0 0 5px 0; }
    .cta-item p { color: #aaa; font-size: 12px; margin: 0; }
    .footer { background: #0a0a0a; padding: 30px; text-align: center; border-top: 2px solid #FF5500; }
    .social-links { margin: 20px 0; }
    .social-link { display: inline-block; margin: 0 10px; color: #FF5500; text-decoration: none; font-size: 14px; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <div class="logo">PIXCIDENT</div>
      <div class="tagline">Creative Production Studio</div>
    </div>
    
    <div class="content">
      <div class="welcome-badge">🎉 New Subscriber Alert!</div>
      <h2 style="color: #FF5500; margin: 0 0 20px 0; font-size: 28px;">Someone Just Joined Your Community!</h2>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        Great news! A new subscriber has signed up for your newsletter. Here's who they are:
      </p>
      
      <div class="subscriber-email">
        📧 {{email}}
      </div>
      
      <div class="stats-grid">
        <div class="stat-box">
          <div class="stat-number">+1</div>
          <div class="stat-label">New Subscriber</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">🔥</div>
          <div class="stat-label">Growing Fast</div>
        </div>
      </div>
      
      <div class="action-section">
        <h3 style="color: white; margin: 0 0 15px 0;">💡 What Subscribers Get:</h3>
        <div class="cta-grid">
          <div class="cta-item">
            <h4>🎨 Portfolio Updates</h4>
            <p>Latest projects & case studies</p>
          </div>
          <div class="cta-item">
            <h4>💰 Exclusive Offers</h4>
            <p>Special pricing for subscribers</p>
          </div>
          <div class="cta-item">
            <h4>📚 Industry Insights</h4>
            <p>3D design & tech trends</p>
          </div>
          <div class="cta-item">
            <h4>🚀 Early Access</h4>
            <p>New services & features</p>
          </div>
        </div>
      </div>
      
      <div style="background: #1a1a1a; padding: 20px; border-left: 3px solid #00ff88; margin: 30px 0;">
        <p style="margin: 0; color: #00ff88;">
          <strong>✨ Next Step:</strong> Send them a welcome email within 24 hours to boost engagement by 3x!
        </p>
      </div>
    </div>
    
    <div class="footer">
      <p style="color: #888; font-size: 14px; margin: 10px 0;">
        This notification was sent from your Pixcident newsletter signup form
      </p>
      <div class="social-links">
        <a href="https://pixcident.com" class="social-link">🌐 Website</a>
        <a href="mailto:{{email}}" class="social-link">📧 Email Subscriber</a>
      </div>
      <p style="color: #555; font-size: 12px; margin: 20px 0 0 0;">
        Contact@pixcident.com | www.pixcident.com
      </p>
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
        setStatus('success');
        setEmail('');
        // Reset to idle after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-brand-black via-zinc-950 to-brand-dark relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 bg-brand-orange/10 border border-brand-orange/20 rounded-full mb-6"
          >
            <Mail className="text-brand-orange" size={32} />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase"
          >
            Stay <span className="text-brand-orange">Ahead</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 mb-8 max-w-lg mx-auto"
          >
            Join exclusive updates on 3D design trends, portfolio showcases, and special offers. No spam, just pure creative value.
          </motion.p>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative max-w-md mx-auto"
          >
            <div className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={status === 'submitting'}
                className="flex-1 bg-zinc-900 border border-zinc-800 text-white px-6 py-4 rounded-full focus:outline-none focus:border-brand-orange transition-all duration-300 pr-32 placeholder-zinc-600 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'submitting' || !email.trim()}
                className="absolute right-2 bg-brand-orange text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-brand-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <AnimatePresence mode="wait">
                  {status === 'submitting' ? (
                    <Loader2 key="loading" size={18} className="animate-spin" />
                  ) : status === 'success' ? (
                    <CheckCircle key="success" size={18} />
                  ) : (
                    <Send key="send" size={18} />
                  )}
                </AnimatePresence>
                {status === 'submitting' ? 'Sending' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
              </button>
            </div>

            {/* Status Messages */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-green-500 text-sm font-medium"
                >
                  ✓ Success! Check your inbox for confirmation.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-red-500 text-sm font-medium"
                >
                  ✗ Something went wrong. Please try again.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-8 text-sm text-zinc-600"
          >
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-brand-orange" />
              <span>No spam</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-brand-orange" />
              <span>Unsubscribe anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-brand-orange" />
              <span>Weekly insights</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
