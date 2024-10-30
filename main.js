// Selecting input fields and resume preview elements
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var skillsInput = document.getElementById("skills");
var educationInput = document.getElementById("education");
var experienceInput = document.getElementById("experience");
var previewName = document.getElementById("preview-name");
var previewEmail = document.getElementById("preview-email");
var previewPhone = document.getElementById("preview-phone");
var previewSkills = document.getElementById("preview-skills");
var previewEducation = document.getElementById("preview-education");
var previewExperience = document.getElementById("preview-experience");
var resumeSection = document.getElementById("resume-section");
// Update resume preview and display it
function updateResumePreview() {
    if (previewName)
        previewName.textContent = nameInput.value || "[Your Name]";
    if (previewEmail)
        previewEmail.textContent = emailInput.value || "[Your Email]";
    if (previewPhone)
        previewPhone.textContent = phoneInput.value || "[Your Phone]";
    // Update skills
    if (previewSkills) {
        previewSkills.innerHTML = "";
        var skills = skillsInput.value.split(",");
        skills.forEach(function (skill) {
            var li = document.createElement("li");
            li.textContent = skill.trim();
            previewSkills.appendChild(li);
        });
    }
    if (previewEducation)
        previewEducation.textContent = educationInput.value || "[Your Education]";
    if (previewExperience)
        previewExperience.textContent = experienceInput.value || "[Your Experience]";
    // Show the resume section
    if (resumeSection)
        resumeSection.style.display = "block";
}
// Attach event listener to generate resume on button click
var generateResumeBtn = document.getElementById("generate-resume");
if (generateResumeBtn) {
    generateResumeBtn.addEventListener("click", updateResumePreview);
}
