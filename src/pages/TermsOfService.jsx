import { motion } from 'framer-motion';
import Footer from '../components/landing/Footer';

export default function TermsOfService() {
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
              Terms of Service
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
              These terms govern your use of Integris Creative’s website and digital services. Our goal is to
              provide premium creative, branding, and website services while maintaining clear expectations and
              a trusted relationship with our clients.
            </p>
          </div>

          <div className="grid gap-8">
            <section className="rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-foreground">Acceptance of Terms</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                By accessing or using the Integris Creative website, you agree to these Terms of Service.
                If you do not agree, please do not use this site or request our services.
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-foreground">Services Provided</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Integris Creative delivers web design, branding, digital strategy, and related creative services.
                Specific deliverables, timelines, and project details are defined in separate client agreements.
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-foreground">Payments & Billing</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Fees for services are established in written proposals or agreements. Payment terms are invoiced
                as agreed, and late payments may incur additional fees. All invoices should be paid according to
                the schedule outlined in your project agreement.
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-foreground">Intellectual Property</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Integris Creative retains ownership of creative work until payment terms are met. Upon full
                payment, ownership and usage rights transfer as defined in the client agreement. Third-party
                materials and licensed assets remain subject to their original licensing terms.
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-foreground">User Responsibilities</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Users agree to provide accurate information and cooperate with project requirements.
                Unauthorized use of the website, attempts to access restricted areas, or misuse of our
                services is prohibited.
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-foreground">Limitation of Liability</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Integris Creative’s liability is limited to the amount paid for the specific services in
                question. We are not responsible for indirect, incidental, or consequential damages arising
                from use of the site or delivered services.
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-foreground">Termination</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                We may suspend or terminate access for any user who violates these terms or engages in activity
                that harms our systems or reputation. Termination does not affect any rights or remedies available
                to Integris Creative under applicable law.
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-foreground">Governing Law</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                These terms are governed by the laws of the State of Texas, with venue in Houston. Any disputes
                arising from these terms or your use of the site will be resolved in accordance with applicable
                Texas law.
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-foreground">Contact Information</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                If you have questions about these terms or need assistance, please contact us at{' '}
                <a href="mailto:contact@integriscentral.com" className="text-primary hover:text-primary/80">contact@integriscentral.com</a>{' '}
                or call <span className="font-medium text-foreground">979 291 5166</span>.
              </p>
            </section>
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
}
