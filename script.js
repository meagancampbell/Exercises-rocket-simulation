function checkForm(){
  if (form.testName = ""){
    alert("Test Name is empty.");
    form.teamName.focus();
    return false;
  }
    else if (form.testDate = ""){
    alert("Test Date is empty.");
    form.testDate.focus();
    return false
  } else if (form.rocketType = ""){
    alert("Rocket Type is empty.");
    form.rocketType.focus();
    return false;
  } else if (form.boosterCount = ""){
    alert("Booster Count is empty.");
    form.boosterCount.focus();
    return false;
  } else if (form.windRating = ""){
    alert("Wind Rating is empty.");
    form.windRating.focus();
    return false;
  } else if (form.productionServers=""){
    alert("Production Servers is empty.");
    form.productionServers.focus();
    return false;
}
return true;
}






