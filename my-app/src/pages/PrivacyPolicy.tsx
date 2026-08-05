import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import './LegalPage.css'

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <Banner />
      <Navbar theme="page" />

      <div className="legal-content">
        <h1>Privacy Policy</h1>
        <p className="legal-meta">
          <strong>Effective date:</strong> To be confirmed upon launch &nbsp;·&nbsp; <strong>Last updated:</strong> August 5, 2026
        </p>

        <div className="legal-notice">
          <strong>Coming Soon —</strong> The EVOARX app and store are not yet available to the public. This Privacy Policy is published in advance so you can review our data practices before launch.
        </div>

        <p>This Privacy Policy explains how EVOARX ("EVOARX," "we," "us," or "our"), a business registered in Ontario, Canada, collects, uses, discloses, and protects information in connection with the EVOARX mobile application, evoarx.app, and our merchandise store (together, the "Services"). By using any of the Services, you agree to the collection and use of information as described in this Policy.</p>

        <hr />

        <h2>1. Who We Are</h2>
        <p>EVOARX is a business registered in the Province of Ontario, Canada. This Policy is intended to comply with Canada's <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA), and, where applicable, the EU/UK GDPR and the California CCPA.</p>
        <p><strong>Contact / Privacy Officer:</strong> evoarx@gmail.com<br />
        <strong>Mailing address:</strong> [INSERT REGISTERED BUSINESS ADDRESS]</p>

        <hr />

        <h2>2. Information We Collect</h2>

        <h3>2.1 App account & profile information</h3>
        <ul>
          <li>Name, username, email address, and profile photo.</li>
          <li>Date of birth, sex, weight, and height (collected during profile setup).</li>
          <li>Authentication data if you sign in with Google.</li>
        </ul>

        <h3>2.2 Health & safety screening data</h3>
        <ul>
          <li>Your answers to a pre-activity readiness questionnaire (PAR-Q).</li>
          <li>Any injuries, physical limitations, or free-text notes you choose to report.</li>
          <li>This data is used only to help avoid recommending unsafe exercises. It is stored in an owner-only record, is never sold, and is never shared with third parties for advertising.</li>
        </ul>

        <h3>2.3 Fitness & activity information</h3>
        <ul>
          <li>Experience level, fitness goals, equipment, and training preferences.</li>
          <li>Workout logs and cardio session history.</li>
          <li>Location data during cardio sessions, if you grant permission.</li>
          <li>Motion/step data, if you grant permission.</li>
        </ul>

        <h3>2.4 Photos & videos</h3>
        <p>Profile pictures and any photos or videos you choose to attach to posts or upload within the App.</p>

        <h3>2.5 App usage & diagnostic data</h3>
        <p>Basic usage analytics and crash/error information, used to keep the App working correctly.</p>

        <h3>2.6 Website browsing data</h3>
        <p>Standard technical data such as IP address, browser type, device type, and pages visited, collected via cookies when you browse evoarx.app. See Section 6 for details.</p>

        <h3>2.7 Merch store & order information</h3>
        <p>When you purchase merchandise, we (and our payment processor, Stripe) collect contact information, shipping and billing address, order history, and limited payment metadata. We do not collect or store your full card number.</p>

        <hr />

        <h2>3. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Create and manage your App account and generate AI-assisted workout programs.</li>
          <li>Avoid recommending exercises that may be unsafe for you.</li>
          <li>Track workout progress and power social features.</li>
          <li>Process, fulfill, ship, and support merchandise orders.</li>
          <li>Send transactional and (with opt-in) marketing communications.</li>
          <li>Maintain, secure, debug, and improve the Services.</li>
          <li>Comply with legal obligations.</li>
        </ul>
        <p>We do not sell your personal information, and we do not use your health or safety-screening data for advertising purposes.</p>

        <hr />

        <h2>4. How We Share Your Information</h2>
        <ul>
          <li><strong>Service providers:</strong> Firebase/Google Cloud, Stripe, and shipping carriers — each restricted to use only for providing services to us.</li>
          <li><strong>Other users (App only):</strong> Your name, username, and profile photo are visible to other EVOARX users. Health data and physical stats are never visible to other users.</li>
          <li><strong>Legal & safety:</strong> If required by law or to protect rights, property, or safety.</li>
          <li><strong>Business transfers:</strong> If EVOARX is involved in a merger or acquisition, subject to this Policy.</li>
        </ul>
        <p>We do not sell personal information to third parties.</p>

        <hr />

        <h2>5. International Data Transfers</h2>
        <p>Our service providers may store or process data in the United States or other countries outside Canada. By using the Services, you acknowledge that your information may be transferred to and processed in jurisdictions with different data protection laws.</p>

        <hr />

        <h2>6. Cookies & Tracking</h2>
        <p>evoarx.app may use cookies to keep the Store's cart and checkout functioning and to understand aggregate site traffic. You can control cookies through your browser settings. Disabling cookies may affect Store functionality.</p>

        <hr />

        <h2>7. Data Storage & Security</h2>
        <p>App data is stored using Firebase (Google Cloud) with strict access controls. Health data is kept in a separate owner-only record. Payment data is handled entirely by Stripe under PCI-DSS-compliant infrastructure. We use industry-standard safeguards, though no method of storage is 100% secure.</p>

        <hr />

        <h2>8. Data Retention</h2>
        <p>We retain App account and health data for as long as your account is active. We retain Store order records as required for accounting, tax, and consumer protection purposes. Deleting your App account removes your profile, health data, workout history, and posts, except information we are legally required to retain.</p>

        <hr />

        <h2>9. Your Rights</h2>
        <p>Depending on your location, you may have the right to access, correct, export, or request deletion of your personal information; withdraw consent; object to or restrict certain processing; or request data portability.</p>
        <p><strong>In the App:</strong> manage your data at any time from Settings → Data and Privacy.</p>
        <p><strong>For Store or general requests:</strong> contact evoarx@gmail.com. We will respond within the time required by applicable law.</p>

        <hr />

        <h2>10. Children's Privacy</h2>
        <p>EVOARX is not intended for anyone under 13. We do not knowingly collect information from children under 13, and App account creation is blocked for users who report a date of birth under 13.</p>

        <hr />

        <h2>11. Health Data & Medical Disclaimer</h2>
        <p>EVOARX is not a medical device or service, and workout programs are not medical advice. If you have a health condition, are pregnant, or are unsure whether an exercise program is safe for you, consult a qualified healthcare professional before using the App.</p>

        <hr />

        <h2>12. Changes to This Policy</h2>
        <p>We may update this Policy from time to time. Material changes will be reflected by a new "Last updated" date above, and App users will be presented with a new policy version for re-consent. Continuing to use the Services after a change means you accept the updated Policy.</p>

        <hr />

        <h2>13. Contact Us</h2>
        <p>
          <strong>Email:</strong> evoarx@gmail.com<br />
          <strong>Mail:</strong> [INSERT REGISTERED BUSINESS ADDRESS]
        </p>
        <p>If you are not satisfied with our response, Canadian residents may contact the Office of the Privacy Commissioner of Canada (priv.gc.ca).</p>
      </div>
      <Footer />
    </div>
  )
}
