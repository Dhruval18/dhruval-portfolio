// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Dynamic Certificates
const certificates = [
    { title: "Data Analysis with Python Certification", issuer: "freeCodeCamp", year: "June-2025", image: "D:\DeskTop\portfolio\Dhruval.pdf"},
    { title: "Data Science 101 Certification", issuer: "Cognitive Class (IBM Developer Skills Network)", year: "June-2025" },
    { title: "Prompt Engineering Applications (Self-paced)", issuer: "Simplilearn (SkillUp)", year: "June-2025" }
    // Add more certificates here, e.g., { title: "New Certificate", issuer: "Issuer Name", year: "2025" }
];

const certificatesGrid = document.getElementById('certificates');
certificates.forEach(cert => {
    const certCard = document.createElement('div');
    certCard.className = 'certificate-card';
    certCard.innerHTML = `
        <i class="fas fa-certificate"></i>
        <h3>${cert.title}</h3>
        <p>${cert.issuer}, ${cert.year}</p>
    `;
    certificatesGrid.appendChild(certCard);
});