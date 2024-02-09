sum = 0;
list = [];

function Add(clicked, value) {
    const itemName = clicked.getAttribute('name');
    let flag = false; 

    list.forEach(member => {
        if (member.item == itemName) {
            member.count += 1;
            flag = true;
        }
    });

    if (!flag) {
        const object = {
            item: itemName,
            count: 1
        };
        list.push(object);
    }

    sum += value;
}

function Bill_Generate() {
    const customer_name = document.querySelector('.customer_name').value;
    const customer_phoneno = document.querySelector('.customer_phone_no').value;
    const phonePattern = /^\d{10}$/;
    if(customer_name=='' || customer_phoneno=='')
    {
        alert("Fill all the fields"); 
        document.querySelector('.customer_name').value = "";
        document.querySelector('.customer_phone_no').value = "";
    }
    else if(!phonePattern.test(customer_phoneno))
    {
        alert("Enter Valid Phone Number");

        document.querySelector('.customer_phone_no').value = "";
    }
    else{
    console.log("Customer Name:", customer_name);
    console.log("Customer Phone Number:", customer_phoneno);
    console.log("Selected Items:");
    list.forEach(item => {
        console.log(item.count + "x " + item.item);

    });

    // const displayElement = document.getElementById('displayValue');
    // const valueToDisplay = "You Have to Pay Rs." + sum + "/-";
    // displayElement.textContent = valueToDisplay;
    const modal = document.getElementById("myModal");
    modal.style.display = "block";

   if(sum>0)
   {
    const modalContent = modal.querySelector(".modal-content");
    modalContent.innerHTML = `
        <span class="close">&times;</span>
        <p>Name: ${customer_name}</p>
        <p>Phone Number: ${customer_phoneno}</p>
        <p>Sum: Rs.${sum}/-</p>
        Thank you for Shopping!!
        `;
   }
   else
   {
    const modalContent = modal.querySelector(".modal-content");
    modalContent.innerHTML = `
    <span class="close">&times;</span>
      <p>  Do Purchase next time !!</p> 
       <p>If any issues regarding products,Kindly reach us....</p>
       
        `;
   }
 
    const closeBtn = modal.querySelector(".close");
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });


    document.querySelector('.customer_name').value = "";
    document.querySelector('.customer_phone_no').value = "";
    sum=0;
    list=[]
}
}

