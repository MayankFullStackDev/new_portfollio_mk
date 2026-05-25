document.addEventListener('DOMContentLoaded', () => {
    const profilePhoto = document.getElementById('profilePhoto');
    const profileName = document.getElementById('profileName');
    const profileRole = document.getElementById('profileRole');
    const profileBio = document.getElementById('profileBio');
    
    // Directory Database
    const directoryData = {
        enjoy: {
            name: "Enjoy Programming",
            role: "IT Skills Development Program",
            bio: "IT Skills Development Program by Enjoy Programming.<br />Embrace innovation, enhance your skills, and excel in your career.<br />Join us to unlock your potential in the ever-evolving digital landscape.",
            photo: "http://enjoyprograming.com/assets/logo/resized-logo.jpeg"
        },
        yogesh: {
            name: "Yogesh Sir",
            role: "Full-Stack Dev & Mentor",
            bio: "A passionate educator and full-stack developer, Yogesh specializes in teaching programming, software development, and emerging technologies. With hands-on industry experience, he empowers students from Grade 7 to engineering levels through practical, project-based learning.",
            photo: "http://enjoyprograming.com/assets/images/trainers-mentors/yogesh-sir.jpeg"
        },
        ruchi: {
            name: "Ruchi Mam",
            role: "Communication Specialist",
            bio: "An expert in professional and interpersonal communication, specializing in training students and professionals to enhance clarity, confidence, and effectiveness in workplace communication.",
            photo: "http://enjoyprograming.com/assets/images/trainers-mentors/ruchi-mam.jpeg"
        },
        ayush: {
            name: "Ayush Sir",
            role: "Technical Code Mentor",
            bio: "Dedicated to guiding students in real-world software development, Ayush brings strong expertise in coding, debugging, and mentoring projects with a focus on practical learning and innovation.",
            photo: "http://enjoyprograming.com/assets/images/trainers-mentors/ayush-sir.jpeg"
        },
        yash: {
            name: "Yash Sir",
            role: "Technical Trainer & Advisor",
            bio: "Yash is a skilled technical trainer who combines deep programming knowledge with hands-on mentoring. Alongside training, he has contributed strategically to Enjoy Programming’s growth through early investment and operational support, helping build a strong foundation for the future.",
            photo: "http://enjoyprograming.com/assets/images/trainers-mentors/yash-sir.jpeg"
        },
        nishant: {
            name: "Nishant Sir",
            role: "Project Manager",
            bio: "Nishant brings extensive experience in project delivery and quality assurance. As a Project Manager at Enjoy Programming, he ensures that student projects are aligned with industry standards while also mentoring them on practical software development and team collaboration.",
            photo: "http://enjoyprograming.com/assets/images/trainers-mentors/nishant-sir.jpg"
        },
        ayushn: {
            name: "Ayush N Sir",
            role: "Associate Developer",
            bio: "Ayush is a highly motivated and passionate developer who thrives on solving real-world problems through code. At Enjoy Programming, he actively contributes to projects, continuously hones his skills, and inspires peers with his enthusiasm for technology and innovation.",
            photo: "http://enjoyprograming.com/assets/images/trainers-mentors/ayush-new.jpeg"
        },
        ayushl: {
            name: "Ayush L Sir",
            role: "Associate Developer",
            bio: "Ayush is an enthusiastic and dedicated developer who is always eager to learn and build impactful tech solutions. At Enjoy Programming, he actively engages in coding projects and continually sharpens his skills through hands-on development and collaboration with peers.",
            photo: "http://enjoyprograming.com/assets/images/trainers-mentors/ep-ayush-l.png"
        },
        divyanshu: {
            name: "Divyanshu Sir",
            role: "Full Stack Mentor",
            bio: "Divyanshu is a skilled full stack developer and dedicated project mentor at Enjoy Programming. He guides students through real-world project execution, helping them apply development best practices across both frontend and backend technologies.",
            photo: "http://enjoyprograming.com/assets/images/trainers-mentors/ep-divyanshu.jpeg"
        },
        shivani: {
            name: "Shivani Mam",
            role: "Programming Coach",
            bio: "Shivani is a dedicated developer and mentor who guides students in both foundational and advanced programming concepts. At Enjoy Programming, she combines hands-on development experience with a passion for teaching, helping students build real-world skills and project confidence.",
            photo: "http://enjoyprograming.com/assets/images/trainers-mentors/ep-shivani.jpeg"
        }
    };
    
    // Select profile and update photo/data with animations
    window.showProfile = function(key) {
        const data = directoryData[key];
        if (!data) return;
        
        // Remove active class from list items
        document.querySelectorAll('.profile-list-item').forEach(el => el.classList.remove('active'));
        
        // Find matching item in list to add active class
        const eventSource = window.event ? window.event.currentTarget : null;
        if (eventSource) {
            eventSource.classList.add('active');
        }
        
        // Trigger smooth scale transition
        profilePhoto.style.transform = 'scale(0.8)';
        profilePhoto.style.opacity = '0.3';
        
        setTimeout(() => {
            profilePhoto.src = data.photo;
            profileName.textContent = data.name;
            profileRole.textContent = data.role;
            profileBio.innerHTML = data.bio;
            
            profilePhoto.style.transform = 'scale(1)';
            profilePhoto.style.opacity = '1';
        }, 150);
    };
    
    // Real-time Sidebar Filter search
    window.filterDirectoryList = function() {
        const input = document.getElementById('directorySearch');
        const filter = input.value.toLowerCase();
        const listItems = document.querySelectorAll('.profile-list-item');
        
        listItems.forEach(item => {
            const name = item.getAttribute('data-name');
            if (name.includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    };
});
