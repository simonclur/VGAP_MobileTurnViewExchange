# Saved Turn Viewer User Guide 📁

The Saved Turn Viewer (`saved_turn_viewer.html`) allows you to analyze previously saved turn data files for detailed strategic planning and historical analysis.

## 📋 Table of Contents
- [Getting Started](#getting-started)
- [Loading Turn Data](#loading-turn-data)
- [Table Analysis](#table-analysis)
- [Starmap Features](#starmap-features)
- [Strategic Planning](#strategic-planning)
- [Mobile Experience](#mobile-experience)
- [Data Management](#data-management)
- [Advanced Features](#advanced-features)
- [Troubleshooting](#troubleshooting)

## 🚀 Getting Started

### Prerequisites
- Saved turn data file (JSON format from VGAP Mobile Turn Viewer)
- Modern web browser
- No internet connection required (works offline)

### Opening the Application
1. Navigate to your project folder
2. Open `saved_turn_viewer.html` in your web browser
3. Or use local server: `http://localhost:8000/saved_turn_viewer.html`

### Test Mode
- **Built-in Demo**: Click "🧪 Load Test Data" to try with sample data
- **Learning Tool**: Perfect for understanding features before using real data
- **No Login Required**: Works completely offline

## 📂 Loading Turn Data

### File Upload Methods

#### Method 1: File Selection
1. Click "Choose JSON File" button
2. Browse to your saved turn file
3. Select the JSON file exported from VGAP Mobile Turn Viewer
4. Data loads automatically upon selection

#### Method 2: Drag & Drop
1. Drag your JSON file from your file manager
2. Drop it onto the drop zone area
3. Visual feedback shows when file is ready to drop
4. Data loads immediately after drop

#### Method 3: Test Data
1. Enable "Test Mode" checkbox at the top
2. Click "🧪 Load Test Data" 
3. Sample empire data loads instantly
4. Perfect for trying features without real data

### File Validation
The application automatically validates your data:
- **Format Check**: Ensures valid JSON structure
- **Data Verification**: Confirms required VGAP data fields
- **Error Messages**: Clear feedback if file format is incorrect
- **File Info**: Displays game details once loaded successfully

### Supported File Formats
- **JSON Files**: Exported from VGAP Mobile Turn Viewer
- **Turn Archives**: Historical turn data saves
- **Custom Exports**: Any JSON following VGAP data structure

## 📊 Table Analysis

### Navigation Tabs
Switch between different data views using the tab buttons:

#### 🪐 My Planets
Comprehensive planet information including:
- **Basic Data**: ID, Name, Coordinates, Temperature
- **Population**: Colonist and Native populations
- **Demographics**: Population growth rates (`colchange`, `nativechange`)
- **Economics**: Tax rates for colonists and natives
- **Happiness**: Current happiness levels and recent changes
- **Resources**: Mineral deposits and current stockpiles
- **Infrastructure**: Factories, mines, defense posts
- **Starbase Status**: Shows "Building" for planets constructing starbases

**Key Features**:
- Resource-rich planets highlighted in purple (2000+ total minerals)
- Color-coded temperature ranges from cold (blue) to hot (red)
- Happiness levels with green (high), yellow (medium), red (low)
- Starbase connectivity analysis for strategic planning

#### 🏭 My Starbases
Current starbase installations:
- **Location**: Planet name and coordinates
- **Technology**: Engine, Hull, Beam, and Torpedo tech levels
- **Defense**: Base defense strength and fighter squadrons
- **Construction**: Ships currently being built
- **Storage**: Available minerals and supplies
- **Special Features**: Advanced equipment and capabilities

**Strategic Insights**:
- Tech level optimization opportunities
- Defense coverage analysis
- Construction bottlenecks identification
- Resource distribution planning

#### 🏗️ Future Starbases (Strategic Planning Tool)
The crown jewel for strategic analysis:
- **Candidate Planets**: Resource-rich locations for potential starbases
- **Progress Tracking**: Visual progress bars showing resource gathering status
- **Resource Requirements**: Exact materials needed for construction
- **Connectivity**: Distance to nearest existing starbase
- **Strategic Value**: Color-coded priority ranking
- **Build Status**: Ready/Planning/Resource Gathering phases

**Progress Indicators**:
- **Green Bars**: Resources ready for construction
- **Yellow/Orange Bars**: Partial resource accumulation
- **Red Numbers**: Missing resources with quantities
- **"Ready!"**: Planets that can build starbase immediately

#### 🌍 Enemy Planets & 🏭 Enemy Starbases
Intelligence on opponent positions:
- **Known Locations**: Planets and starbases you've discovered
- **Ownership**: Color-coded by race/player
- **Strategic Assessment**: Evaluate threat levels
- **Resource Analysis**: Estimate enemy capabilities

#### 🚢 My Ships & Enemy Ships
Fleet management and intelligence:
- **Ship Details**: Name, hull type, current location
- **Mission Status**: Current orders and targets
- **Cargo**: Fuel, supplies, minerals aboard
- **Condition**: Hull damage and crew status
- **Movement**: Current waypoints and destinations
- **Capabilities**: Weapon loadouts and special equipment

**Fleet Analysis Features**:
- Hull type identification with game data lookup
- Damage assessment with color coding
- Mission optimization opportunities
- Supply chain management

### Table Features

#### Sticky ID Columns
- **Always Visible**: First column (ID) remains visible during horizontal scrolling
- **Easy Reference**: Keep track of objects while viewing detailed data
- **CSS-Based**: Smooth, browser-native implementation
- **Consistent**: Works across all table types

#### Sorting Capabilities
- **Click Headers**: Sort by any column ascending/descending
- **Visual Indicators**: Arrow icons show current sort direction
- **Multiple Data Types**: Numbers, text, dates all sort correctly
- **Persistent State**: Sort settings maintained while browsing

#### Resource Highlighting
- **Purple Background**: Planets/starbases with 2000+ total minerals
- **Strategic Value**: Identifies high-priority development targets
- **Connectivity Analysis**: Shows distance to existing infrastructure
- **Visual Priority**: Instantly spot most valuable locations

## 🌌 Starmap Features

### Interactive Navigation

#### Zoom Controls
- **Mouse Wheel**: Smooth zoom in/out
- **Zoom Buttons**: +/- controls for precise adjustment
- **Zoom Indicator**: Shows current zoom level
- **Double-Click**: Reset to full galaxy view

#### Panning
- **Click & Drag**: Move around the galaxy
- **Smooth Movement**: Hardware-accelerated panning
- **Edge Boundaries**: Automatic boundaries prevent over-panning
- **Center on Objects**: Click table rows to center starmap

#### Display Toggles
Control what's visible on the starmap:
- **☑️ Planets**: Toggle planet visibility
- **☑️ Ships**: Show/hide fleet positions  
- **☑️ Starbases**: Display starbase locations
- **☑️ Nebulas**: Ion storms and space phenomena

### Cross-Highlighting System

#### Table-to-Starmap
- **Hover Effects**: Hover table rows to highlight starmap objects
- **Selection Sync**: Click table rows to select and center starmap objects
- **Visual Feedback**: Glowing borders indicate highlighted objects
- **Instant Response**: Real-time highlighting with no delays

#### Starmap-to-Table
- **Reverse Highlighting**: Hover starmap objects to highlight table rows
- **Object Information**: Detailed tooltips on starmap hover
- **Quick Access**: Click starmap objects to jump to table entries
- **Visual Connection**: See relationships between map and data

### Starmap Object Types

#### Planet Display
- **Color Coding**: Blue (yours), Red (enemy), Gray (neutral)
- **Size Indication**: Larger circles for more developed planets
- **Starbase Indication**: Special border for planets with starbases
- **Resource Highlighting**: Purple glow for resource-rich planets

#### Ship Visualization
- **Fleet Positions**: Current ship locations
- **Movement Vectors**: Shows ship movement direction
- **Hull Type Icons**: Different shapes for different ship classes
- **Status Colors**: Damage and mission status indication

#### Starbase Display
- **Defensive Range**: 81LY influence circles
- **Tech Level**: Visual indication of capabilities
- **Construction Status**: Special markers for bases under construction
- **Strategic Position**: Connectivity to resource networks

### Comprehensive Tooltips
Hover over any starmap object for detailed information:

#### Planet Tooltips
- **Basic Info**: Name, coordinates, temperature
- **Population**: Colonist and native populations
- **Resources**: Mineral deposits and stockpiles
- **Infrastructure**: Factories, mines, defenses
- **Happiness**: Current happiness levels
- **Strategic Data**: Growth rates, tax settings

#### Ship Tooltips
- **Identity**: Ship name and hull type
- **Mission**: Current orders and destination
- **Status**: Damage, fuel, crew levels
- **Cargo**: Detailed cargo manifest
- **Capabilities**: Weapons and special equipment

#### Starbase Tooltips
- **Location**: Planet name and position
- **Technology**: All tech levels
- **Defense**: Fighters and base defense
- **Construction**: Current build projects
- **Storage**: Available resources

## 🏗️ Strategic Planning

### Future Starbases Analysis

#### Resource Network Planning
The Future Starbases table is your primary strategic planning tool:

1. **Identify Candidates**: Purple-highlighted resource-rich planets
2. **Assess Connectivity**: Check distance to existing starbases  
3. **Track Progress**: Monitor resource gathering with progress bars
4. **Prioritize Construction**: Focus on "Ready!" planets first

#### Strategic Considerations
- **84LY Rule**: Optimal starbase spacing for maximum coverage
- **Resource Accessibility**: Ensure easy access to mineral sources
- **Defensive Coverage**: Protect key supply lines and chokepoints
- **Economic Efficiency**: Minimize travel time for supply ships

#### Construction Planning
- **Resource Requirements**: 
  - 900 Megacredits
  - 120 Duranium  
  - 402 Tritanium
  - 340 Molybdenum
- **Supply Gathering**: Use progress bars to track resource accumulation
- **Build Order**: Prioritize based on strategic value and readiness

### Empire Development Strategy

#### Early Game Focus
- **Population Growth**: Monitor colonist and native growth rates
- **Tax Optimization**: Balance happiness with revenue generation
- **Infrastructure**: Prioritize factories and mines on rich planets
- **Exploration**: Use starmap to identify expansion opportunities

#### Mid Game Expansion  
- **Starbase Network**: Establish key defensive and supply positions
- **Resource Flow**: Optimize mineral extraction and distribution
- **Fleet Development**: Build ships appropriate for your strategic needs
- **Alliance Considerations**: Plan for cooperative or competitive play

#### Late Game Optimization
- **Network Efficiency**: Fine-tune starbase coverage and connectivity
- **Economic Maximization**: Optimize tax rates and production
- **Strategic Positioning**: Control key systems and supply routes
- **End Game Preparation**: Position for victory conditions

### Comparative Analysis
Use historical turn data to:
- **Track Progress**: Compare population and infrastructure growth
- **Identify Trends**: Spot developing opportunities or threats
- **Optimize Strategy**: Adjust tactics based on historical performance
- **Plan Ahead**: Anticipate future needs and challenges

## 📱 Mobile Experience

### Responsive Design
The application transforms for mobile devices:

#### Table-to-Card Conversion
- **Vertical Layout**: Tables become stacked cards on mobile screens
- **Inline Labels**: Column headers appear as labels next to each value
- **Touch-Friendly**: All controls optimized for touch interaction
- **Readable Text**: Font sizes adjusted for mobile screens

#### Mobile Navigation
- **Tab Switching**: Touch-friendly tab buttons
- **Smooth Scrolling**: Optimized for mobile scroll behavior
- **Gesture Support**: Pinch to zoom, swipe to pan on starmap
- **Landscape Mode**: Better for viewing detailed data

### Mobile-Specific Features

#### Touch Optimizations
- **44px Touch Targets**: All interactive elements properly sized
- **Gesture Recognition**: Swipe and pinch support
- **Visual Feedback**: Clear indication of touched elements
- **Responsive Layout**: Adapts to different screen orientations

#### Information Prioritization
- **Most Important First**: Key data shown prominently
- **Progressive Disclosure**: Less critical info available via interaction
- **Optimized Spacing**: Comfortable reading on small screens
- **Quick Actions**: Easy access to common functions

### Mobile Tips
- **Portrait Mode**: Best for browsing table data
- **Landscape Mode**: Better for starmap navigation
- **Pinch Zoom**: Use browser zoom for detailed analysis
- **Tab Navigation**: Swipe between data sections efficiently

## 💾 Data Management

### File Operations

#### Export Functions
- **Copy Data**: Copy current analysis to clipboard
- **Re-save File**: Download data as JSON for backup
- **Selective Export**: Choose specific data tables to save
- **Format Options**: JSON format compatible with other tools

#### Data Validation
- **Format Checking**: Ensures data integrity on load
- **Error Reporting**: Clear messages for data problems
- **Recovery Options**: Suggestions for fixing data issues
- **Backup Recommendations**: Best practices for data preservation

### Historical Analysis

#### Turn Comparison
- **Load Multiple Turns**: Compare different time periods
- **Growth Tracking**: Monitor empire development over time
- **Trend Analysis**: Identify patterns and opportunities
- **Strategic Assessment**: Evaluate decision outcomes

#### Archive Management
- **Organized Storage**: Keep turns organized by date/game
- **Naming Conventions**: Clear file naming for easy identification
- **Backup Strategy**: Maintain multiple copies of important turns
- **Sharing Protocol**: Standard format for alliance data sharing

## ⚡ Advanced Features

### Performance Optimizations

#### Large Dataset Handling
- **Efficient Rendering**: Smooth performance with 1000+ planets
- **Memory Management**: Optimized for long analysis sessions
- **Smooth Scrolling**: Hardware-accelerated table scrolling
- **Responsive Interface**: Maintains interactivity with large datasets

#### Browser Optimization
- **Cross-Browser**: Tested on Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: Optimized for mobile Chrome and Safari
- **Performance Monitoring**: Built-in performance optimization
- **Memory Cleanup**: Automatic resource management

### Customization Options

#### Display Preferences
- **Color Schemes**: Customizable via CSS modifications
- **Column Selection**: Show/hide specific data columns
- **Sorting Preferences**: Default sort orders
- **Layout Options**: Compact, normal, or expanded table views

#### Analysis Tools
- **Custom Highlighting**: Define your own resource thresholds
- **Filter Options**: Create custom data filters
- **Export Formats**: Multiple output formats for data sharing
- **Integration Ready**: APIs for connecting to other tools

## 🐛 Troubleshooting

### Common Issues

#### File Loading Problems
**Symptoms**: "Invalid file format" or data not loading
**Solutions**:
- Verify file is valid JSON format
- Check file was exported from VGAP Mobile Turn Viewer
- Try with test data to isolate issue
- Check browser console for specific error messages

#### Display Issues
**Symptoms**: Tables not formatting correctly or starmap blank
**Solutions**:
- Refresh the page and reload data
- Clear browser cache and cookies  
- Try different browser (Chrome/Firefox recommended)
- Check if JavaScript is enabled

#### Performance Problems  
**Symptoms**: Slow scrolling, unresponsive interface
**Solutions**:
- Close other browser tabs to free memory
- Use desktop browser for large datasets
- Enable hardware acceleration in browser settings
- Try with smaller dataset first

#### Mobile Layout Issues
**Symptoms**: Tables not converting to card view on mobile
**Solutions**:
- Verify viewport meta tag in HTML
- Check CSS media queries are loading
- Try forcing mobile view in browser developer tools
- Refresh page and reload data

### Browser Compatibility

#### Fully Supported
- **Chrome 80+**: Best performance and all features
- **Firefox 75+**: Full compatibility
- **Safari 13+**: Complete support on Mac/iOS
- **Edge 80+**: Full Windows support

#### Limited Support
- **Internet Explorer**: Not supported
- **Old Mobile Browsers**: May have layout issues
- **Older Desktop Browsers**: Some features may not work

### Data Format Issues

#### Valid JSON Requirements
Your turn data file must contain:
- **Basic Structure**: Valid JSON with required VGAP fields
- **Planet Data**: Array of planet objects with standard properties
- **Ship Data**: Fleet information with proper formatting
- **Game Info**: Game settings and player information

#### Common Data Problems
- **Missing Fields**: Some expected properties not present
- **Type Mismatches**: Numbers as strings or vice versa
- **Encoding Issues**: Special characters not properly encoded
- **Corrupted Files**: Incomplete or damaged JSON structure

## 💡 Tips & Best Practices

### Efficient Analysis Workflow

#### Initial Assessment
1. **Load Data**: Start with your most recent turn
2. **Empire Overview**: Check My Planets for overall status
3. **Strategic Review**: Examine Future Starbases for opportunities
4. **Fleet Status**: Review My Ships for mission completion
5. **Intelligence**: Check enemy data for threats and opportunities

#### Deep Analysis Session
1. **Resource Planning**: Identify mineral-rich expansion targets
2. **Infrastructure Review**: Optimize factory/mine construction
3. **Tax Strategy**: Balance happiness with economic needs
4. **Starbase Strategy**: Plan network expansion and optimization
5. **Fleet Deployment**: Coordinate ship missions with strategic goals

### Data Organization

#### File Naming
Use consistent naming conventions:
- `GameName_Turn##_YYYYMMDD.json`
- `BloodBath_Turn15_20250315.json`
- Include game name, turn number, and date

#### Archive Strategy
- **Regular Backups**: Save every turn for historical analysis
- **Key Moments**: Extra saves before major decisions
- **Shared Archives**: Standardized format for alliance data
- **Cloud Storage**: Backup important turns online

### Strategic Applications

#### Alliance Coordination
- **Data Sharing**: Export relevant data for allies
- **Joint Planning**: Use starmap for coordinated strategies
- **Resource Trading**: Identify mutual support opportunities
- **Threat Assessment**: Share intelligence on enemy movements

#### Competitive Analysis
- **Enemy Tracking**: Monitor opponent expansion patterns
- **Strategic Positioning**: Plan to counter enemy moves
- **Resource Denial**: Identify key systems to contest
- **Victory Planning**: Position for end-game scenarios

### Advanced Techniques

#### Multi-Turn Analysis
- **Load Sequential Turns**: Analyze progression over time
- **Growth Tracking**: Monitor population and infrastructure development
- **Strategy Assessment**: Evaluate success of past decisions
- **Predictive Planning**: Anticipate future needs and opportunities

#### Cross-Reference Analysis
- **Table Coordination**: Use multiple tables simultaneously
- **Starmap Integration**: Combine spatial and data analysis
- **Historical Context**: Reference past turns for trend analysis
- **Alliance Intelligence**: Coordinate with partner data

---

## 🆘 Getting Help

### Troubleshooting Steps
1. **Check File Format**: Ensure valid VGAP JSON export
2. **Browser Console**: F12 → Console for error messages
3. **Test Data**: Try built-in test data to isolate issues
4. **Different Browser**: Test with Chrome or Firefox
5. **Clear Cache**: Remove stored browser data

### Support Resources
- **Built-in Help**: Tooltips and interface guidance
- **Test Mode**: Practice with sample data
- **Documentation**: Comprehensive guides and references
- **Community**: VGA Planets forums and communities

*Master your empire's data and dominate the galaxy through superior strategic analysis! 📊*