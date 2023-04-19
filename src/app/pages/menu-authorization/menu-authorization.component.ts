import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
declare const $;

@Component({
  selector: 'app-menu-authorization',
  templateUrl: './menu-authorization.component.html',
  styleUrls: ['./menu-authorization.component.css']
})
export class MenuAuthorizationComponent implements OnInit {
  alertMessage;
  alertFlag;
  alertNavigate;
  profileMenuList: any = [];
  profileList = [];
  requestJson = {
    menu: [{ id: 0, menuId: 1, roleId: 'A', actionArray: [] },
    { id: 0, menuId: 2, roleId: 'A', actionArray: [] },
    {
      id: 0, menuId: 4, roleId: 'A',
      actionArray: [{ id: 0, action: 'V', isActive: 'Y' }]
    },
    {
      id: 0, menuId: 3, roleId: 'A',
      actionArray: [{ id: 0, action: 'E', isActive: 'Y' }, { id: 0, action: 'U', isActive: 'Y' }, { id: 0, action: 'D', isActive: 'Y' }, { id: 0, action: 'V', isActive: 'Y' }]
    },
    {
      id: 0, menuId: 5, roleId: 'A', actionArray: [{ id: 0, action: 'E', isActive: 'Y' }, { id: 0, action: 'U', isActive: 'Y' }, { id: 0, action: 'D', isActive: 'Y' },
      { id: 0, action: 'V', isActive: 'Y' }]
    }
    ]
  };
  form = {}

  profileCode = new FormControl('');
  //new
  submitObject: any = {
    profileCode: ""
  }
  profileSelectiveMenuList: any = [];
  NoChangeprofileMenuList: any = [];
  checkFlag = false
  constructor(public router: Router, private apiHandler: ApiHandlerService, private http: HttpClient) { }


  ngOnInit() {
    const ref = this;
    ref.createForm();
    ref.apiHandler.getMenuList((response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts.toLowerCase() === "success") {
        ref.profileMenuList = response.content;
        var tempArr = response.content;
        // ref.profileMenuList = tempArr;
        ref.NoChangeprofileMenuList = JSON.stringify(tempArr)
        ref.apiHandler.getMenuRoleMaster((response: any) => {
          console.log(JSON.stringify(response));
          if (response.sts === 'success') {
            ref.profileList = response.content.roleMst;
          } else {
            ref.profileList = [];
          }
        }, (error: HttpErrorResponse) => {
          ref.profileList = [];
          console.log(error);
        });
      } else {
        ref.profileMenuList = [];
      }
    }, (error: HttpErrorResponse) => {
      ref.profileMenuList = [];
      console.log(error);
    }
    );
  }


  onSelectRole() {
    var ref = this;
    // ref.profileMenuList = [];
    ref.apiHandler.getMenuByRole(ref.submitObject.profileCode, (response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts === 'success') {
        // profileSelectiveMenuList  -On selecting profile response inserted in this array
        // profileMenuList  -OnLoad api response inserted in this array

        ref.profileSelectiveMenuList = response.content;
        ref.checkFlag = true;
        console.log("ref.profileSelectiveMenuList")
        console.log(ref.profileSelectiveMenuList)
        const tempArr = JSON.parse(ref.NoChangeprofileMenuList);
        ref.profileMenuList = tempArr
        var profileMenuList = ref.profileMenuList;
        console.log(profileMenuList)
        var profileSelectiveMenuList = ref.profileSelectiveMenuList;
        for (var i = 0; i < profileMenuList.length; i++) {
          profileMenuList[i]["checked"] = false;
          for (var j = 0; j < profileSelectiveMenuList.length; j++) {

            if (profileSelectiveMenuList[j].menuName == profileMenuList[i].menuName) {
              profileMenuList[i].id = profileSelectiveMenuList[j].id
              profileMenuList[i].isActive = profileSelectiveMenuList[j].isActive

              if (profileSelectiveMenuList[j].isActive == 'Y') {
                profileMenuList[i].isActive = 'Y'
                // profileMenuList[i]["checked"] = true;
                var tempSubProfileMenuList = profileMenuList[i].subMenuList;
                var checkCount = 0;
                for (var count = 0; count < tempSubProfileMenuList.length; count++) {
                  tempSubProfileMenuList[count]["checked"] = false;

                  var tempSubSelective = profileSelectiveMenuList[j].subMenuList
                  for (var countS = 0; countS < tempSubSelective.length; countS++) {
                    if (tempSubProfileMenuList[count].menuName == tempSubSelective[countS].menuName) {
                      tempSubProfileMenuList[count].isActive = tempSubSelective[countS].isActive;
                      tempSubProfileMenuList[count].id = tempSubSelective[countS].id;
                      if (tempSubSelective[countS].isActive == "Y") {
                        tempSubProfileMenuList[count].id = tempSubSelective[countS].id;
                        tempSubProfileMenuList[count].isActive = 'Y';
                        tempSubProfileMenuList[count]["checked"] = true;
                      }
                    }
                  }
                 
                }
                // if(tempSubProfileMenuList.length == 0){
                //  profileMenuList[i]["checked"] = true;
                // }

              } else {
              // if(profileSelectiveMenuList[j].isActive == 'N'){
              //   profileMenuList[i].isActive = 'N'
              //   }
                // var willSelect = profileMenuList[i].subMenuList;
                // var alreadySelect = profileSelectiveMenuList[j].subMenuList;


                // for (var p = 0; p < willSelect.length; p++) {
                //   willSelect[p]["checked"] = false;
                //   for (var q = 0; q < alreadySelect.length; q++) {
                //     if (alreadySelect[q].menuName == willSelect[p].menuName) {
                //       if (alreadySelect[q].isActive == 'Y') {
                //         willSelect[p].isActive = 'Y';
                //         willSelect[p]["checked"] = true;
                //         willSelect[p].id = alreadySelect[q].id;
                //       }
                //     }
                //   }
                // }
                profileSelectiveMenuList[j].isActive
              }
            } else {
              // var tempSubProfileMenuList = profileMenuList[i].subMenuList;
              // for (var count = 0; count < tempSubProfileMenuList.length; count++) {
              //   tempSubProfileMenuList[count].isActive = 'N';
              //   tempSubProfileMenuList[count]["checked"] = false;
              // }

            }

          }
        }
        var profileMenuListInnerCheck = ref.profileMenuList;
        for (var count = 0; count < profileMenuListInnerCheck.length; count++) {
          var innerS = profileMenuListInnerCheck[count].subMenuList
          var counter1 = 0;
          for (var countS = 0; countS < innerS.length; countS++) {
            if (innerS[countS].isActive == "Y") {
              counter1 = counter1 + 1;
            }
          }
          if (counter1 == innerS.length) {
            profileMenuListInnerCheck[count]["checked"] = true;
            if (ref.profileSelectiveMenuList.length == 0) {
              profileMenuListInnerCheck[count]["checked"] = false;
            }
            if(innerS.length == 0){
              if(profileMenuListInnerCheck[count].isActive == "Y"){
                profileMenuListInnerCheck[count]["checked"] = true;
              }else{
                profileMenuListInnerCheck[count]["checked"] = false;
              }
              

            }
          }


        }

        console.log("checked")
        console.log(profileMenuList)
      } else {

      }

    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  private createForm() {
    const ref = this;
    ref.profileCode = new FormControl('');
  }
  onSubmit() {
    const ref = this;
    ref.apiHandler.saveRoleMenuAndActions(ref.requestJson, (response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts === 'success') {
        alert(response.msg);
      }

    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  checkHeader(menu) {
    var ref = this;
    console.log(menu)
    menu.subMenuList;
    menu.checked = !menu.checked
    if (menu.checked == true) {
      menu.isActive = "Y"
      if (menu.subMenuList.length > 0) {
        var sub = menu.subMenuList;
        for (var i = 0; i < sub.length; i++) {
          sub[i].isActive = "Y";
          sub[i].checked = true;
        }
      }
    } else {
      menu.isActive = "N"
      if (menu.subMenuList.length > 0) {
        var sub = menu.subMenuList;
        for (var i = 0; i < sub.length; i++) {
          sub[i].isActive = "N";
          sub[i].checked = false;
        }
      }

    }
    console.log("after")
    console.log(menu)


  }

  checkSubHeader(sub, headerMenu) {
    var ref = this;
    console.log(headerMenu);
    console.log(sub);
    if (sub.checked == true) {
      sub.isActive = "N";
      sub.checked = false;
    } else {
      sub.isActive = "Y";
      sub.checked = true;
    }
    console.log("after")
    console.log(headerMenu);
    console.log(sub);
    var counter = 0;
    var subArrCheck = headerMenu.subMenuList

    for (var i = 0; i < subArrCheck.length; i++) {
      if (subArrCheck[i].checked == true) {
        counter = counter + 1;
      }
    }
    if (counter == subArrCheck.length) {
      headerMenu.checked = true;
      headerMenu.isActive = "Y";
    } else {
      headerMenu.checked = false;
      headerMenu.isActive = "N";
    }
    if (counter > 0) {
      headerMenu.isActive = "Y";
    }
    console.log(counter)
    console.log(subArrCheck.length)
  }

  submitResult() {
    var ref = this;
    if (ref.checkFlag == false) {
      ref.callAlert("error", "Please click on search", "not");
      return false;
    }
    var tempArr = [];
    console.log("htis array")
    console.log(ref.profileMenuList)
    console.log(ref.profileSelectiveMenuList)

    // for (var p = 0; p < ref.profileMenuList.length; p++) {
    //   var subM = ref.profileMenuList[p].subMenuList
    //   if (subM.length > 0) {
    //     ref.profileMenuList[p].isActive = 'N';
    //     for (var q = 0; q < subM.length; q++) {
    //       if (subM[q].checked == true) {
    //         ref.profileMenuList[p].isActive = 'Y';
    //       }
    //     }
    //   } else {
    //     if (ref.profileMenuList[p].checked == true) {
    //       ref.profileMenuList[p].isActive = 'Y';
    //     }
    //   }
    // }
    console.log("after Y")

    console.log(ref.profileMenuList)


    for (var i = 0; i < ref.profileMenuList.length; i++) {

      if (ref.profileMenuList[i].id == '' && ref.profileMenuList[i].isActive == 'Y') {
        tempArr.push({
          "id": "",
          "menuId": ref.profileMenuList[i].menuId,
          "roleId": ref.submitObject.profileCode,
          "isActive": ref.profileMenuList[i].isActive,
          "actionArray": []
        })
      }

      if (ref.profileMenuList[i].id != '') {
        tempArr.push({
          "id": ref.profileMenuList[i].id,
          "menuId": ref.profileMenuList[i].menuId,
          "roleId": ref.submitObject.profileCode,
          "isActive": ref.profileMenuList[i].isActive,
          "actionArray": []
        })
      }

      var subMenu = ref.profileMenuList[i].subMenuList;

      for (var j = 0; j < subMenu.length; j++) {
        if (subMenu[j].id == '' && subMenu[j].isActive == 'Y') {
          tempArr.push({
            "id": subMenu[j].id,
            "menuId": subMenu[j].menuId,
            "roleId": ref.submitObject.profileCode,
            "isActive": subMenu[j].isActive,
            "actionArray": []
          })
        }
        if (subMenu[j].id != '') {
          tempArr.push({
            "id": subMenu[j].id,
            "menuId": subMenu[j].menuId,
            "roleId": ref.submitObject.profileCode,
            "isActive": subMenu[j].isActive,
            "actionArray": []
          })
        }
      }
    }



    console.log('profileMenuList')
    console.log(tempArr)

    for (var count = 0; count < tempArr.length; count++) {
      if (tempArr[count].id == "") {
        tempArr[count].id = 0;
      }
      tempArr[count].id = tempArr[count].id * 1
      tempArr[count].menuId = tempArr[count].menuId * 1
    }
    console.log('profileMenuList')
    console.log(tempArr)

    console.log(tempArr);
    var tempcheckArr = {}
    tempcheckArr['menu'] = tempArr
    
    ref.apiHandler.saveRoleMenuAndActions1(tempcheckArr, (response: any) => {
      console.log(JSON.stringify(response));
      if (response.sts.toLowerCase() === "success") {
        ref.callAlert("success", "Successfully submitted", "not");
        ref.checkFlag = false;

      } else {
        ref.callAlert("error", "Failed", "not");
      }
    }, (error: HttpErrorResponse) => {
      ref.callAlert("error", "Failed", "not"); console.log(error);
    });
  }

  changeProfile() {
    var ref = this;
    ref.checkFlag = false;
  }

  callAlert(alertFlag, message, navigate) {
    var ref = this;
    ref.alertFlag = alertFlag;
    ref.alertMessage = message;
    ref.alertNavigate = navigate;
    $('#alertMsg').modal('show');
  }

  okAlert() {
    var ref = this;
    if (ref.alertFlag === "success") {
      if (ref.alertNavigate == 'navigateToList') {
        // ref.router.navigate(['main-layout/quotationList']);
        $("#alertMsg").modal("hide");
      }
      $("#alertMsg").modal("hide");
    } else {
      $("#alertMsg").modal("hide");
    }
  }

}
