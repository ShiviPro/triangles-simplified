let documentContent = document.querySelector("#content");
const setEventListenersAtHome = () => {
  let subSections = document.querySelectorAll(".sub-section");
  subSections.forEach((subSection) => {
    subSection.addEventListener("click", selectSubSection);
  });
};

const selectSubSection = (event) => {
  const homePageContent = document.querySelector("#content").innerHTML;
  const goBack = () => {
    documentContent.innerHTML = homePageContent;
    setEventListenersAtHome();
  };
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

      var submitBtn = document.querySelector("#angle__submit-btn");
      submitBtn.addEventListener("click", verifyTriangularity);

      var backBtn = document.querySelector("#angle__back-btn");
      backBtn.addEventListener("click", goBack);
      break;

    case "hypoCheck":
      let hypoCheck = document.createElement("div");
      hypoCheck.classList.add("hypo-check");

      hypoCheck.innerHTML = `
            <button class="hypo-check__back-btn" id="hypo-check__back-btn"><i class="fas fa-arrow-left"></i></button>    
            <h2 class="hypo-check__heading">Enter the sides of right-angled triangle</h2>
            <img class="hypo-check__desc-img" alt="right-angled-triangle-sides-described" src="./assets/images/right-angled-triangle.png" />
            <label class="hypo-check__base-label" for="base">Base=</label>
            <input id="hypo-check__base-input" class="hypo-check__base-input" name="base" type="number" />
            <label class="hypo-check__alt-label" for="altitude">Altitude=</label>
            <input id="hypo-check__alt-input" class="hypo-check__alt-input" name="altitude" />
            <button id="hypo-check__submit-btn" class="hypo-check__submit-btn">Submit</button>
            <h2 class="hypo-check__output_heading" >Hypotenuse would be shown here- </h2>
            <p id="hypo-check__output" class="hypo-check__output">Hypotenuse = √base<sup>2</sup>+altitude<sup>2</sup><p>
            `;

      documentContent.innerHTML = "";
      documentContent.appendChild(hypoCheck);

      const calcHypotenuse = (event) => {
        let baseVal = parseInt(
          document.querySelector("#hypo-check__base-input").value
        );
        let altVal = parseInt(
          document.querySelector("#hypo-check__alt-input").value
        );

        let hypoVal = Math.sqrt(Math.pow(baseVal, 2) + Math.pow(altVal, 2));
        const output = document.querySelector("#hypo-check__output");
        output.innerText = `Hypotenuse=${hypoVal}`;
      };

      var submitBtn = document.querySelector("#hypo-check__submit-btn");
      submitBtn.addEventListener("click", calcHypotenuse);

      var backBtn = document.querySelector("#hypo-check__back-btn");
      backBtn.addEventListener("click", goBack);
      break;
  }
};

setEventListenersAtHome();
