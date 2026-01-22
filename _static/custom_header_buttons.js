// Define the buttons configuration
var buttonsConfig = [
    {
        title: "Télécharger le PDF complet",
        url: "_static/discovery_report.pdf",
        iconClass: "fa-solid fa-file-pdf",
        target: "_blank"
    },
    {
        title: "Accéder au code source",
        url: "https://discovery-report.vercel.app", // Based on project.env
        iconClass: "fa-brands fa-gitlab", // Using GitLab icon since it's a repo
        target: "_blank"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    // Find the header buttons container
    var headerButtons = document.querySelector(".article-header-buttons");
    
    // Check if the container exists
    if (headerButtons) {
        
        buttonsConfig.forEach(function(btnConfig) {
            // Create the link element
            var link = document.createElement("a");
            link.href = btnConfig.url;
            link.target = btnConfig.target;
            link.setAttribute("data-toggle", "tooltip");
            link.setAttribute("data-placement", "bottom");
            link.title = btnConfig.title;
            
            // Add custom style (generic navbar-btn for theme compatibility)
            link.className = "btn btn-sm navbar-btn text-decoration-none"; 
            link.style.marginRight = "4px"; 
            
            // Add the icon
            link.innerHTML = '<i class="' + btnConfig.iconClass + '"></i>';
            
            // Append to the header
            headerButtons.appendChild(link);
        });
    }
});
