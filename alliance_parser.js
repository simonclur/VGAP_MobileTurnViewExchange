// Alliance parser for VGAP turn file
// Extracts alliances from diplomatic relations data

function extractAlliances(turnData, myPlayerId) {
    console.log('🔍 Extracting alliances for player', myPlayerId);
    
    // Access relations data from the turn file
    const relations = turnData.rst?.relations || [];
    console.log('🤝 Found', relations.length, 'diplomatic relations');
    
    // Find alliances for the current player
    const allies = [];
    
    relations.forEach(relation => {
        // Check if this is a relation involving our player
        if (relation.playerid === myPlayerId) {
            console.log('📊 Relation:', {
                from: relation.playerid,
                to: relation.playertoid,
                relationTo: relation.relationto,
                relationFrom: relation.relationfrom
            });
            
            // In VGAP diplomacy:
            // 0 = neutral, 1 = contact, 2 = peace, 3 = alliance/full alliance
            // Check for mutual alliance (both relationto and relationfrom are 3)
            if (relation.relationto === 3 && relation.relationfrom === 3) {
                console.log('🤝 Alliance found with player', relation.playertoid);
                allies.push(relation.playertoid);
            }
        }
    });
    
    console.log('✅ Final allies list:', allies);
    return allies;
}

// Make available globally for browser use
window.extractAlliances = extractAlliances;