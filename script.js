// Optimus Health Solutions - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
});

function initializeApp() {
    // Initialize navigation
    initializeNavigation();
    
    // Initialize Google Maps
    initializeMap();
    
    // Initialize form functionality
    initializeForm();
    
    // Initialize autocomplete
    initializeAutocomplete();
    
    // Initialize date/time pickers
    initializeDateTimePickers();
    
    // Initialize suggestions
    initializeSuggestions();
    
    // Initialize transfer form
    initializeTransferForm();
    
    // Initialize confirm request button
    initializeConfirmRequest();
    
    // Initialize login form
    initializeLoginForm();
}

// Navigation functionality
function initializeNavigation() {
    // Add click handlers for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const signupBtn = document.querySelector('.signup-btn');
    const languageToggle = document.querySelector('.language-toggle');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent.trim();
            handleNavigationClick(linkText);
        });
    });
    
    // Handle dropdown links
    const dropdownLinks = document.querySelectorAll('.dropdown-link');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent.trim();
            handleNavigationClick(linkText);
        });
    });
    
    // Sign up button
    if (signupBtn) {
        signupBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleSignUp();
        });
    }
    
    // Language toggle
    if (languageToggle) {
        languageToggle.addEventListener('click', function(e) {
            e.preventDefault();
            handleLanguageToggle();
        });
    }
}

// Handle navigation clicks
function handleNavigationClick(linkText) {
    const content = getNavigationContent(linkText);
    showModal(linkText, content.message, content.learnMoreAction);
}

// Get detailed content for each navigation section
function getNavigationContent(linkText) {
    const content = {
        'Home': {
            message: 'Explore Optimus Health — our vision, mission, story, and the impact we drive.',
            learnMoreAction: () => showHomePage()
        },
        'How it works': {
            message: 'Learn how Optimus Health Solutions works to deliver your prescriptions safely and efficiently.',
            learnMoreAction: () => showHowItWorksDetails()
        },
        'About Us': {
            message: 'Optimus Health Solutions is dedicated to making prescription delivery accessible and reliable for everyone.',
            learnMoreAction: () => showAboutUsDetails()
        },
        'For Independent Pharmacies': {
            message: 'Partner with us to expand your pharmacy\'s reach and serve more patients in your community.',
            learnMoreAction: () => showIndependentPharmaciesPage()
        },
        'Earn as a Driver': {
            message: 'Join our team of delivery drivers and earn money while helping people get their medications.',
            learnMoreAction: () => showDriverPage()
        },
        'Investors': {
            message: 'Learn about investment opportunities with Optimus Health Solutions and our growth potential.',
            learnMoreAction: () => showInvestorsPage()
        },
        'Other Businesses': {
            message: 'Partner with us to meet delivery needs for your members and patients across ACOs, MCOs, employers, and provider groups.',
            learnMoreAction: () => showOtherBusinessesPage()
        },
        'Blog': {
            message: 'Insights on policy, market trends, and how they impact independent pharmacies.',
            learnMoreAction: () => showBlogPage()
        },
        'Need Help?': {
            message: 'Our support team is here to help you with any questions or issues you may have.',
            learnMoreAction: () => showHelpDetails()
        }
    };
    
    return content[linkText] || {
        message: `You clicked on: ${linkText}`,
        learnMoreAction: () => console.log('Learn more clicked for:', linkText)
    };
}

// Handle sign up
function handleSignUp() {
    showModal('Sign Up', 'Welcome to Optimus Health Solutions! Sign up to start requesting prescription deliveries.');
}

// Detailed content functions for Learn More actions
function showHowItWorksDetails() {
    const detailedContent = `
        <div class="detailed-content">
            <h3>How Optimus Health Solutions Works</h3>
            <div class="steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h4>Request Your Prescription</h4>
                        <p>Enter your pharmacy location and delivery address using our simple form.</p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h4>Schedule Delivery</h4>
                        <p>Choose your preferred delivery date and time from available slots.</p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h4>Safe & Secure Delivery</h4>
                        <p>Our certified drivers pick up and deliver your prescriptions with care.</p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">4</div>
                    <div class="step-content">
                        <h4>Real-time Tracking</h4>
                        <p>Track your delivery in real-time and receive notifications.</p>
                    </div>
                </div>
            </div>
            <div class="benefits">
                <h4>Benefits:</h4>
                <ul>
                    <li>✓ Convenient home delivery</li>
                    <li>✓ Secure prescription handling</li>
                    <li>✓ Real-time tracking</li>
                    <li>✓ Flexible scheduling</li>
                    <li>✓ Insurance accepted</li>
                </ul>
            </div>
        </div>
    `;
    showDetailedModal('How It Works', detailedContent);
}

function showAboutUsDetails() {
    const detailedContent = `
        <div class="detailed-content">
            <h3>About Optimus Health Solutions</h3>
            <div class="about-section">
                <h4>Our Mission</h4>
                <p>We are dedicated to making prescription delivery accessible, reliable, and convenient for everyone. Our mission is to bridge the gap between healthcare and accessibility.</p>
            </div>
            <div class="about-section">
                <h4>Our Values</h4>
                <ul>
                    <li><strong>Safety First:</strong> All prescriptions are handled with the utmost care and security</li>
                    <li><strong>Reliability:</strong> On-time delivery guaranteed with real-time tracking</li>
                    <li><strong>Accessibility:</strong> Serving all communities with flexible scheduling</li>
                    <li><strong>Innovation:</strong> Using technology to improve healthcare delivery</li>
                </ul>
            </div>
            <div class="about-section">
                <h4>Why Choose Us?</h4>
                <div class="features">
                    <div class="feature">
                        <i class="fas fa-shield-alt"></i>
                        <span>HIPAA Compliant</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-clock"></i>
                        <span>24/7 Support</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Wide Coverage</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-mobile-alt"></i>
                        <span>Easy to Use</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    showDetailedModal('About Us', detailedContent);
}

function showPharmacyPartnershipDetails() {
    const detailedContent = `
        <div class="detailed-content">
            <h3>Partner with Optimus Health Solutions</h3>
            <div class="partnership-section">
                <h4>Expand Your Reach</h4>
                <p>Join our network of partner pharmacies and serve more patients in your community with convenient prescription delivery.</p>
            </div>
            <div class="partnership-section">
                <h4>Partnership Benefits</h4>
                <ul>
                    <li>✓ Increased patient satisfaction</li>
                    <li>✓ Expanded service area</li>
                    <li>✓ Additional revenue stream</li>
                    <li>✓ Competitive advantage</li>
                    <li>✓ Marketing support</li>
                </ul>
            </div>
            <div class="partnership-section">
                <h4>How to Partner</h4>
                <div class="steps">
                    <div class="step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>Apply Online</h4>
                            <p>Complete our simple partnership application form.</p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>Verification</h4>
                            <p>We verify your pharmacy license and credentials.</p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h4>Integration</h4>
                            <p>Set up our system integration and start delivering.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cta-section">
                <button class="cta-button" onclick="contactPartnership()">Contact Partnership Team</button>
            </div>
        </div>
    `;
    showDetailedModal('Pharmacy Partnership', detailedContent);
}

function showDriverOpportunitiesDetails() {
    const detailedContent = `
        <div class="detailed-content">
            <h3>Earn as a Driver with Optimus Health</h3>
            <div class="driver-section">
                <h4>Flexible Schedule, Great Pay</h4>
                <p>Join our team of certified drivers and earn money while helping people get their essential medications.</p>
            </div>
            <div class="driver-section">
                <h4>Driver Benefits</h4>
                <ul>
                    <li>✓ Flexible scheduling - work when you want</li>
                    <li>✓ Competitive pay rates</li>
                    <li>✓ Mileage reimbursement</li>
                    <li>✓ Weekly payments</li>
                    <li>✓ Support team available</li>
                </ul>
            </div>
            <div class="driver-section">
                <h4>Requirements</h4>
                <ul>
                    <li>Valid driver's license</li>
                    <li>Clean driving record</li>
                    <li>Reliable vehicle</li>
                    <li>Smartphone with GPS</li>
                    <li>Background check required</li>
                </ul>
            </div>
            <div class="driver-section">
                <h4>Application Process</h4>
                <div class="steps">
                    <div class="step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>Apply Online</h4>
                            <p>Complete our driver application form.</p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>Background Check</h4>
                            <p>We conduct a thorough background and driving record check.</p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h4>Training & Start</h4>
                            <p>Complete our training program and start earning.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cta-section">
                <button class="cta-button" onclick="applyAsDriver()">Apply Now</button>
            </div>
        </div>
    `;
    showDetailedModal('Driver Opportunities', detailedContent);
}

// Business Page Functions
function showIndependentPharmaciesPage() {
    const pageContent = `
        <div class="business-page">
            <div class="business-hero">
                <h1>Partner with Optimus Health Solutions</h1>
                <p class="hero-subtitle">Expand your pharmacy's reach and serve more patients in your community with our comprehensive delivery platform.</p>
            </div>
            
            <div class="business-content">
                <div class="benefits-section">
                    <h2>Why Partner with Us?</h2>
                    <div class="benefits-grid">
                        <div class="benefit-card">
                            <i class="fas fa-chart-line"></i>
                            <h3>Increase Revenue</h3>
                            <p>Access new customers and expand your service area without additional overhead costs.</p>
                        </div>
                        <div class="benefit-card">
                            <i class="fas fa-users"></i>
                            <h3>Better Patient Care</h3>
                            <p>Provide convenient delivery options that improve patient adherence and satisfaction.</p>
                        </div>
                        <div class="benefit-card">
                            <i class="fas fa-cogs"></i>
                            <h3>Easy Integration</h3>
                            <p>Seamlessly integrate with your existing pharmacy management system.</p>
                        </div>
                        <div class="benefit-card">
                            <i class="fas fa-shield-alt"></i>
                            <h3>HIPAA Compliant</h3>
                            <p>Full compliance with healthcare regulations and data security standards.</p>
                        </div>
                    </div>
                </div>
                
                <div class="partnership-form-section">
                    <h2>Get Started Today</h2>
                    <form id="pharmacyPartnershipForm" class="business-form">
                        <div class="form-section">
                            <h3>Pharmacy Information</h3>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="pharmacyName">Pharmacy Name *</label>
                                    <input type="text" id="pharmacyName" name="pharmacyName" required>
                                </div>
                                <div class="form-group">
                                    <label for="pharmacyType">Pharmacy Type *</label>
                                    <select id="pharmacyType" name="pharmacyType" required>
                                        <option value="">Select Type</option>
                                        <option value="independent">Independent Pharmacy</option>
                                        <option value="chain">Chain Pharmacy</option>
                                        <option value="hospital">Hospital Pharmacy</option>
                                        <option value="clinic">Clinic Pharmacy</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="pharmacyAddress">Pharmacy Address *</label>
                                    <input type="text" id="pharmacyAddress" name="pharmacyAddress" required>
                                </div>
                                <div class="form-group">
                                    <label for="pharmacyPhone">Phone Number *</label>
                                    <input type="tel" id="pharmacyPhone" name="pharmacyPhone" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="pharmacyEmail">Email Address *</label>
                                    <input type="email" id="pharmacyEmail" name="pharmacyEmail" required>
                                </div>
                                <div class="form-group">
                                    <label for="pharmacyLicense">Pharmacy License Number *</label>
                                    <input type="text" id="pharmacyLicense" name="pharmacyLicense" required>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-section">
                            <h3>Contact Person</h3>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="contactName">Contact Name *</label>
                                    <input type="text" id="contactName" name="contactName" required>
                                </div>
                                <div class="form-group">
                                    <label for="contactTitle">Title *</label>
                                    <input type="text" id="contactTitle" name="contactTitle" required>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-section">
                            <h3>Business Details</h3>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="yearsInBusiness">Years in Business</label>
                                    <select id="yearsInBusiness" name="yearsInBusiness">
                                        <option value="">Select Range</option>
                                        <option value="1-5">1-5 years</option>
                                        <option value="6-10">6-10 years</option>
                                        <option value="11-20">11-20 years</option>
                                        <option value="20+">20+ years</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="dailyPrescriptions">Daily Prescription Volume</label>
                                    <select id="dailyPrescriptions" name="dailyPrescriptions">
                                        <option value="">Select Range</option>
                                        <option value="1-50">1-50 prescriptions</option>
                                        <option value="51-100">51-100 prescriptions</option>
                                        <option value="101-200">101-200 prescriptions</option>
                                        <option value="200+">200+ prescriptions</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="currentPMS">Current Pharmacy Management System</label>
                                <input type="text" id="currentPMS" name="currentPMS" placeholder="e.g., Epic, Cerner, etc.">
                            </div>
                        </div>
                        
                        <div class="form-section">
                            <h3>Additional Information</h3>
                            <div class="form-group">
                                <label for="partnershipGoals">What are your main goals for this partnership?</label>
                                <textarea id="partnershipGoals" name="partnershipGoals" rows="4"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="additionalInfo">Any additional information you'd like to share?</label>
                                <textarea id="additionalInfo" name="additionalInfo" rows="3"></textarea>
                            </div>
                        </div>
                        
                        <button type="submit" class="submit-btn">Submit Partnership Application</button>
                    </form>
                </div>
            </div>
        </div>
    `;
    showBusinessModal('Independent Pharmacies Partnership', pageContent);
}

function showDriverPage() {
    const pageContent = `
        <div class="business-page">
            <div class="business-hero">
                <h1>Earn as a Driver with Optimus Health</h1>
                <p class="hero-subtitle">Join our team of certified drivers and earn money while helping people get their essential medications.</p>
            </div>
            
            <div class="business-content">
                <div class="benefits-section">
                    <h2>Why Drive with Us?</h2>
                    <div class="benefits-grid">
                        <div class="benefit-card">
                            <i class="fas fa-clock"></i>
                            <h3>Flexible Schedule</h3>
                            <p>Work when you want with flexible scheduling that fits your lifestyle.</p>
                        </div>
                        <div class="benefit-card">
                            <i class="fas fa-dollar-sign"></i>
                            <h3>Competitive Pay</h3>
                            <p>Earn $15-25 per hour plus tips and mileage reimbursement.</p>
                        </div>
                        <div class="benefit-card">
                            <i class="fas fa-heart"></i>
                            <h3>Make a Difference</h3>
                            <p>Help people access essential medications and improve their health.</p>
                        </div>
                        <div class="benefit-card">
                            <i class="fas fa-mobile-alt"></i>
                            <h3>Easy App</h3>
                            <p>Simple mobile app to manage deliveries and track earnings.</p>
                        </div>
                    </div>
                </div>
                
                <div class="requirements-section">
                    <h2>Requirements</h2>
                    <ul class="requirements-list">
                        <li>✓ Valid driver's license (at least 2 years)</li>
                        <li>✓ Clean driving record (no major violations)</li>
                        <li>✓ Reliable vehicle (2005 or newer)</li>
                        <li>✓ Smartphone with GPS capability</li>
                        <li>✓ Background check required</li>
                        <li>✓ Must be 21 years or older</li>
                    </ul>
                </div>
                
                <div class="driver-form-section">
                    <h2>Apply to Drive</h2>
                    <form id="driverApplicationForm" class="business-form">
                        <div class="form-section">
                            <h3>Personal Information</h3>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="driverFirstName">First Name *</label>
                                    <input type="text" id="driverFirstName" name="driverFirstName" required>
                                </div>
                                <div class="form-group">
                                    <label for="driverLastName">Last Name *</label>
                                    <input type="text" id="driverLastName" name="driverLastName" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="driverEmail">Email Address *</label>
                                    <input type="email" id="driverEmail" name="driverEmail" required>
                                </div>
                                <div class="form-group">
                                    <label for="driverPhone">Phone Number *</label>
                                    <input type="tel" id="driverPhone" name="driverPhone" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="driverDOB">Date of Birth *</label>
                                    <input type="date" id="driverDOB" name="driverDOB" required>
                                </div>
                                <div class="form-group">
                                    <label for="driverSSN">Last 4 digits of SSN *</label>
                                    <input type="text" id="driverSSN" name="driverSSN" maxlength="4" required>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-section">
                            <h3>Address Information</h3>
                            <div class="form-group">
                                <label for="driverAddress">Home Address *</label>
                                <input type="text" id="driverAddress" name="driverAddress" required>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="driverCity">City *</label>
                                    <input type="text" id="driverCity" name="driverCity" required>
                                </div>
                                <div class="form-group">
                                    <label for="driverState">State *</label>
                                    <select id="driverState" name="driverState" required>
                                        <option value="">Select State</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NY">New York</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="driverZip">ZIP Code *</label>
                                    <input type="text" id="driverZip" name="driverZip" required>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-section">
                            <h3>Vehicle Information</h3>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="vehicleYear">Vehicle Year *</label>
                                    <input type="number" id="vehicleYear" name="vehicleYear" min="2005" max="2024" required>
                                </div>
                                <div class="form-group">
                                    <label for="vehicleMake">Make *</label>
                                    <input type="text" id="vehicleMake" name="vehicleMake" required>
                                </div>
                                <div class="form-group">
                                    <label for="vehicleModel">Model *</label>
                                    <input type="text" id="vehicleModel" name="vehicleModel" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="vehicleColor">Color *</label>
                                    <input type="text" id="vehicleColor" name="vehicleColor" required>
                                </div>
                                <div class="form-group">
                                    <label for="vehiclePlate">License Plate *</label>
                                    <input type="text" id="vehiclePlate" name="vehiclePlate" required>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-section">
                            <h3>Driving Experience</h3>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="licenseYears">Years with driver's license *</label>
                                    <select id="licenseYears" name="licenseYears" required>
                                        <option value="">Select Years</option>
                                        <option value="2-5">2-5 years</option>
                                        <option value="6-10">6-10 years</option>
                                        <option value="11-20">11-20 years</option>
                                        <option value="20+">20+ years</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="drivingExperience">Previous delivery experience</label>
                                    <select id="drivingExperience" name="drivingExperience">
                                        <option value="">Select Experience</option>
                                        <option value="none">No delivery experience</option>
                                        <option value="food">Food delivery (Uber Eats, DoorDash, etc.)</option>
                                        <option value="package">Package delivery (Amazon, UPS, etc.)</option>
                                        <option value="medical">Medical delivery</option>
                                        <option value="other">Other delivery experience</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-section">
                            <h3>Availability</h3>
                            <div class="form-group">
                                <label>When are you available to drive? (Check all that apply)</label>
                                <div class="checkbox-group">
                                    <label class="checkbox-label">
                                        <input type="checkbox" name="availability" value="weekday-morning">
                                        Weekday Mornings (6 AM - 12 PM)
                                    </label>
                                    <label class="checkbox-label">
                                        <input type="checkbox" name="availability" value="weekday-afternoon">
                                        Weekday Afternoons (12 PM - 6 PM)
                                    </label>
                                    <label class="checkbox-label">
                                        <input type="checkbox" name="availability" value="weekday-evening">
                                        Weekday Evenings (6 PM - 10 PM)
                                    </label>
                                    <label class="checkbox-label">
                                        <input type="checkbox" name="availability" value="weekend-morning">
                                        Weekend Mornings (8 AM - 12 PM)
                                    </label>
                                    <label class="checkbox-label">
                                        <input type="checkbox" name="availability" value="weekend-afternoon">
                                        Weekend Afternoons (12 PM - 6 PM)
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <button type="submit" class="submit-btn">Submit Driver Application</button>
                    </form>
                </div>
            </div>
        </div>
    `;
    showBusinessModal('Driver Application', pageContent);
}

function showInvestorsPage() {
    const pageContent = `
        <div class="business-page">
            <div class="business-hero">
                <h1>Investment Opportunities</h1>
                <p class="hero-subtitle">Join us in revolutionizing prescription delivery with a scalable business model in the rapidly growing healthcare delivery market.</p>
            </div>
            
            <div class="business-content">
                <div class="benefits-section">
                    <h2>Why Invest in Optimus Health?</h2>
                    <div class="benefits-grid">
                        <div class="benefit-card">
                            <i class="fas fa-chart-line"></i>
                            <h3>Growing Market</h3>
                            <p>$50B+ prescription delivery market with 25% annual growth rate.</p>
                        </div>
                        <div class="benefit-card">
                            <i class="fas fa-shield-alt"></i>
                            <h3>HIPAA Compliant</h3>
                            <p>Full regulatory compliance and healthcare data security standards.</p>
                        </div>
                        <div class="benefit-card">
                            <i class="fas fa-cogs"></i>
                            <h3>Scalable Platform</h3>
                            <p>Technology infrastructure ready for rapid national expansion.</p>
                        </div>
                        <div class="benefit-card">
                            <i class="fas fa-users"></i>
                            <h3>Experienced Team</h3>
                            <p>Proven track record in healthcare, logistics, and technology.</p>
                        </div>
                    </div>
                </div>
                
                <div class="investment-tiers-section">
                    <h2>Investment Tiers</h2>
                    <div class="investment-tiers">
                        <div class="tier">
                            <h3>Series A</h3>
                            <div class="tier-amount">$2M - $5M</div>
                            <p>Market expansion and technology development</p>
                            <ul>
                                <li>Expand to 5 new markets</li>
                                <li>Enhance mobile platform</li>
                                <li>Build pharmacy partnerships</li>
                            </ul>
                        </div>
                        <div class="tier">
                            <h3>Series B</h3>
                            <div class="tier-amount">$5M - $15M</div>
                            <p>National scaling and strategic partnerships</p>
                            <ul>
                                <li>Scale to 25+ markets</li>
                                <li>Enterprise partnerships</li>
                                <li>Advanced analytics platform</li>
                            </ul>
                        </div>
                        <div class="tier">
                            <h3>Growth Capital</h3>
                            <div class="tier-amount">$15M+</div>
                            <p>Acquisition opportunities and international expansion</p>
                            <ul>
                                <li>Strategic acquisitions</li>
                                <li>International expansion</li>
                                <li>AI-powered optimization</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="investor-form-section">
                    <h2>Express Interest</h2>
                    <form id="investorInterestForm" class="business-form">
                        <div class="form-section">
                            <h3>Contact Information</h3>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="investorName">Full Name *</label>
                                    <input type="text" id="investorName" name="investorName" required>
                                </div>
                                <div class="form-group">
                                    <label for="investorTitle">Title/Position *</label>
                                    <input type="text" id="investorTitle" name="investorTitle" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="investorEmail">Email Address *</label>
                                    <input type="email" id="investorEmail" name="investorEmail" required>
                                </div>
                                <div class="form-group">
                                    <label for="investorPhone">Phone Number *</label>
                                    <input type="tel" id="investorPhone" name="investorPhone" required>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-section">
                            <h3>Organization Information</h3>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="organizationName">Organization Name *</label>
                                    <input type="text" id="organizationName" name="organizationName" required>
                                </div>
                                <div class="form-group">
                                    <label for="organizationType">Organization Type *</label>
                                    <select id="organizationType" name="organizationType" required>
                                        <option value="">Select Type</option>
                                        <option value="vc">Venture Capital</option>
                                        <option value="pe">Private Equity</option>
                                        <option value="angel">Angel Investor</option>
                                        <option value="corporate">Corporate VC</option>
                                        <option value="family">Family Office</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="organizationWebsite">Organization Website</label>
                                <input type="url" id="organizationWebsite" name="organizationWebsite">
                            </div>
                        </div>
                        
                        <div class="form-section">
                            <h3>Investment Interest</h3>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="investmentTier">Investment Tier Interest *</label>
                                    <select id="investmentTier" name="investmentTier" required>
                                        <option value="">Select Tier</option>
                                        <option value="series-a">Series A ($2M - $5M)</option>
                                        <option value="series-b">Series B ($5M - $15M)</option>
                                        <option value="growth-capital">Growth Capital ($15M+)</option>
                                        <option value="all">All Tiers</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="investmentTimeline">Investment Timeline</label>
                                    <select id="investmentTimeline" name="investmentTimeline">
                                        <option value="">Select Timeline</option>
                                        <option value="immediate">Immediate (0-3 months)</option>
                                        <option value="short">Short-term (3-6 months)</option>
                                        <option value="medium">Medium-term (6-12 months)</option>
                                        <option value="long">Long-term (12+ months)</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="investmentExperience">Relevant Investment Experience</label>
                                <textarea id="investmentExperience" name="investmentExperience" rows="3" placeholder="Describe your experience with healthcare, logistics, or technology investments"></textarea>
                            </div>
                        </div>
                        
                        <div class="form-section">
                            <h3>Additional Information</h3>
                            <div class="form-group">
                                <label for="additionalQuestions">Questions or Additional Information</label>
                                <textarea id="additionalQuestions" name="additionalQuestions" rows="4" placeholder="Any specific questions about our business model, financials, or growth plans?"></textarea>
                            </div>
                        </div>
                        
                        <button type="submit" class="submit-btn">Submit Interest</button>
                    </form>
                </div>
            </div>
        </div>
    `;
    showBusinessModal('Investment Opportunities', pageContent);
}

function showOtherBusinessesPage() {
    const pageContent = `
        <div class="business-page">
            <div class="business-hero">
                <h1>Solutions for ACOs, MCOs, Employers, and Providers</h1>
                <p class="hero-subtitle">Partner with Optimus Health to reliably meet the last‑mile delivery needs of your members and patients while improving outcomes and reducing costs.</p>
            </div>
            
            <div class="business-content">
                <div class="benefits-section">
                    <h2>Built for Healthcare at Scale</h2>
                    <div class="benefits-grid">
                        <div class="benefit-card">
                            <i class="fas fa-hands-helping"></i>
                            <h3>Improve Adherence</h3>
                            <p>Timely, verified deliveries that reduce therapy gaps and boost STAR/HEDIS measures.</p>
                        </div>
                        <div class="benefit-card">
                            <i class="fas fa-route"></i>
                            <h3>Operational Visibility</h3>
                            <p>Real‑time tracking, proof of delivery, and exception workflows with audit trails.</p>
                        </div>
                        <div class="benefit-card">
                            <i class="fas fa-user-shield"></i>
                            <h3>Compliance First</h3>
                            <p>HIPAA compliant platform, BAAs available, configurable consent and PHI controls.</p>
                        </div>
                        <div class="benefit-card">
                            <i class="fas fa-plug"></i>
                            <h3>Flexible Integration</h3>
                            <p>API, SFTP, and EHR/PBM friendly feeds; scheduled, on‑demand, and bulk workflows.</p>
                        </div>
                    </div>
                </div>
                
                <div class="partnership-form-section">
                    <h2>Partner With Us</h2>
                    <form id="otherBusinessForm" class="business-form">
                        <div class="form-section">
                            <h3>Organization</h3>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="orgName">Organization Name *</label>
                                    <input type="text" id="orgName" name="orgName" required>
                                </div>
                                <div class="form-group">
                                    <label for="orgType">Organization Type *</label>
                                    <select id="orgType" name="orgType" required>
                                        <option value="">Select Type</option>
                                        <option value="aco">ACO</option>
                                        <option value="mco">MCO/Health Plan</option>
                                        <option value="employer">Employer</option>
                                        <option value="provider">Provider/Health System</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="contactNameOB">Primary Contact *</label>
                                    <input type="text" id="contactNameOB" name="contactNameOB" required>
                                </div>
                                <div class="form-group">
                                    <label for="contactEmailOB">Email *</label>
                                    <input type="email" id="contactEmailOB" name="contactEmailOB" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="contactPhoneOB">Phone *</label>
                                    <input type="tel" id="contactPhoneOB" name="contactPhoneOB" required>
                                </div>
                                <div class="form-group">
                                    <label for="regions">Regions of Interest *</label>
                                    <input type="text" id="regions" name="regions" placeholder="e.g., NJ, NY Metro, PA" required>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-section">
                            <h3>Program Details</h3>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="memberCount">Member/Patient Volume *</label>
                                    <select id="memberCount" name="memberCount" required>
                                        <option value="">Select Range</option>
                                        <option value="<5k">Up to 5,000</option>
                                        <option value="5k-25k">5,000 - 25,000</option>
                                        <option value="25k-100k">25,000 - 100,000</option>
                                        <option value=">100k">100,000+</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="deliveryTypes">Delivery Types Needed *</label>
                                    <select id="deliveryTypes" name="deliveryTypes" required>
                                        <option value="">Select</option>
                                        <option value="scheduled">Scheduled</option>
                                        <option value="same-day">Same‑day</option>
                                        <option value="stat">STAT/expedited</option>
                                        <option value="all">Combination</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="integrationPref">Integration Preference *</label>
                                    <select id="integrationPref" name="integrationPref" required>
                                        <option value="">Select</option>
                                        <option value="api">API</option>
                                        <option value="sftp">SFTP/Batch</option>
                                        <option value="portal">Web Portal</option>
                                        <option value="mixed">Mixed</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="baaNeeded">BAA Needed? *</label>
                                    <select id="baaNeeded" name="baaNeeded" required>
                                        <option value="">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="unsure">Unsure</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-section">
                            <h3>Objectives</h3>
                            <div class="form-group">
                                <label for="goals">What outcomes are you targeting?</label>
                                <textarea id="goals" name="goals" rows="4" placeholder="e.g., adherence lift, readmission reduction, member experience, cost savings"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="notesOB">Additional context</label>
                                <textarea id="notesOB" name="notesOB" rows="3" placeholder="Share any timelines, pilots, or RFP details"></textarea>
                            </div>
                        </div>
                        
                        <button type="submit" class="submit-btn">Submit Partnership Inquiry</button>
                    </form>
                </div>
            </div>
        </div>`;
    showBusinessModal('Other Businesses', pageContent);
}

function showBlogPage() {
    const posts = [
        {
            title: 'PBM Reforms: What They Mean for Independent Pharmacies',
            date: 'Oct 2025',
            tag: 'Policy',
            summary: 'Lawmakers continue pushing transparency and spread pricing reforms. Here’s how to prepare operationally and financially.'
        },
        {
            title: 'Medicare Part D Changes and Adherence Measures in 2025',
            date: 'Oct 2025',
            tag: 'Medicare',
            summary: 'Understanding new Star Ratings weightings, member communications, and how delivery can improve adherence.'
        },
        {
            title: 'Same‑Day Delivery: Competitive Advantage for Community Pharmacies',
            date: 'Sep 2025',
            tag: 'Operations',
            summary: 'Why reliable last‑mile logistics drive retention and new patient acquisition for independents.'
        }
    ];

    const postsHtml = posts.map(p => `
        <div class="blog-card">
            <div class="blog-meta">
                <span class="blog-tag">${p.tag}</span>
                <span class="blog-date">${p.date}</span>
            </div>
            <h3>${p.title}</h3>
            <p>${p.summary}</p>
            <button class="read-post-btn" onclick="alert('Full post coming soon')">Read Post</button>
        </div>
    `).join('');

    const pageContent = `
        <div class="business-page">
            <div class="business-hero">
                <h1>Optimus Industry Blog</h1>
                <p class="hero-subtitle">Perspectives on policy, reimbursement, and innovation — and what it means for independent pharmacies.</p>
            </div>
            <div class="business-content">
                <div class="blog-toolbar">
                    <input type="text" id="blogSearch" class="blog-search" placeholder="Search topics: PBM, Part D, delivery, adherence...">
                    <div class="blog-filters">
                        <button class="filter-chip" onclick="filterBlogByTag('All')">All</button>
                        <button class="filter-chip" onclick="filterBlogByTag('Policy')">Policy</button>
                        <button class="filter-chip" onclick="filterBlogByTag('Medicare')">Medicare</button>
                        <button class="filter-chip" onclick="filterBlogByTag('Operations')">Operations</button>
                    </div>
                </div>
                <div id="blogList" class="blog-grid">${postsHtml}</div>

                <div class="newsletter-section">
                    <h2>Get new posts in your inbox</h2>
                    <form id="blogSubscribeForm" class="newsletter-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="subscriberName">Full Name *</label>
                                <input type="text" id="subscriberName" name="subscriberName" required>
                            </div>
                            <div class="form-group">
                                <label for="subscriberEmail">Email Address *</label>
                                <input type="email" id="subscriberEmail" name="subscriberEmail" required>
                            </div>
                        </div>
                        <button type="submit" class="submit-btn">Subscribe</button>
                    </form>
                </div>

                <div class="partnership-form-section">
                    <h2>Suggest a Topic</h2>
                    <form id="blogTopicForm" class="business-form">
                        <div class="form-section">
                            <h3>Your Details</h3>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="topicName">Name *</label>
                                    <input type="text" id="topicName" name="topicName" required>
                                </div>
                                <div class="form-group">
                                    <label for="topicEmail">Email *</label>
                                    <input type="email" id="topicEmail" name="topicEmail" required>
                                </div>
                            </div>
                        </div>
                        <div class="form-section">
                            <h3>Topic</h3>
                            <div class="form-group">
                                <label for="topicTitle">Proposed Title *</label>
                                <input type="text" id="topicTitle" name="topicTitle" required>
                            </div>
                            <div class="form-group">
                                <label for="topicSummary">Brief Summary *</label>
                                <textarea id="topicSummary" name="topicSummary" rows="4" required></textarea>
                            </div>
                        </div>
                        <button type="submit" class="submit-btn">Submit Topic</button>
                    </form>
                </div>
            </div>
        </div>`;

    showBusinessModal('Blog', pageContent);
}

function showHomePage() {
    const pageContent = `
        <div class="business-page">
            <div class="business-hero">
                <h1>Delivering Better Health, One Doorstep at a Time</h1>
                <p class="hero-subtitle">We connect independent pharmacies, patients, and communities through reliable, compliant last‑mile delivery.</p>
            </div>
            <div class="business-content">
                <div class="benefits-section">
                    <h2>Our Vision</h2>
                    <div class="benefits-grid">
                        <div class="benefit-card">
                            <i class="fas fa-globe"></i>
                            <h3>Access for All</h3>
                            <p>Every patient can access medications on time — regardless of mobility, distance, or schedule.</p>
                        </div>
                        <div class="benefit-card">
                            <i class="fas fa-hospital"></i>
                            <h3>Stronger Independents</h3>
                            <p>Independent pharmacies thrive with modern logistics and technology built for them.</p>
                        </div>
                        <div class="benefit-card">
                            <i class="fas fa-shield-heart"></i>
                            <h3>Trust & Safety</h3>
                            <p>HIPAA‑first delivery, verified chain of custody, and respectful patient experience.</p>
                        </div>
                    </div>
                </div>
                
                <div class="benefits-section">
                    <h2>Our Mission</h2>
                    <div class="benefits-grid">
                        <div class="benefit-card">
                            <i class="fas fa-route"></i>
                            <h3>Reliable Delivery</h3>
                            <p>On‑time prescription delivery that reduces therapy gaps and improves adherence.</p>
                        </div>
                        <div class="benefit-card">
                            <i class="fas fa-hand-holding-heart"></i>
                            <h3>Community Impact</h3>
                            <p>Keep care local by empowering neighborhood pharmacies to serve more patients.</p>
                        </div>
                        <div class="benefit-card">
                            <i class="fas fa-plug"></i>
                            <h3>Seamless Integration</h3>
                            <p>Simple tools and APIs that fit real pharmacy workflows — not the other way around.</p>
                        </div>
                    </div>
                </div>
                
                <div class="benefits-section">
                    <h2>Our Story</h2>
                    <div class="form-section">
                        <p>Optimus Health Solutions was founded to solve a simple but critical problem: patients were missing medications because delivery was unreliable or unavailable. We started by partnering with independent pharmacies — the backbone of community health — and built a compliant delivery network with real‑time tracking, proof of delivery, and compassionate drivers.</p>
                        <p>Today, we support pharmacies, providers, and health plans with flexible delivery workflows (scheduled, same‑day, and STAT), transparent reporting, and integration options that meet operational reality. Our team blends healthcare, logistics, and technology expertise to deliver outcomes that matter: adherence, access, and patient satisfaction.</p>
                    </div>
                </div>
                
                <div class="benefits-section">
                    <h2>Our Impact</h2>
                    <div class="impact-grid">
                        <div class="impact-card">
                            <div class="tier-amount">98.5%</div>
                            <p>On‑time delivery rate across markets</p>
                        </div>
                        <div class="impact-card">
                            <div class="tier-amount">+12–18%</div>
                            <p>Average adherence lift after 90 days</p>
                        </div>
                        <div class="impact-card">
                            <div class="tier-amount">50K+</div>
                            <p>Deliveries completed with verified proof</p>
                        </div>
                        <div class="impact-card">
                            <div class="tier-amount">HIPAA</div>
                            <p>Compliance, BAAs available on request</p>
                        </div>
                    </div>
                </div>
                
                <div class="benefits-section">
                    <h2>Our Values</h2>
                    <div class="values-grid">
                        <div class="value-card"><h3>Patients First</h3><p>Respect, privacy, and reliability in every interaction.</p></div>
                        <div class="value-card"><h3>Own the Outcome</h3><p>We measure success by filled therapies — not just completed trips.</p></div>
                        <div class="value-card"><h3>Build with Partners</h3><p>We co‑design solutions with pharmacists and care teams.</p></div>
                    </div>
                </div>
                
                <div class="partnership-form-section">
                    <h2>Partner With Us</h2>
                    <form id="homePartnerForm" class="business-form">
                        <div class="form-section">
                            <h3>Tell us about you</h3>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="homeName">Full Name *</label>
                                    <input type="text" id="homeName" name="homeName" required>
                                </div>
                                <div class="form-group">
                                    <label for="homeEmail">Email *</label>
                                    <input type="email" id="homeEmail" name="homeEmail" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="homeOrg">Organization *</label>
                                    <input type="text" id="homeOrg" name="homeOrg" required>
                                </div>
                                <div class="form-group">
                                    <label for="homeRole">Role</label>
                                    <input type="text" id="homeRole" name="homeRole">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="homeMessage">What would you like to achieve with Optimus?</label>
                                <textarea id="homeMessage" name="homeMessage" rows="4"></textarea>
                            </div>
                        </div>
                        <button type="submit" class="submit-btn">Contact Us</button>
                    </form>
                </div>
            </div>
        </div>`;
    showBusinessModal('Welcome to Optimus Health', pageContent);
}
// Blog helpers
function filterBlogByTag(tag) {
    const list = document.getElementById('blogList');
    if (!list) return;
    if (tag === 'All') {
        [...list.children].forEach(c => c.style.display = 'block');
        return;
    }
    [...list.children].forEach(c => {
        const hasTag = c.querySelector('.blog-tag')?.textContent === tag;
        c.style.display = hasTag ? 'block' : 'none';
    });
}
// Show business modal with full page content
function showBusinessModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'business-modal';
    modal.innerHTML = `
        <div class="business-modal-content">
            <div class="business-modal-header">
                <h2>${title}</h2>
                <button class="close-btn">&times;</button>
            </div>
            <div class="business-modal-body">
                ${content}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    modal.querySelector('.close-btn').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Initialize forms
    initializeBusinessForms();
}

// Initialize business forms
function initializeBusinessForms() {
    // Pharmacy partnership form
    const pharmacyForm = document.getElementById('pharmacyPartnershipForm');
    if (pharmacyForm) {
        pharmacyForm.addEventListener('submit', handlePharmacyPartnershipSubmission);
    }
    
    // Driver application form
    const driverForm = document.getElementById('driverApplicationForm');
    if (driverForm) {
        driverForm.addEventListener('submit', handleDriverApplicationSubmission);
    }
    
    // Investor interest form
    const investorForm = document.getElementById('investorInterestForm');
    if (investorForm) {
        investorForm.addEventListener('submit', handleInvestorInterestSubmission);
    }

    // Other businesses form
    const otherBizForm = document.getElementById('otherBusinessForm');
    if (otherBizForm) {
        otherBizForm.addEventListener('submit', handleOtherBusinessesSubmission);
    }

    // Blog forms
    const blogSubscribe = document.getElementById('blogSubscribeForm');
    if (blogSubscribe) {
        blogSubscribe.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Subscribed! We\'ll email you new posts.');
        });
    }
    const blogTopic = document.getElementById('blogTopicForm');
    if (blogTopic) {
        blogTopic.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thanks for the suggestion! Our editorial team will review it.');
        });
    }

    const homePartnerForm = document.getElementById('homePartnerForm');
    if (homePartnerForm) {
        homePartnerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thanks! We\'ll get back to you shortly.');
        });
    }
}

// Form submission handlers
function handlePharmacyPartnershipSubmission(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Show success message
    alert('Thank you for your partnership application! We will review your information and contact you within 2 business days.');
    
    // Close modal
    const modal = document.querySelector('.business-modal');
    if (modal) {
        document.body.removeChild(modal);
    }
}

function handleOtherBusinessesSubmission(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    alert('Thank you! Our partnerships team will reach out within 2 business days.');
    
    const modal = document.querySelector('.business-modal');
    if (modal) {
        document.body.removeChild(modal);
    }
}

function handleDriverApplicationSubmission(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Show success message
    alert('Thank you for your driver application! We will review your information and contact you within 3 business days to schedule an interview.');
    
    // Close modal
    const modal = document.querySelector('.business-modal');
    if (modal) {
        document.body.removeChild(modal);
    }
}

function handleInvestorInterestSubmission(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Show success message
    alert('Thank you for your investment interest! Our investor relations team will contact you within 1 business day to discuss opportunities.');
    
    // Close modal
    const modal = document.querySelector('.business-modal');
    if (modal) {
        document.body.removeChild(modal);
    }
}

function showHelpDetails() {
    const detailedContent = `
        <div class="detailed-content">
            <h3>Need Help? We're Here for You</h3>
            <div class="help-section">
                <h4>Contact Support</h4>
                <div class="contact-methods">
                    <div class="contact-method">
                        <i class="fas fa-phone"></i>
                        <div>
                            <h5>Phone Support</h5>
                            <p>1-800-OPTIMUS (1-800-678-4687)</p>
                            <small>Available 24/7</small>
                        </div>
                    </div>
                    <div class="contact-method">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <h5>Email Support</h5>
                            <p>support@optimushealth.com</p>
                            <small>Response within 2 hours</small>
                        </div>
                    </div>
                    <div class="contact-method">
                        <i class="fas fa-comments"></i>
                        <div>
                            <h5>Live Chat</h5>
                            <p>Available on our website</p>
                            <small>Mon-Fri 8AM-8PM EST</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="help-section">
                <h4>Frequently Asked Questions</h4>
                <div class="faq">
                    <div class="faq-item">
                        <h5>How much does delivery cost?</h5>
                        <p>Delivery fees start at $5.99 and may vary by location and urgency.</p>
                    </div>
                    <div class="faq-item">
                        <h5>How long does delivery take?</h5>
                        <p>Standard delivery is 2-4 hours, with same-day options available.</p>
                    </div>
                    <div class="faq-item">
                        <h5>Do you accept insurance?</h5>
                        <p>Yes, we work with most major insurance providers.</p>
                    </div>
                </div>
            </div>
            <div class="cta-section">
                <button class="cta-button" onclick="openLiveChat()">Start Live Chat</button>
            </div>
        </div>
    `;
    showDetailedModal('Help & Support', detailedContent);
}

// Show detailed modal with rich content
function showDetailedModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'navigation-modal detailed-modal';
    modal.innerHTML = `
        <div class="modal-content detailed-content-modal">
            <div class="modal-header">
                <h2>${title}</h2>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body detailed-body">
                ${content}
            </div>
            <div class="modal-footer">
                <button class="modal-btn secondary">Close</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    modal.querySelector('.close-btn').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.querySelector('.modal-btn.secondary').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Action functions for CTA buttons
function contactPartnership() {
    alert('Thank you for your interest in partnering with us! Please email partnerships@optimushealth.com or call 1-800-OPTIMUS for more information.');
}

function applyAsDriver() {
    alert('Ready to start earning? Please visit our driver application page or call 1-800-OPTIMUS to speak with our recruitment team.');
}

function contactInvestorRelations() {
    alert('Thank you for your interest in investing with Optimus Health Solutions! Please email investors@optimushs.com or call 1-800-OPTIMUS to speak with our investor relations team.');
}

function openLiveChat() {
    alert('Live chat feature coming soon! For immediate assistance, please call 1-800-OPTIMUS or email support@optimushealth.com');
}

// Service card button handlers
function handleRefillPrescription() {
    // Scroll to refill section
    document.getElementById('refill-section').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function handleTransferPrescription() {
    // Scroll to transfer section
    document.getElementById('transfer-section').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function handleContactUs() {
    // Scroll to contact section
    document.getElementById('contact-section').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Enhanced Transfer Form Functionality
function initializeTransferForm() {
    const transferForm = document.getElementById('transferPrescriptionForm');
    
    if (transferForm) {
        transferForm.addEventListener('submit', handleTransferFormSubmission);
        
        // Add real-time validation
        addFormValidation();
        
        // Add phone number formatting
        addPhoneFormatting();
    }
}

function handleTransferFormSubmission(event) {
    event.preventDefault();
    
    // Collect form data
    const formData = new FormData(event.target);
    const formObject = {};
    
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // Get medication data
    const medicationData = getMedicationData();
    formObject.medicationData = medicationData;
    
    // Validate form
    if (!validateTransferForm(formObject)) {
        return;
    }
    
    // Show loading state
    const submitBtn = event.target.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Simulate API call (replace with actual API endpoint)
    setTimeout(() => {
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showTransferSuccessModal(formObject);
        
        // Reset form
        event.target.reset();
    }, 2000);
}

function validateTransferForm(data) {
    const requiredFields = ['firstName', 'lastName', 'emailAddress', 'homeAddress', 'dateOfBirth', 'phoneNumber', 'previousPharmacyName', 'previousPharmacyPhone', 'currentPharmacy', 'pharmacyPhone', 'consent'];
    const errors = [];
    
    // Check required fields
    requiredFields.forEach(field => {
        if (!data[field] || data[field].trim() === '') {
            errors.push(`${getFieldLabel(field)} is required`);
        }
    });
    
    // Validate email
    if (data.emailAddress && !isValidEmail(data.emailAddress)) {
        errors.push('Please enter a valid email address');
    }
    
    // Validate medications
    const medicationNames = document.querySelectorAll('input[name="medicationName[]"]');
    const rxNumbers = document.querySelectorAll('input[name="rxNumber[]"]');
    const transferAll = document.getElementById('transferAll').checked;
    
    if (!transferAll) {
        let hasMedication = false;
        medicationNames.forEach(input => {
            if (input.value.trim() !== '') {
                hasMedication = true;
            }
        });
        
        if (!hasMedication) {
            errors.push('Please add at least one medication or select "Transfer all of my medications"');
        }
    }
    
    // Validate phone numbers
    if (data.phoneNumber && !isValidPhone(data.phoneNumber)) {
        errors.push('Please enter a valid phone number');
    }
    
    if (data.previousPharmacyPhone && !isValidPhone(data.previousPharmacyPhone)) {
        errors.push('Please enter a valid previous pharmacy phone number');
    }
    
    if (data.pharmacyPhone && !isValidPhone(data.pharmacyPhone)) {
        errors.push('Please enter a valid new pharmacy phone number');
    }
    
    // Validate date of birth
    if (data.dateOfBirth && !isValidDateOfBirth(data.dateOfBirth)) {
        errors.push('Please enter a valid date of birth');
    }
    
    if (errors.length > 0) {
        showValidationErrors(errors);
        return false;
    }
    
    return true;
}

function getFieldLabel(fieldName) {
    const labels = {
        'firstName': 'First Name',
        'lastName': 'Last Name',
        'emailAddress': 'Email Address',
        'homeAddress': 'Home Address',
        'dateOfBirth': 'Date of Birth',
        'phoneNumber': 'Phone Number',
        'previousPharmacyName': 'Previous Pharmacy Name',
        'previousPharmacyPhone': 'Previous Pharmacy Phone',
        'currentPharmacy': 'New Pharmacy Name',
        'pharmacyPhone': 'New Pharmacy Phone',
        'medications': 'Medications to Transfer',
        'consent': 'Consent Agreement'
    };
    return labels[fieldName] || fieldName;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10;
}

function isValidDateOfBirth(date) {
    const birthDate = new Date(date);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    return age >= 0 && age <= 120;
}

function showValidationErrors(errors) {
    const errorMessage = errors.join('\n• ');
    alert(`Please fix the following errors:\n\n• ${errorMessage}`);
}

function showTransferSuccessModal(formData) {
    const modal = document.createElement('div');
    modal.className = 'navigation-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Transfer Request Submitted</h2>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <div style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-check-circle" style="color: #8B4B8C; font-size: 48px; margin-bottom: 15px;"></i>
                    <h3 style="color: #8B4B8C; margin-bottom: 15px;">Thank you, ${formData.firstName} ${formData.lastName}!</h3>
                </div>
                       <p>Your prescription transfer request has been submitted successfully. Here's what happens next:</p>
                       <ul style="text-align: left; margin: 20px 0;">
                           <li>We'll contact your previous pharmacy within 1 business day</li>
                           <li>The transfer process typically takes 1-3 business days</li>
                           <li>We'll coordinate with your new pharmacy to complete the transfer</li>
                           <li>We'll notify you via ${formData.preferredContact || 'phone'} when your prescriptions are ready for pickup or delivery</li>
                           <li>Optimus Health Solutions will handle the delivery to your location</li>
                       </ul>
                       ${formData.medicationData && formData.medicationData.transferAll ? 
                           '<div style="background: #f0e6f0; padding: 15px; border-radius: 6px; margin: 15px 0;"><strong>Transfer Request:</strong> All medications will be transferred</div>' :
                           formData.medicationData && formData.medicationData.medications.length > 0 ?
                           `<div style="background: #f0e6f0; padding: 15px; border-radius: 6px; margin: 15px 0;"><strong>Medications to Transfer:</strong><br>${formData.medicationData.medications.map(med => `• ${med.name}${med.rxNumber ? ` (Rx: ${med.rxNumber})` : ''}`).join('<br>')}</div>` : ''}
                <div style="background: #f0e6f0; padding: 15px; border-radius: 6px; margin: 20px 0;">
                    <strong>Reference Number:</strong> TX-${Date.now().toString().slice(-6)}<br>
                    <strong>Estimated Completion:</strong> ${getEstimatedCompletionDate()}
                </div>
                <p style="font-size: 14px; color: #666;">If you have any questions, please call us at 717-251-5105.</p>
            </div>
            <div class="modal-footer">
                <button class="modal-btn secondary">Close</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    modal.querySelector('.close-btn').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.querySelector('.modal-btn.secondary').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

function getEstimatedCompletionDate() {
    const today = new Date();
    const completionDate = new Date(today);
    completionDate.setDate(today.getDate() + 3);
    return completionDate.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function addFormValidation() {
    const form = document.getElementById('transferPrescriptionForm');
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

function validateField(event) {
    const field = event.target;
    const value = field.value.trim();
    
    // Remove existing error styling
    field.classList.remove('error');
    
    // Validate based on field type
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'This field is required');
        return;
    }
    
    if (field.type === 'tel' && value && !isValidPhone(value)) {
        showFieldError(field, 'Please enter a valid phone number');
        return;
    }
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#dc3545';
    errorDiv.style.fontSize = '12px';
    errorDiv.style.marginTop = '5px';
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(event) {
    const field = event.target;
    field.classList.remove('error');
    
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function addPhoneFormatting() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', formatPhoneNumber);
    });
}

function formatPhoneNumber(event) {
    let value = event.target.value.replace(/\D/g, '');
    
    if (value.length >= 6) {
        value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
    } else if (value.length >= 3) {
        value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
    }
    
    event.target.value = value;
}

// Handle language toggle
function handleLanguageToggle() {
    const currentLang = document.querySelector('.language-toggle span').textContent;
    const newLang = currentLang === 'EN' ? 'ES' : 'EN';
    document.querySelector('.language-toggle span').textContent = newLang;
    
    // You can add language switching logic here
    console.log(`Language switched to: ${newLang}`);
}

// Show modal for navigation items
function showModal(title, content, learnMoreAction = null) {
    const modal = document.createElement('div');
    modal.className = 'navigation-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${title}</h2>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <p>${content}</p>
            </div>
            <div class="modal-footer">
                <button class="modal-btn primary">Learn More</button>
                <button class="modal-btn secondary">Close</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    modal.querySelector('.close-btn').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.querySelector('.modal-btn.secondary').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.querySelector('.modal-btn.primary').addEventListener('click', () => {
        document.body.removeChild(modal);
        if (learnMoreAction && typeof learnMoreAction === 'function') {
            learnMoreAction();
        }
    });
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Google Maps Integration
function initializeMap() {
    // Check if Google Maps is loaded
    if (typeof google === 'undefined' || !google.maps) {
        console.warn('Google Maps API not loaded. Please add your API key.');
        showFallbackMap();
        return;
    }
    
    // Default location (Newark, NJ)
    const defaultLocation = { lat: 40.7357, lng: -74.1724 };
    
    // Initialize map
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: defaultLocation,
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'on' }]
            }
        ]
    });
    
    // Add pharmacy markers
    addPharmacyMarkers(map);
    
    // Store map reference globally
    window.optimusMap = map;
}

// Show fallback map when Google Maps API is not available
function showFallbackMap() {
    const mapContainer = document.getElementById('map');
    mapContainer.innerHTML = `
        <div class="fallback-map">
            <div class="fallback-content">
                <i class="fas fa-map-marked-alt"></i>
                <h3>Interactive Map</h3>
                <p>To enable the interactive map with pharmacy locations, please add your Google Maps API key to the HTML file.</p>
                <div class="pharmacy-list">
                    <h4>Available Pharmacies in Newark, NJ:</h4>
                    <div class="pharmacy-item" onclick="selectFallbackPharmacy('CVS Pharmacy - Downtown', '123 Main St, Newark, NJ 07102')">
                        <i class="fas fa-map-marker-alt cvs"></i>
                        <div>
                            <strong>CVS Pharmacy - Downtown</strong><br>
                            <span>123 Main St, Newark, NJ 07102</span>
                        </div>
                    </div>
                    <div class="pharmacy-item" onclick="selectFallbackPharmacy('Walgreens - Medical Center', '456 Health Ave, Newark, NJ 07103')">
                        <i class="fas fa-map-marker-alt walgreens"></i>
                        <div>
                            <strong>Walgreens - Medical Center</strong><br>
                            <span>456 Health Ave, Newark, NJ 07103</span>
                        </div>
                    </div>
                    <div class="pharmacy-item" onclick="selectFallbackPharmacy('Rite Aid - University Heights', '789 University Blvd, Newark, NJ 07104')">
                        <i class="fas fa-map-marker-alt riteaid"></i>
                        <div>
                            <strong>Rite Aid - University Heights</strong><br>
                            <span>789 University Blvd, Newark, NJ 07104</span>
                        </div>
                    </div>
                    <div class="pharmacy-item" onclick="selectFallbackPharmacy('Independent Pharmacy Plus', '321 Commerce St, Newark, NJ 07105')">
                        <i class="fas fa-map-marker-alt independent"></i>
                        <div>
                            <strong>Independent Pharmacy Plus</strong><br>
                            <span>321 Commerce St, Newark, NJ 07105</span>
                        </div>
                    </div>
                </div>
                <div class="api-instructions">
                    <p><strong>To get your Google Maps API key:</strong></p>
                    <ol>
                        <li>Go to <a href="https://console.cloud.google.com/" target="_blank">Google Cloud Console</a></li>
                        <li>Create a project and enable Maps JavaScript API & Places API</li>
                        <li>Create an API key and replace "YOUR_API_KEY" in index.html</li>
                    </ol>
                </div>
            </div>
        </div>
    `;
}

// Select pharmacy from fallback list
function selectFallbackPharmacy(name, address) {
    document.getElementById('pickup-location').value = name;
    document.getElementById('dropoff-location').focus();
    
    // Show confirmation
    showModal('Pharmacy Selected', `You selected: ${name}\nAddress: ${address}\n\nPlease enter your delivery address below.`);
}

// Add pharmacy markers to the map
function addPharmacyMarkers(map) {
    // Use the default city (Newark, NJ) for initial load
    const defaultCity = 'Newark, NJ';
    const cityInfo = cityData[defaultCity];
    
    if (!cityInfo) {
        console.warn('Default city data not found');
        return;
    }
    
    // Initialize markers array
    window.currentMarkers = [];
    
    cityInfo.pharmacies.forEach(pharmacy => {
        const marker = new google.maps.Marker({
            position: pharmacy.position,
            map: map,
            title: pharmacy.name,
            icon: getPharmacyIcon(pharmacy.type)
        });
        
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div style="padding: 10px;">
                    <h3 style="margin: 0 0 5px 0; color: #333;">${pharmacy.name}</h3>
                    <p style="margin: 0; color: #666; font-size: 14px;">${pharmacy.address}</p>
                    <button onclick="selectPharmacy('${pharmacy.name}', '${pharmacy.address}')" 
                            style="margin-top: 10px; padding: 8px 16px; background: #8B4B8C; color: white; border: none; border-radius: 4px; cursor: pointer;">
                        Select Pharmacy
                    </button>
                </div>
            `
        });
        
        marker.addListener('click', () => {
            // Close any open info windows
            if (window.currentInfoWindow) {
                window.currentInfoWindow.close();
            }
            infoWindow.open(map, marker);
            window.currentInfoWindow = infoWindow;
        });
        
        window.currentMarkers.push(marker);
    });
}

// Get pharmacy icon based on type
function getPharmacyIcon(type) {
    const icons = {
        cvs: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#8B4B8C"/>
                <text x="12" y="16" text-anchor="middle" fill="white" font-size="12" font-weight="bold">CVS</text>
            </svg>
        `),
        walgreens: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#9B6B9C"/>
                <text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">W</text>
            </svg>
        `),
        riteaid: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#7A5A7B"/>
                <text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">RA</text>
            </svg>
        `),
        independent: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#6B5A6C"/>
                <text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">I</text>
            </svg>
        `)
    };
    
    return icons[type] || icons.independent;
}

// Select pharmacy function
function selectPharmacy(name, address) {
    document.getElementById('pickup-location').value = name;
    document.getElementById('dropoff-location').focus();
    
    // Close any open info windows
    if (window.optimusMap) {
        // This would close info windows if we stored references
    }
}

// Initialize form functionality
function initializeForm() {
    const form = document.querySelector('.request-form');
    const pickupInput = document.getElementById('pickup-location');
    const dropoffInput = document.getElementById('dropoff-location');
    
    // Add form validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        validateAndSubmitForm();
    });
    
    // Add input event listeners
    pickupInput.addEventListener('input', handlePickupInput);
    dropoffInput.addEventListener('input', handleDropoffInput);
}

// Handle pickup input changes
function handlePickupInput(e) {
    const value = e.target.value;
    // You can add real-time validation or suggestions here
    console.log('Pickup location:', value);
}

// Handle dropoff input changes
function handleDropoffInput(e) {
    const value = e.target.value;
    // You can add real-time validation or suggestions here
    console.log('Dropoff location:', value);
}

// Initialize Google Places Autocomplete
function initializeAutocomplete() {
    if (typeof google === 'undefined' || !google.maps || !google.maps.places) {
        console.warn('Google Places API not loaded');
        return;
    }
    
    const pickupInput = document.getElementById('pickup-location');
    const dropoffInput = document.getElementById('dropoff-location');
    
    // Initialize autocomplete for pickup location
    const pickupAutocomplete = new google.maps.places.Autocomplete(pickupInput, {
        types: ['establishment'],
        componentRestrictions: { country: 'us' }
    });
    
    // Initialize autocomplete for dropoff location
    const dropoffAutocomplete = new google.maps.places.Autocomplete(dropoffInput, {
        types: ['address'],
        componentRestrictions: { country: 'us' }
    });
    
    // Add place selection listeners
    pickupAutocomplete.addListener('place_changed', function() {
        const place = pickupAutocomplete.getPlace();
        if (place.geometry) {
            // Center map on selected place
            if (window.optimusMap) {
                window.optimusMap.setCenter(place.geometry.location);
                window.optimusMap.setZoom(15);
            }
        }
    });
    
    dropoffAutocomplete.addListener('place_changed', function() {
        const place = dropoffAutocomplete.getPlace();
        if (place.geometry) {
            // You can add logic to calculate route or update map
            console.log('Dropoff place selected:', place);
        }
    });
}

// Initialize date and time pickers
function initializeDateTimePickers() {
    const dateInput = document.getElementById('delivery-date');
    const timeInput = document.getElementById('delivery-time');
    
    // Set default values
    const now = new Date();
    const today = now.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    dateInput.value = 'Today';
    timeInput.value = 'Now';
    
    // Add click handlers for custom date/time selection
    dateInput.addEventListener('click', function() {
        showDatePicker();
    });
    
    timeInput.addEventListener('click', function() {
        showTimePicker();
    });
}

// Show date picker
function showDatePicker() {
    const modal = document.createElement('div');
    modal.className = 'date-picker-modal';
    
    // Generate calendar HTML
    const calendarHTML = generateCalendarHTML();
    
    modal.innerHTML = `
        <div class="modal-content calendar-modal">
            <div class="modal-header">
                <h3>Select Delivery Date</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="calendar-container">
                ${calendarHTML}
            </div>
            <div class="modal-actions">
                <button class="cancel-btn">Cancel</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners for calendar days
    modal.querySelectorAll('.calendar-day').forEach(day => {
        day.addEventListener('click', function() {
            if (!this.classList.contains('disabled')) {
                const selectedDate = this.dataset.date;
                const formattedDate = formatSelectedDate(selectedDate);
                document.getElementById('delivery-date').value = formattedDate;
                document.body.removeChild(modal);
            }
        });
    });
    
    // Add navigation listeners
    modal.querySelector('.prev-month').addEventListener('click', function() {
        updateCalendar(modal, -1);
    });
    
    modal.querySelector('.next-month').addEventListener('click', function() {
        updateCalendar(modal, 1);
    });
    
    modal.querySelector('.close-btn').addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    modal.querySelector('.cancel-btn').addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Generate calendar HTML
function generateCalendarHTML(currentDate = new Date()) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    let calendarHTML = `
        <div class="calendar-header">
            <button class="nav-btn prev-month">&lt;</button>
            <h4 class="month-year">${monthNames[month]} ${year}</h4>
            <button class="nav-btn next-month">&gt;</button>
        </div>
        <div class="calendar-grid">
            <div class="calendar-weekdays">
                ${dayNames.map(day => `<div class="weekday">${day}</div>`).join('')}
            </div>
            <div class="calendar-days">
    `;
    
    // Generate 42 days (6 weeks)
    for (let i = 0; i < 42; i++) {
        const currentDay = new Date(startDate);
        currentDay.setDate(startDate.getDate() + i);
        
        const isCurrentMonth = currentDay.getMonth() === month;
        const isToday = currentDay.toDateString() === today.toDateString();
        const isPast = currentDay < today && !isToday;
        
        const dayClass = `calendar-day ${isCurrentMonth ? 'current-month' : 'other-month'} ${isToday ? 'today' : ''} ${isPast ? 'disabled' : ''}`;
        const dateString = currentDay.toISOString().split('T')[0];
        
        calendarHTML += `<div class="${dayClass}" data-date="${dateString}">${currentDay.getDate()}</div>`;
    }
    
    calendarHTML += `
            </div>
        </div>
    `;
    
    return calendarHTML;
}

// Update calendar when navigating months
function updateCalendar(modal, direction) {
    const monthYear = modal.querySelector('.month-year').textContent;
    const [monthName, year] = monthYear.split(' ');
    const monthIndex = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ].indexOf(monthName);
    
    const currentDate = new Date(parseInt(year), monthIndex + direction, 1);
    const newCalendarHTML = generateCalendarHTML(currentDate);
    
    const calendarContainer = modal.querySelector('.calendar-container');
    calendarContainer.innerHTML = newCalendarHTML;
    
    // Re-add event listeners
    modal.querySelectorAll('.calendar-day').forEach(day => {
        day.addEventListener('click', function() {
            if (!this.classList.contains('disabled')) {
                const selectedDate = this.dataset.date;
                const formattedDate = formatSelectedDate(selectedDate);
                document.getElementById('delivery-date').value = formattedDate;
                document.body.removeChild(modal);
            }
        });
    });
    
    modal.querySelector('.prev-month').addEventListener('click', function() {
        updateCalendar(modal, -1);
    });
    
    modal.querySelector('.next-month').addEventListener('click', function() {
        updateCalendar(modal, 1);
    });
}

// Format selected date for display
function formatSelectedDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
        return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
        return 'Tomorrow';
    } else {
        return date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
}

// Show time picker
function showTimePicker() {
    const modal = document.createElement('div');
    modal.className = 'time-picker-modal';
    
    // Generate time options in 15-minute increments
    const timeOptions = generateTimeOptions();
    
    modal.innerHTML = `
        <div class="modal-content time-modal">
            <div class="modal-header">
                <h3>Select Delivery Time</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="time-container">
                <div class="time-section">
                    <h4>Quick Options</h4>
                    <div class="quick-options">
                        <button class="time-option quick" data-value="Now">Now</button>
                        <button class="time-option quick" data-value="In 30 minutes">In 30 minutes</button>
                        <button class="time-option quick" data-value="In 1 hour">In 1 hour</button>
                    </div>
                </div>
                <div class="time-section">
                    <h4>Specific Time</h4>
                    <div class="time-grid">
                        ${timeOptions}
                    </div>
                </div>
            </div>
            <div class="modal-actions">
                <button class="cancel-btn">Cancel</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    modal.querySelectorAll('.time-option').forEach(option => {
        option.addEventListener('click', function() {
            document.getElementById('delivery-time').value = this.dataset.value;
            document.body.removeChild(modal);
        });
    });
    
    modal.querySelector('.close-btn').addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    modal.querySelector('.cancel-btn').addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Generate time options in 15-minute increments
function generateTimeOptions() {
    const times = [];
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // Generate times from 6 AM to 10 PM
    for (let hour = 6; hour <= 22; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
            const time = new Date();
            time.setHours(hour, minute, 0, 0);
            
            // Skip past times for today
            if (hour < currentHour || (hour === currentHour && minute <= currentMinute)) {
                continue;
            }
            
            const timeString = time.toLocaleTimeString('en-US', { 
                hour: 'numeric', 
                minute: '2-digit',
                hour12: true 
            });
            
            const isAvailable = true; // You can add logic here to check availability
            
            times.push(`
                <button class="time-option specific ${!isAvailable ? 'unavailable' : ''}" 
                        data-value="${timeString}" 
                        ${!isAvailable ? 'disabled' : ''}>
                    ${timeString}
                </button>
            `);
        }
    }
    
    return times.join('');
}

// Initialize suggestions
function initializeSuggestions() {
    const suggestionItems = document.querySelectorAll('.suggestion-item');
    
    suggestionItems.forEach(item => {
        item.addEventListener('click', function() {
            const name = this.querySelector('.suggestion-name').textContent;
            const address = this.querySelector('.suggestion-address').textContent;
            
            // Fill the pickup location
            document.getElementById('pickup-location').value = name;
            
            // Focus on dropoff location
            document.getElementById('dropoff-location').focus();
        });
    });
}

// Validate and submit form
function validateAndSubmitForm() {
    const pickupLocation = document.getElementById('pickup-location').value.trim();
    const dropoffLocation = document.getElementById('dropoff-location').value.trim();
    const deliveryDate = document.getElementById('delivery-date').value.trim();
    const deliveryTime = document.getElementById('delivery-time').value.trim();
    
    // Basic validation
    if (!pickupLocation) {
        alert('Please select a pickup location (pharmacy)');
        return;
    }
    
    if (!dropoffLocation) {
        alert('Please enter a drop-off address');
        return;
    }
    
    // Show success message
    alert(`Prescription delivery requested!\n\nPickup: ${pickupLocation}\nDrop-off: ${dropoffLocation}\nDate: ${deliveryDate}\nTime: ${deliveryTime}`);
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', {
        pickupLocation,
        dropoffLocation,
        deliveryDate,
        deliveryTime
    });
}

// Add CSS for modals
const modalStyles = `
    .date-picker-modal,
    .time-picker-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    }
    
    .calendar-modal,
    .time-modal {
        max-width: 500px;
        width: 95%;
    }
    
    .calendar-modal .modal-content,
    .time-modal .modal-content {
        padding: 0;
    }
    
    .calendar-modal .modal-header,
    .time-modal .modal-header {
        padding: 20px 30px;
        border-bottom: 1px solid #e9ecef;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .calendar-modal .modal-header h3,
    .time-modal .modal-header h3 {
        margin: 0;
        color: #333;
        font-size: 20px;
    }
    
    .calendar-modal .close-btn,
    .time-modal .close-btn {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #666;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.3s ease;
    }
    
    .calendar-modal .close-btn:hover,
    .time-modal .close-btn:hover {
        background-color: #f8f9fa;
    }
    
    /* Calendar Styles */
    .calendar-container {
        padding: 20px 30px;
    }
    
    .calendar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    
    .nav-btn {
        background: #8B4B8C;
        color: white;
        border: none;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease;
    }
    
    .nav-btn:hover {
        background: #6B3A6C;
    }
    
    .month-year {
        margin: 0;
        color: #333;
        font-size: 18px;
        font-weight: 600;
    }
    
    .calendar-grid {
        border: 1px solid #e9ecef;
        border-radius: 8px;
        overflow: hidden;
    }
    
    .calendar-weekdays {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        background: #f8f9fa;
    }
    
    .weekday {
        padding: 12px 8px;
        text-align: center;
        font-weight: 600;
        color: #666;
        font-size: 14px;
        border-right: 1px solid #e9ecef;
    }
    
    .weekday:last-child {
        border-right: none;
    }
    
    .calendar-days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
    }
    
    .calendar-day {
        padding: 12px 8px;
        text-align: center;
        cursor: pointer;
        border-right: 1px solid #e9ecef;
        border-bottom: 1px solid #e9ecef;
        transition: all 0.3s ease;
        font-size: 14px;
        min-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .calendar-day:nth-child(7n) {
        border-right: none;
    }
    
    .calendar-day.current-month {
        color: #333;
    }
    
    .calendar-day.other-month {
        color: #ccc;
        background: #f8f9fa;
    }
    
    .calendar-day.today {
        background: #8B4B8C;
        color: white;
        font-weight: 600;
    }
    
    .calendar-day:hover:not(.disabled) {
        background: #f0e6f0;
        color: #8B4B8C;
    }
    
    .calendar-day.disabled {
        color: #ccc;
        cursor: not-allowed;
        background: #f8f9fa;
    }
    
    /* Time Picker Styles */
    .time-container {
        padding: 20px 30px;
        max-height: 400px;
        overflow-y: auto;
    }
    
    .time-section {
        margin-bottom: 25px;
    }
    
    .time-section:last-child {
        margin-bottom: 0;
    }
    
    .time-section h4 {
        margin: 0 0 15px 0;
        color: #333;
        font-size: 16px;
        font-weight: 600;
    }
    
    .quick-options {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
    
    .time-option.quick {
        padding: 10px 20px;
        background: #f8f9fa;
        border: 2px solid #e9ecef;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.3s ease;
    }
    
    .time-option.quick:hover {
        border-color: #8B4B8C;
        background: #f0e6f0;
        color: #8B4B8C;
    }
    
    .time-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
        gap: 8px;
        max-height: 200px;
        overflow-y: auto;
    }
    
    .time-option.specific {
        padding: 8px 12px;
        background: white;
        border: 1px solid #e9ecef;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
        text-align: center;
        transition: all 0.3s ease;
    }
    
    .time-option.specific:hover:not(.unavailable) {
        border-color: #8B4B8C;
        background: #f0e6f0;
        color: #8B4B8C;
    }
    
    .time-option.specific.unavailable {
        background: #f8f9fa;
        color: #ccc;
        cursor: not-allowed;
        border-color: #e9ecef;
    }
    
    .calendar-modal .modal-actions,
    .time-modal .modal-actions {
        padding: 20px 30px;
        border-top: 1px solid #e9ecef;
        text-align: center;
    }
    
    .cancel-btn {
        padding: 10px 20px;
        background: #6c757d;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.3s ease;
    }
    
    .cancel-btn:hover {
        background: #5a6268;
    }
`;

// Inject modal styles
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

// Confirm Request functionality
function initializeConfirmRequest() {
    const checkoutBtn = document.getElementById('checkoutRequestBtn');
    if (checkoutBtn) {
        // Add any initial setup if needed
        console.log('Checkout request button initialized');
    }
}

function checkoutRequest() {
    console.log('Checkout request clicked');
    
    // Hide main content and show checkout page
    const mainContent = document.getElementById('mainFormContent');
    const checkoutPage = document.getElementById('checkoutPage');
    
    console.log('Main content element:', mainContent);
    console.log('Checkout page element:', checkoutPage);
    
    if (mainContent && checkoutPage) {
        mainContent.style.display = 'none';
        checkoutPage.style.display = 'block';
        
        console.log('Successfully switched to checkout page');
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Initialize checkout forms
        initializeCheckoutForms();
    } else {
        console.error('Could not find main content or checkout page elements');
    }
}

function goBackToForm() {
    // Show main content and hide checkout page
    const mainContent = document.getElementById('mainFormContent');
    const checkoutPage = document.getElementById('checkoutPage');
    
    if (mainContent && checkoutPage) {
        checkoutPage.style.display = 'none';
        mainContent.style.display = 'block';
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

function goBackToCheckout() {
    // Show checkout page and hide payment page
    const checkoutPage = document.getElementById('checkoutPage');
    const paymentPage = document.getElementById('paymentPage');
    
    if (checkoutPage && paymentPage) {
        paymentPage.style.display = 'none';
        checkoutPage.style.display = 'block';
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        console.log('Returned to checkout page');
    }
}

// Initialize checkout forms
function initializeCheckoutForms() {
    const returningCustomerForm = document.getElementById('returningCustomerForm');
    
    if (returningCustomerForm) {
        returningCustomerForm.addEventListener('submit', handleReturningCustomerLogin);
    }
}

// Handle returning customer login
function handleReturningCustomerLogin(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const loginData = Object.fromEntries(formData.entries());
    
    // Basic validation
    if (!loginData.email || !loginData.password) {
        alert('Please enter both email and password.');
        return;
    }
    
    if (!isValidEmail(loginData.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Show loading state
    const submitBtn = event.target.querySelector('.returning-customer-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'LOGGING IN...';
    submitBtn.disabled = true;
    
    // Simulate login process
    setTimeout(() => {
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Proceed directly to payment page
        proceedToPaymentPage('returning');
    }, 1500);
}

// Proceed as guest
function proceedAsGuest() {
    proceedToPaymentPage('guest');
}

// Proceed with VISA checkout
function proceedWithVisaCheckout() {
    alert('VISA Checkout integration would be implemented here. For now, proceeding as guest.');
    proceedToPaymentPage('guest');
}

// Proceed to payment page
function proceedToPaymentPage(checkoutType) {
    const checkoutPage = document.getElementById('checkoutPage');
    const paymentPage = document.getElementById('paymentPage');
    
    if (checkoutPage && paymentPage) {
        checkoutPage.style.display = 'none';
        paymentPage.style.display = 'block';
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Initialize payment form
        initializePaymentForm();
        
        // Store checkout type for later use
        window.checkoutType = checkoutType;
        
        console.log(`Proceeding to payment page as: ${checkoutType}`);
    }
}

function initializePaymentForm() {
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', handlePaymentSubmission);
        
        // Add input formatting
        const cardNumberInput = document.getElementById('cardNumber');
        const expiryInput = document.getElementById('expiryDate');
        const cvvInput = document.getElementById('cvv');
        
        if (cardNumberInput) {
            cardNumberInput.addEventListener('input', formatCardNumber);
        }
        
        if (expiryInput) {
            expiryInput.addEventListener('input', formatExpiryDate);
        }
        
        if (cvvInput) {
            cvvInput.addEventListener('input', formatCVV);
        }
    }
}

function handlePaymentSubmission(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const paymentData = Object.fromEntries(formData.entries());
    
    // Validate payment form
    if (validatePaymentForm(paymentData)) {
        // Show loading state
        const submitBtn = event.target.querySelector('.confirm-payment-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitBtn.disabled = true;
        
        // Simulate payment processing
        setTimeout(() => {
            // Process the complete request (form + payment)
            processCompleteRequest(paymentData);
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }
}

function validatePaymentForm(data) {
    const errors = [];
    
    // Validate card number
    if (!data.cardNumber || data.cardNumber.replace(/\s/g, '').length < 16) {
        errors.push('Please enter a valid card number');
    }
    
    // Validate expiry date
    if (!data.expiryDate || !/^\d{2}\/\d{2}$/.test(data.expiryDate)) {
        errors.push('Please enter a valid expiry date (MM/YY)');
    }
    
    // Validate CVV
    if (!data.cvv || data.cvv.length < 3) {
        errors.push('Please enter a valid CVV');
    }
    
    // Validate cardholder name
    if (!data.cardholderName || data.cardholderName.trim().length < 2) {
        errors.push('Please enter the cardholder name');
    }
    
    // Validate billing address
    if (!data.billingAddress || data.billingAddress.trim().length < 5) {
        errors.push('Please enter a valid billing address');
    }
    
    // Validate email
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (errors.length > 0) {
        showValidationErrors(errors);
        return false;
    }
    
    return true;
}

function processCompleteRequest(paymentData) {
    // Collect all form data
    const transferForm = document.getElementById('transferPrescriptionForm');
    const formData = new FormData(transferForm);
    const formObject = {};
    
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // Get medication data
    const medicationData = getMedicationData();
    formObject.medicationData = medicationData;
    formObject.paymentData = paymentData;
    
    // Show final confirmation modal
    showFinalConfirmationModal(formObject);
}

function showFinalConfirmationModal(data) {
    const modal = document.createElement('div');
    modal.className = 'navigation-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Request Confirmed!</h2>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <div style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-check-circle" style="color: #28a745; font-size: 48px; margin-bottom: 15px;"></i>
                    <h3 style="color: #8B4B8C; margin-bottom: 15px;">Thank you, ${data.firstName} ${data.lastName}!</h3>
                </div>
                <p>Your prescription transfer request has been submitted and payment processed successfully.</p>
                <ul style="text-align: left; margin: 20px 0;">
                    <li>Payment of $7.99 has been processed</li>
                    <li>We'll contact your previous pharmacy within 1 business day</li>
                    <li>The transfer process typically takes 1-3 business days</li>
                    <li>We'll coordinate with your new pharmacy to complete the transfer</li>
                    <li>We'll notify you via ${data.email} when your prescriptions are ready</li>
                    <li>Optimus Health Solutions will handle the delivery to your location</li>
                </ul>
                ${data.medicationData && data.medicationData.transferAll ? 
                    '<div style="background: #f0e6f0; padding: 15px; border-radius: 6px; margin: 15px 0;"><strong>Transfer Request:</strong> All medications will be transferred</div>' :
                    data.medicationData && data.medicationData.medications.length > 0 ?
                    `<div style="background: #f0e6f0; padding: 15px; border-radius: 6px; margin: 15px 0;"><strong>Medications to Transfer:</strong><br>${data.medicationData.medications.map(med => `• ${med.name}${med.rxNumber ? ` (Rx: ${med.rxNumber})` : ''}`).join('<br>')}</div>` : ''}
                <div style="background: #f0e6f0; padding: 15px; border-radius: 6px; margin: 20px 0;">
                    <strong>Reference Number:</strong> TX-${Date.now().toString().slice(-6)}<br>
                    <strong>Payment Reference:</strong> PAY-${Date.now().toString().slice(-8)}<br>
                    <strong>Estimated Completion:</strong> ${getEstimatedCompletionDate()}
                </div>
                <p style="font-size: 14px; color: #666;">If you have any questions, please call us at 717-251-5105.</p>
            </div>
            <div class="modal-footer">
                <button class="modal-btn primary" onclick="closeModalAndReset()">Close</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    const closeBtn = modal.querySelector('.close-btn');
    const modalOverlay = modal;
    
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
        closeModalAndReset();
    });
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            document.body.removeChild(modal);
            closeModalAndReset();
        }
    });
}

function closeModalAndReset() {
    // Go back to main form
    goBackToForm();
    
    // Reset the form
    const transferForm = document.getElementById('transferPrescriptionForm');
    if (transferForm) {
        transferForm.reset();
    }
    
    // Reset medication container to just one row
    const container = document.getElementById('medicationsContainer');
    if (container) {
        container.innerHTML = `
            <div class="medication-row">
                <div class="form-group">
                    <input type="text" name="medicationName[]" placeholder="Medication Name" class="medication-input">
                </div>
                <div class="form-group">
                    <input type="text" name="rxNumber[]" placeholder="Rx Number" class="medication-input">
                </div>
            </div>
        `;
    }
    
    // Reset transfer all checkbox
    const transferAllCheckbox = document.getElementById('transferAll');
    if (transferAllCheckbox) {
        transferAllCheckbox.checked = false;
    }
}

// Payment input formatting functions
function formatCardNumber(event) {
    let value = event.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    if (formattedValue.length > 19) {
        formattedValue = formattedValue.substr(0, 19);
    }
    event.target.value = formattedValue;
}

function formatExpiryDate(event) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    event.target.value = value;
}

function formatCVV(event) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 4) {
        value = value.substring(0, 4);
    }
    event.target.value = value;
}

// Login Modal Functions
function showLoginModal() {
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
        loginModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Focus on email input
        setTimeout(() => {
            const emailInput = document.getElementById('loginEmail');
            if (emailInput) {
                emailInput.focus();
            }
        }, 100);
    }
}

function hideLoginModal() {
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

function togglePassword() {
    const passwordInput = document.getElementById('loginPassword');
    const toggleBtn = document.querySelector('.password-toggle i');
    
    if (passwordInput && toggleBtn) {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleBtn.className = 'fas fa-eye-slash';
        } else {
            passwordInput.type = 'password';
            toggleBtn.className = 'fas fa-eye';
        }
    }
}

function showForgotPassword() {
    alert('Password reset functionality would be implemented here. For now, please contact support at support@optimushs.com');
}

function showCreateAccount() {
    alert('Account creation functionality would be implemented here. For now, please call 917-993-0549 to create an account.');
}

function refillWithoutAccount() {
    hideLoginModal();
    // Scroll to the main prescription request form
    const mainForm = document.querySelector('.request-form');
    if (mainForm) {
        mainForm.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize login form
function initializeLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const loginModal = document.getElementById('loginModal');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginSubmission);
    }
    
    // Close modal when clicking outside
    if (loginModal) {
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                hideLoginModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideLoginModal();
        }
    });
}

function handleLoginSubmission(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const loginData = Object.fromEntries(formData.entries());
    
    // Basic validation
    if (!loginData.email || !loginData.password) {
        alert('Please enter both email and password.');
        return;
    }
    
    if (!isValidEmail(loginData.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Show loading state
    const submitBtn = event.target.querySelector('.login-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'LOGGING IN...';
    submitBtn.disabled = true;
    
    // Simulate login process
    setTimeout(() => {
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        alert('Login successful! You would now be redirected to your prescription dashboard.');
        
        // Hide modal
        hideLoginModal();
        
        // In a real application, this would redirect to the user's dashboard
        // window.location.href = '/dashboard';
    }, 2000);
}

// City Selector Functions
function showCitySelector() {
    const modal = document.createElement('div');
    modal.className = 'navigation-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Select Your City</h2>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <p>Choose your city to see available pharmacy locations and delivery options.</p>
                
                <div class="city-search">
                    <input type="text" id="citySearch" placeholder="Search for your city..." class="city-search-input">
                    <i class="fas fa-search"></i>
                </div>
                
                <div class="city-list">
                    <div class="city-item" onclick="selectCity('Newark, NJ', 'New Jersey, US')">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="city-info">
                            <h4>Newark, NJ</h4>
                            <p>New Jersey, US</p>
                        </div>
                    </div>
                    <div class="city-item" onclick="selectCity('New York, NY', 'New York, US')">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="city-info">
                            <h4>New York, NY</h4>
                            <p>New York, US</p>
                        </div>
                    </div>
                    <div class="city-item" onclick="selectCity('Philadelphia, PA', 'Pennsylvania, US')">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="city-info">
                            <h4>Philadelphia, PA</h4>
                            <p>Pennsylvania, US</p>
                        </div>
                    </div>
                    <div class="city-item" onclick="selectCity('Boston, MA', 'Massachusetts, US')">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="city-info">
                            <h4>Boston, MA</h4>
                            <p>Massachusetts, US</p>
                        </div>
                    </div>
                    <div class="city-item" onclick="selectCity('Baltimore, MD', 'Maryland, US')">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="city-info">
                            <h4>Baltimore, MD</h4>
                            <p>Maryland, US</p>
                        </div>
                    </div>
                    <div class="city-item" onclick="selectCity('Washington, DC', 'District of Columbia, US')">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="city-info">
                            <h4>Washington, DC</h4>
                            <p>District of Columbia, US</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    const closeBtn = modal.querySelector('.close-btn');
    const modalOverlay = modal;
    const citySearch = modal.querySelector('#citySearch');
    
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            document.body.removeChild(modal);
        }
    });
    
    // Add search functionality
    citySearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const cityItems = modal.querySelectorAll('.city-item');
        
        cityItems.forEach(item => {
            const cityName = item.querySelector('h4').textContent.toLowerCase();
            const stateName = item.querySelector('p').textContent.toLowerCase();
            
            if (cityName.includes(searchTerm) || stateName.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
    
    // Focus on search input
    setTimeout(() => {
        citySearch.focus();
    }, 100);
}

// City data with coordinates and pharmacy information
const cityData = {
    'Newark, NJ': {
        coordinates: { lat: 40.7357, lng: -74.1724 },
        zoom: 12,
        pharmacies: [
            {
                name: 'CVS Pharmacy - Downtown',
                address: '123 Main St, Newark, NJ 07102',
                position: { lat: 40.7357, lng: -74.1724 },
                type: 'cvs'
            },
            {
                name: 'Walgreens - Medical Center',
                address: '456 Health Ave, Newark, NJ 07103',
                position: { lat: 40.7421, lng: -74.1815 },
                type: 'walgreens'
            },
            {
                name: 'Rite Aid - University Heights',
                address: '789 University Blvd, Newark, NJ 07104',
                position: { lat: 40.7289, lng: -74.1632 },
                type: 'riteaid'
            },
            {
                name: 'Independent Pharmacy Plus',
                address: '321 Commerce St, Newark, NJ 07105',
                position: { lat: 40.7198, lng: -74.1756 },
                type: 'independent'
            }
        ]
    },
    'New York, NY': {
        coordinates: { lat: 40.7128, lng: -74.0060 },
        zoom: 11,
        pharmacies: [
            {
                name: 'CVS Pharmacy - Times Square',
                address: '1500 Broadway, New York, NY 10036',
                position: { lat: 40.7580, lng: -73.9855 },
                type: 'cvs'
            },
            {
                name: 'Walgreens - Union Square',
                address: '200 Park Ave S, New York, NY 10003',
                position: { lat: 40.7359, lng: -73.9911 },
                type: 'walgreens'
            },
            {
                name: 'Rite Aid - Financial District',
                address: '100 Wall St, New York, NY 10005',
                position: { lat: 40.7074, lng: -74.0113 },
                type: 'riteaid'
            },
            {
                name: 'Independent Pharmacy - Upper East Side',
                address: '1234 Lexington Ave, New York, NY 10028',
                position: { lat: 40.7736, lng: -73.9566 },
                type: 'independent'
            }
        ]
    },
    'Philadelphia, PA': {
        coordinates: { lat: 39.9526, lng: -75.1652 },
        zoom: 12,
        pharmacies: [
            {
                name: 'CVS Pharmacy - Center City',
                address: '123 Market St, Philadelphia, PA 19106',
                position: { lat: 39.9526, lng: -75.1652 },
                type: 'cvs'
            },
            {
                name: 'Walgreens - University City',
                address: '456 Chestnut St, Philadelphia, PA 19104',
                position: { lat: 39.9496, lng: -75.1968 },
                type: 'walgreens'
            },
            {
                name: 'Rite Aid - South Philly',
                address: '789 Broad St, Philadelphia, PA 19147',
                position: { lat: 39.9369, lng: -75.1652 },
                type: 'riteaid'
            },
            {
                name: 'Independent Pharmacy - Old City',
                address: '321 Arch St, Philadelphia, PA 19106',
                position: { lat: 39.9526, lng: -75.1452 },
                type: 'independent'
            }
        ]
    },
    'Boston, MA': {
        coordinates: { lat: 42.3601, lng: -71.0589 },
        zoom: 12,
        pharmacies: [
            {
                name: 'CVS Pharmacy - Downtown Crossing',
                address: '123 Washington St, Boston, MA 02108',
                position: { lat: 42.3551, lng: -71.0656 },
                type: 'cvs'
            },
            {
                name: 'Walgreens - Back Bay',
                address: '456 Newbury St, Boston, MA 02115',
                position: { lat: 42.3503, lng: -71.0804 },
                type: 'walgreens'
            },
            {
                name: 'Rite Aid - North End',
                address: '789 Hanover St, Boston, MA 02113',
                position: { lat: 42.3647, lng: -71.0542 },
                type: 'riteaid'
            },
            {
                name: 'Independent Pharmacy - Beacon Hill',
                address: '321 Charles St, Boston, MA 02114',
                position: { lat: 42.3573, lng: -71.0706 },
                type: 'independent'
            }
        ]
    },
    'Baltimore, MD': {
        coordinates: { lat: 39.2904, lng: -76.6122 },
        zoom: 12,
        pharmacies: [
            {
                name: 'CVS Pharmacy - Inner Harbor',
                address: '123 Pratt St, Baltimore, MD 21202',
                position: { lat: 39.2854, lng: -76.6122 },
                type: 'cvs'
            },
            {
                name: 'Walgreens - Fells Point',
                address: '456 Thames St, Baltimore, MD 21231',
                position: { lat: 39.2804, lng: -76.5922 },
                type: 'walgreens'
            },
            {
                name: 'Rite Aid - Mount Vernon',
                address: '789 Charles St, Baltimore, MD 21201',
                position: { lat: 39.2954, lng: -76.6172 },
                type: 'riteaid'
            },
            {
                name: 'Independent Pharmacy - Canton',
                address: '321 O\'Donnell St, Baltimore, MD 21224',
                position: { lat: 39.2754, lng: -76.5722 },
                type: 'independent'
            }
        ]
    },
    'Washington, DC': {
        coordinates: { lat: 38.9072, lng: -77.0369 },
        zoom: 12,
        pharmacies: [
            {
                name: 'CVS Pharmacy - Dupont Circle',
                address: '123 Connecticut Ave NW, Washington, DC 20036',
                position: { lat: 38.9096, lng: -77.0434 },
                type: 'cvs'
            },
            {
                name: 'Walgreens - Georgetown',
                address: '456 M St NW, Washington, DC 20007',
                position: { lat: 38.9048, lng: -77.0673 },
                type: 'walgreens'
            },
            {
                name: 'Rite Aid - Capitol Hill',
                address: '789 Pennsylvania Ave SE, Washington, DC 20003',
                position: { lat: 38.8898, lng: -76.9959 },
                type: 'riteaid'
            },
            {
                name: 'Independent Pharmacy - Adams Morgan',
                address: '321 18th St NW, Washington, DC 20009',
                position: { lat: 38.9216, lng: -77.0425 },
                type: 'independent'
            }
        ]
    }
};

function selectCity(city, state) {
    // Update the location display
    const locationSpan = document.querySelector('.location-context span');
    if (locationSpan) {
        locationSpan.textContent = state;
    }
    
    // Close the modal
    const modal = document.querySelector('.navigation-modal');
    if (modal) {
        document.body.removeChild(modal);
    }
    
    // Update the map with new city data
    updateMapForCity(city);
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'city-change-success';
    successMessage.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #8B4B8C, #A569BD);
            color: white;
            padding: 12px 20px;
            border-radius: 6px;
            margin: 10px 0;
            font-weight: 500;
            text-align: center;
            animation: slideInDown 0.3s ease-out;
        ">
            <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
            Location updated to ${city} - Map updated with local pharmacies
        </div>
    `;
    
    // Insert after the location context
    const locationContext = document.querySelector('.location-context');
    if (locationContext) {
        locationContext.parentNode.insertBefore(successMessage, locationContext.nextSibling);
        
        // Remove success message after 4 seconds
        setTimeout(() => {
            if (successMessage.parentNode) {
                successMessage.remove();
            }
        }, 4000);
    }
}

// Function to update map for selected city
function updateMapForCity(city) {
    const cityInfo = cityData[city];
    
    if (!cityInfo) {
        console.warn(`No data found for city: ${city}`);
        return;
    }
    
    // Check if Google Maps is available
    if (typeof google === 'undefined' || !google.maps || !window.optimusMap) {
        console.warn('Google Maps not available, updating fallback map');
        updateFallbackMapForCity(city, cityInfo);
        return;
    }
    
    const map = window.optimusMap;
    
    // Clear existing markers
    if (window.currentMarkers) {
        window.currentMarkers.forEach(marker => marker.setMap(null));
    }
    
    // Update map center and zoom
    map.setCenter(cityInfo.coordinates);
    map.setZoom(cityInfo.zoom);
    
    // Add new pharmacy markers for the selected city
    window.currentMarkers = [];
    cityInfo.pharmacies.forEach(pharmacy => {
        const marker = new google.maps.Marker({
            position: pharmacy.position,
            map: map,
            title: pharmacy.name,
            icon: getPharmacyIcon(pharmacy.type)
        });
        
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div style="padding: 10px;">
                    <h3 style="margin: 0 0 5px 0; color: #333;">${pharmacy.name}</h3>
                    <p style="margin: 0; color: #666; font-size: 14px;">${pharmacy.address}</p>
                    <button onclick="selectPharmacy('${pharmacy.name}', '${pharmacy.address}')" 
                            style="margin-top: 10px; padding: 8px 16px; background: #8B4B8C; color: white; border: none; border-radius: 4px; cursor: pointer;">
                        Select Pharmacy
                    </button>
                </div>
            `
        });
        
        marker.addListener('click', () => {
            // Close any open info windows
            if (window.currentInfoWindow) {
                window.currentInfoWindow.close();
            }
            infoWindow.open(map, marker);
            window.currentInfoWindow = infoWindow;
        });
        
        window.currentMarkers.push(marker);
    });
    
    console.log(`Map updated for ${city} with ${cityInfo.pharmacies.length} pharmacies`);
}

// Function to update fallback map for selected city
function updateFallbackMapForCity(city, cityInfo) {
    const mapContainer = document.getElementById('map');
    mapContainer.innerHTML = `
        <div class="fallback-map">
            <div class="fallback-content">
                <i class="fas fa-map-marked-alt"></i>
                <h3>Interactive Map - ${city}</h3>
                <p>To enable the interactive map with pharmacy locations, please add your Google Maps API key to the HTML file.</p>
                <div class="pharmacy-list">
                    <h4>Available Pharmacies in ${city}:</h4>
                    ${cityInfo.pharmacies.map(pharmacy => `
                        <div class="pharmacy-item" onclick="selectFallbackPharmacy('${pharmacy.name}', '${pharmacy.address}')">
                            <i class="fas fa-map-marker-alt ${pharmacy.type}"></i>
                            <div>
                                <strong>${pharmacy.name}</strong><br>
                                <span>${pharmacy.address}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="api-instructions">
                    <p><strong>To get your Google Maps API key:</strong></p>
                    <ol>
                        <li>Go to <a href="https://console.cloud.google.com/" target="_blank">Google Cloud Console</a></li>
                        <li>Create a project and enable Maps JavaScript API & Places API</li>
                        <li>Create an API key and replace "YOUR_API_KEY" in index.html</li>
                    </ol>
                </div>
            </div>
        </div>
    `;
}

function showConfirmSuccessMessage() {
    // Create a temporary success message
    const successMessage = document.createElement('div');
    successMessage.className = 'confirm-success-message';
    successMessage.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #28a745, #20c997);
            color: white;
            padding: 15px 25px;
            border-radius: 25px;
            margin-top: 15px;
            font-weight: 600;
            box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
            animation: slideInUp 0.5s ease-out;
        ">
            <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
            Your prescription delivery request has been confirmed!
        </div>
    `;
    
    // Add to the confirm request section
    const confirmSection = document.querySelector('.confirm-request-section');
    confirmSection.appendChild(successMessage);
    
    // Remove message after 4 seconds
    setTimeout(() => {
        if (successMessage.parentNode) {
            successMessage.remove();
        }
    }, 4000);
}

function resetConfirmButton() {
    const confirmBtn = document.getElementById('confirmRequestBtn');
    const confirmText = confirmBtn.querySelector('.confirm-text');
    const confirmIcon = confirmBtn.querySelector('.confirm-icon');
    
    // Remove confirmed class
    confirmBtn.classList.remove('confirmed');
    
    // Reset text
    confirmText.textContent = 'Confirm Request';
    
    // Reset icon animation
    confirmIcon.style.animation = '';
    
    // Re-enable button
    confirmBtn.disabled = false;
    confirmBtn.style.cursor = 'pointer';
}

// Medication management functions
function addAnotherMedication() {
    const container = document.getElementById('medicationsContainer');
    const newRow = document.createElement('div');
    newRow.className = 'medication-row';
    newRow.innerHTML = `
        <div class="form-group">
            <input type="text" name="medicationName[]" placeholder="Medication Name" class="medication-input">
        </div>
        <div class="form-group">
            <input type="text" name="rxNumber[]" placeholder="Rx Number" class="medication-input">
        </div>
    `;
    
    container.appendChild(newRow);
    
    // Focus on the first input of the new row
    const newInput = newRow.querySelector('input[name="medicationName[]"]');
    newInput.focus();
    
    // Add smooth animation
    newRow.style.opacity = '0';
    newRow.style.transform = 'translateY(-10px)';
    setTimeout(() => {
        newRow.style.transition = 'all 0.3s ease';
        newRow.style.opacity = '1';
        newRow.style.transform = 'translateY(0)';
    }, 10);
}

function getMedicationData() {
    const medicationNames = document.querySelectorAll('input[name="medicationName[]"]');
    const rxNumbers = document.querySelectorAll('input[name="rxNumber[]"]');
    const transferAll = document.getElementById('transferAll').checked;
    
    const medications = [];
    
    if (transferAll) {
        return { transferAll: true, medications: [] };
    }
    
    medicationNames.forEach((nameInput, index) => {
        const name = nameInput.value.trim();
        const rxNumber = rxNumbers[index] ? rxNumbers[index].value.trim() : '';
        
        if (name) {
            medications.push({
                name: name,
                rxNumber: rxNumber
            });
        }
    });
    
    return { transferAll: false, medications: medications };
}

// Phone number display functions
function showPhoneNumber() {
    const phoneDisplay = document.getElementById('phoneNumberDisplay');
    if (phoneDisplay) {
        phoneDisplay.style.display = 'block';
        
        // Add smooth animation
        phoneDisplay.style.opacity = '0';
        phoneDisplay.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            phoneDisplay.style.transition = 'all 0.3s ease';
            phoneDisplay.style.opacity = '1';
            phoneDisplay.style.transform = 'translateY(0)';
        }, 10);
    }
}

function hidePhoneNumber() {
    const phoneDisplay = document.getElementById('phoneNumberDisplay');
    if (phoneDisplay) {
        phoneDisplay.style.transition = 'all 0.3s ease';
        phoneDisplay.style.opacity = '0';
        phoneDisplay.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            phoneDisplay.style.display = 'none';
        }, 300);
    }
}
