function openLoginDialog() {
    if(user==null){
        $('#container-1').show(500);
        return;
    }
}
function closeLoginDialog() {
    $('#container-1').hide(500);
}
function openAdminMenu(num){
    $('#adminMenu1').hide();
    $('#adminMenu2').hide();
    $('#adminMenu3').hide();
    $('#adminMenu4').hide();
    $('#adminMenu5').hide();
    if(num == 1){
        $('#title').html(`<h1 class="h3 mb-0 text-gray-800">문답지 이상 유무 현황</h1>`);
        getReportList();
        $('#adminMenu1').show();
    }else if(num==2){
        $('#title').html(`<h1 class="h3 mb-0 text-gray-800">시험장 보고 현황</h1>`);
        getPersonList();
        $('#adminMenu2').show();
    }else if(num==3){
        $('#title').html(`<h1 class="h3 mb-0 text-gray-800">대구 현황 종합</h1>`);
        getTotalList();
        $('#adminMenu3').show();
    }else if(num==4){
        $('#title').html(`<h1 class="h3 mb-0 text-gray-800">대구 현황 종합 차트</h1>`);
        $('#adminMenu4').show();
    }else if(num==5){
         $('#title').html(`<h1 class="h3 mb-0 text-gray-800">자료실</h1>`);
         $('#adminMenu5').show();
     }
}

let user = null;

async function logout(){
    try {
        let response = await $.ajax({
            type: 'get',
            url: '/logout',
            contentType: 'application/json',
            data: JSON.stringify()
        });
    } catch (error) {
        console.log(JSON.stringify(error));
    }
}
async function adminSessionCheck(){
    try {
        let response = await $.ajax({
            type: 'get',
            url: '/session',
            contentType: 'application/json',
            data: JSON.stringify()
        });

        if(response.id == null){
            openLoginDialog();
        }else{
            if(response.account != "관리자"){
                location.href="/index.html";
            }
            closeLoginDialog();
        }
    } catch (error) {
        console.log(JSON.stringify(error));
    }
}
async function login() {

    let login = {
        account: $('#account').val(),
        password: $('#password').val()
    };
    let response = await $.ajax({
        type: 'post',
        url: '/user/login',
        contentType: 'application/json',
        data: JSON.stringify(login),
        success: (data) => {
            user=data;
            console.log(JSON.stringify(data));
            closeLoginDialog();
        },
        error: (error) => {
            alert('로그인에 실패하였습니다.');
            console.log(JSON.stringify(error));
        },
    });
}
async function getReportList(){
    try {
        let response = await $.get('/report');
        $('#func1Table').html(``);
        for (let i = 0; i < response.length; i++) {
            addReportLine(response[i]);
        }
    } catch (error) {
        $('#func1Table').html(JSON.stringify(error));
    }
}
async function addReportLine(response){
    $('#func1Table').append(`
        <tr id="line${response.id}">
          <td>${response.userId}</td>
          <td>${response.account}</td>
          <td>${response.testRoomNum}</td>
          <td>${response.applicantNum}</td>
          <td>${response.error}</td>
          <td>${response.position}</td>
          <td>${response.name}</td>
          <td>${response.updated}</td>
          <td>${response.content}</td>
        </tr>
    `);
}

async function getPersonList(){
    try {
        let response = await $.get('/person');
        $('#func2Table').html(``);
        console.log(JSON.stringify(response));
        let temp = 0;

        for (let i = 0; i < response.length; i++) {
            if(response[i].userId != temp){
                addPersonLine(response[i]);
                temp = response[i].userId;
            }else{
                addPersonCols(response[i]);
            }
        }
        $('#func2Table').append(`</tr>`);
    } catch (error) {
        $('#func2Table').html(JSON.stringify(error));
    }
}
async function addPersonCols(response){
    let line = $(`#line${response.userId}`);
    line.append(`
      <td>${response.applicant}명</td>
      <td>${response.absentee}명</td>
      <td>${response.candidate}명</td>
    `);
}
async function addPersonLine(response){
    $('#func2Table').append(`
        <tr id="line${response.userId}">
          <td>${response.userId}</td>
          <td>${response.account}</td>
          <td>${response.testRoomNum}개</td>
          <td>${response.applicantNum}명</td>
          <td>${response.applicant}명</td>
          <td>${response.absentee}명</td>
          <td>${response.candidate}명</td>
        </tr>
    `);
}
async function getTotalList(){
    try {
        let response = await $.get('/total');
        $('#func3Table').html(``);
        console.log(JSON.stringify(response));
        for (let i = 0; i < response.length; i++) {
            addTotalLine(response[i]);
        }
    } catch (error) {
        $('#func3Table').html(JSON.stringify(error));
    }
}
async function addTotalLine(response){
    $('#func3Table').append(`
        <tr>
          <td>${response.year}</td>
          <td>${response.period}</td>
          <td>${response.applicant}개</td>
          <td>${response.candidate}명</td>
          <td>${response.absentee}명</td>
          <td>${response.candidate / response.applicant * 100}%</td>
          <td>${response.absentee / response.applicant * 100}%</td>
          <td></td>
        </tr>
    `);
}
adminSessionCheck();