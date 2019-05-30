function calculate() {

var points;

points = 0;

if (calc.ParentIsGraduate.checked == true)
  {points = 10;}
else if  (calc.Eldest.checked == true)
  points = 5;

if (calc.SameReligious.checked == true || calc.ParentIsMember.checked)
  {points= points+5;}

if (calc.SuitableAge.checked  == true)
  points = points + 10;

if (calc.ParentIsStaff.checked  == true)
  {calc.points.value = "必收";}

else if (calc.ParentIsBoard.checked  == true)
  {calc.points.value = "必收";}

else if (calc.BrotherOrSister.checked  == true)
  {calc.points.value = "必收";}

else 
  calc.points.value = points;
} 

function clear() {
calc.ParentIsGraduate.checked = false;
calc.Eldest.checked = false;
calc.SameReligious.checked = false;
calc.SuitableAge.checked = false;
calc.ParentIsStaff.checked = false;
calc.ParentIsBoard.checked = false;
calc.BrotherOrSister.checked = false;
} 
