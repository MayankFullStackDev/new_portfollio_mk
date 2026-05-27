document.addEventListener('DOMContentLoaded', () => {
    const billingToggle = document.getElementById('billingToggle');
    const monthlyLabel = document.getElementById('monthlyLabel');
    const yearlyLabel = document.getElementById('yearlyLabel');
    
    // Price Elements
    const starterPrice = document.getElementById('starterPrice');
    const companyPrice = document.getElementById('companyPrice');
    const enterprisePrice = document.getElementById('enterprisePrice');
    
    // Billing Config
    const pricingData = {
        monthly: {
            starter: '29',
            company: '99',
            enterprise: '499',
            period: '/mo'
        },
        yearly: {
            starter: '23',
            company: '79',
            enterprise: '399',
            period: '/mo'
        }
    };
    
    function animatePriceChange(element, newPrice) {
        element.style.transform = 'scale(0.85)';
        element.style.opacity = '0.5';
        
        setTimeout(() => {
            element.textContent = newPrice;
            element.style.transform = 'scale(1)';
            element.style.opacity = '1';
        }, 150);
    }
    
    billingToggle.addEventListener('change', () => {
        const isYearly = billingToggle.checked;
        const mode = isYearly ? 'yearly' : 'monthly';
        
        // Update Active Labels
        if (isYearly) {
            yearlyLabel.classList.add('active');
            monthlyLabel.classList.remove('active');
        } else {
            monthlyLabel.classList.add('active');
            yearlyLabel.classList.remove('active');
        }
        
        // Update and Animate Prices
        animatePriceChange(starterPrice, pricingData[mode].starter);
        animatePriceChange(companyPrice, pricingData[mode].company);
        animatePriceChange(enterprisePrice, pricingData[mode].enterprise);
        
        // Update periods
        document.querySelectorAll('.period').forEach(el => {
            el.textContent = pricingData[mode].period;
        });
    });
});
