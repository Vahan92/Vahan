let MyApp = function() {
    let self = this,
        max = 100,
        min = 4,        
        print = document.getElementById("print");

        init = function (divId) {
            forCells = divId;
        },

        getId = function(params) {
            return document.getElementById(params);
        },

        printing = function(inpVal) {
            if (typeof print !== null) {
                print.textContent = "Number of cells: " + inpVal.value * inpVal.value;
            }
        },

        checkingBtn = function() {
            if(forCells.firstChild){
                self.getId('resets').disabled = false;
                self.getId('colourises').disabled = false;
                self.getId('draws').disabled = true;
            } else {
                self.getId('resets').disabled = true;
                self.getId('colourises').disabled = true;
                self.getId('draws').disabled = false;
            }
        },

        draw = function() {
            let inputVal = self.getId("num").value;
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
                        newDiv = document.createElement('div');
                        newCol.appendChild(newDiv);               
                    }
                    fragment.appendChild(newCol);
                }            
               
                forCells.appendChild(fragment);
                checkingBtn();
            }
        },       

        getColor =  function() {
            var r = function () { return Math.floor(Math.random()*256) };
            return "rgb(" + r() + "," + r() + "," + r() + ")";
        },

        colourise =  function() {
            let toColour =  document.querySelectorAll('.column > div'); 
            for (let i = 0; i < toColour.length; i++) {
                    setTimeout(function() {
                        toColour[i].style.backgroundColor = self.getColor();
                        toColour[i].style.transition = "all 1.5s";
                    }, 1500 * i);           
        }
        },

        reset =  function() {
            print.textContent = "";
            while (forCells.firstChild) {
                forCells.removeChild(forCells.firstChild);
            }
            checkingBtn();
        }

    return {
        init: init,
        printing: printing,
        draw: draw,
        colourise: colourise,
        reset: reset
    }
}

var simpleApp;

    var divId = document.getElementById('forCells');
    simpleApp = MyApp(); //Invoke the object (function assigned to the object) and assign to simpleApp
    simpleApp.init(divId);
