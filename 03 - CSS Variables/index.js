const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

const handleUpdate=(input)=>{
    const suffix = input.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${input.name}`, input.value +suffix);


    console.log(input.name);
}

inputs.forEach(input=>input.addEventListener('change', ()=>handleUpdate(input)));
inputs.forEach(input=>input.addEventListener('mousemove', ()=>handleUpdate(input)));