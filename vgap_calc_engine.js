/**
 * VGAP Calculation Engine
 * Standalone calculation functions extracted from nu.js for local usage
 * This provides the essential VGAP formulas without web dependencies
 */

// Core VGAP calculation functions
const VGAPCalc = {
    
    // Colonist growth calculation
    colonistGrowth: function(planet) {
        if (!planet || !planet.clans) return 0;
        
        const clans = planet.clans || 0;
        const temperature = planet.temperature || 50;
        const happiness = planet.happiness || 70;
        
        // Base growth rate calculation
        let growth = 0;
        if (clans < 20000) {
            growth = Math.floor(clans * 0.05); // 5% growth under 20k
        } else if (clans < 100000) {
            growth = Math.floor(clans * 0.03); // 3% growth 20k-100k
        } else {
            growth = Math.floor(clans * 0.01); // 1% growth over 100k
        }
        
        // Temperature factor
        let tempFactor = 1.0;
        if (temperature < 15 || temperature > 84) {
            tempFactor = 0.1; // Poor growth in extreme temperatures
        } else if (temperature < 40 || temperature > 65) {
            tempFactor = 0.5; // Reduced growth in poor temperatures
        }
        
        // Happiness factor
        let happinessFactor = Math.max(0.1, happiness / 100);
        
        return Math.floor(growth * tempFactor * happinessFactor);
    },
    
    // Mining rate calculation
    miningRate: function(planet, mineral) {
        if (!planet || !mineral) return 0;
        
        const clans = planet.clans || 0;
        const mines = planet.mines || 0;
        const density = planet[mineral + 'density'] || 0;
        
        if (clans === 0 || mines === 0 || density === 0) return 0;
        
        // Base mining formula
        let baseMining = Math.min(mines, Math.floor(clans / 100)) * density / 100;
        
        // Apply race bonuses
        let raceFactor = 1.0;
        if (this.isLizardPlanet(planet)) {
            raceFactor = 2.0; // Lizard 2x mining bonus
        } else if (this.isReptilianPlanet(planet)) {
            raceFactor = 2.0; // Reptilian 2x mining bonus
        }
        
        return Math.floor(baseMining * raceFactor);
    },
    
    // Tax income calculation
    taxIncome: function(planet) {
        if (!planet || !planet.clans) return 0;
        
        const clans = planet.clans || 0;
        const happiness = planet.happiness || 70;
        const taxRate = planet.tax || 0;
        
        if (clans === 0 || taxRate === 0) return 0;
        
        // Base tax calculation
        let baseTax = Math.floor(clans * taxRate * happiness / 10000);
        
        // Apply race bonuses
        let raceFactor = 1.0;
        if (this.isFederalPlanet(planet)) {
            raceFactor = 2.0; // Federal 2x tax bonus
        } else if (this.isInsectoidPlanet(planet)) {
            raceFactor = 2.0; // Insectoid 2x tax bonus
        }
        
        return Math.floor(baseTax * raceFactor);
    },
    
    // Bovinoid supply production
    bovinoidProduction: function(planet) {
        if (!planet || !this.hasBovinoids(planet)) return 0;
        
        const bovinoids = planet.nativeclans || 0;
        const temperature = planet.temperature || 50;
        
        if (bovinoids === 0) return 0;
        
        // Bovinoid supply formula
        let baseProduction = Math.floor(bovinoids / 100);
        
        // Temperature affects production
        let tempFactor = 1.0;
        if (temperature >= 40 && temperature <= 65) {
            tempFactor = 1.2; // Ideal temperature bonus
        } else if (temperature < 15 || temperature > 84) {
            tempFactor = 0.5; // Poor temperature penalty
        }
        
        return Math.floor(baseProduction * tempFactor);
    },
    
    // Race detection functions
    isLizardPlanet: function(planet) {
        return planet && (planet.ownerid === 2 || planet.raceid === 2);
    },
    
    isFederalPlanet: function(planet) {
        return planet && (planet.ownerid === 1 || planet.raceid === 1);
    },
    
    isInsectoidPlanet: function(planet) {
        return planet && (planet.ownerid === 6 || planet.raceid === 6);
    },
    
    isReptilianPlanet: function(planet) {
        return planet && (planet.ownerid === 10 || planet.raceid === 10);
    },
    
    isAvianPlanet: function(planet) {
        return planet && (planet.ownerid === 3 || planet.raceid === 3);
    },
    
    isCrystalPlanet: function(planet) {
        return planet && (planet.ownerid === 7 || planet.raceid === 7);
    },
    
    // Native race detection
    hasBovinoids: function(planet) {
        return planet && planet.nativeracename && 
               planet.nativeracename.toLowerCase().includes('bovinoid');
    },
    
    hasInsectoids: function(planet) {
        return planet && planet.nativeracename && 
               planet.nativeracename.toLowerCase().includes('insectoid');
    },
    
    // Get race information
    getRaceInfo: function(planet) {
        if (!planet) return { name: 'Unknown', bonuses: [] };
        
        const raceId = planet.ownerid || planet.raceid || 0;
        const races = {
            1: { name: 'Federation', bonuses: ['2x Tax Income'] },
            2: { name: 'Lizard', bonuses: ['2x Mining Rate'] },
            3: { name: 'Avian', bonuses: ['+10 Happiness'] },
            4: { name: 'Fascist', bonuses: ['Pillaging', 'Glory Device'] },
            5: { name: 'Privateer', bonuses: ['Rob Ships', 'Gambling'] },
            6: { name: 'Borg', bonuses: ['2x Tax Income', 'Assimilation'] },
            7: { name: 'Crystal', bonuses: ['Desert Preference', 'Web Mines'] },
            8: { name: 'Empire', bonuses: ['Dark Sense', 'Imperial Assault'] },
            9: { name: 'Robots', bonuses: ['No Happiness Limit', 'Self Repair'] },
            10: { name: 'Rebels', bonuses: ['2x Mining Rate', 'Ground Attack'] },
            11: { name: 'Colonies', bonuses: ['Cobol Fuel', 'Alchemy'] }
        };
        
        return races[raceId] || { name: 'Unknown', bonuses: [] };
    },
    
    // Get native information
    getNativeInfo: function(planet) {
        if (!planet || !planet.nativeracename) {
            return { name: 'None', bonuses: [] };
        }
        
        const nativeName = planet.nativeracename.toLowerCase();
        const bonuses = [];
        
        if (nativeName.includes('bovinoid')) {
            bonuses.push('Supply Production');
        } else if (nativeName.includes('insectoid')) {
            bonuses.push('Mining Bonus');
        } else if (nativeName.includes('amorphous')) {
            bonuses.push('Eating Supplies');
        } else if (nativeName.includes('siliconoid')) {
            bonuses.push('Desert Bonus');
        }
        
        return {
            name: planet.nativeracename,
            bonuses: bonuses
        };
    }
};

// Export for global usage
window.VGAPCalc = VGAPCalc;