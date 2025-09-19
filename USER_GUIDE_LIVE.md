# Live Turn Loader User Guide 🚀

The Live Turn Loader (`mobile_vgap_viewer.html`) allows you to connect directly to the VGA Planets servers and analyze your current turn data in real-time.

## 📋 Table of Contents
- [Getting Started](#getting-started)
- [Login Process](#login-process)
- [Game Selection](#game-selection)
- [Data Analysis](#data-analysis)
- [Starmap Navigation](#starmap-navigation)
- [Advanced Features](#advanced-features)
- [Troubleshooting](#troubleshooting)
- [Tips & Best Practices](#tips--best-practices)

## 🚀 Getting Started

### Prerequisites
- Active VGA Planets account on planets.nu
- Modern web browser with JavaScript enabled
- Internet connection for real-time data loading

### Opening the Application
1. Navigate to your project folder
2. Open `mobile_vgap_viewer.html` in your web browser
3. Or use a local server: `http://localhost:8000/mobile_vgap_viewer.html`

### First Time Setup
The application requires no installation or configuration. Simply open and start using!

## 🔐 Login Process

### Credential Entry
1. **Username Field**: Enter your planets.nu username
2. **Password Field**: Enter your planets.nu password
3. **Security**: Credentials are used only for API authentication and never stored

### Authentication Steps
1. Click "Load Games" after entering credentials
2. Wait for game list to populate (usually 2-3 seconds)
3. If authentication fails, verify credentials and try again

### Security Notes
- **No Storage**: Credentials are never saved or cached
- **Secure Connection**: All communication uses HTTPS
- **Session-Based**: Login persists only for current browser session

## 🎮 Game Selection

### Available Games
The dropdown will show:
- **Active Games**: Games where it's currently your turn
- **Waiting Games**: Games waiting for other players
- **Game Details**: Game name, turn number, and your race

### Selection Process
1. Choose your desired game from the dropdown
2. Click "Load Turn Data"
3. Wait for data to load (5-10 seconds for large games)
4. Success message confirms data loading completion

### Game Information Display
Once loaded, you'll see:
- **Game Name**: Current game title
- **Turn Number**: Current turn being analyzed
- **Player Race**: Your race and player ID
- **Empire Status**: Quick overview of your empire

## 📊 Data Analysis

### Table Navigation
Use the tab buttons to switch between data views:

#### 🪐 My Planets
- **Planet Details**: Name, coordinates, temperature, population
- **Resource Information**: Minerals, supplies, megacredits
- **Demographics**: Colonist and native populations with growth rates
- **Happiness Levels**: Color-coded happiness indicators
- **Tax Rates**: Current colonist and native tax settings
- **Starbase Status**: Shows if planet has or is building a starbase

#### 🏭 My Starbases
- **Starbase Overview**: Planet location, tech levels, defense
- **Build Queue**: Ships currently under construction
- **Resource Storage**: Available materials for construction
- **Tech Levels**: Engine, hull, beam, and torpedo technology
- **Starbase Equipment**: Installed components and capabilities

#### 🏗️ Future Starbases
- **Strategic Planning**: Potential starbase locations
- **Resource Requirements**: Materials needed for construction
- **Progress Tracking**: Visual progress bars for resource gathering
- **Connectivity Analysis**: Distance to existing starbases
- **Priority Ranking**: Color-coded by strategic value

#### 🚢 My Ships
- **Fleet Overview**: Ship name, hull type, location
- **Mission Status**: Current mission and target information
- **Cargo Details**: Fuel, supplies, and mineral cargo
- **Damage Status**: Hull damage and crew information
- **Movement Plans**: Waypoints and estimated arrival times

### Data Features

#### Sorting
- **Click Headers**: Sort by any column
- **Visual Indicators**: Arrows show sort direction
- **Multiple Sorts**: Shift+click for secondary sorting

#### Filtering & Search
- **Resource Highlighting**: Purple highlights for resource-rich planets
- **Status Filtering**: Filter by various ship/planet states
- **Quick Search**: Find specific objects by name or ID

#### Mobile View
- **Card Layout**: Tables become vertical cards on mobile
- **Inline Labels**: Column headers appear next to values
- **Optimized Spacing**: Touch-friendly design for mobile devices

## 🌌 Starmap Navigation

### Basic Navigation
- **Zoom**: Mouse wheel or +/- buttons
- **Pan**: Click and drag to move around the map
- **Reset View**: Double-click to return to full galaxy view
- **Center on Object**: Click table rows to center starmap on that object

### Display Controls
Toggle visibility of different object types:
- **☑️ Planets**: Your planets and known enemy planets
- **☑️ Ships**: Fleet locations and movement
- **☑️ Starbases**: Starbase locations and influence
- **☑️ Nebulas**: Ion storms and space phenomena

### Interactive Features

#### Cross-Highlighting
- **Table to Map**: Hover table rows to highlight starmap objects
- **Map to Table**: Hover starmap objects to highlight table rows
- **Selection Sync**: Click objects to select in both views

#### Tooltips
Hover over starmap objects for detailed information:
- **Planets**: Population, minerals, happiness, temperature
- **Ships**: Hull type, mission, cargo, damage status
- **Starbases**: Tech levels, build queue, defense strength
- **Nebulas**: Intensity, gas levels, movement patterns

### Starmap Features

#### Color Coding
- **Blue**: Your planets and ships
- **Red**: Enemy objects
- **Green**: Allied objects (if applicable)
- **Gray**: Neutral or unowned objects
- **Purple**: Resource-rich strategic locations

#### Strategic Overlays
- **Starbase Ranges**: 81LY influence circles
- **Ship Movement**: Current waypoints and projected paths
- **Resource Density**: Heat map of mineral concentrations

## ⚡ Advanced Features

### Strategic Analysis

#### Resource-Rich Identification
- **Algorithm**: Identifies planets with 2000+ total minerals
- **Connectivity**: Shows distance to nearest starbase
- **Priority Ranking**: Color-coded strategic value
- **Planning Aid**: Helps optimize starbase placement

#### Future Starbase Planning
- **Progress Tracking**: Visual bars show resource gathering progress
- **Resource Calculator**: Automatically calculates missing materials
- **Build Priorities**: Suggests optimal construction order
- **Network Analysis**: Evaluates strategic positioning

### Data Export & Sharing

#### Copy Functionality
- **Quick Copy**: Copy current game data to clipboard
- **Formatted Data**: JSON format for easy sharing
- **Selective Export**: Choose specific data tables to export

#### Save Turn Data
- **Local Save**: Download current turn as JSON file
- **Analysis Later**: Use saved data in Saved Turn Viewer
- **Backup**: Keep historical turn records

### Performance Optimization

#### Large Game Handling
- **Efficient Loading**: Optimized for games with 500+ planets
- **Smooth Scrolling**: Hardware-accelerated table rendering
- **Memory Management**: Automatic cleanup of unused data

#### Connection Management
- **Auto-Retry**: Handles temporary network issues
- **Timeout Handling**: Graceful handling of slow connections
- **Error Recovery**: Clear error messages with retry options

## 🐛 Troubleshooting

### Common Issues

#### Login Problems
**Symptoms**: "Authentication failed" or empty game list
**Solutions**:
- Verify username/password are correct
- Check internet connection
- Try refreshing the page
- Clear browser cache and cookies

#### Data Loading Issues
**Symptoms**: "Failed to load turn data" or incomplete tables
**Solutions**:
- Check game selection is correct
- Verify it's your turn (some data restricted when not your turn)
- Try a different browser
- Check browser console for error messages

#### Starmap Not Displaying
**Symptoms**: Blank starmap area or missing objects
**Solutions**:
- Ensure JavaScript is enabled
- Check display toggles are enabled
- Try zooming out to full view
- Refresh the page and reload data

#### Performance Issues
**Symptoms**: Slow loading, unresponsive interface
**Solutions**:
- Close other browser tabs
- Use Chrome or Firefox for best performance
- Check available system memory
- Try loading smaller games first

### Browser Compatibility

#### Recommended Browsers
- **Chrome 80+**: Best performance and features
- **Firefox 75+**: Full compatibility
- **Safari 13+**: Good on Mac/iOS
- **Edge 80+**: Full Windows support

#### Known Issues
- **Internet Explorer**: Not supported
- **Very Old Browsers**: May have display issues
- **Mobile Safari**: Some tooltip positioning issues

### Performance Tips

#### For Large Games (500+ planets)
- Use desktop/laptop for best experience
- Close unnecessary browser tabs
- Use wired internet connection if possible
- Consider using saved turn files for analysis

#### Mobile Optimization
- Use landscape orientation for tables
- Enable "Desktop Site" mode if needed
- Close background apps for better performance
- Use WiFi instead of cellular when possible

## 💡 Tips & Best Practices

### Efficient Workflow

#### Turn Analysis Routine
1. **Quick Overview**: Start with empire summary
2. **Priority Check**: Review Future Starbases for urgent needs
3. **Fleet Status**: Check ship missions and movements
4. **Resource Planning**: Identify resource gathering opportunities
5. **Strategic Analysis**: Use starmap for positioning decisions

#### Data Management
- **Regular Exports**: Save important turn data
- **Comparison Analysis**: Compare with previous turns
- **Alliance Sharing**: Export relevant data for allies
- **Backup Strategy**: Keep multiple turn records

### Strategic Use Cases

#### Early Game
- **Planet Development**: Focus on population and factory growth
- **Exploration**: Use starmap to plan exploration routes
- **Resource Identification**: Find mineral-rich systems early

#### Mid Game
- **Starbase Planning**: Use connectivity analysis for placement
- **Fleet Coordination**: Track multiple ship groups
- **Economic Analysis**: Monitor tax and happiness levels

#### Late Game
- **Network Optimization**: Fine-tune starbase coverage
- **Resource Flow**: Manage complex supply chains
- **Strategic Positioning**: Plan for end-game scenarios

### Keyboard Shortcuts

#### Navigation
- **Spacebar**: Toggle starmap display
- **Arrow Keys**: Pan starmap (when focused)
- **+/-**: Zoom in/out on starmap
- **Tab**: Cycle through data sections

#### Data Management
- **Ctrl+C**: Copy selected data
- **Ctrl+S**: Save current turn data
- **F5**: Refresh and reload data
- **Esc**: Close dialogs or cancel operations

### Mobile Tips

#### Touch Navigation
- **Pinch**: Zoom starmap
- **Swipe**: Pan around starmap  
- **Long Press**: Access object details
- **Double Tap**: Reset zoom level

#### Layout Optimization
- **Portrait Mode**: Best for table browsing
- **Landscape Mode**: Better for starmap navigation
- **Split Screen**: Use with other apps for reference

---

## 🆘 Getting Help

If you encounter issues not covered in this guide:

1. **Check Browser Console**: F12 → Console tab for error messages
2. **Try Test Mode**: Use built-in test data to isolate issues
3. **Update Browser**: Ensure you're using a current version
4. **Clear Cache**: Sometimes fixes display issues
5. **Report Issues**: Document steps to reproduce problems

*Happy exploring, and may your empire prosper! 🚀*