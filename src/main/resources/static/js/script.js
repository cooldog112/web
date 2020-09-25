function openLoginDialog() {
    if(user==null){
        $('#container-1').show(500);
        return;
    }
}
function closeLoginDialog() {
    $('#container-1').hide(500);
}
function openReportDialog() {
    if (user == null) {
        openLoginDialog();
        return;
    }
    $('#container-2').show(500);
}
function closeReportDialog() {
    $('#container-2').hide(500);
}
function openPersonDialog() {
    if (user == null) {
        openLoginDialog();
        return;
    }
    $('#container-3').show(500);
}
function closePersonDialog() {
    $('#container-3').hide(500);
}

let storedPath = null;
let originalName = null;
let user = null;

async function addComment() {
    try {
        await uploadNewFile();
        let comment = {
            userId: user.id,
            content: $('#content').val(),
            originalName: originalName,
            storedPath: storedPath
        };
        console.log(JSON.stringify(comment));
        let response = await $.ajax({
            type: 'post',
            url: '/comment/add',
            contentType: 'application/json',
            data: JSON.stringify(comment)
        });
        originalName = null;
        storedPath = null;
        $('#content').val('');
        console.log(JSON.stringify(response));
        addCommentLine(response);
        closeCommentDialog();
    } catch (error) {
        console.log(JSON.stringify(error));
    }
}

async function addReport() {
    try {
        let error;
        if(document.getElementsByName("radioBtn")[0].checked == true){
            error = "이상없음";
        }
        if(document.getElementsByName("radioBtn")[1].checked == true){
            error = "이상있음";
        }

        alert(error);

        let report = {
            userId: user.id,
            position:$('#reportPosition').val(),
            name:$('#reportName').val(),
            error:error,
            content: $('#gita').val(),
        };

        console.log(JSON.stringify(report));

        let response = await $.ajax({
            type: 'post',
            url: '/report/add',
            contentType: 'application/json',
            data: JSON.stringify(report)
        });
        if(response == 1){
            alert("정상 처리되었습니다.");
            closeReportDialog();
        }else{
            alert("오류 발생");
        }
    } catch (error) {
        console.log(JSON.stringify(error));
    }
}
//교시별 지원자, 결시자, 응시자 가져오기
async function getPerson(userId){
    let person = {
        userId: userId,
    };

    console.log(JSON.stringify(person));

    let response = await $.ajax({
        type: 'post',
        url: '/person/userId',
        contentType: 'application/json',
        data: JSON.stringify(person)
    });
    console.log(JSON.stringify(response));

    $('#periodApplicant1').html(`지원자:${response[0].applicant}명`);
    $('#periodAbsentee1').html(`결시자:${response[0].absentee}명`);
    $('#periodCandidate1').html(`응시자:${response[0].candidate}명`);

    $('#periodApplicant2').html(`지원자:${response[1].applicant}명`);
    $('#periodAbsentee2').html(`결시자:${response[1].absentee}명`);
    $('#periodCandidate2').html(`응시자:${response[1].candidate}명`);

    $('#periodApplicant3').html(`지원자:${response[2].applicant}명`);
    $('#periodAbsentee3').html(`결시자:${response[2].absentee}명`);
    $('#periodCandidate3').html(`응시자:${response[2].candidate}명`);

    $('#periodApplicant4').html(`지원자:${response[3].applicant}명`);
    $('#periodAbsentee4').html(`결시자:${response[3].absentee}명`);
    $('#periodCandidate4').html(`응시자:${response[3].candidate}명`);

    $('#periodApplicant5').html(`지원자:${response[4].applicant}명`);
    $('#periodAbsentee5').html(`결시자:${response[4].absentee}명`);
    $('#periodCandidate5').html(`응시자:${response[4].candidate}명`);

}

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
async function sessionCheck(){
    try {
        let response = await $.ajax({
            type: 'get',
            url: '/session',
            contentType: 'application/json',
            data: JSON.stringify()
        });

        if(response.account == "관리자"){
            location.href="/admin.html";
        }

        if(response.id == null){
            openLoginDialog();
        }else{
            getUser(response.id);
            getPerson(response.id)
            closeLoginDialog();
        }
    } catch (error) {
        console.log(JSON.stringify(error));
    }
}


async function addPerson() {
    try {
        var radio = document.getElementsByName("radioPeriod");
        var i;
        var period;
        for(i=0;i<radio.length;i++){
            if(radio[i].checked == true){
                period = i+1;
            }
        }
        let person = {
            userId: user.id,
            period: period,
            applicant:$('#applicant').val(),
            absentee:$('#absentee').val(),
            candidate: $('#candidate').val(),
        };

        console.log(JSON.stringify(person));

        let response = await $.ajax({
            type: 'post',
            url: '/person/add',
            contentType: 'application/json',
            data: JSON.stringify(person)
        });
        if(response == 1){
            alert("정상 처리되었습니다.");
            getPerson(person.userId);
            closePersonDialog();
        }else{
            alert("오류 발생");
        }
    } catch (error) {
        console.log(JSON.stringify(error));
    }
}
async function uploadNewFile() {
    try {
        let file = $(`#upload-file`)[0].files[0];
        let formData = new FormData();
        formData.append('srcFile', file);
        let response = await $.ajax({
            type: 'post',
            url: '/attachment',
            data: formData,
            processData: false,
            contentType: false,
            success: (data) => {
                storedPath = data.storedPath;
                originalName = data.originalName;
            },
        });
    } catch (error) {
        console.log(JSON.stringify(error));
    }
}
async function uploadEditFile(id) {
    try {
        let file = $(`#upload-file${id}`)[0].files[0];
        if (file == null) {
            let comment = $.get(`/comment/view/${id}`);
            storedPath = comment.storedPath;
            originalName = comment.originalName;
            return;
        }
        let formData = new FormData();
        formData.append('srcFile', file);
        let response = await $.ajax({
            type: 'post',
            url: '/attachment',
            data: formData,
            processData: false,
            contentType: false,
            success: (data) => {
                storedPath = data.storedPath;
                originalName = data.originalName;
            },
        });
    } catch (error) {
        console.log(JSON.stringify(error));
    }
}
async function getCommentList() {
    try {
        let response = await $.get('/comment/list');
        for (let i = 0; i < response.length; i++) {
            addCommentLine(response[i]);
        }
    } catch (error) {
        $('#comment-list').html(JSON.stringify(error));
    }
}
function addCommentLine(response) {
    $('#comment-list').prepend(`
            <div id="line${response.id}" class="comment-line">
                <div style="width: 150px;">${response.username}</div>
                <div style="width: 350px;">${response.content}</div>
                <div></div>
                <img src="/attachment/comment/${response.id}" />
                <div>
                    <button onclick="editComment(this, ${response.id})">수정</button>
                    <button onclick="removeComment(this, ${response.id})">삭제</button>
                </div>
            </div>
        `);
}
let content = null;
async function editComment(button, id) {
    if (user == null) {
        openLoginDialog();
        return;
    }
    let line = $(`#line${id}`);
    if ($(button).text() == '수정') {
        content = line.find('div:nth-child(2)').html();
        let inputContent = `<input value="${content}">`;
        line.find('div:nth-child(2)').html(inputContent);
        let inputFile = `<input type="file" id="upload-file${id}">`;
        line.find('div:nth-child(3)').html(inputFile);
        line.find('img').hide();
        $(button).text('확인');
        $(button).next().text('취소');
    } else {
        await uploadEditFile(id);
        let comment = {
            userId: 1,
            content: line.find('input').val(),
            storedPath: storedPath,
            originalName: originalName
        };
        let response = await $.ajax({
            type: 'put',
            url: `/comment/update/${id}`,
            contentType: 'application/json',
            data: JSON.stringify(comment)
        });
        console.log(JSON.stringify(response));
        originalName = null;
        storedPath = null;
        line.find('div:nth-child(2)').html(comment.content);
        line.find('div:nth-child(3)').html('');
        line.find('img')[0].src = `/attachment/comment/${id}?${new Date()}`;
        line.find('img').show();
        $(button).text('수정');
        $(button).next().text('삭제');
    }
}
async function removeComment(button, id) {
    if (user == null) {
        openLoginDialog();
        return;
    }
    if ($(button).text() == '삭제') {
        try {
            let response = await $.ajax({
                type: 'delete',
                url: `/comment/remove/${id}`,
                contentType: 'application/json'
            });
            if (response) {
                $(`#line${id}`).remove();
            } else {
                alert('삭제에 실패하였습니다.');
            }
        } catch (error) {
            console.log(JSON.stringify(error));
        }
    } else {
        $(button).text('삭제');
        $(button).prev().text('수정');
        $(`#line${id}`).find('img').show();
        $(`#line${id}`).find('div:nth-child(2)').html(content);
        $(`#line${id}`).find('div:nth-child(3)').html('');
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
            if(user.account == "관리자"){
                location.href="/admin.html";
            }

            closeLoginDialog();
            getUser(data.id);
            getPerson(data.id);


        },
        error: (error) => {
            alert('로그인에 실패하였습니다.');
            console.log(JSON.stringify(error));
        },
    });
}

async function getUser(id) {
    user = await $.get(`/user/${id}`);
    $('#userId').html(`${user.id}`);
    $('#userName').html(`${user.account}`);
    $('#testRoomNum').html(`${user.testRoomNum}개`);
    $('#applicantNum').html(`${user.applicantNum}명`);
    $('#title').html(`
        <h1 class="h3 mb-0 text-gray-800">대구광역시 수능시험장 현황 보고 ( ${user.account} )</h1>
    `);



}


sessionCheck();