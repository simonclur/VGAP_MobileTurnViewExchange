# VGAP Turn Viewer 📊

A comprehensive web-based application for viewing and analyzing VGA Planets turn data with interactive starmap visualization, advanced table management, and mobile-responsive design.

## 🌟 Features

### 📱 Multi-Platform Support
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Touch-Friendly**: Optimized for touchscreen interaction
- **Cross-Browser**: Compatible with modern web browsers

### 📊 Advanced Table Management
- **Multiple Data Views**: Planets, Ships, Starbases, and Future Starbases tables
- **Sticky ID Columns**: Easy reference during horizontal scrolling
- **Smart Sorting**: Click any column header to sort data
- **Resource Highlighting**: Strategic analysis with color-coded resource-rich locations
- **Mobile Cards**: Tables transform into vertical card layout on mobile

### 🌌 Interactive Starmap
- **Zoom & Pan**: Smooth navigation with mouse wheel and drag
- **Cross-Highlighting**: Hover table rows to highlight starmap objects
- **Comprehensive Tooltips**: Detailed information on hover
- **Multi-Object Display**: Planets, ships, starbases, and nebulas

### 🏗️ Strategic Analysis Tools
- **Future Starbases Planning**: Construction progress tracking and resource analysis
- **Resource Network Analysis**: 84LY connectivity analysis for optimal starbase placement
- **Demographics Tracking**: Population growth, tax rates, and happiness monitoring
- **Visual Progress Indicators**: Progress bars for construction projects

## 🚀 Quick Start

### Option 1: Use the Applications

1. **Download the Project**: Clone or download the repository
2. **Open in Browser**: Navigate to the `VGAP_MobileTurnViewExchange` folder
3. **Choose Your Tool**:
   - `mobile_vgap_viewer.html` - Live turn data loader (requires VGAP login)
   - `saved_turn_viewer.html` - Analyze saved turn files

### Option 2: Run with Local Server (Recommended)

For best performance and full functionality:

```bash
# Navigate to the project directory
cd VGAP_MobileTurnViewExchange

# Start a simple HTTP server
# Python 3
python -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000

# Or Node.js (if you have it)
npx http-server -p 8000
```

Then open `http://localhost:8000/saved_turn_viewer.html` in your browser.

## 📖 User Guides

### 🚀 Live Turn Loader (`mobile_vgap_viewer.html`)

**Purpose**: Load and analyze your current turn data directly from the VGAP servers.

**How to Use**:
1. Open `mobile_vgap_viewer.html` in your browser
2. Enter your VGAP username and password
3. Select your game from the dropdown
4. Click "Load Turn Data"
5. Explore your empire with interactive tables and starmap

**Features**:
- Real-time data loading from VGAP servers
- Automatic game detection
- Secure credential handling (never stored)
- Full table and starmap functionality

### 📁 Saved Turn Viewer (`saved_turn_viewer.html`)

**Purpose**: Analyze previously saved turn data files for detailed strategic planning.

**How to Use**:
1. Open `saved_turn_viewer.html` in your browser
2. Click "Choose JSON File" or drag & drop a saved turn file
3. Or click "🧪 Load Test Data" to try the demo
4. Use the tab buttons to switch between data views:
   - 🪐 My Planets
   - 🏭 My Starbases  
   - 🏗️ Future Starbases
   - 🚢 My Ships
   - And more...

**Pro Tips**:
- **Sticky ID Columns**: The first column stays visible when scrolling horizontally
- **Resource Highlighting**: Purple-highlighted rows indicate resource-rich planets (2000+ minerals)
- **Cross-Highlighting**: Hover table rows to see corresponding starmap objects
- **Mobile-Friendly**: On mobile, tables become vertical cards with inline labels

### 🌌 Starmap Features (Both Applications)

**Navigation**:
- **Zoom**: Mouse wheel or +/- buttons
- **Pan**: Click and drag to move around
- **Reset**: Double-click to return to full view

**Display Options**:
- Toggle planets, ships, starbases, and nebulas
- Color-coded by ownership and status
- Hover for detailed tooltips

**Strategic Analysis**:
- Resource-rich planets highlighted in purple
- Starbase connectivity analysis (84LY range)
- Future starbase planning with progress tracking

## 🏗️ Installation & Setup

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required for basic use
- Optional: Local HTTP server for enhanced performance

### File Structure
```
VGAP_MobileTurnViewExchange/
├── mobile_vgap_viewer.html      # Live turn loader
├── saved_turn_viewer.html       # Saved turn analyzer  
├── test_data_embed.js          # Sample data for testing
├── ARCHITECTURE.md             # Technical documentation
├── USER_GUIDE_LIVE.md         # Detailed live loader guide
├── USER_GUIDE_SAVED.md        # Detailed saved viewer guide
└── README.md                  # This file
```

## 🔧 Configuration

### Data Sources
- **Live Data**: Connects to `api.planets.nu` for real-time turn information
- **Saved Data**: Accepts JSON files exported from VGAP Mobile Turn Viewer
- **Test Data**: Built-in sample data for demonstration

### Customization
- **Color Schemes**: Modify CSS variables in the `<style>` section
- **Display Options**: Checkbox controls for starmap elements
- **Table Columns**: Column definitions in JavaScript can be customized

## 📱 Mobile Experience

The application is designed mobile-first with special considerations for smaller screens:

### Mobile Optimizations
- **Vertical Card Layout**: Tables become stacked cards on mobile
- **Inline Labels**: Column headers appear as labels next to each value
- **Touch Targets**: All interactive elements sized for touch (44px minimum)
- **Simplified Navigation**: Streamlined controls for mobile use

### Mobile Tips
- **Landscape Mode**: Better for viewing wide tables
- **Pinch to Zoom**: Use native browser zoom for detailed analysis
- **Tab Navigation**: Swipe or tap to switch between data sections

## 🎯 Use Cases

### Strategic Planning
- **Resource Analysis**: Identify mineral-rich planets for development
- **Starbase Placement**: Plan optimal starbase locations using connectivity analysis
- **Fleet Management**: Track ship positions and missions

### Turn Analysis
- **Empire Overview**: Quick snapshot of your empire's status
- **Growth Tracking**: Monitor population and happiness changes
- **Construction Planning**: Track starbase building progress

### Alliance Coordination
- **Data Sharing**: Export and share turn data with allies
- **Strategic Discussion**: Visual aid for planning meetings
- **Resource Coordination**: Identify mutual support opportunities

## 🐛 Troubleshooting

### Common Issues

**Tables Not Loading**
- Check browser console for errors
- Verify JSON file format is correct
- Try refreshing the page

**Starmap Not Displaying**
- Ensure JavaScript is enabled
- Check that data contains coordinate information
- Try different zoom levels

**Mobile Layout Issues**
- Verify viewport meta tag is present
- Check CSS media queries are applied
- Test in browser developer tools

### Performance Tips
- Use local HTTP server for better performance
- Close unused browser tabs
- Clear browser cache if experiencing issues

## 🤝 Contributing

### How to Contribute
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly (especially mobile responsiveness)
5. Submit a pull request

### Development Guidelines
- Follow existing code style and naming conventions
- Test on multiple browsers and devices
- Update documentation for new features
- Maintain backward compatibility with existing data formats

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **VGA Planets Community**: For the amazing game and continued support
- **Planets.nu Team**: For providing the API and game platform
- **Contributors**: Everyone who has provided feedback and improvements

## 📧 Support

For questions, suggestions, or bug reports:
- Create an issue in the repository
- Check the troubleshooting section above
- Review the detailed user guides in the documentation

---

**Version**: 2.0  
**Last Updated**: September 2025  
**Compatibility**: Modern browsers, mobile devices, tablets

*Enhance your VGA Planets experience with comprehensive turn analysis and strategic planning tools!* 🚀