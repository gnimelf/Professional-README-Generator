// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license)
  return `
    # ${data.title}
    
    ## ${data.description}

    ## ${data.usage}

    ## ${data.credits}

`;
}

module.exports = generateMarkdown;