document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            name: "Monopoly",
            description: "This Java-based Monopoly game offers a simplified version of the classic board game for 2 to 4 players. Players roll dice, move, buy properties, pay rent, and compete to be the last one with money. The goal is to outlast opponents through strategic property management.",
            tools: "Java",
            github: "https://github.com/pranavvk18/monopoly_in_java"
        },
        {
            name: "Netflix data analysis",
            description: "The Netflix data analysis project in Tableau visualizes content distribution (68.42% movies, 31.58% TV shows), tracks content growth (2008-2020), and maps global production. It highlights TV-MA as the most common rating and documentaries as the leading genre. The dashboard integrates geographical, temporal, and categorical insights effectively.",
            tools: "Excel,Tableau",
            github: "https://github.com/pranavvk18/netflix_data_analysis/tree/main"
        },
        {
            name: "Sunspot detection using Yolov5 model",
            description: "Developed a YOLOv5-based AI model to detect and count sunspots in solar images, leveraging deep learning for automated analysis. Fine-tuned on 2000+ images from the Bass2000 Solar Survey for enhanced detection accuracy.",
            tools: "Tensorflow,Yolov5",
            github: "https://github.com/pranavvk18/sunspot_detection_using_yolo"
        },
        {
            name: "Plant disease classification",
            description: "Built a CNN-based model achieving 97% accuracy in plant disease classification using 87,000 images. Optimized performance with Adam optimizer, ReLU activation, and dropout regularization to prevent overfitting.",
            tools: "Pandas,Tensorflow",
            github: "https://github.com/pranavvk18/plant_disease_classification"
        },
        {
            name: "Mobile Price Classification on ESP32",
            description: "Developed a mobile price classification model using TensorFlow Lite and deployed it on an ESP32",
            tools: "TFlite,Tensorflow,ESP32",
            github: "https://github.com/pranavvk18/mobile_price_classification_model_on_ESP32"
        },
        

        

    ];

    const tableBody = document.getElementById("projects-table-body");

    projects.forEach(project => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        nameCell.textContent = project.name;
        row.appendChild(nameCell);

        const descriptionCell = document.createElement("td");
        descriptionCell.textContent = project.description;
        row.appendChild(descriptionCell);

        const toolsCell = document.createElement("td");
        toolsCell.textContent = project.tools;
        row.appendChild(toolsCell);

        // GitHub Link Cell
        const githubCell = document.createElement("td");
        const githubLink = document.createElement("a");
        githubLink.href = project.github;
        githubLink.target = "_blank"; // Open link in new tab

        const githubIcon = document.createElement("img");
        githubIcon.src = "https://cdn.jsdelivr.net/npm/simple-icons@9.12.0/icons/github.svg"; // GitHub logo
        githubIcon.alt = "GitHub";
        githubIcon.width = 30; // Set width of the icon
        githubIcon.height = 30; // Set height of the icon
        githubIcon.style.cursor = "pointer"; // Add pointer cursor
        githubIcon.style.filter = "invert(1)"; // Invert color to match dark theme

        githubLink.appendChild(githubIcon);
        githubCell.appendChild(githubLink);
        row.appendChild(githubCell);

        tableBody.appendChild(row);
    });
});
