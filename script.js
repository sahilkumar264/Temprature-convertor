let inputNumber = document.getElementById("input_box");
let submit = document.getElementById("submit");
let fah = document.getElementById("fah");
let cel = document.getElementById("cel");
let p = document.getElementById("show");
let kel1 = document.getElementById("kel1");
let kel2 = document.getElementById("kel2");
let cel1 = document.getElementById("cel1");
let cel2 = document.getElementById("cel2");

submit.onclick= function convert(event)
{
    event.preventDefault();
    if(fah.checked)
    {
        let x = inputNumber.value;
        let final;
        final = (x * 9/5) + 32;
        p.textContent = `${final}°F`;
    }
    else if(cel.checked)
    {
        let x = inputNumber.value;
        let final;
        final = (x - 32) * 5/9;
        p.textContent = `${final}°C`;
    }
    else if(kel1.checked)
    {
        let x = parseFloat(inputNumber.value);
        let final;
        final = x + Number(273.15);
        p.textContent = `${final}°K`;
    }
    else if(kel2.checked)
    {
        let x = inputNumber.value;
        let final;
        final = ((x - 32) / 1.8) + 273.15;
        p.textContent = `${final}°K`;
    }
    else if(cel1.checked)
    {
        let x = inputNumber.value;
        let final;
        final = x - 273.15;
        p.textContent = `${final}°C`;
    }
    else if(cel2.checked)
    {
        let x = inputNumber.value;
        let final;
        final = ((x - 273.15) * 9/5) + 32;
        p.textContent = `${final}°F`;
    }
    else
    {
        p.textContent = `Please Select a Box`;
    }
}