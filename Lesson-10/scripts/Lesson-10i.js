function extend(value)
{
    const input_value = document.querySelector('.input-taker');
    input_value.value += value;
}

function calculate()
{
    const input_value = document.querySelector('.input-taker');
    try
    {
        input_value.value = eval(input_value.value);
    }
    catch
    {
        input_value.value = NaN;
    }
}

function reset()
{
    const input_value = document.querySelector('.input-taker');
    input_value.value = '';
}