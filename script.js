const d1 = `
The program's objective was a simple (Elementary) Student Grading Management System (using Java) that allows users to manage and archive student academic records that can:

• Create, open, and save student data in a .txt file.
• Add, search, delete, and display student records in a table-ish format.
• Each record contains a student's ID, name, and 4 subject grades.
• The system calculates the average grade and determines the pass/fail status based on the following rule:
• A student passes if at least 3 out of 4 grades are ≥ 75.
• Data persistence is handled through file I/O, enabling long-term storage and retrieval of records.
• Built-in menu system that ensures ease of use and data safety.
`;


const d2 = `
This Bank Account Management System is a simple program designed to manage bank account records using file handling.

The system allows users to create, store, retrieve, and update account information in a text file.

Each account record contains:

• Account owner's name
• Account number
• Current balance

The program includes a menu interface that allows the user to choose different operations such as:

• Creating a new account
• Depositing money
• Withdrawing money

The system uses file input and output to make sure that the data is saved in a .txt file so that records can still be accessed even after the program is closed.

This project demonstrates the use of programming concepts taught in class.

The system is designed to be simple, easy to use, and effective for managing basic banking records.
`;


const d3 = `
Developed custom Terraria content
using C# and tModLoader.

Features:

• Custom weapons

• Accessories

• Projectile programming

• Particle effects

• Gameplay mechanics

• Mod balancing.
`;



function showProject(
    title,
    image,
    description
){

    document.getElementById(
        "modalTitle"
    ).textContent = title;

    document.getElementById(
        "modalImage"
    ).src = image;

    document.getElementById(
        "modalDescription"
    ).innerText = description;

    document.getElementById(
        "projectModal"
    ).style.display = "block";

}



function closeModal(){

    document.getElementById(
        "projectModal"
    ).style.display = "none";

}



window.onclick = function(event){

    const modal =
        document.getElementById(
            "projectModal"
        );

    if(event.target === modal){

        modal.style.display =
            "none";

    }

};