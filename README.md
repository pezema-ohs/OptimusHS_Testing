# Optimus Health Solutions - Prescription Delivery Web App

A modern web application for prescription delivery services, inspired by the Uber interface design. This application allows users to request prescription deliveries from pharmacies to their homes.

## Features

### Navigation Bar
- **How it works** - Information about the service
- **About Us** - Company information
- **For Independent Pharmacies** - Pharmacy partnership information
- **Earn as a Driver** - Driver recruitment
- **EN (language toggle)** - Language selection
- **Need Help?** - Support and help
- **Login** - User authentication
- **Sign Up** - User registration

### Main Interface
- **Left Panel**: Prescription request form with:
  - Pickup location (pharmacy) with Google Places autocomplete
  - Drop-off address with Google Places autocomplete
  - Date and time picker for delivery scheduling
  - Pharmacy suggestions with clickable options

- **Right Panel**: Interactive Google Map showing:
  - Pharmacy locations with custom markers
  - Different pharmacy types (CVS, Walgreens, Rite Aid, Independent)
  - Clickable markers with pharmacy information
  - Info windows with "Select Pharmacy" functionality

## Setup Instructions

### Prerequisites
- A modern web browser
- Google Maps API key (for full functionality)

### Installation

1. **Clone or download the project files**
   ```bash
   # If using git
   git clone <repository-url>
   cd Optimus_testing
   ```

2. **Get a Google Maps API Key**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the following APIs:
     - Maps JavaScript API
     - Places API
   - Create credentials (API Key)
   - Restrict the API key to your domain for security

3. **Configure the API Key**
   - Open `index.html`
   - Replace `YOUR_API_KEY` in the Google Maps script tag with your actual API key:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY&libraries=places"></script>
   ```

4. **Open the Application**
   - Simply open `index.html` in your web browser
   - Or serve it using a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

## File Structure

```
Optimus_testing/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Key Features Implemented

### 1. Responsive Design
- Mobile-first approach
- Grid layout that adapts to different screen sizes
- Collapsible navigation on mobile devices

### 2. Google Maps Integration
- Interactive map with pharmacy markers
- Custom icons for different pharmacy types
- Info windows with pharmacy details
- Place selection functionality

### 3. Form Functionality
- Google Places autocomplete for addresses
- Custom date/time picker modals
- Form validation
- Pharmacy suggestion clicks

### 4. Modern UI/UX
- Clean, professional design inspired by Uber
- Smooth animations and transitions
- Intuitive user interface
- Accessibility considerations

## Customization

### Adding New Pharmacies
Edit the `pharmacies` array in `script.js`:
```javascript
const pharmacies = [
    {
        name: 'Your Pharmacy Name',
        address: '123 Your Street, City, State ZIP',
        position: { lat: 40.1234, lng: -74.5678 },
        type: 'independent' // or 'cvs', 'walgreens', 'riteaid'
    }
    // Add more pharmacies...
];
```

### Styling Customization
- Modify `styles.css` to change colors, fonts, or layout
- The main brand color is `#00d4aa` (teal/green)
- Font family is set to 'UberMove' with fallbacks

### Adding New Features
- Form submission can be extended to send data to a backend API
- Additional map features can be added using the Google Maps API
- User authentication can be integrated with the login/signup buttons

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Security Notes

- Always restrict your Google Maps API key to specific domains
- Consider implementing HTTPS for production use
- Add proper backend validation for form submissions
- Implement user authentication and authorization

## Support

For technical support or questions about this application, please refer to the documentation or contact the development team.

## License

This project is for demonstration purposes. Please ensure you have proper licensing for any commercial use.
