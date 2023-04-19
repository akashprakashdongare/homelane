/*
    Date               Modified by          Description
    dd-mmm-yyyy        <Name>               [Multiline / Precise description]
    09-Aug-05           Tanzeem Inamdar     added validateSearchForm()
    11-Aug-05           Tanzeem Inamdar     added checks for isYMDCheck & commented a javascript err
*/
function blockControlN(){
    if ((event.keyCode == 78) && (event.ctrlKey)){
        event.cancelBubble = true;
        event.returnValue = false;
        event.keyCode = false;
        return false;
        
    }
}
function isNumber(n) {
     return !isNaN(parseFloat(n)) && isFinite(n);
 }
function IsNumericInteger(strString)
//  check for valid numeric strings
{
   var strValidChars = "0123456789";
   var strChar;
   var blnResult = true;

   if (strString.length == 0) return false;

   //  test strString consists of valid characters listed above
   for (i = 0; i < strString.length && blnResult == true; i++)
   {
       strChar = strString.charAt(i);
       if (strValidChars.indexOf(strChar) == -1)
       {
           blnResult = false;
       }
   }
   return blnResult;
}
function blockContextMenu()
{

    //
    // If CTRL pressed show context menu
    //
    //if ( event.ctrlKey == true )
    //  return true ;

    //
    // Enable right click on hyperlinks and form fields: text-area and single line inputs
    //
    if ( event.srcElement.tagName == "TEXTAREA" ||
        event.srcElement.tagName == "INPUT"    ||
        //event.srcElement.tagName == "A"  ||
        event.srcElement.tagName == "IMAGE"
        )
        {

    }
    else
    {

        event.cancelBubble = true ;
        event.returnValue  = false ;
        return false ;

    };

    return true ;

}


/*
It does the trim operation.
@param f_strValue String to be trimmed
*/
function trim(f_strValue)
{
    return f_strValue.replace(/^\s+/, '').replace(/\s+$/, '');
}

function countAction(frm){
    if(frm.chk_ShowAll.value == "off"){
        frm.chk_ShowAll.value = "on";
        frm.txt_infmax.disabled = true;
    }
    else{
        frm.chk_ShowAll.value = "off";
        frm.txt_infmax.disabled = false;
    }
}

function getOption(){
    if(confirm("ï¿½Rï¿½ï¿½ï¿½gï¿½??[ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Zï¿½bï¿½gï¿½ï¿½ï¿½Ü‚ï¿½ï¿½ï¿½")){
        document.forms[0].chk_ShowAll.value = "off";
        document.forms[0].txt_infmax.disabled = false;
        return true;
    }
    else
        return false;
}

function winMax(){
    window.resizeTo(800,600);
}

function frmLoaded1() {
    document.forms[0].forward1.checked=true;
    document.forms[0].pagination.checked=true;
}

function frmLoaded() {
    document.forms[0].pagination.checked=true;
}

function disablepagination()
{

    if(document.forms[0].pagination.checked==false) {
        document.forms[0].rowsPerPage.disabled=true;
        document.forms[0].rowsPerPage.value="";
    }
    else {
        document.forms[0].rowsPerPage.disabled=false;
        document.forms[0].rowsPerPage.value=10;
    }

}
/*
Method displays the error message and returns false when input control contains non-integer value.
@param f_ctrlSource Control to be validated
@param f_strErrMsg Error message
*/
function isIntegerErr(f_ctrlSource,f_strErrMsg)
{
    if(f_ctrlSource.value != parseInt(f_ctrlSource.value, 10) || f_ctrlSource.value.indexOf(".")>=0) {
        alert(f_strErrMsg);
        f_ctrlSource.focus();
        f_ctrlSource.select();
        return false;
    }
    return true;
}


/*
Method validates  the product code string.It displays the error message if the input string contains characteres other
than alphanumeric ,and +,- characters.
f_strValue - String - String to be checked.
f_strErrMsg - Error message to be displayed
*/

function isProductCodeStringErr(f_strValue,f_strErrMsg)
{
    var l_strValue = f_strValue;

    while(l_strValue.indexOf('+')>=0)
        l_strValue = l_strValue.replace(/\++/,'');
    while(l_strValue.indexOf('-')>=0)
        l_strValue = l_strValue.replace(/-+/,'');
    if(!isAlphaNumericString(l_strValue)) {
        alert(f_strErrMsg);
        return false;
    }
    return true;
}

function isVRSStringErr(f_strValue,f_strErrMsg)
{
    var l_strValue = f_strValue;

    while(l_strValue.indexOf('/')>=0)
        l_strValue = l_strValue.replace(/\/+/,'');
    if(!isAlphaNumericString(l_strValue)) {
        alert(f_strErrMsg);
        return false;
    }
    return true;
}

function isAlphaNumericString(f_strValue)
{
    var l_regExp = /\W/
    var result = l_regExp.exec(f_strValue);
    if(result!=null||(f_strValue.indexOf('_')>=0))
        return false;
    return true;
}


/**
Method returns number of bytes for the string f_StringValue after checking it for English or Japanese characters
f_StringValue - String for which number of bytes are required
*/
function getByteLength ( f_strValue,errormsg )
{
    var l_nByteLength = 0;
    for (var i = 0; i < f_strValue.length; i++){
        if ( f_strValue.charCodeAt(i) <= 255 ) {
            // English character - Add only 1
            l_nByteLength += 1;

        } else {
            // Japanese character -- Add only 2
            l_nByteLength += 2;
        }

    }
    if(l_nByteLength>40)
    {
        alert(errormsg);
        return false;
    }
    else
    {
        return true;
    }
}

/**
Method returns number of bytes for the string f_StringValue after checking it for English or Japanese characters
f_StringValue - String for which number of bytes are required
*/
function getByteLength2 ( f_strValue,errormsg )
{
    var l_nByteLength = 0;
    for (var i = 0; i < f_strValue.length; i++){
        if ( f_strValue.charCodeAt(i) <= 255 ) {
            // English character - Add only 1
            l_nByteLength += 1;

        } else {
            // Japanese character -- Add only 2
            l_nByteLength += 2;
        }
    }
    if(l_nByteLength>80)
    {
        alert(errormsg);
        return false;
    }
    else
    {
        return true;
    }
}

/*
Method checks whether the input control has double byte characters.
If the input string contains double byte characters , displays the error message based on
locale information and returns true.
f_ctrlSource - Input control which holds the value.
f_strErrMsg - Error message to be displayed
*/
/* RFQ767:MN-020-MOD-AC-START*/
function containsDblByteCharErr(f_ctrlSource,f_strErrMsg)
{
    var l_strValue = new String(f_ctrlSource.value);

    for (var i=0;i<l_strValue.length;i++){
        var l_chrCode = l_strValue.charCodeAt(i);
        if((l_chrCode >= 0 && l_chrCode <= 127) || (l_chrCode >= 65377 && l_chrCode <= 65439)) {
            continue;
        }
        else {
            alert(f_strErrMsg);
            f_ctrlSource.focus();
            f_ctrlSource.select();

            return true;
        }
    }
    return false;
}

/*
Method checks whether the input control contains only numeric characters.It shows error message for
the presence of .,+,- characters also.
f_ctrlSource - Text box - input control to be checked.
f_strErrMsg - Error message to be displayed
*/
function containsOnlyNumericCharErr(f_ctrlSource,f_strErrMsg)
{
    if(f_ctrlSource.value.indexOf(".")>=0 || f_ctrlSource.value.indexOf("+")>=0 || f_ctrlSource.value.indexOf("-")>=0
        || f_ctrlSource.value.indexOf(" ")>=0) {
        alert(f_strErrMsg);
        f_ctrlSource.focus();
        f_ctrlSource.select();
        return false;
    }else if( !isIntegerErr(f_ctrlSource,f_strErrMsg) ){
        return false;
    }
    return true;
}

/*
Method checks whether the input control contains a value less than the expected value.Returns false when input control
contains a value that is less than the minimum value expected.
f_ctrlSource - Text box - input control to be checked.
f_strExpValue - This contains the minimum value expected
f_strErrMsg - The message that will be outputted if the Value in the control is less than the minimum value expected

*/
function isLessThanErr(f_ctrlSource, f_strExpValue, f_strErrMsg)
{
    var l_nActual = parseInt(f_ctrlSource.value, 10);
    var l_nExpected = parseInt(f_strExpValue, 10);
    if( l_nActual < l_nExpected ) {
        alert(f_strErrMsg);
        f_ctrlSource.focus();
        f_ctrlSource.select();
        return true;
    }
    return false;
}



function setTimeOutInJSP(){
    /*For 1 min*/
    /*myTimeOut1 = window.setTimeout ("setValueOnTimeOut()",60000);*/
    /*For 30 min*/
    var myTimeOut1;
    var timeOutValue=false;
    myTimeOut1 = window.setTimeout ("setValueOnTimeOut()",1800000);
}

function setValueOnTimeOut(){
    //alert('The session has timed out. Please login again to continue.');
    timeOutValue=true;
}
function getTimeOutStatusOfPage(){
    if(timeOutValue){
        return true;
    }else{
        return false;
    }
}

function setTargetOfPageFrmParent(){
    if(getTimeOutStatusOfPage()){
        //parent.frame1.document.forms[0].target="_parent";
        parent.frame1.document.forms[0].target="frame2";
    }else{
        parent.frame1.document.forms[0].target="frame2";
    }
}
function setTargetOfPageFrmChild(){
    if(getTimeOutStatusOfPage()){
        document.forms[0].target="frame2";
    //document.forms[0].target="_parent";
    }
    else{
        document.forms[0].target="frame2";
    }
}
function setTargetOfPageToSelf(){

    if(getTimeOutStatusOfPage()){
        document.forms[0].target="_self";
    //document.forms[0].target="_parent";
    }else{
        document.forms[0].target="_self";
    }
}
/**
Checks the date for validity
*/
function isCompleteDateValidCheck(controlSource)
{
    dateValue = controlSource.value;
    if(dateValue.length < 10){
        return false;
    }
    var dateYear=dateValue.substr(0,4);
    var dateMonth=dateValue.substr(5,2);
    var dateDay=dateValue.substr(8,2);
    if ((isYMDCheck(dateYear, dateMonth, dateDay) == false)) {
        return false;
    }
    return true;
}
/**
Checks for the empty control source
*/
function isEmpty(f_ctrlSource)
{
    if(trim(f_ctrlSource.value)=="")
        return true;
    else
        return false;
}
/**
Checks the date for validity
*/
function isYMDCheck(f_strYear, f_strlMonth, f_strlDay)
{

    //Check if Year is a number
    if ((isNotNumber(f_strYear))) {
        return false;
    }

    //Check if month is a number
    if (isNotNumber(f_strlMonth)) {
        return false;
    }

    //Check if the day is a number
    if (isNotNumber(f_strlDay)) {

        return false;
    }

    // Check first year control
    nStrYear = trim(f_strYear);
    nYear = parseInt(nStrYear, 10);

    if ( nStrYear.length !=4 || nYear < 1900 || nYear > 2099){

        return false;
    }

    // Check next month control
    nMonth = parseInt(trim(f_strlMonth), 10);
    if (nMonth < 1 || nMonth > 12) {

        return false;
    }

    // Check day control
    nDay = parseInt(trim(f_strlDay), 10);
    if (nDay < 1 || nDay > 31){

        return false;
    }

    /* Commented to remove javascript error on this line
    if ((nMonth==04 || nMonth==06 || nMonth==09 || nMonth==11) && nDay==31){

        return false;
    } */

    if(nMonth==2 && (nDay == 30 || nDay == 31))
        return false;

    if ((nMonth==2) && nDay>28){
        if (!((nYear%4==0) && nDay==29)){

            return false;
        }
    }
    return true;
}
/**
Method replaces Javascript isNaN funtion
*/
function isNotNumber(number){
    var l_nNumber = number
    var l_nlengthOfNumber = l_nNumber.length

    for(i=0;i<l_nlengthOfNumber;i++){
        var l_boolean = isNaN(l_nNumber.charAt(i))
        if(l_boolean )
            return true
    }
    return false
}

/**
 * Updated logic is left
 */
function mover(move,control_textbox,control_selectbox){
    if(move == 'Remove'){
        var controlLength=control_selectbox.length;
        for(x=0;x<controlLength;x++){
            if(control_selectbox.options[x].selected) {
                control_selectbox.options[x] = null;
                break;
            }
        }
    }
    if(move == 'Add'){
        if(control_textbox.value!="") {
            control_selectbox.options[control_selectbox.length]=
            new Option(control_textbox.value);
            control_textbox.value="";
        }
    }
    return true;
}

/***********************************************************************************************************
    This function is used to open a modal window with variable dimensions and return the handle to the window.
    Input parameters are the file to be opened and the target window and the dimensions of the window
***********************************************************************************************************/
function openModalDim(openWindow, targetWindow, dimConstant)
{
    var modalWindow;
    modalWindow=window.showModalDialog
    (openWindow,targetWindow,dimConstant);
    return modalWindow;
}


function validateSearchForm(){
    var startDate = document.forms[0].startRange;
    if (isEmpty(startDate)){
        alert("Kindly enter the start date");
        return false;
    }

    var endDate = document.forms[0].endRange;
    if (isEmpty(endDate)){
        alert("Kindly enter the end date");
        return false;
    }
    //check for valid dates
    var start =document.forms[0].startRange.value;
    var end = document.forms[0].endRange.value;

    var index = start.indexOf('-');
    var startdate = start.substring(0,index);
    start= start.substring(index+1);
    index = start.indexOf('-');
    var startmonth = start.substring(0,index);
    start = start.substring(index+1);
    var startyear = start;
    var sdate = new Date(startdate+" " + startmonth+" " +startyear);

    index = end.indexOf('-');
    var enddate = end.substring(0,index);
    end = end.substring(index+1);
    index = end.indexOf('-');
    var endmonth = end.substring(0,index);
    end = end.substring(index+1);
    var endyear = end;
    var edate = new Date(enddate+" "+endmonth+" "+endyear);
    if(edate<sdate){
        alert("From date should be before To date");
        return false;
    }

    return true;
}
function cancelTheScreen(){
    self.close();
}


function IsNumeric(strString)
//  check for valid numeric strings
{
    var strValidChars = "0123456789.-";
    var strChar;
    var blnResult = true;

    if (strString.length == 0) return false;

    //  test strString consists of valid characters listed above
    for (i = 0; i < strString.length && blnResult == true; i++)
    {
        strChar = strString.charAt(i);
        if (strValidChars.indexOf(strChar) == -1)
        {
            blnResult = false;
        }
    }
    return blnResult;
}
function IsNumericInteger(strString)
//  check for valid numeric strings
{
    var strValidChars = "0123456789";
    var strChar;
    var blnResult = true;

    if (strString.length == 0) return false;

    //  test strString consists of valid characters listed above
    for (i = 0; i < strString.length && blnResult == true; i++)
    {
        strChar = strString.charAt(i);
        if (strValidChars.indexOf(strChar) == -1)
        {
            blnResult = false;
        }
    }
    return blnResult;
}



function maxLen(str, maxlen){
    if (str.value.length > maxlen)
        return false;
    return true;
}
function isValidLength(controlName, lengthReq){
    var controlNameString = "document.forms[0].elements['"+controlName+"']";
    clickCntrlName = eval(controlNameString);
    if ((isEmpty(controlName)) || (clickCntrlName.value.length != lengthReq)){
        return false;
    } else {
        return true;
    }
}
function isNumericValue(controlName){
    var controlNameString = "document.forms[0].elements['"+controlName+"']";
    clickCntrlName = eval(controlNameString);
    if (IsNumeric(clickCntrlName.value)){
        return false;
    } else {
        return true;
    }
}
function isEmptyControl(controlName){
    var controlNameString = "document.forms[0].elements['"+controlName+"']";
    clickCntrlName = eval(controlNameString);
    if ((clickCntrlName.value == null) || (clickCntrlName.value.length == 0)){
        return true;
    } else {
        return false;
    }
}
function selectAllListelements(list) {
    for(i=0;i<list.length;i++){
        list[i].selected=true;
    }
}

function clearList(list) {
    var length = list.length;
    for(i=0;i<length;i++){
        var removeindex = i-length;
        if (removeindex < 0) {
            removeindex = -removeindex;
        }
        list.remove(removeindex);
    }
    list.remove(0);
}
function validateMobile(number)
{
    var a = number;
    if(a=="")
    {
        alert("please Enter the Contact Number");

        return false;
    }
    if(isNaN(a))
    {
        alert("Enter the valid Mobile Number(Like : 9566137117)");

        return false;
    }
    if((a.length < 1) || (a.length > 10))
    {
        alert(" Your Mobile Number must be 1 to 10 Integers");

        return false;
    }
}
function validateEmail(emailid)
{
    var x=emailid;
    if(trim(x)==''){
        alert("Please Enter Emaild ID!");
        return false;
    }
    var atpos=x.indexOf("@");
    var dotpos=x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
    {
        alert("Not a valid e-mail address");
        return false;
    }
    else{
        return true;
    }

}
function addCommas(nStr)
{
      var flag = 0;
    nStr += '';
    if(nStr.indexOf('-')!= -1){
            flag++;
            nStr = nStr.replace('-','');
      }
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    if(flag != 0){
            x1 = '-'+x1;
      }
    return x1 + x2;
}


