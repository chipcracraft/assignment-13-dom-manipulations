
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')

  answerPTagWithValue.innerHTML  *= 2

})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3

    var changeColorEl = document.querySelector('#circle-bw');
    // changeColorEl.innerHTML

    if (changeColorEl.style.backgroundColor === "white") {
       changeColorEl.style.backgroundColor = "black"
     } else { (changeColorEl.style.backgroundColor === "black")
        changeColorEl.style.backgroundColor = "white"
  }


})
//
document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var circleEl = document.querySelector('.circle-red')
  var elementStyle = window.getComputedStyle(circleEl)

  var theWidth = elementStyle.width
  var theHeight = elementStyle.height

  var theWidthStringNum = theWidth.slice(0,-2)
  var theHeightStringNum = theHeight.slice(0,-2)

  var currentWidth = parseInt(theWidthStringNum)
  var currentHeight = parseInt(theHeightStringNum)

  var doubleWidth = currentWidth * 2
  var doubleHeight = currentHeight * 2

if(doubleWidth >  320){
  circleEl.style.width = "40px"
  circleEl.style.height = "40px"
} else {
  circleEl.style.width = doubleWidth + "px"
  circleEl.style.height = doubleHeight + "px"
}
})
//
document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
//filter array into list of active elements
var userLists = document.querySelector('#user-list')

 var listofUsers = document.querySelectorAll('#user-list li')

 for (var i = 0; i < listofUsers.length; i += 1 ){
    var listers = listofUsers[i];
    if(listers.classList.contains('active') === false){
      userLists.removeChild(listers)
    }
}
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var reverse = document.querySelector("#reverse-squares .answer-box")
  var reverseSquare = document.querySelectorAll(".answer-box span")
  console.log(reverseSquare)


  for (var i = reverseSquare.length -1; i >= 0; i -- ){
      var squares = reverseSquare[i];
      console.log(squares)
      reverse.removeChild(squares)
      reverse.appendChild(squares)
    }


})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
    var backwardsList = document.querySelectorAll("#tasks li")
    //going to need to split then join
    var reverseList = {};
    for (var i = 0; i < backwardsList.length; i +=1  ){
          var backWard = backwardsList[i]
          console.log(backWard)
        var splits = backWard.toString().split('');
        console.log(splits)
        var reverseSplit = splits.reverse().join('');

    }
      return reverseList
})

// document.querySelector("#cycle-image button").addEventListener('click',function(){
//    //TASK #8
//
// var imageEl = document.querySelector('#city-img')
// // Split full
// var splitSrcStr = img.src.split('/')
// var strToModify = splitSrcStr.pop()
//
// var cityPhotoXString = (strToModify.split('.')[0]
// var cityPhotoXArr = cityPhotoXString.split('-')
//
// var numString = cityPhotoXArr.pop()
//  // Convert the isolated numString to an integer and add 1
// var imgNum = parseInt(numString)
// var nextImgNum = imgNum % 10 + 1
//
// // Perform our If statement
//
// if(nextImgNum <= 10){
//   var imgNumForDom = nextImgNum
// } else {
//   var imgNumForDom = 1
// }
// }
//
//
//
// imgel.src = './images/city-photo-' + nextImgNum + '.jpg'
//
//
//
//
//
//
//
//
// // })
