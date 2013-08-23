minispade.register('Application.js', function() {
var $listOfShit, $myModal, $myModalButton, $myModalSaveButton, input1, input2, input3, resetForm, saveData;

$listOfShit = $('#listOfShit');

$myModal = $('#myModal');

input1 = $myModal.find('#input1');

input2 = $myModal.find('#input2');

input3 = $myModal.find('#input3');

$myModalSaveButton = $('#myModal').find('#myModalSave');

$myModalButton = $('#myModalButton');

resetForm = function() {
  input1.val("");
  input2.val("");
  return input3.val("");
};

saveData = function() {
  var data, val1, val2, val3;
  val1 = input1.val();
  val2 = input2.val();
  val3 = input3.val();
  data = {
    val1: val1,
    val2: val2,
    val3: val3
  };
  $listOfShit.append(val1 + val2 + val3);
  $.ajax('some/fake/endpoint', {
    method: "POST",
    data: data
  });
  return resetForm();
};

$myModalButton.on('click', function() {
  return $myModal.modal('toggle');
});

$myModalSaveButton.on('click', saveData);

$myModal.modal({
  show: false
});

});

minispade.register('Router.js', function() {
Stylecore.Router.map(function() {
  return this.resource("components", function() {
    return this.resource("component");
  });
});

});
