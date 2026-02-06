import PageLayout from "@/components/page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for J. Worra's official website. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | J. Worra",
    description: "Privacy policy for J. Worra's official website.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="Your privacy is important to us"
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
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Introduction</h2>
            <p className="mb-4">
              This Privacy Policy describes how J. Worra ("we," "us," or "our") collects, uses, and shares your personal information when you visit our website jworra.com and use our services.
            </p>
            <p>
              By using our website, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Information We Collect</h2>
            
            <h3 className="font-semibold text-white mb-3">Personal Data</h3>
            <p className="mb-6">
              While using our website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-white/70">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Cookies and Usage Data</li>
            </ul>

            <h3 className="font-semibold text-white mb-3">Usage Data</h3>
            <p className="mb-4">
              We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol (IP) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">How We Use Your Information</h2>
            <p className="mb-6">
              J. Worra uses the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer care and support</li>
              <li>To provide analysis or valuable information so that we can improve the Service</li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Cookies and Tracking</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
            </p>
            <p className="mb-4">
              Cookies are files with small amount of data which may include an anonymous unique identifier. They are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Third-Party Services</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites or services that are not owned or controlled by J. Worra.
            </p>
            <p className="mb-4">
              We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services. Please review the privacy policies of these third-party sites before providing any personal information.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us:
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