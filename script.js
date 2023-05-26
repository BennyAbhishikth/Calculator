function insert(num)
{
    document.form.text.value =  document.form.text.value + num
}
function clean()
{
    document.form.text.value=""
}
function del()
{
    var exp=document.form.text.value;
    document.form.text.value=exp.substring(0,exp.length-1);
}
function eva()
{
    var exp=document.form.text.value;
    document.form.text.value = eval(exp);
}