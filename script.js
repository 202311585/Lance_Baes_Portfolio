const d1 = `
The program's objective was a simple (Elementary) Student Grading Management System (using Java) that allows users to manage and archive student academic records that can:<br><br>

• Create, open, and save student data in a .txt file.<br>
• Add, search, delete, and display student records in a table-ish format.<br>
• Each record contains a student's ID, name, and 4 subject grades.<br>
• The system calculates the average grade and determines the pass/fail status based on the following rule:<br>
• A student passes if at least 3 out of 4 grades are ≥ 75.<br>
• Data persistence is handled through file I/O, enabling long-term storage and retrieval of records.<br>
• Built-in menu system that ensures ease of use and data safety.
`;

const d2 = `
This Bank Account Management System is a simple program designed to manage bank account records using file handling.<br><br>

The system allows users to create, store, retrieve, and update account information in a text file.<br><br>

Each account record contains:<br><br>

• Account owner's name<br>
• Account number<br>
• Current balance<br><br>

The program includes a menu interface that allows the user to choose different operations such as:<br><br>

• Creating a new account<br>
• Depositing money<br>
• Withdrawing money<br><br>

The system uses file input and output to make sure that the data is saved in a .txt file so that records can still be accessed even after the program is closed.<br><br>

This project demonstrates the use of most of the programming concepts taught in IT0011.<br><br>

The system is designed to be simple, easy to use, and effective for managing basic banking records.
`;


const d3 = `
<p>
This project is technically a WIP, but I wanted to include it here because it is technically a project that I am currently working on.<br>
(Also for a bit more variety for this final project submission.)<br><br>

The mod is primarily an experiment in implementing various gameplay concepts in Terraria using tModLoader, while also serving as a way to test whether some of my ideas are actually feasible in a game environment. Beyond that, it is simply a "fun" side project.<br><br><br><br>
</p>

<img src="gifs/pulseriflescuffeddemo.gif"
     class="modal-gif">

<p>
My first WIP weapon is a customized Pulse Rifle, designed specifically for shredding high-health and heavily armored targets.<br><br>

<b>Primary Fire:</b> Fires high-velocity energy rounds whose effectiveness scales with enemy defense. Against enemies with extremely high defense values (150+), the weapon can effectively bypass invulnerability frames, rapidly stacking damage while also dealing additional damage based on a percentage of the enemy's maximum HP.<br><br>

<b>Alternate Fire:</b> Emits a sustained particle beam that ignores invulnerability frames and functions similarly to the Inferno Tower from Clash of Clans. The beam continuously ramps up in damage the longer it remains focused on a target, eventually dealing damage based on increasing percentages of the enemy's maximum HP (values are still being tweaked).<br><br>

The trade-off, aside from its slower firing speed, is that its mana consumption increases exponentially and the attack cannot be cancelled until the player's mana is completely depleted.<br>

<i>(The laser currently does not render properly due to unresolved code issues, although the damage calculations are already functional.)</i><br><br><br><br>
</p>

<img src="gifs/gcpwingsscuffeddemo.gif"
     class="modal-gif">

<p>
My first accessory features one of the more technically ambitious systems I have implemented so far, combining the functionality of a flight accessory, dash accessory, and hover accessory into a single equipment slot.<br><br>

The accessory, tentatively named <b>GCP Wings</b>, is a high-mobility item that grants the player a dash with temporary invulnerability, a spinning animation, and hovering capabilities.<br><br>

Its current sprite is merely a placeholder, as I am not yet particularly skilled at pixel art. However, I plan to create a custom sprite for it in the future.<br>
</p>
`;


function showProject(
    title,
    image,
    description
){

    document.getElementById(
        "modalTitle"
    ).textContent = title;

    const modalImage =
        document.getElementById(
            "modalImage"
        );

    if(image){

        modalImage.src = image;

        modalImage.style.display =
            "block";

    }
    else{

        modalImage.style.display =
            "none";

            modalImage.removeAttribute(
                "src"
            );

    }

    document.getElementById(
        "modalDescription"
    ).innerHTML =
        description;

    document.getElementById(
        "projectModal"
    ).style.display =
        "block";

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