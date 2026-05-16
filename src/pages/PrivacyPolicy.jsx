import { motion } from 'framer-motion';
import Footer from '../components/landing/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-foreground">
      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-2xl shadow-black/25">
            <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-4">
              Privacy Policy
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
              Integris Creative is committed to protecting your privacy while delivering modern web design,
              branding, and digital services from our Houston, Texas headquarters. This policy explains how we
              collect, use, and safeguard personal information on our website.
            </p>
          </div>

          <div className="grid gap-8">
            <section className="rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                We collect information you provide directly when you contact us, request a consultation,
                or sign up for updates. This may include your name, email address, phone number, company
                details, project scope, and any additional materials you submit through our forms.
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-foreground">How We Use Information</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                We use collected information to respond to inquiries, deliver proposals, manage client
                relationships, and improve our services. Data may also be used for internal analytics,
                security, and to communicate updates about projects and service offerings.
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-foreground">Cookies & Analytics</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Our site uses cookies and analytics tools to understand traffic patterns, optimize
                performance, and refine the user experience. These tools gather anonymous usage data
                such as page views, device type, browser, and referral sources.
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-foreground">Third-Party Services</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                We may share data with trusted third-party service providers that support our website,
                marketing, and analytics. These providers operate under their own privacy policies, and
                we require that they protect your information in accordance with industry standards.
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-foreground">Data Security</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                We implement reasonable technical and administrative safeguards designed to protect
                information from unauthorized access, loss, misuse, or alteration. However, no system
                can guarantee absolute security, and all transmissions are made at your own risk.
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-foreground">Contact Information</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                For questions about this privacy policy, please contact us at{' '}
                <a href="mailto:contact@integriscentral.com" className="text-primary hover:text-primary/80">contact@integriscentral.com</a>{' '}
                or call <span className="font-medium text-foreground">979 291 5166</span>.
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-foreground">User Rights</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                You have the right to review, update, or delete the personal information you share with us.
                You may also request that we stop using your information for marketing purposes. Contact us
                to make any privacy-related requests, and we will respond in a timely manner.
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-foreground">Updates to Policy</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Integris Creative may update this policy periodically to reflect changes in our practices
                or applicable law. We encourage you to review this page regularly for the latest information.
                Continued use of our services constitutes acceptance of the updated policy.
              </p>
            </section>
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
}
