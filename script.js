const kits = ["crash", "kick", "snare", "tom"];
const containerElement = document.querySelector(".container");

kits.forEach((kit) => {
    //* create button dynamically
    const btnElement = document.createElement("button");
    btnElement.classList.add("btn");
    btnElement.innerHTML = kit;
    btnElement.style.backgroundImage = `url(images/${kit}.png)`;
    containerElement.appendChild(btnElement);

    //* audio for kits
    const audioElemnt = document.createElement("audio");
    audioElemnt.src = `sounds/${kit}.mp3`;
    containerElement.appendChild(audioElemnt);

    //* play audio on click
    btnElement.addEventListener("click", () => {
        audioElemnt.play();
    });

    //* play audio on keypress
    window.addEventListener("keydown", (event) => {
        // console.log(event.key); // to check which key is pressed
        if (event.key === kit.slice(0, 1)) {
            audioElemnt.play();
            // btnElement.style.transform = "scale(1.1)";
            btnElement.style.backgroundSize = 105 + "%";
            // btnElement.style.transform = `translateY(${4}px)`;
            //? Why translateY property stops working from click after keypress

            setTimeout(() => {
                // btnElement.style.transform = "scale(1)";
                btnElement.style.backgroundSize = "cover";
                // btnElement.style.transform = `translateY(${0}px)`;
                //? Why translateY property stops working from click after keypress
            }, 100);
        }
    });
});