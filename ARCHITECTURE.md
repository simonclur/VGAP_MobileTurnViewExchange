# VGAP Turn Viewer - Technical Architecture Documentation

## Overview

The VGAP Turn Viewer is a comprehensive web application for viewing and analyzing VGA Planets turn data. This document provides detailed technical information about the system's architecture, design patterns, and implementation details.

## System Architecture

### Core Components

#### 1. TableManager Class
The central orchestrator for all table functionality with these key methods:

```javascript
class TableManager {
    // Primary table creation methods
    createPlanetsTable(data, container, options = {})
    createShipsTable(data, container, options = {})
    createStarbasesTable(data, container, options = {})
    createFutureStarbasesTable(data, container, options = {})
    
    // Infrastructure methods
    createTable(data, columns, container, options = {})
    createTableStructure(columns, options = {})
    createTableRow(data, columns, options = {})
    createTableCell(data, column, columnIndex = -1)
    
    // Feature implementations
    setupStickyColumns(table)
    setupScrollSync(table)
    handleRowSelection(row, data, options)
    handleSort(columnKey, table)
}
```

#### 2. CSS Framework
Comprehensive styling system with semantic classes:

```css
/* Core table structure */
.vgap-table {
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    overflow: hidden;
}

/* Sticky column implementation */
.vgap-table-cell.sticky-column {
    position: sticky !important;
    left: 0 !important;
    z-index: 100 !important;
    background: rgba(0, 0, 0, 0.95) !important;
    border-right: 2px solid #00d4ff !important;
    width: 60px !important;
}
```

#### 3. Mobile-Responsive Framework
Progressive enhancement approach using CSS media queries:

```css
@media screen and (max-width: 768px) {
    .vgap-table-header { display: none; }
    .vgap-table-body { display: block; }
    .vgap-table-row {
        display: block;
        margin-bottom: 15px;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 8px;
    }
    
    .vgap-table-cell::before {
        content: attr(data-label);
        color: #00d4ff;
        font-weight: 600;
    }
}
```

## Data Management System

### Column Mapping Architecture
The system uses a flexible column mapping approach to handle complex VGAP data structures:

```javascript
const columnMapping = {
    'ID': { key: 'id', formatter: 'number' },
    'Name': { key: 'name', formatter: 'planetName' },
    'Col': { key: 'clans', formatter: 'number' },
    'Coordinates': { key: ['x', 'y'], formatter: 'coordinates' }
};
```

### Data Formatters
Specialized formatting functions for different data types:

- `formatCellValue()` - Main dispatcher for cell formatting
- `formatCoordinates()` - Planet/ship position display
- `formatRaceName()` - Player ID to race name mapping  
- `formatHullName()` - Hull ID to hull name lookup
- `formatTemperature()` - Temperature with color coding
- `formatHappiness()` - Happiness levels with visual indicators
- `formatStarbaseStatus()` - Building/ready/none status

### Nested Value Extraction
The `getNestedValue()` function handles complex data access:

```javascript
function getNestedValue(obj, path, defaultValue = '') {
    if (Array.isArray(path)) {
        // Handle coordinate pairs [x, y]
        return path.map(p => getNestedValue(obj, p, 0));
    }
    
    return path.split('.').reduce((current, key) => {
        return current?.[key] ?? defaultValue;
    }, obj);
}
```

## Strategic Analysis Features

### Resource-Rich Highlighting
Algorithm for identifying strategic locations:

1. **Mineral Threshold**: 2000+ total minerals (Duranium + Tritanium + Molybdenum)
2. **Connectivity Analysis**: Within 84LY of existing starbases
3. **Visual Indicator**: Light purple background highlighting

### Future Starbases Table
Comprehensive planning tool with:
- **Progress Tracking**: Visual progress bars for construction
- **Resource Analysis**: Missing materials with color coding
- **Connectivity Mapping**: Distance to nearest starbase
- **Build Status**: Ready/Building/Planning indicators

### Enhanced Demographics
Planet tables include:
- **Population Growth**: `colchange` and `nativechange` tracking
- **Tax Rates**: `colonisttaxrate` and `nativetaxrate`
- **Happiness**: Current levels and changes (`colhappychange`, `nativehappychange`)

## Sticky Column Implementation

### Evolution from Complex to Simple

#### Initial Complex Approach (Removed)
- JavaScript overlay system with dynamic height matching
- Separate sticky column containers
- Complex row selection synchronization
- Performance overhead and alignment issues

#### Final Simple Approach (Current)
```css
.sticky-column {
    position: sticky !important;
    left: 0 !important;
    z-index: 100 !important;
    background: rgba(0, 0, 0, 0.95) !important;
}
```

**Benefits:**
- Browser-native implementation
- Zero JavaScript complexity
- Consistent behavior across table types
- Excellent performance
- Reliable cross-browser support

### Implementation Details

```javascript
setupStickyColumns(table) {
    const stickyColumns = table.querySelectorAll('.sticky-column');
    if (stickyColumns.length === 0) return;
    
    // Simple CSS sticky positioning - let browser handle it
    stickyColumns.forEach(col => {
        col.style.position = 'sticky';
        col.style.left = '0px';
        col.style.zIndex = col.classList.contains('vgap-table-header-cell') ? '150' : '100';
    });
}
```

## Interactive Features

### Cross-Highlighting System
Bidirectional highlighting between starmap and tables:

```javascript
// Table row hover highlights starmap element
row.addEventListener('mouseenter', () => {
    const starmapElement = document.querySelector(`[data-id="${data.id}"]`);
    if (starmapElement) {
        starmapElement.classList.add('hover-highlight');
    }
});

// Starmap element hover highlights table row
starmapElement.addEventListener('mouseenter', () => {
    const tableRow = document.querySelector(`.vgap-table-row[data-id="${elementId}"]`);
    if (tableRow) {
        tableRow.classList.add('hover-highlight');
    }
});
```

### Tooltip System
Comprehensive hover information display:

```javascript
function showTooltip(event, data) {
    const tooltip = document.getElementById('starmapTooltip');
    tooltip.innerHTML = generateTooltipContent(data);
    tooltip.style.left = event.pageX + 10 + 'px';
    tooltip.style.top = event.pageY - 10 + 'px';
    tooltip.style.display = 'block';
}
```

### Zoom and Pan System
ViewBox-based starmap navigation:

```javascript
function handleZoom(delta, centerX, centerY) {
    const zoomFactor = delta > 0 ? 1.2 : 0.8;
    currentZoom *= zoomFactor;
    
    // Update ViewBox for smooth zoom
    const svg = document.getElementById('starmap');
    svg.setAttribute('viewBox', `${viewX} ${viewY} ${viewWidth} ${viewHeight}`);
}
```

## Mobile-First Design Philosophy

### Progressive Enhancement Strategy

1. **Base Mobile Layout**: Vertical card design as foundation
2. **CSS Media Queries**: Enhanced layouts for larger screens
3. **Touch-Friendly**: 44px minimum touch targets
4. **Information Hierarchy**: Most important data visible first

### Key Mobile Features

```css
/* Transform tables into cards */
.vgap-table-row {
    display: block;
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
}

/* Inline column labels */
.vgap-table-cell::before {
    content: attr(data-label);
    color: #00d4ff;
    font-weight: 600;
    flex: 0 0 40%;
    padding-right: 10px;
}
```

## Performance Considerations

### Scroll Optimization
- **Passive Listeners**: Used where possible for smooth scrolling
- **Debounced Updates**: Height calculations throttled to 50ms
- **CSS Transforms**: Hardware-accelerated animations

### Large Dataset Handling
- **Event Delegation**: Single event listener for multiple rows
- **Column Indexing**: Pre-computed column mappings
- **Virtual Scrolling**: Ready for implementation if needed

### Memory Management
- **Event Cleanup**: Proper listener removal on table recreation
- **DOM Recycling**: Minimal element creation/destruction
- **Efficient Selectors**: Cached element references

## Testing Guidelines

### Cross-Browser Testing
- **Chrome/Safari**: Primary development browsers
- **Firefox**: Secondary testing target
- **Mobile Safari**: iOS compatibility
- **Chrome Mobile**: Android compatibility

### Responsive Testing Breakpoints
- **< 480px**: Very small mobile screens
- **481-768px**: Standard mobile screens  
- **769-1024px**: Tablet screens
- **> 1025px**: Desktop screens

### Performance Benchmarks
- **Table Rendering**: < 100ms for 500 rows
- **Scroll Performance**: 60fps maintained
- **Memory Usage**: < 50MB for typical datasets

## Security Considerations

### Data Sanitization
```javascript
function sanitizeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
```

### XSS Prevention
- All user data escaped before rendering
- innerHTML usage carefully controlled
- CSS injection prevention in style attributes

## Future Enhancement Roadmap

### Short Term (Next Version)
1. **Virtual Scrolling**: Handle very large datasets (10,000+ rows)
2. **Column Customization**: User-configurable column visibility
3. **Export Features**: CSV/Excel export functionality
4. **Saved Layouts**: Persistent user preferences

### Medium Term
1. **Real-Time Updates**: WebSocket integration for live data
2. **Advanced Filtering**: Multi-column filter combinations
3. **Chart Integration**: Data visualization components
4. **Offline Support**: Service worker implementation

### Long Term
1. **Plugin Architecture**: Third-party extension system
2. **API Integration**: Direct VGAP server connections
3. **Collaborative Features**: Shared analysis sessions
4. **Advanced Analytics**: Machine learning insights

## Troubleshooting Guide

### Common Issues

#### Sticky Columns Not Working
- **Cause**: Missing z-index or position properties
- **Solution**: Verify CSS sticky properties are properly applied
- **Debug**: Check browser developer tools for computed styles

#### Mobile Layout Broken
- **Cause**: Media query not applied or viewport meta tag missing
- **Solution**: Verify `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- **Debug**: Test responsive design in browser dev tools

#### Table Data Missing
- **Cause**: Column key mapping mismatch
- **Solution**: Verify column keys match actual data properties
- **Debug**: Console log data object to inspect structure

#### Performance Issues
- **Cause**: Too many DOM manipulations during scroll
- **Solution**: Implement debouncing or virtual scrolling
- **Debug**: Use browser performance profiler

## Contributing Guidelines

### Code Style
- Use meaningful variable and function names
- Comment complex algorithms and business logic
- Follow existing CSS class naming conventions
- Maintain consistent indentation (4 spaces)

### Testing Requirements
- Test all table types before committing
- Verify mobile responsiveness on actual devices
- Check cross-browser compatibility
- Validate with large datasets (1000+ rows)

### Documentation Updates
- Update this architecture document for major changes
- Add inline comments for new complex features
- Update user guides for new functionality
- Maintain changelog for version tracking

---

*This architecture documentation reflects the system as of version 2.0, incorporating lessons learned from the complex overlay system evolution to the current simple CSS sticky approach.*