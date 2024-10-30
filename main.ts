// Selecting input fields and resume preview elements
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;
const educationInput = document.getElementById("education") as HTMLTextAreaElement;
const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;

const previewName = document.getElementById("preview-name");
const previewEmail = document.getElementById("preview-email");
const previewPhone = document.getElementById("preview-phone");
const previewSkills = document.getElementById("preview-skills");
const previewEducation = document.getElementById("preview-education");
const previewExperience = document.getElementById("preview-experience");

const resumeSection = document.getElementById("resume-section");

// Update resume preview and display it
function updateResumePreview() {
    if (previewName) previewName.textContent = nameInput.value || "[Your Name]";
    if (previewEmail) previewEmail.textContent = emailInput.value || "[Your Email]";
    if (previewPhone) previewPhone.textContent = phoneInput.value || "[Your Phone]";
    
    // Update skills
    if (previewSkills) {
        previewSkills.innerHTML = "";
        const skills = skillsInput.value.split(",");
        skills.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill.trim();
            previewSkills.appendChild(li);
        });
    }

    if (previewEducation) previewEducation.textContent = educationInput.value || "[Your Education]";
    if (previewExperience) previewExperience.textContent = experienceInput.value || "[Your Experience]";

    // Show the resume section
    if (resumeSection) resumeSection.style.display = "block";
}

// Attach event listener to generate resume on button click
const generateResumeBtn = document.getElementById("generate-resume");
if (generateResumeBtn) {
    generateResumeBtn.addEventListener("click", updateResumePreview);
}


