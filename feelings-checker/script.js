document.addEventListener('DOMContentLoaded', () => {
    const moodInput = document.getElementById('moodInput');
    const moodEmoji = document.getElementById('moodEmoji');
    const moodHeading = document.getElementById('moodHeading');
    const moodQuote = document.getElementById('moodQuote');
    
    // Mood Database (retaining all original triggers + Nagpur profiles)
    const moodDatabase = {
        happy: {
            heading: "Feeling Happy! 🌟",
            quote: "Awesome! Keep radiating this positive energy. Happiness is contagious—spread the vibes and enjoy this wonderful moment!",
            emoji: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMThfYV9jdXRlXzNkX29mX2FfbGlrZV9lbW9qaV9pc29sYXRlZF9vbl9hX3doaXRlX18wMTI4NDc0Ny1hNTc3LTRmYmEtYjZjNS02YjBhMzc3MmEzOWIucG5n.png"
        },
        sad: {
            heading: "Feeling Sad 💙",
            quote: "It's completely okay to feel sad. Take a slow, deep breath. Hard days are only temporary, and brighter moments are ahead. Be gentle with yourself.",
            emoji: "https://emojiisland.com/cdn/shop/products/Sad_Face_Emoji_large.png?v=1571606037"
        },
        tired: {
            heading: "Feeling Tired 🥱",
            quote: "Your body is asking for a cozy rest. Step back, power down the screens, grab a warm drink, and recharge your energy. You deserve a break!",
            emoji: "https://media.licdn.com/dms/image/v2/D5622AQGQHHnZ5R5OSA/feedshare-shrink_800/feedshare-shrink_800/0/1700679717292?e=2147483647&v=beta&t=Ea4I091OPPgHVMiJ9e_UFF8-1-0avzJN369IwDB05LY"
        },
        gayu: {
            heading: "Guernsey Cow Mode Activated! 🐮",
            quote: "Mooo! You are feeling like Gayu—perfectly content, peaceful, and ready to graze in green meadows. Guernsey Cow energy locked in!",
            emoji: "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg"
        },
        diksha: {
            heading: "Diksha Energy Mode! ✨",
            quote: "Fabulous and shining! You are channeling the radiant aura of Diksha—stylish, confident, and bringing light into everyone's day!",
            emoji: "https://i.pinimg.com/736x/a5/c1/12/a5c112e2c5b87756a588fbd14b2a4ad9.jpg"
        }
    };
    
    // Quick select buttons
    window.selectMood = function(moodKey) {
        moodInput.value = moodKey;
        triggerMoodAnalysis(moodKey);
    };
    
    // Text input click check
    window.analyzeWrittenMood = function() {
        const text = moodInput.value.trim().toLowerCase();
        
        if (!text) {
            alert("Please select or type a mood first!");
            return;
        }
        
        // Find if any key is contained in text
        let matchedKey = 'happy'; // default fallback
        
        if (text.includes('sad')) matchedKey = 'sad';
        else if (text.includes('happy')) matchedKey = 'happy';
        else if (text.includes('tired') || text.includes('sleepy')) matchedKey = 'tired';
        else if (text.includes('gayu') || text.includes('cow')) matchedKey = 'gayu';
        else if (text.includes('diksha') || text.includes('star')) matchedKey = 'diksha';
        
        triggerMoodAnalysis(matchedKey);
    };
    
    function triggerMoodAnalysis(key) {
        const data = moodDatabase[key];
        if (!data) return;
        
        // Smooth scaling of emoji display
        moodEmoji.style.transform = 'scale(0) rotate(-180deg)';
        
        setTimeout(() => {
            moodEmoji.src = data.emoji;
            moodHeading.textContent = data.heading;
            moodQuote.textContent = data.quote;
            
            moodEmoji.style.transform = 'scale(1) rotate(0deg)';
        }, 200);
    }
});
