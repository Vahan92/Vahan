let myApp = function() {
    let max = 100,
        min = 4,
        print = document.getElementById("print")
    return {

        getId: function(params) {
            return document.getElementById(params);
        },

        printing: function(inpVal) {
            if (typeof print !== null) {
                print.textContent = "Number of cells: " + inpVal.value;
            }
        },

        draw: function() {
            let inputVal = myApp.getId("num").value;
            let forCells = myApp.getId("forCells");
            if (inputVal < min || inputVal > max) {
                alert(`Please enter a number between ${min} and ${max}, or you are going to get this annoying alert notification :)`);
            } else {
                var i,
                    j,
                    newDiv,
                    newSpan;
                let fragment = document.createDocumentFragment();
                for (i = 0; i < inputVal; i++) {
                    let newCol = document.createElement('div');
                    newCol.classList.add("column");
                    for (j = 0; j < inputVal; j++) {
                        newSpan = document.createElement('span');
                        newSpan.innerText = i;
                        newDiv = document.createElement('div');
                        newDiv.appendChild(newSpan);    
                        newCol.appendChild(newDiv);               
                    }
                    fragment.appendChild(newCol);
                }
               
                myApp.getId('resets').disabled = false;
                myApp.getId('colourises').disabled = false;
                myApp.getId('draws').disabled = true;
                forCells.appendChild(fragment);
            }
        },

        getRandomColor: function() {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },

        colourise: function() {
            let toColour =  document.querySelectorAll('.column > div'); 
            for (let i = 0; i < toColour.length; i++) {
                    setTimeout(function() {
                        toColour[i].style.backgroundColor = myApp.getRandomColor();
                        toColour[i].style.transition = "all 1.5s";
                    }, 1500 * i);           
        }
        },

        reset: function() {
            print.textContent = "";
            while (forCells.firstChild) {
                forCells.removeChild(forCells.firstChild);
            }
            myApp.getId('resets').disabled = true;
            myApp.getId('colourises').disabled = true;
            myApp.getId('draws').disabled = false;
        }
    }
}();