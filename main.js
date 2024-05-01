// const btn = document.querySelector('.sumbit');
// it = document.querySelector('.id');
// parol = document.querySelector('.password')


// btn.addEventListener('click', (e) => {
//     e.preventDefault()

//     if (id.value == "123456" && parol.value == "78900") {
//         alert("Siz spacega muvaffaqiyatli kirdingiz")
//     } else {
//         alert("ID yoki parol xato")
//     }


//     id.value = ""
//     parol.value = ""
// })

const btn = document.querySelector('.sumbit');
id = document.querySelector('.id');
parol = document.querySelector('.password')

btn.addEventListener('click', (e) => {
    e.preventDefault()


    
    if (id.value == "123456" && parol.value == "78900") {
        alert("Siz spacega muvaffaqiyatli kirdingiz")
    } else {
        alert("ID yoki parol xato")
    }


    id.value = ""
    parol.value = ""
})