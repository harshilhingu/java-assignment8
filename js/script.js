$(document).ready(function () {
	$.getJSON("data.json",function (data) {
    	let cartoon = '';
    	let bt1 = bt2 = 0;
    	$.each(data, function (key, value) {
    		let fullname = value.name;
    		let firstName = fullname.substring(0, 6);
    		let lastName = fullname.substring(6);
    		if (lastName.match(/\b[A-M][a-m]*/g) != null) {
    			bt1 = bt1 + 1;
    			cartoon += '<tr class="bt1"><td>'+firstName+'</td><td>'+lastName+'</td><td>'+value.name+'</td><td>'+value.creator+'</td><td>'+value.releaseYear+'</td></tr>';
    		}
    		if (lastName.match(/\b[N-Z][n-z]*/g) != null) {
    			bt2 = bt2 + 1;
    			cartoon += '<tr class="bt2"><td>'+firstName+'</td><td>'+lastName+'</td><td>'+value.name+'</td><td>'+value.creator+'</td><td>'+value.releaseYear+'</td></tr>';
    		}
    	});
    	$('#myTable > tbody').append(cartoon);
    	$("txt_name").show();
    	let btn1Text = $("#btn1").html() + ' (' + bt1 + ')';
    	$("#btn1").html(btn1Text).show();
    	let btn2Text = $("#btn2").html() + ' (' + bt2 + ')';
    	$("#btn2").html(btn2Text).show();
    });

    $('#btn1').click(function(){
	    $('.bt2').hide();
    	$('.bt1').show();
	});

    $('#btn2').click(function(){
	    $('.bt1').hide();
    	$('.bt2').show();
	});

    $('#txt_name').keyup(function(){
	    var search = $(this).val();
	    searchValue(search.toUpperCase());
	});

    function searchValue(search){
    	var len = $('table tbody tr:not(.notfound) td:nth-child(1):contains("'+search+'")').length;
    	if (search.length > 0) {
    		if(len > 0){
    			$('table tbody tr:not(.notfound) td:nth-child(1):contains("'+search+'")').each(function(){
    			 	$(this).closest('tr').css("background-color", "#006400");
    			 	$(this).closest('tr').css("color", "white");
    			});
    		}
    	}
    	if (search.length == 0) {
    		$('tr').css("background-color", "white");
    		$('tr').css("color", "black");
    	}
    }


});