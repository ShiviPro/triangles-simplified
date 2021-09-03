let documentContent = document.querySelector("#content");
const setEventListenersAtHome = () => {
  let subSections = document.querySelectorAll(".sub-section");
  subSections.forEach((subSection) => {
    subSection.addEventListener("click", selectSubSection);
  });
};

const selectSubSection = (event) => {
  const homePageContent = documentContent.innerHTML;
  const goBack = () => {
    documentContent.style.opacity = 0;
    setTimeout(() => {
      documentContent.innerHTML = homePageContent;
      setEventListenersAtHome();
      documentContent.style.opacity = 1;
    }, 250);
  };

  const isFloating = (num) => {
    return num.toString().indexOf(".") != -1;
  };

  const getDigitsAfterDec = (num) => {
    num = num.toString();
    let digitsAfterDec = num.substring(num.indexOf(".") + 1);
    return digitsAfterDec.length;
  };

  switch (event.target.getAttribute("data-id")) {
    case "angles":
      let angleDiv = document.createElement("div");
      angleDiv.classList.add("angles");
      angleDiv.innerHTML = `
                            <button class="back-btn" id="angle__back-btn"><i class="fas fa-arrow-left"></i></button>
                            <h2 class="angle__heading">Enter all the three angles in below to know if they can make a triangle or not</h2>
                            <input class="angle__input" id="angle__input-1" type="number"/>
                            <input class="angle__input" id="angle__input-2" type="number"/>
                            <input class="angle__input" id="angle__input-3" type="number"/>
                            <button class="angle__submit-btn" id="angle__submit-btn">Submit</button>
                            <p class="angle__output" id="angle__output">Output will be shown here</p>
                        `;
      documentContent.style.opacity = 0;
      setTimeout(() => {
        documentContent.innerHTML = "";
        documentContent.appendChild(angleDiv);
        documentContent.style.opacity = 1;
        const output = document.querySelector("#angle__output");

        const verifyTriangularity = (event) => {
          let angleInput1 = document.querySelector("#angle__input-1").value;
          let angleInput2 = document.querySelector("#angle__input-2").value;
          let angleInput3 = document.querySelector("#angle__input-3").value;
          if (angleInput1 === "" || angleInput2 === "" || angleInput3 === "") {
            output.style.opacity = 0;
            setTimeout(() => {
              output.innerHTML = `<i class="fas fa-grimace"></i> A tri-angle consists of 3 angles. So please specify all of them.`;
              output.style.opacity = 1;
            }, 250);
          } else {
            const angleInput1Val = parseFloat(angleInput1);
            const angleInput2Val = parseFloat(angleInput2);
            const angleInput3Val = parseFloat(angleInput3);
            let sum = angleInput1Val + angleInput2Val + angleInput3Val;
            if (
              angleInput1Val > 0 &&
              angleInput2Val > 0 &&
              angleInput3Val > 0 &&
              sum === 180
            ) {
              output.style.opacity = 0;
              setTimeout(() => {
                output.innerHTML = `<i class="fas fa-laugh-beam"></i> Heck yeah ! these angles will definitely make an awesome triangle`;
                output.style.opacity = 1;
              }, 250);
            } else {
              output.style.opacity = 0;
              setTimeout(() => {
                output.innerHTML = `<i class="fas fa-frown-open"></i> Sorry, but these angles might not be able to make any triangle yet.`;
                output.style.opacity = 1;
              }, 250);
            }
          }
        };

        var submitBtn = document.querySelector("#angle__submit-btn");
        submitBtn.addEventListener("click", verifyTriangularity);

        var backBtn = document.querySelector("#angle__back-btn");
        backBtn.addEventListener("click", goBack);
      }, 250);

      break;

    case "hypoCheck":
      let hypoCheck = document.createElement("div");
      hypoCheck.classList.add("hypo-check");

      hypoCheck.innerHTML = `
            <button class="back-btn" id="hypo-check__back-btn"><i class="fas fa-arrow-left"></i></button>    
            <h2 class="hypo-check__heading">Enter the sides of right-angled triangle</h2>
            <img class="hypo-check__desc-img" alt="image representing sides of a right-angled triangle" src="./assets/images/right-angled-triangle.png" />
            <label class="hypo-check__base-label" for="base">Base=</label>
            <input id="hypo-check__base-input" class="hypo-check__base-input" name="base" type="number" />
            <label class="hypo-check__alt-label" for="altitude">Altitude=</label>
            <input id="hypo-check__alt-input" class="hypo-check__alt-input" name="altitude" />
            <button id="hypo-check__submit-btn" class="hypo-check__submit-btn">Submit</button>
            <h2 class="hypo-check__output_heading" >Hypotenuse would be shown here- </h2>
            <p id="hypo-check__output" class="hypo-check__output">Hypotenuse = √base<sup class="degree-symbol">2</sup>+altitude<sup class="degree-symbol">2</sup><p>
            `;

      documentContent.style.opacity = 0;
      setTimeout(() => {
        documentContent.innerHTML = "";
        documentContent.appendChild(hypoCheck);
        documentContent.style.opacity = 1;

        const calcHypotenuse = (event) => {
          let base = document.querySelector("#hypo-check__base-input").value;
          let alt = document.querySelector("#hypo-check__alt-input").value;

          const output = document.querySelector("#hypo-check__output");

          if (base === "" || alt === "") {
            output.style.opacity = 0;
            setTimeout(() => {
              output.innerHTML = `<i class="fas fa-grimace"></i> In order to give you the Hypotenuse, we require both Base & Altitude.`;
              output.style.opacity = 1;
            }, 250);
          } else {
            let baseVal = parseFloat(base);
            let altVal = parseFloat(alt);

            if (baseVal <= 0 || altVal <= 0) {
              output.style.opacity = 0;
              setTimeout(() => {
                output.innerHTML = `Woah, stop <i class="fas fa-hand-paper"></i>right there !<br /> Base and/or altitude can neither be negative nor 0. <i class="fas fa-angry"></i>`;
                output.style.opacity = 1;
              }, 250);
              return;
            }

            let hypoVal = Math.sqrt(Math.pow(baseVal, 2) + Math.pow(altVal, 2));

            if (isFloating(hypoVal)) {
              switch (getDigitsAfterDec(hypoVal)) {
                case 1:
                  hypoVal = hypoVal.toFixed(1);
                  break;
                case 2:
                  hypoVal = hypoVal.toFixed(2);
                  break;
                default:
                  hypoVal = hypoVal.toFixed(3);
                  break;
              }
            }

            output.style.opacity = 0;
            setTimeout(() => {
              output.innerText = `Hypotenuse = ${hypoVal}`;
              output.style.opacity = 1;
            }, 250);
          }
        };

        var submitBtn = document.querySelector("#hypo-check__submit-btn");
        submitBtn.addEventListener("click", calcHypotenuse);

        var backBtn = document.querySelector("#hypo-check__back-btn");
        backBtn.addEventListener("click", goBack);
      }, 250);
      break;

    case "area":
      let calcAreaDiv = document.createElement("div");
      calcAreaDiv.classList.add("calc-area");
      calcAreaDiv.innerHTML = `
      <button class="back-btn" id="calc-area__back-btn"><i class="fas fa-arrow-left"></i></button>    
      <h2 class="calc-area__heading-1">Calculate Area</h2>
      <h3 class="calc-area__heading-2">Select any option below according to the data you have - </h3>
      
      <div class="calc-area__option-1" id="calc-area__option-1">
        <input class="calc-area__radio-btn-1" id="calc-area__radio-btn-1" type="radio" name="area-calc-option">
        <label class="calc-area__label-1">You only know base and height values.</label>
      </div>
      
      <div class="calc-area__option-2" id="calc-area__option-2">
        <input class="calc-area__radio-btn-2" id="calc-area__radio-btn-2" type="radio" name="area-calc-option">
        <label class="calc-area__label-2">You know length of all the sides of triangle.</label>
      </div>
      
      <div class="calc-area__option-3" id="calc-area__option-3">
        <input class="calc-area__radio-btn-3" id="calc-area__radio-btn-3" type="radio" name="area-calc-option">
        <label class="calc-area__label-3">You not only know length of 2 sides of triangle, but also the angle made by both of them.</label>
      </div>
      `;

      documentContent.style.opacity = 0;
      setTimeout(() => {
        documentContent.innerHTML = "";
        documentContent.appendChild(calcAreaDiv);
        documentContent.style.opacity = 1;
        const areaOption1 = document.querySelector("#calc-area__option-1");
        const areaOption2 = document.querySelector("#calc-area__option-2");
        const areaOption3 = document.querySelector("#calc-area__option-3");

        let areaCalcOption1Div = document.createElement("div");
        areaCalcOption1Div.classList.add("calc-area__option-1-res");
        areaCalcOption1Div.innerHTML = `
          <img  class="calc-area__option-1-res__image" alt="image describing base and height" src="./assets/images/triangle_base_and_height.png" />
          
          <label class="calc-area__option-1-res__base-label" >Base = </label>
          <input id="calc-area__option-1-res__base-input" class="calc-area__option-1-res__base-input"  type="number" />
          
          <label class="calc-area__option-1-res__height-label" >Height = </label>
          <input id="calc-area__option-1-res__height-input" class="calc-area__option-1-res__height-input"  type="number" />
          
          <button id="calc-area__option-1-res__calculate-btn" class="calc-area__option-1-res__calculate-btn" >Calculate</button>
          <h2 class="calc-area__option-1-res__output-heading" >Area would be shown here - </h2>
          <p id="calc-area__option-1-res__output" class="calc-area__option-1-res__output" >Area = 1/2 * Base * Height</p>
          `;

        let areaCalcOption2Div = document.createElement("div");
        areaCalcOption2Div.classList.add("calc-area__option-2-res");
        areaCalcOption2Div.innerHTML = `
              <img  class="calc-area__option-2-res__image" alt="image of a triangle with sides a, b, and c" src="./assets/images/triangle_with_all_sides.png" />
              
              <label class="calc-area__option-2-res__side-1-label" >a = </label>
              <input id="calc-area__option-2-res__side-1-input" class="calc-area__option-2-res__side-1-input"  type="number" />
              
              <label class="calc-area__option-2-res__side-2-label" >b = </label>
              <input id="calc-area__option-2-res__side-2-input" class="calc-area__option-2-res__side-2-input"  type="number" />
              
              <label class="calc-area__option-2-res__side-3-label" >c = </label>
              <input id="calc-area__option-2-res__side-3-input" class="calc-area__option-2-res__side-3-input"  type="number" />

              <button id="calc-area__option-2-res__calculate-btn" class="calc-area__option-2-res__calculate-btn" >Calculate</button>
              <h2 class="calc-area__option-2-res__output-heading" >Area would be shown here - </h2>
              <p id="calc-area__option-2-res__output" class="calc-area__option-2-res__output" >Area = √s*(s-a)*(s-b)*(s-c); s(semi-perimeter) = (a+b+c)/2</p>
              `;

        let areaCalcOption3Div = document.createElement("div");
        areaCalcOption3Div.classList.add("calc-area__option-3-res");
        areaCalcOption3Div.innerHTML = `
              <img  class="calc-area__option-3-res__image" alt="image of a triangle with sides b, c, and angle betweeen them i.e. A" src="./assets/images/triangle_with_2_sides_and_1_angle.png" />
              
              <label class="calc-area__option-3-res__side-1-label" >b = </label>
              <input id="calc-area__option-3-res__side-1-input" class="calc-area__option-3-res__side-1-input"  type="number" />
              
              <label class="calc-area__option-3-res__side-2-label" >c = </label>
              <input id="calc-area__option-3-res__side-2-input" class="calc-area__option-3-res__side-2-input"  type="number" />
              
              <label class="calc-area__option-3-res__angle-3-label" >A(in degrees) = </label>
              <input id="calc-area__option-3-res__angle-3-input" class="calc-area__option-3-res__angle-3-input"  type="number" />

              <button id="calc-area__option-3-res__calculate-btn" class="calc-area__option-3-res__calculate-btn" >Calculate</button>
              <h2 class="calc-area__option-3-res__output-heading" >Area would be shown here - </h2>
              <p id="calc-area__option-3-res__output" class="calc-area__option-3-res__output" >Area = 1/2*a*b*sin(A)</p>
              `;

        areaOption1.addEventListener("click", (event) => {
          document.querySelector("#calc-area__radio-btn-1").checked = true;
          documentContent.appendChild(areaCalcOption1Div);

          areaCalcOption1Div.style.opacity = 0;
          areaCalcOption2Div.remove();
          areaCalcOption3Div.remove();

          setTimeout(() => {
            areaCalcOption1Div.style.opacity = 1;

            const calcBtn = document.querySelector(
              "#calc-area__option-1-res__calculate-btn"
            );
            calcBtn.addEventListener("click", (event) => {
              let base = document.querySelector(
                "#calc-area__option-1-res__base-input"
              ).value;
              let height = document.querySelector(
                "#calc-area__option-1-res__height-input"
              ).value;

              const output = document.querySelector(
                "#calc-area__option-1-res__output"
              );

              if (base === "" || height === "") {
                output.style.opacity = 0;
                setTimeout(() => {
                  output.innerHTML = `<i class="fas fa-grimace"></i> In order to give you the Area, we require both Base as well as Height.`;
                  output.style.opacity = 1;
                }, 250);
              } else {
                let baseVal = parseFloat(base);
                let heightVal = parseFloat(height);

                if (baseVal <= 0 || heightVal <= 0) {
                  output.style.opacity = 0;
                  setTimeout(() => {
                    output.innerHTML = `Woah, stop <i class="fas fa-hand-paper"></i>right there !<br /> Base and/or height can neither be negative nor 0. <i class="fas fa-angry"></i>`;
                    output.style.opacity = 1;
                  }, 250);
                } else {
                  let area = 0.5 * baseVal * heightVal;
                  if (isFloating(area)) {
                    switch (getDigitsAfterDec(area)) {
                      case 1:
                        area = area.toFixed(1);
                        break;
                      case 2:
                        area = area.toFixed(2);
                        break;
                      default:
                        area = area.toFixed(3);
                        break;
                    }
                  }
                  output.style.opacity = 0;
                  setTimeout(() => {
                    output.innerText = `Area = ${area}`;
                    output.style.opacity = 1;
                  }, 250);
                }
              }
            });
          }, 250);
        });

        areaOption2.addEventListener("click", (event) => {
          document.querySelector("#calc-area__radio-btn-2").checked = true;
          documentContent.appendChild(areaCalcOption2Div);

          areaCalcOption2Div.style.opacity = 0;
          areaCalcOption1Div.remove();
          areaCalcOption3Div.remove();

          setTimeout(() => {
            areaCalcOption2Div.style.opacity = 1;

            const calcBtn = document.querySelector(
              "#calc-area__option-2-res__calculate-btn"
            );
            calcBtn.addEventListener("click", (event) => {
              let side1 = document.querySelector(
                "#calc-area__option-2-res__side-1-input"
              ).value;
              let side2 = document.querySelector(
                "#calc-area__option-2-res__side-2-input"
              ).value;
              let side3 = document.querySelector(
                "#calc-area__option-2-res__side-3-input"
              ).value;

              const output = document.querySelector(
                "#calc-area__option-2-res__output"
              );

              if (side1 === "" || side2 === "" || side3 === "") {
                output.style.opacity = 0;
                setTimeout(() => {
                  output.innerHTML = `<i class="fas fa-grimace"></i> In order to give you the Area, we require all sides of the Triangle.`;
                  output.style.opacity = 1;
                }, 250);
              } else {
                let side1Val = parseFloat(side1);
                let side2Val = parseFloat(side2);
                let side3Val = parseFloat(side3);

                if (side1Val <= 0 || side2Val <= 0 || side3Val <= 0) {
                  output.style.opacity = 0;
                  setTimeout(() => {
                    output.innerHTML = `Woah, stop <i class="fas fa-hand-paper"></i>right there !<br /> Length of any side/s can neither be negative nor 0. <i class="fas fa-angry"></i>`;
                    output.style.opacity = 1;
                  }, 250);
                } else {
                  let semiPerimeter = (side1Val + side2Val + side3Val) / 2;
                  let area = Math.sqrt(
                    semiPerimeter *
                      (semiPerimeter - side1Val) *
                      (semiPerimeter - side2Val) *
                      (semiPerimeter - side3Val)
                  );
                  if (isFloating(area)) {
                    switch (getDigitsAfterDec(area)) {
                      case 1:
                        area = area.toFixed(1);
                        break;
                      case 2:
                        area = area.toFixed(2);
                        break;
                      default:
                        area = area.toFixed(3);
                        break;
                    }
                  }
                  output.style.opacity = 0;
                  setTimeout(() => {
                    output.innerText = `Area = ${area}`;
                    output.style.opacity = 1;
                  }, 250);
                }
              }
            });
          }, 250);
        });

        areaOption3.addEventListener("click", (event) => {
          document.querySelector("#calc-area__radio-btn-3").checked = true;
          documentContent.appendChild(areaCalcOption3Div);

          areaCalcOption3Div.style.opacity = 0;
          areaCalcOption1Div.remove();
          areaCalcOption2Div.remove();

          setTimeout(() => {
            areaCalcOption3Div.style.opacity = 1;

            const calcBtn = document.querySelector(
              "#calc-area__option-3-res__calculate-btn"
            );
            calcBtn.addEventListener("click", (event) => {
              let side1 = document.querySelector(
                "#calc-area__option-3-res__side-1-input"
              ).value;
              let side2 = document.querySelector(
                "#calc-area__option-3-res__side-2-input"
              ).value;
              let angle3 = document.querySelector(
                "#calc-area__option-3-res__angle-3-input"
              ).value;

              const output = document.querySelector(
                "#calc-area__option-3-res__output"
              );

              if (side1 === "" || side2 === "" || angle3 === "") {
                output.style.opacity = 0;
                setTimeout(() => {
                  output.innerHTML = `<i class="fas fa-grimace"></i> In order to give you the Area, we require 2 sides of the Triangle, along with the angle between them.`;
                  output.style.opacity = 1;
                }, 250);
              } else {
                let side1Val = parseFloat(side1);
                let side2Val = parseFloat(side2);
                let angle3Val = parseFloat(angle3);
                if (side1Val <= 0 || side2Val <= 0) {
                  output.style.opacity = 0;
                  setTimeout(() => {
                    output.innerHTML = `Woah, stop <i class="fas fa-hand-paper"></i>right there !<br /> Length of any side/s can neither be negative nor 0. <i class="fas fa-angry"></i>`;
                    output.style.opacity = 1;
                  }, 250);
                } else {
                  const ONE_DEGREE_IN_RADIANS = Math.PI / 180;
                  let area =
                    0.5 *
                    side1Val *
                    side2Val *
                    Math.sin(angle3Val * ONE_DEGREE_IN_RADIANS);
                  if (isFloating(area)) {
                    switch (getDigitsAfterDec(area)) {
                      case 1:
                        area = area.toFixed(1);
                        break;
                      case 2:
                        area = area.toFixed(2);
                        break;
                      default:
                        area = area.toFixed(3);
                        break;
                    }
                  }
                  output.style.opacity = 0;
                  setTimeout(() => {
                    output.innerText = `Area = ${area}`;
                    output.style.opacity = 1;
                  }, 250);
                }
              }
            });
          }, 250);
        });

        var backBtn = document.querySelector("#calc-area__back-btn");
        backBtn.addEventListener("click", goBack);
      }, 250);

      break;
    case "quiz":
      const quizData = [
        {
          ques: 'If a triangle has angles 135<sup class="degree-symbol">0</sup>, 15<sup class="degree-symbol">0</sup>, 30<sup class="degree-symbol">0</sup>. Is it an obtuse triangle?',
          options: ["Yes", "No"],
          correct: "Yes",
        },
        {
          ques: 'If a triangle has angles 115<sup class="degree-symbol">0</sup>, 25<sup class="degree-symbol">0</sup>, 40<sup class="degree-symbol">0</sup>. Is it an acute triangle?',
          options: ["Yes", "No"],
          correct: "No",
        },
        {
          ques: 'If a triangle has angles 90<sup class="degree-symbol">0</sup>, 60<sup class="degree-symbol">0</sup>, 30<sup class="degree-symbol">0</sup>. Is it a right angle triangle?',
          options: ["Yes", "No"],
          correct: "Yes",
        },
        {
          ques: 'A triangle has angles 60<sup class="degree-symbol">0</sup>, 60<sup class="degree-symbol">0</sup>, 60<sup class="degree-symbol">0</sup>. Is it an equilateral triangle?',
          options: ["Yes", "No"],
          correct: "Yes",
        },
        {
          ques: 'If a triangle has angles 25<sup class="degree-symbol">0</sup>, 75<sup class="degree-symbol">0</sup>, 80<sup class="degree-symbol">0</sup>. Is it an acute triangle?',
          options: ["Yes", "No"],
          correct: "Yes",
        },
        {
          ques: 'If a triangle has 2 sides with equal lengths and 75<sup class="degree-symbol">0</sup> angle between them. What is the type of triangle?',
          options: ["Equilateral", "Isosceles", "Right-angled Triangle"],
          correct: "Isosceles",
        },
        {
          ques: 'If a triangle has 2 angles of 75<sup class="degree-symbol">0</sup>. What is the measure of third angle in degree?',
          options: ["25", "30", "15"],
          correct: "30",
        },
        {
          ques: 'If a triangle has 2 sides with equal lengths and 60<sup class="degree-symbol">0</sup> angle between them. What is the type of triangle?',
          options: ["Equilateral", "Isosceles", "Both"],
          correct: "Both",
        },
        {
          ques: "The perimeter of an equilateral triangle is 15cm. What is the length of one side?",
          options: ["15cm", "45cm", "5cm"],
          correct: "5cm",
        },
        {
          ques: "If a triangle has sides of 2cm, 3cm, 4cm, what is the type of triangle?",
          options: ["Equilateral", "Isosceles", "Scalene"],
          correct: "Scalene",
        },
      ];

      let questions = quizData.map((quizQues, quesIndex) => {
        let quesDiv = document.createElement("div");
        quesDiv.classList.add("question");

        let optionsDiv = document.createElement("div");
        optionsDiv.classList.add("options");
        quizQues.options.forEach((option, index) => {
          let optionDiv = document.createElement("div");
          optionDiv.classList.add(`option-${index}`);
          optionDiv.innerHTML = `
            <input class="option" type="radio" name="${quesIndex}" value="${option}"/>
            <label class="option-label">${option}</label>
            `;
          optionsDiv.appendChild(optionDiv);
        });
        optionsDiv.childNodes.forEach((optionDiv, index) => {
          optionDiv.addEventListener("click", (event) => {
            optionDiv.childNodes[1].checked = true;
            optionDiv.childNodes[3].classList.add("bgPurple");
            optionsDiv.childNodes.forEach((opt, ind) => {
              if (ind !== index) {
                opt.childNodes[3].classList.remove("bgPurple");
              }
            });
          });
        });

        quesDiv.innerHTML = `
        <h2 class="question-txt">${quizQues.ques}</h2>
        `;
        quesDiv.appendChild(optionsDiv);
        let submitBtn = document.createElement("button");
        submitBtn.classList.add("submit-btn");
        submitBtn.innerText = "Next";
        submitBtn.setAttribute("data-correct", quizQues.correct);
        quesDiv.appendChild(submitBtn);
        return quesDiv;
      });

      documentContent.innerHTML = `<button class="back-btn" id="quiz__back-btn"><i class="fas fa-arrow-left"></i></button>`;

      const addQues = (
        submitBtn,
        quesIndex,
        question,
        score,
        scoreForEachQues,
        maxScore
      ) => {
        submitBtn.addEventListener("click", (event) => {
          let correctAns = event.target.getAttribute("data-correct");
          let options = document.querySelectorAll(".option");
          let isAttempted = false;
          options.forEach((option) => {
            if (option.checked === true) {
              isAttempted = true;
              if (option.value === correctAns) {
                question.classList.add("bgGreen");
                question.classList.add("border-solid-2px-black");
                score += scoreForEachQues;
              } else {
                question.classList.add("bgRed");
                question.classList.add("border-solid-2px-black");
                // score -= scoreForEachQues;
              }
            }
          });
          if (!isAttempted) {
            question.classList.add("bgYellow");
            question.classList.add("border-solid-2px-black");
          }
          window.setTimeout(() => {
            question.remove();
            quesIndex += 1;
            if (quesIndex === questions.length) {
              let scoreDiv = document.createElement("div");
              scoreDiv.classList.add("score");
              scoreDiv.innerHTML = `
                    <h2>You scored ${score}/${maxScore} points</h2>
                `;
              documentContent.appendChild(scoreDiv);
              return;
            }
            question = questions[quesIndex];
            documentContent.appendChild(question);
            submitBtn = document.querySelector(".submit-btn");
            if (quesIndex === questions.length - 1) {
              submitBtn.innerText = "End Quiz";
            }
            addQues(
              submitBtn,
              quesIndex,
              question,
              score,
              scoreForEachQues,
              maxScore
            );
          }, 1000);
        });
      };

      for (
        let questionIndex = 0;
        questionIndex < questions.length;
        questionIndex++
      ) {
        let question = questions[questionIndex];
        let score = 0;
        const scoreAwardedForEachQues = 1;
        const maxScore = questions.length * scoreAwardedForEachQues;

        if (questionIndex === 0) {
          documentContent.appendChild(question);
          let submitBtn = document.querySelector(".submit-btn");
          addQues(
            submitBtn,
            questionIndex,
            question,
            score,
            scoreAwardedForEachQues,
            maxScore
          );
        }
      }

      var backBtn = document.querySelector("#quiz__back-btn");
      backBtn.addEventListener("click", goBack);
      break;
  }
};

setEventListenersAtHome();
