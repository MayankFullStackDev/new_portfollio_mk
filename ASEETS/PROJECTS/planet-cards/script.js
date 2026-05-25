document.addEventListener('DOMContentLoaded', () => {
    const planetItems = document.querySelectorAll('.planet-item');
    const planetSphere = document.getElementById('planetSphere');
    const planetName = document.getElementById('planetName');
    const planetType = document.getElementById('planetType');
    const planetDesc = document.getElementById('planetDesc');
    const planetDist = document.getElementById('planetDist');
    const planetTemp = document.getElementById('planetTemp');
    const planetSize = document.getElementById('planetSize');
    
    // Planetary Database
    const solarSystemData = {
        sun: {
            name: "Sun",
            type: "Yellow Dwarf Star",
            desc: "The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light, ultraviolet light, and infrared radiation.",
            dist: "Center",
            temp: "15,000,000°C",
            size: "1,392,700 km",
            gradient: "radial-gradient(circle at 30% 30%, #f59e0b, #b45309)"
        },
        mercury: {
            name: "Mercury",
            type: "Terrestrial Planet",
            desc: "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. It has a heavily cratered, dark-grey surface, and experiences extreme temperature fluctuations.",
            dist: "57.9M km",
            temp: "430°C / -180°C",
            size: "4,879 km",
            gradient: "radial-gradient(circle at 30% 30%, #94a3b8, #475569)"
        },
        venus: {
            name: "Venus",
            type: "Terrestrial Planet",
            desc: "Venus is the second planet from the Sun. It has a thick, toxic atmosphere filled with carbon dioxide and greenhouse clouds, making it the hottest planet in our solar system, with active volcanic surface features.",
            dist: "108.2M km",
            temp: "475°C",
            size: "12,104 km",
            gradient: "radial-gradient(circle at 30% 30%, #f59e0b, #78350f)"
        },
        earth: {
            name: "Earth",
            type: "Terrestrial Planet",
            desc: "Our home planet is the third planet from the Sun, and the only place we know of so far that's inhabited by living things. It is unique in having vast liquid water oceans and a rich oxygen-nitrogen atmosphere.",
            dist: "149.6M km",
            temp: "15°C (Average)",
            size: "12,742 km",
            gradient: "radial-gradient(circle at 30% 30%, #3b82f6, #1d4ed8, #0f172a)"
        },
        mars: {
            name: "Mars",
            type: "Terrestrial Planet",
            desc: "Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence that Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere. It is known as the Red Planet.",
            dist: "227.9M km",
            temp: "-62°C",
            size: "6,779 km",
            gradient: "radial-gradient(circle at 30% 30%, #ef4444, #991b1b)"
        },
        jupiter: {
            name: "Jupiter",
            type: "Gas Giant",
            desc: "Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red Spot is a century-old storm bigger than Earth, surrounded by thick gaseous bands.",
            dist: "778.5M km",
            temp: "-108°C",
            size: "139,820 km",
            gradient: "radial-gradient(circle at 30% 30%, #f97316, #c2410c, #7c2d12)"
        },
        uranus: {
            name: "Uranus",
            type: "Ice Giant",
            desc: "Uranus is the seventh planet from the Sun. Its unique blue-green color comes from atmospheric methane gas. It is famously tilted almost 90-degrees on its axis, causing it to roll sideways around the Sun.",
            dist: "2.87B km",
            temp: "-197°C",
            size: "50,724 km",
            gradient: "radial-gradient(circle at 30% 30%, #06b6d4, #0891b2, #0f172a)"
        },
        neptune: {
            name: "Neptune",
            type: "Ice Giant",
            desc: "Neptune, the eighth and most distant major planet orbiting our Sun, is dark, cold, and whipped by supersonic winds. It is an ice giant composed of water, ammonia, and methane over a rocky core.",
            dist: "4.5B km",
            temp: "-201°C",
            size: "49,244 km",
            gradient: "radial-gradient(circle at 30% 30%, #2563eb, #1d4ed8, #0f172a)"
        },
        pluto: {
            name: "Pluto",
            type: "Dwarf Planet",
            desc: "Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It was the first and the largest Kuiper belt object to be discovered. It is composed primarily of rock and ice.",
            dist: "5.91B km",
            temp: "-225°C",
            size: "2,376 km",
            gradient: "radial-gradient(circle at 30% 30%, #a8a29e, #78716c)"
        }
    };
    
    planetItems.forEach(item => {
        item.addEventListener('click', () => {
            const planetKey = item.getAttribute('data-planet');
            const data = solarSystemData[planetKey];
            
            if (!data) return;
            
            // Toggle active classes
            planetItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            // Smooth transitions
            planetSphere.style.transform = 'scale(0) rotate(180deg)';
            planetSphere.style.opacity = '0';
            
            setTimeout(() => {
                // Update Card contents
                planetSphere.style.background = data.gradient;
                planetName.textContent = data.name;
                planetType.textContent = data.type;
                planetDesc.textContent = data.desc;
                planetDist.textContent = data.dist;
                planetTemp.textContent = data.temp;
                planetSize.textContent = data.size;
                
                // Scale sphere back up
                planetSphere.style.transform = 'scale(1) rotate(0deg)';
                planetSphere.style.opacity = '1';
                
                // Add glowing glow shadow to match planet color
                const glowColor = item.style.getPropertyValue('--glow-color');
                planetSphere.style.boxShadow = `inset -20px -20px 50px rgba(0,0,0,0.8), 0 0 50px ${glowColor}40`;
            }, 300);
        });
    });
});
