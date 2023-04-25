const inputColor = document.querySelector("#inputColorName");
const firstColorInput = document.querySelector("#Color1");
const secondColorInput = document.querySelector("#Color2");
const colorBox = document.querySelector("#resultantColorBox");
const colorName = document.querySelector("#resultantColorName");

inputColor.addEventListener("submit", function(event){
    event.preventDefault();

    const firstColor = firstColorInput.value.toLowerCase();
    const secondColor = secondColorInput.value.toLowerCase();

    
    let mixedColor;
    switch(firstColor){
        case "red":
            switch(secondColor){
                case "blue":
                    mixedColor = "purple"
                    break;
                case "yellow":
                    mixedColor = "orange"
                    break;
                    default:
                        mixedColor = "Invalid Color Combination"; 
            }
            break;
           case "blue" :
            switch(secondColor){
                case "red":
                    mixedColor = "purple"
                    break;
                case "yellow":
                    mixedColor = "green"
                    break;
                    default:
                        mixedColor = "Invalid Color Combination";    
            } 
            break;
           case "yellow" :
                switch(secondColor){
                    case "red":
                        mixedColor = "orange"
                        break;
                    case "blue":
                        mixedColor = "green"
                        break;
                        default:
                            mixedColor = "Invalid Color Combination";    
                }
                break;  
               default:
                    mixedColor = "Invalid Color Combination";    
    }

    if (mixedColor == "invalid color combination"){
        resultantColorBox.style.backgroundColor = "white";
    } else {
        colorBox.style.backgroundColor = mixedColor;
    }

    colorName.textContent = mixedColor


});