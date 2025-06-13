export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-200 to-primary-100 text-transparent bg-clip-text">
                            Privacy Policy
                        </h1>
                        <p className="text-white/70 text-lg">
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert max-w-none space-y-8">
                        {/* Introduction */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">1. Introduction</h2>
                            <p className="text-white/80 leading-relaxed">
                                Welcome to VettAI ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered mock interview platform. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">2. Information We Collect</h2>
                            
                            <div className="space-y-4">
                                <h3 className="text-xl font-medium text-white">Personal Information</h3>
                                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                                    <li>Name and email address when you create an account</li>
                                    <li>Profile information you choose to provide</li>
                                    <li>Interview responses and voice recordings during practice sessions</li>
                                    <li>Performance data and feedback scores</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white">Technical Information</h3>
                                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                                    <li>Device information (browser type, operating system)</li>
                                    <li>IP address and location data</li>
                                    <li>Usage patterns and interaction data</li>
                                    <li>Cookies and similar tracking technologies</li>
                                </ul>
                            </div>
                        </section>

                        {/* How We Use Information */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">3. How We Use Your Information</h2>
                            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                                <li>Provide and maintain our interview practice service</li>
                                <li>Generate AI-powered feedback and recommendations</li>
                                <li>Improve our algorithms and service quality</li>
                                <li>Send you updates, notifications, and support messages</li>
                                <li>Analyze usage patterns to enhance user experience</li>
                                <li>Comply with legal obligations and protect our rights</li>
                            </ul>
                        </section>

                        {/* Information Sharing */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">4. Information Sharing and Disclosure</h2>
                            <p className="text-white/80 leading-relaxed">
                                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                                <li><strong>Service Providers:</strong> We may share information with trusted third-party services (Google AI, Vapi AI, Firebase) that help us operate our platform</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                                <li><strong>Consent:</strong> When you explicitly consent to sharing</li>
                            </ul>
                        </section>

                        {/* Data Security */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">5. Data Security</h2>
                            <p className="text-white/80 leading-relaxed">
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                                <li>Encryption of data in transit and at rest</li>
                                <li>Regular security assessments and updates</li>
                                <li>Access controls and authentication measures</li>
                                <li>Secure cloud infrastructure (Firebase, Vercel)</li>
                            </ul>
                        </section>

                        {/* Data Retention */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">6. Data Retention</h2>
                            <p className="text-white/80 leading-relaxed">
                                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Interview recordings and feedback data are typically retained for up to 2 years to help track your progress, unless you request earlier deletion.
                            </p>
                        </section>

                        {/* Your Rights */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">7. Your Rights</h2>
                            <p className="text-white/80 leading-relaxed">
                                Depending on your location, you may have the following rights regarding your personal information:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                                <li>Access and review your personal data</li>
                                <li>Correct inaccurate or incomplete information</li>
                                <li>Delete your account and associated data</li>
                                <li>Export your data in a portable format</li>
                                <li>Opt-out of certain data processing activities</li>
                                <li>Withdraw consent where processing is based on consent</li>
                            </ul>
                        </section>

                        {/* Cookies */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">8. Cookies and Tracking</h2>
                            <p className="text-white/80 leading-relaxed">
                                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie preferences through your browser settings, though some features may not function properly if cookies are disabled.
                            </p>
                        </section>

                        {/* Children's Privacy */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">9. Children's Privacy</h2>
                            <p className="text-white/80 leading-relaxed">
                                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.
                            </p>
                        </section>

                        {/* Changes to Policy */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">10. Changes to This Privacy Policy</h2>
                            <p className="text-white/80 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary-200">11. Contact Us</h2>
                            <p className="text-white/80 leading-relaxed">
                                If you have any questions about this Privacy Policy or our data practices, please contact us at:
                            </p>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
                                <p className="text-white/80">Email: supportvettai@gmail.com</p>

                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
} 