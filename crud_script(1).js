var SAVE = "Save";
var EDIT = "Edit";

function editOrSaveRow(no) {
    // debugger;
    var label = document.getElementById("edit_save_button"+no).value;
    if(label == EDIT) {
        edit_row(no);
    } else if(label == SAVE) {
        save_row(no);
    }
}

function edit_row(no)
{
    var empid=document.getElementById("empid_row"+no);
    var name=document.getElementById("name_row"+no);
    var country=document.getElementById("country_row"+no);
    var age=document.getElementById("age_row"+no);
    var uni=document.getElementById("uni_row"+no);
    var highq=document.getElementById("highq_row"+no);

    var empid_data=empid.innerHTML;
    var name_data=name.innerHTML;
    var country_data=country.innerHTML;
    var age_data=age.innerHTML;
    var uni_data=uni.innerHTML;
    var highq_data=highq.innerHTML;

    empid.innerHTML="<input type='text' id='empid_text"+no+"' value='"+empid_data+"' onChange>";
    name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
    country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
    age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
    uni.innerHTML="<input type='text' id='uni_text"+no+"' value='"+uni_data+"'>";
    highq.innerHTML="<input type='text' id='highq_text"+no+"' value='"+highq_data+"'>";

    document.getElementById("edit_save_button"+no).value=SAVE;
 

}

function save_row(no)
{
    var empid_val=document.getElementById("empid_text"+no).value;
    var name_val=document.getElementById("name_text"+no).value;
    var country_val=document.getElementById("country_text"+no).value;
    var age_val=document.getElementById("age_text"+no).value;
    var uni_val=document.getElementById("uni_text"+no).value;
    var highq_val=document.getElementById("highq_text"+no).value;

    document.getElementById("empid_row"+no).innerHTML=empid_val;
    document.getElementById("name_row"+no).innerHTML=name_val;
    document.getElementById("country_row"+no).innerHTML=country_val;
    document.getElementById("age_row"+no).innerHTML=age_val;
    document.getElementById("uni_row"+no).innerHTML=uni_val;
    document.getElementById("highq_row"+no).innerHTML=highq_val;

    document.getElementById("edit_save_button"+no).value=EDIT;

}

function delete_row(no)
{
    document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
    var new_empid=document.getElementById("new_empid").value;
    var new_name=document.getElementById("new_name").value;
    var new_country=document.getElementById("new_country").value;
    var new_age=document.getElementById("new_age").value;
    var new_uni=document.getElementById("new_uni").value;
    var new_highq=document.getElementById("new_highq").value;

    var table=document.getElementById("data_table");
    var table_len=(table.rows.length)-1;
    var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='empid_row"+table_len+"'>"+new_empid+"</td><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td id='uni_row"+table_len+"'>"+new_uni+"</td><td id='highq_row"+table_len+"'>"+new_highq+"</td><td><input type='button' id='edit_save_button"+table_len+"' value='Edit' class='edit' onclick='editOrSaveRow("+table_len+")'><input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

    document.getElementById("new_empid").value=""; 
    document.getElementById("new_name").value="";
    document.getElementById("new_country").value="";
    document.getElementById("new_age").value="";
    document.getElementById("new_uni").value="";
    document.getElementById("new_highq").value="";

}