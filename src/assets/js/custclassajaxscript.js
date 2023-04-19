/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 * Author:Ajinkya
 */


function setCustClassAdd(url)
{
    
    document.forms[0].m_strCustomerName.value="";
    document.forms[0].m_strCustomerId.value="";
    url=url+"&pernr="+document.forms[0].m_strEmployeePernr.value;
    //Dont remove the code in comment as it can be used for implementing two continuous Ajax Actions.
    if (window.XMLHttpRequest)
    {
        // Non-IE browsers
        req = new XMLHttpRequest();
        req.onreadystatechange = processSubCategoryStateChange;
        try
        {
            req.open("GET", url, true);
        } catch (e)
        {
            alert(e);
        }
        req.send(null);
    } else if (window.ActiveXObject)
    { // IE

        req = new ActiveXObject("Microsoft.XMLHTTP");
        if (req)
        {
            req.onreadystatechange = processStateChange;
            req.open("GET", url, true);
            req.send();
        }
    }
}

function setCustClassUpdate(url)
{
    
    document.forms[0].m_strCustNameUpdate.value="";
    document.forms[0].m_strCustomerId.value="";
    url=url+"&pernr="+document.forms[0].m_strEmployeePernr.value;
    
    //Dont remove the code in comment as it can be used for implementing two continuous Ajax Actions.
    if (window.XMLHttpRequest)
    {
        // Non-IE browsers
        req = new XMLHttpRequest();
        req.onreadystatechange = processSubCategoryStateChange;
        try
        {
            req.open("GET", url, true);
        } catch (e)
        {
            alert(e);
        }
        req.send(null);
    } else if (window.ActiveXObject)
    { // IE

        req = new ActiveXObject("Microsoft.XMLHTTP");
        if (req)
        {
            req.onreadystatechange = processStateChange;
            req.open("GET", url, true);
            req.send();
        }
    }
}

function processSubCategoryStateChange() {
    if (req.readyState == 4)
    { // Complete
        if (req.status == 200)
        { // OK response

            //parseSubCategoryResults();

        } else
        {

            alert("Problem: " + req.statusText);
        }
    }
}

