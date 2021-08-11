let documentContent = document.querySelector("#content");
const setEventListenersAtHome = () => {
  let subSections = document.querySelectorAll(".sub-section");
  subSections.forEach((subSection) => {
    subSection.addEventListener("click", selectSubSection);
  });
};

const selectSubSection = (event) => {
  const homePageContent = document.querySelector("#content").innerHTML;
  switch (event.target.getAttribute("data-id")) {
    case "angles":
      let angleDiv = document.createElement("div");
      angleDiv.classList.add("angles");
      angleDiv.innerHTML = `
                            <button class="angle__back-btn" id="angle__back-btn"><i class="fas fa-arrow-left"></i></button>
                            <h2 class="angle__heading">Enter all the three angles in below to know if they can make a triangle or not</h2>
                            <input class="angle__input" id="angle__input-1" type="number"/>
                            <input class="angle__input" id="angle__input-2" type="number"/>
                            <input class="angle__input" id="angle__input-3" type="number"/>
                            <button class="angle__submit-btn" id="angle__submit-btn">Submit</button>
                            <p class="angle__output" id="angle__output">Output will be shown here</p>
                        `;
      documentContent.innerHTML = "";
      documentContent.appendChild(angleDiv);

      const output = document.querySelector("#angle__output");

      const verifyTriangularity = (event) => {
        const angleInput1 = parseInt(
          document.querySelector("#angle__input-1").value
        );
        const angleInput2 = parseInt(
          document.querySelector("#angle__input-2").value
        );
        const angleInput3 = parseInt(
          document.querySelector("#angle__input-3").value
        );
        let sum = angleInput1 + angleInput2 + angleInput3;
        if (sum === 180) {
          output.innerHTML = `<i class="fas fa-laugh-beam"></i> Heck yeah ! these angles will definitely make an awesome triangle`;
        } else
          output.innerHTML = `<i class="fas fa-frown-open"></i> Sorry, but these angles might not be able to make any triangle yet.`;
      };

      const submitBtn = document.querySelector("#angle__submit-btn");
      submitBtn.addEventListener("click", verifyTriangularity);

      const goBack = (event) => {
        documentContent.innerHTML = homePageContent;
        setEventListenersAtHome();
      };

      const backBtn = document.querySelector("#angle__back-btn");
      backBtn.addEventListener("click", goBack);
  }
};

setEventListenersAtHome();
