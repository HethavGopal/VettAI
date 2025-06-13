export default function TermsPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-200 to-primary-100 text-transparent bg-clip-text">
                            Terms of Service
                        </h1>
                        <p className="text-white/70 text-lg">
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert max-w-none space-y-8">
                        {/* Agreement */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">1. Agreement to Terms</h2>
                            <p className="text-white/80 leading-relaxed">
                                By accessing and using VettAI ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </section>

                        {/* Description of Service */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">2. Description of Service</h2>
                            <p className="text-white/80 leading-relaxed">
                                VettAI is an AI-powered mock interview platform that provides:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                                <li>Interactive voice-based interview simulations</li>
                                <li>AI-generated interview questions tailored to specific roles</li>
                                <li>Real-time feedback and performance analysis</li>
                                <li>Progress tracking and improvement recommendations</li>
                                <li>Interview preparation resources and tools</li>
                            </ul>
                        </section>

                        {/* User Accounts */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">3. User Accounts</h2>
                            <div className="space-y-4">
                                <h3 className="text-xl font-medium text-white">Account Creation</h3>
                                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                                    <li>You must provide accurate and complete information when creating an account</li>
                                    <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                                    <li>You must be at least 13 years old to create an account</li>
                                    <li>One person may not maintain more than one account</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white">Account Responsibilities</h3>
                                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                                    <li>You are responsible for all activities that occur under your account</li>
                                    <li>Notify us immediately of any unauthorized use of your account</li>
                                    <li>Keep your contact information up to date</li>
                                </ul>
                            </div>
                        </section>

                        {/* Acceptable Use */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">4. Acceptable Use Policy</h2>
                            <p className="text-white/80 leading-relaxed">
                                You agree not to use the Service to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                                <li>Violate any applicable laws or regulations</li>
                                <li>Infringe on intellectual property rights</li>
                                <li>Upload malicious code or attempt to hack the system</li>
                                <li>Harass, abuse, or harm other users</li>
                                <li>Share inappropriate, offensive, or illegal content</li>
                                <li>Use the service for commercial purposes without authorization</li>
                                <li>Attempt to reverse engineer or copy our AI models</li>
                                <li>Create fake accounts or impersonate others</li>
                            </ul>
                        </section>

                        {/* Intellectual Property */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">5. Intellectual Property Rights</h2>
                            <div className="space-y-4">
                                <h3 className="text-xl font-medium text-white">Our Content</h3>
                                <p className="text-white/80 leading-relaxed">
                                    The Service and its original content, features, and functionality are and will remain the exclusive property of VettAI and its licensors. The service is protected by copyright, trademark, and other laws.
                                </p>

                                <h3 className="text-xl font-medium text-white">Your Content</h3>
                                <p className="text-white/80 leading-relaxed">
                                    You retain ownership of content you submit to the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and analyze your content for the purpose of providing and improving our services.
                                </p>
                            </div>
                        </section>

                        {/* Privacy and Data */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">6. Privacy and Data Use</h2>
                            <p className="text-white/80 leading-relaxed">
                                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices regarding the collection and use of your information.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                                <li>Interview recordings are used solely for providing feedback and improving our AI</li>
                                <li>We do not share your personal interview data with third parties</li>
                                <li>You can request deletion of your data at any time</li>
                                <li>We use industry-standard security measures to protect your information</li>
                            </ul>
                        </section>

                        {/* Service Availability */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">7. Service Availability</h2>
                            <p className="text-white/80 leading-relaxed">
                                We strive to provide reliable service, but we cannot guarantee:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                                <li>Uninterrupted or error-free operation</li>
                                <li>That the service will meet your specific requirements</li>
                                <li>That all bugs or issues will be corrected immediately</li>
                                <li>Availability during maintenance periods or technical difficulties</li>
                            </ul>
                        </section>

                        {/* Limitation of Liability */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">8. Limitation of Liability</h2>
                            <p className="text-white/80 leading-relaxed">
                                To the maximum extent permitted by law, VettAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                            </p>
                        </section>

                        {/* Disclaimers */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">9. Disclaimers</h2>
                            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                                <li>The Service is provided "as is" and "as available" without warranties of any kind</li>
                                <li>We do not guarantee that our AI feedback will result in interview success</li>
                                <li>The Service is for practice purposes and does not replace professional career counseling</li>
                                <li>We are not responsible for decisions made by employers based on your interview performance</li>
                            </ul>
                        </section>

                        {/* Termination */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">10. Termination</h2>
                            <div className="space-y-4">
                                <p className="text-white/80 leading-relaxed">
                                    We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                                    <li>Violation of these Terms of Service</li>
                                    <li>Fraudulent or illegal activity</li>
                                    <li>Extended periods of inactivity</li>
                                    <li>Technical or security reasons</li>
                                </ul>
                                <p className="text-white/80 leading-relaxed">
                                    You may also terminate your account at any time by contacting us or using the account deletion feature in your profile settings.
                                </p>
                            </div>
                        </section>

                        {/* Changes to Terms */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">11. Changes to Terms</h2>
                            <p className="text-white/80 leading-relaxed">
                                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                            </p>
                        </section>

                        {/* Contact Information */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">12. Contact Information</h2>
                            <p className="text-white/80 leading-relaxed">
                                If you have any questions about these Terms of Service, please contact us:
                            </p>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
                                <p className="text-white/80">Email: supportvettai@gmail.com</p>

                            </div>
                        </section>

                        {/* Acknowledgment */}
                        <section className="space-y-4 border-t border-white/10 pt-8">
                            <h2 className="text-2xl font-semibold text-primary-200">Acknowledgment</h2>
                            <p className="text-white/80 leading-relaxed">
                                By using VettAI, you acknowledge that you have read these Terms of Service and agree to be bound by them. If you do not agree to these terms, please do not use our Service.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
} 