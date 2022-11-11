
x = 0
document.getElementById("number").onclick = function() 
{
  //console.log("It is being read.");
  x += 1;
  console.log(x);
  document.getElementById("number").innerHTML = x;
  if (x > 99)
    x = 0;
}