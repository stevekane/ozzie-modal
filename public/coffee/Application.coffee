$listOfShit = $ '#listOfShit'
$myModal = $ '#myModal'
input1 = $myModal.find('#input1')
input2 = $myModal.find('#input2')
input3 = $myModal.find('#input3')

$myModalSaveButton = $('#myModal').find '#myModalSave'
$myModalButton = $ '#myModalButton'

resetForm = ->
  input1.val("")
  input2.val("")
  input3.val("")
  

saveData = ->
  val1 = input1.val()
  val2 = input2.val()
  val3 = input3.val()
  data = {val1: val1, val2: val2, val3: val3}

  $listOfShit.append(val1 + val2 + val3)
  $.ajax('some/fake/endpoint', {
    method: "POST"
    data: data
  })

  resetForm()

$myModalButton.on 'click', -> $myModal.modal 'toggle'
$myModalSaveButton.on 'click', saveData

$myModal.modal
  show: false
