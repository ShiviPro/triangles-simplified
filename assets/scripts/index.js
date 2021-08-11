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
            <img class="hypo-check__desc-img" alt="image representing sides of a right-angled triangle" src="./assets/images/right-angled-triangle.png" />
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

    case "area":
      let calcAreaDiv = document.createElement("div");
      calcAreaDiv.classList.add("calc-area");
      calcAreaDiv.innerHTML = `
      <button class="calc-area__back-btn" id="calc-area__back-btn"><i class="fas fa-arrow-left"></i></button>    
      <h2 class="calc-area__heading-1">Calculate Area</h2>
      <h3 class="calc-area__heading-2">Select any option below according to the data you have - </h3>
      
      <div id="calc-area__option-1">
        <input id="calc-area__radio-btn-1" type="radio" name="area-calc-option" value="You only know base and height values.">
        <label class="calc-area__label-1">You only know base and height values.</label>
      </div>
      
      <div id="calc-area__option-2">
        <input id="calc-area__radio-btn-2" type="radio" name="area-calc-option" value="You know length of all the sides of triangle.">
        <label class="calc-area__label-2">You know length of all the sides of triangle.</label>
      </div>
      
      <div id="calc-area__option-3">
        <input id="calc-area__radio-btn-3" type="radio" name="area-calc-option" value="You only know length of 2 sides of triangle, but also know angle made by both of them.">
        <label class="calc-area__label-3">You only know length of 2 sides of triangle, but also know angle made by both of them.</label>
      </div>
      `;

      documentContent.innerHTML = "";
      documentContent.appendChild(calcAreaDiv);

      const areaOption1 = document.querySelector("#calc-area__option-1");
      const areaOption2 = document.querySelector("#calc-area__option-2");
      const areaOption3 = document.querySelector("#calc-area__option-3");

      let areaCalcOption1Div = document.createElement("div");
      areaCalcOption1Div.classList.add("calc-area__option-1");
      areaCalcOption1Div.innerHTML = `
          <img  class="calc-area__option-1__image" alt="image describing base and height" src="./assets/images/triangle_base_and_height.png" />
          
          <label class="calc-area__option-1__base-label" >Base = </label>
          <input id="calc-area__option-1__base-input" class="calc-area__option-1__base-input"  type="number" />
          
          <label class="calc-area__option-1__height-label" >Height = </label>
          <input id="calc-area__option-1__height-input" class="calc-area__option-1__height-input"  type="number" />
          
          <button id="calc-area__option-1__calculate-btn" class="calc-area__option-1__calculate-btn" >Calculate</button>
          <h2 class="calc-area__option-1__output-heading" >Area would be shown here - </h2>
          <p id="calc-area__option-1__output" class="calc-area__option-1__output" >Area = 1/2 * Base * Height</p>
          `;

      let areaCalcOption2Div = document.createElement("div");
      areaCalcOption2Div.classList.add("calc-area__option-2");
      areaCalcOption2Div.innerHTML = `
              <img  class="calc-area__option-2__image" alt="image of a triangle with sides a, b, and c" src="./assets/images/triangle_with_all_sides.png" />
              
              <label class="calc-area__option-2__side-1-label" >a = </label>
              <input id="calc-area__option-2__side-1-input" class="calc-area__option-2__side-1-input"  type="number" />
              
              <label class="calc-area__option-2__side-2-label" >b = </label>
              <input id="calc-area__option-2__side-2-input" class="calc-area__option-2__side-2-input"  type="number" />
              
              <label class="calc-area__option-2__side-3-label" >c = </label>
              <input id="calc-area__option-2__side-3-input" class="calc-area__option-2__side-3-input"  type="number" />

              <button id="calc-area__option-2__calculate-btn" class="calc-area__option-2__calculate-btn" >Calculate</button>
              <h2 class="calc-area__option-2__output-heading" >Area would be shown here - </h2>
              <p id="calc-area__option-2__output" class="calc-area__option-2__output" >Area = √s*(s-a)*(s-b)*(s-c); s(semi-perimeter) = (a+b+c)/2</p>
              `;

      let areaCalcOption3Div = document.createElement("div");
      areaCalcOption3Div.classList.add("calc-area__option-3");
      areaCalcOption3Div.innerHTML = `
              <img  class="calc-area__option-3__image" alt="image of a triangle with sides b, c, and angle betweeen them i.e. A" src="./assets/images/triangle_with_2_sides_and_1_angle.png" />
              
              <label class="calc-area__option-3__side-1-label" >b = </label>
              <input id="calc-area__option-3__side-1-input" class="calc-area__option-3__side-1-input"  type="number" />
              
              <label class="calc-area__option-3__side-2-label" >c = </label>
              <input id="calc-area__option-3__side-2-input" class="calc-area__option-3__side-2-input"  type="number" />
              
              <label class="calc-area__option-3__angle-3-label" >A(in degrees) = </label>
              <input id="calc-area__option-3__angle-3-input" class="calc-area__option-3__angle-3-input"  type="number" />

              <button id="calc-area__option-3__calculate-btn" class="calc-area__option-3__calculate-btn" >Calculate</button>
              <h2 class="calc-area__option-3__output-heading" >Area would be shown here - </h2>
              <p id="calc-area__option-3__output" class="calc-area__option-3__output" >Area = 1/2*a*b*sin(A)</p>
              `;

      areaOption1.addEventListener("click", (event) => {
        document.querySelector("#calc-area__radio-btn-1").checked = true;
        documentContent.appendChild(areaCalcOption1Div);

        areaCalcOption2Div.remove();
        areaCalcOption3Div.remove();

        const calcBtn = document.querySelector(
          "#calc-area__option-1__calculate-btn"
        );
        calcBtn.addEventListener("click", (event) => {
          let baseVal = parseInt(
            document.querySelector("#calc-area__option-1__base-input").value
          );
          let heightVal = parseInt(
            document.querySelector("#calc-area__option-1__height-input").value
          );

          let area = 0.5 * baseVal * heightVal;
          const output = document.querySelector("#calc-area__option-1__output");
          output.innerText = `Area = ${area}`;
        });
      });

      areaOption2.addEventListener("click", (event) => {
        document.querySelector("#calc-area__radio-btn-2").checked = true;
        documentContent.appendChild(areaCalcOption2Div);
        areaCalcOption1Div.remove();
        areaCalcOption3Div.remove();

        const calcBtn = document.querySelector(
          "#calc-area__option-2__calculate-btn"
        );
        calcBtn.addEventListener("click", (event) => {
          let side1Val = parseInt(
            document.querySelector("#calc-area__option-2__side-1-input").value
          );
          let side2Val = parseInt(
            document.querySelector("#calc-area__option-2__side-2-input").value
          );
          let side3Val = parseInt(
            document.querySelector("#calc-area__option-2__side-3-input").value
          );

          let semiPerimeter = (side1Val + side2Val + side3Val) / 2;
          let area = Math.sqrt(
            semiPerimeter *
              (semiPerimeter - side1Val) *
              (semiPerimeter - side2Val) *
              (semiPerimeter - side3Val)
          );
          const output = document.querySelector("#calc-area__option-2__output");
          output.innerText = `Area = ${area}`;
        });
      });

      areaOption3.addEventListener("click", (event) => {
        document.querySelector("#calc-area__radio-btn-3").checked = true;
        documentContent.appendChild(areaCalcOption3Div);
        areaCalcOption1Div.remove();
        areaCalcOption2Div.remove();

        const calcBtn = document.querySelector(
          "#calc-area__option-3__calculate-btn"
        );
        calcBtn.addEventListener("click", (event) => {
          let side1Val = parseInt(
            document.querySelector("#calc-area__option-3__side-1-input").value
          );
          let side2Val = parseInt(
            document.querySelector("#calc-area__option-3__side-2-input").value
          );
          let angle3Val = parseInt(
            document.querySelector("#calc-area__option-3__angle-3-input").value
          );
          const ONE_DEGREE = Math.PI / 180;
          let area =
            0.5 * side1Val * side2Val * Math.sin(angle3Val * ONE_DEGREE);
          const output = document.querySelector("#calc-area__option-3__output");
          output.innerText = `Area = ${area}`;
        });
      });

      var backBtn = document.querySelector("#calc-area__back-btn");
      backBtn.addEventListener("click", goBack);
      break;
  }
};

setEventListenersAtHome();
