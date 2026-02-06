import PageLayout from "@/components/page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for J. Worra's official website. Read our terms and conditions for using this website.",
  openGraph: {
    title: "Terms of Service | J. Worra",
    description: "Terms of service for J. Worra's official website.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <PageLayout
      title="Terms of Service"
      subtitle="Terms and conditions for using our website"
    >
      {/* Elegant Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(135deg, rgba(128, 0, 32, 0.02) 0%, transparent 50%),
              linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
              repeating-linear-gradient(90deg, transparent, transparent 200px, rgba(128, 0, 32, 0.01) 200px, rgba(128, 0, 32, 0.01) 400px),
              repeating-linear-gradient(0deg, transparent, transparent 200px, rgba(128, 0, 32, 0.01) 200px, rgba(128, 0, 32, 0.01) 400px)
            `
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="space-y-8 text-white/80 leading-relaxed">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Terms of Service</h2>
            <p className="mb-4">
              Welcome to J. Worra's official website. These Terms of Service ("Terms") govern your use of our website and services operated by J. Worra ("we," "us," or "our").
            </p>
            <p>
              By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the website.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials on J. Worra's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-white/70">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by J. Worra at any time.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Content</h2>
            <p className="mb-4">
              The materials on J. Worra's website are provided on an 'as is' basis. J. Worra makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="mb-4">
              Further, J. Worra does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Intellectual Property</h2>
            <p className="mb-4">
              All content, trademarks, service marks, logos, trade names, and any other proprietary materials displayed on the website are the exclusive property of J. Worra and are protected by applicable intellectual property laws.
            </p>
            <p className="mb-4">
              Unauthorized use of any materials, content, or trademarks displayed on the website is strictly prohibited. You may not use, copy, reproduce, distribute, or create derivative works from any content without prior written consent from J. Worra.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">User Conduct</h2>
            <p className="mb-6">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-white/70">
              <li>Use the website for any illegal or unauthorized purpose</li>
              <li>Violate any international, federal, provincial, or state regulations</li>
              <li>Infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>Harass, abuse, insult, harm, defame, or discriminate against others</li>
              <li>Upload viruses or other malicious code</li>
              <li>Spam, phish, pharm, pretext, spider, crawl, or scrape</li>
              <li>Interfere with or circumvent the security features of the website</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall J. Worra, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the website.
            </p>
            <p>
              The total liability of J. Worra shall not exceed the amount paid by you, if any, for accessing or using the website during the twelve (12) months preceding the claim.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Indemnification</h2>
            <p>
              You agree to indemnify and hold J. Worra and our parents, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns, and employees, harmless from any claim or demand, including reasonable attorneys' fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p>
              Upon termination, your right to use the website will cease immediately.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
            </p>
            <p>
              What constitutes a material change will be determined at our sole discretion. By continuing to access or use our website after any revisions become effective, you agree to be bound by the revised terms.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Governing Law</h2>
            <p className="mb-4">
              These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Contact Information</h2>
            <p className="mb-4">
              Questions about the Terms of Service should be sent to us at:
            </p>
            <p className="text-white/60">
              By email: jworramgmt@milkhoneyla.com
            </p>
          </div>

          <div className="text-center text-white/40 text-sm pt-8">
            <p>Last updated: January 11, 2026</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}