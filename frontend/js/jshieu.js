$ = jQuery;

// Select all elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll(".stars i");

// Loop through the "stars" NodeList
stars.forEach((star, index1) => {
  // Add an event listener that runs a function when the "click" event is triggered
  star.addEventListener("click", () => {
    // Loop through the "stars" NodeList Again
    stars.forEach((star, index2) => {
      // Add the "active" class to the clicked star and any stars with a lower index
      // and remove the "active" class from any stars with a higher index
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});




$(document).ready(function () {
  $(".write-comment-content").hide();
  $(".button-write-comment").click(function () {
    $(".write-comment-content").slideToggle();
  });


  // icon mắt ẩn



  // $('.input-change-password .eyeopen-icon').hide();
  // $('.input-change-password .eyeclose-icon').click(function(){
  //   $('.input-change-password .eyeopen-icon').toggle();
  //   $('.input-change-password .eyeclose-icon').toggle();
  // });

  // $('.input-change-password .eyeopen-icon').click(function(){
  //   $('.input-change-password .eyeopen-icon').toggle();
  //   $('.input-change-password .eyeclose-icon').toggle();
  // });  

  // $('.input-change-password #change-password').click(function(){
  //   if(password.getAttribute('type') === 'password'){
  //     password.setAttribute('type', 'text');
  //   } else {
  //     password.setAttribute('type', 'password');
  //   }
  // });

  $(".eye-icon").click(function (e) {
    let value = $(this).attr("value")

    var $inputField = $(this).parent().siblings('input');

    if (value == "open") {
      $(this).attr("src", "../img/eyeclose.png")
      $(this).attr("value", "close")
      $inputField.attr("type","password")
    } else {
      $(this).attr("src", "../img/eyeopen.png")
      $(this).attr("value", "open")
      $inputField.attr("type","text")
    }

  });


});




// mã xác nhận
const form = document.querySelector('.form-verify')
if ($(".form-verify").length > 0) {
  const inputs = form.querySelectorAll('.input-verify')
  form.addEventListener('input', handleInput)

  const KEYBOARDS = {
    backspace: 8,
    arrowLeft: 37,
    arrowRight: 39,
  }

  inputs[0].addEventListener('paste', handlePaste)

  inputs.forEach(input => {
    input.addEventListener('focus', e => {
      setTimeout(() => {
        e.target.select()
      }, 0)
    })

    input.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case KEYBOARDS.backspace:
          handleBackspace(e)
          break
        case KEYBOARDS.arrowLeft:
          handleArrowLeft(e)
          break
        case KEYBOARDS.arrowRight:
          handleArrowRight(e)
          break
        default:
      }
    })
  })
}



function handleInput(e) {
  const input = e.target
  const nextInput = input.nextElementSibling
  if (nextInput && input.value) {
    nextInput.focus()
    if (nextInput.value) {
      nextInput.select()
    }
  }
}

function handlePaste(e) {
  e.preventDefault()
  const paste = e.clipboardData.getData('text')
  inputs.forEach((input, i) => {
    input.value = paste[i] || ''
  })
}

function handleBackspace(e) {
  const input = e.target
  if (input.value) {
    input.value = ''
    return
  }

  input.previousElementSibling.focus()
}

function handleArrowLeft(e) {
  const previousInput = e.target.previousElementSibling
  if (!previousInput) return
  previousInput.focus()
}

function handleArrowRight(e) {
  const nextInput = e.target.nextElementSibling
  if (!nextInput) return
  nextInput.focus()
}






