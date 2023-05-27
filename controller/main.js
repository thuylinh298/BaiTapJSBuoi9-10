'use strict';
var workerList = [];

getWorkers()

uiRender()


function addWorker() {
    var worker = getData();

    if (worker) {
        workerList.push(worker)

        saveWorkers(workerList)

        assignValue('', '', '', '', '', '', '', '')

        uiRender()
    }

}

function uiRender() {
    var content = '';

    for (var i = 0; i < workerList.length; i++) {
        var worker = new Workers();
        var workerItem = workerList[i];

        Object.assign(worker, workerItem)

        content +=
            `
        <tr>
            <td>${worker.accountName}</td>
            <td>${worker.workerName}</td>
            <td>${worker.email}</td>
            <td>${worker.startedDate}</td>
            <td>${worker.position}</td>
            <td>${worker.totalSal()}</td>
            <td>${worker.wokerRank()}</td>
            <td>
                <button class="btnDelete" onclick = "deleteWorker('${worker.accountName}')">
                    <i class="fa fa-trash"></i>
                </button>
                <button class="btnEdit" onclick = "getWorkerData('${worker.accountName}')" data-toggle = "modal"  data-target = "#myModal">
                    <i class="fa fa-pencil"></i>
                </button>
            </td>
        </tr>
        `
    }
    getEle('tableDanhSach').innerHTML = content
}

function deleteWorker(accName) {
    var index = findWorker(accName);

    if (index != -1) {
        workerList.splice(index, 1);
        saveWorkers(workerList)
        uiRender()
    }
}

function getWorkerData(account){
    getEle('tknv').readOnly = true;
    getEle('btnCapNhat').disabled = false;

    var index = findWorker(account);
    var worker = workerList[index]

    assignValue(
        worker.accountName,
        worker.workerName,
        worker.email,
        worker.passWord,
        worker.startedDate,
        worker.pay,
        worker.position,
        worker.workHours,
    )
}

function updateWorker(){
    var updatedWorker = getData();
    var index = findWorker(updatedWorker.accountName)

    workerList[index] = updatedWorker;

    saveWorkers(workerList)
    uiRender()
    getEle('tknv').readOnly = false;
}

function closeModal() {
    assignValue('', '', '', '', '', '', '', '')

    getEle('tbTKNV').innerHTML = '';
    getEle('tbTen').innerHTML = '';
    getEle('tbEmail').innerHTML = '';
    getEle('tbMatKhau').innerHTML = '';
    getEle('tbNgay').innerHTML = '';
    getEle('tbLuongCB').innerHTML = '';
    getEle('tbChucVu').innerHTML = '';
    getEle('tbGiolam').innerHTML = '';

    getEle('tknv').readOnly = false;

    getEle('btnCapNhat').disabled = true;
}

function searchWorker() {

    var searchInput = getEle('searchName'),
        filterInput = searchInput.value.toUpperCase(),
        table = document.querySelector('.myTable'),
        tr = table.getElementsByTagName('tr'),
        td, txtValue, textValueAscent;

    for(var i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName('td')[6];

        if (td){
            txtValue = removeAscent(td.textContent || td.innerText);
            textValueAscent = td.textContent || td.innerText;

            if((txtValue.toUpperCase().indexOf(filterInput) > -1) ||
                (textValueAscent.toUpperCase().indexOf(filterInput) > -1)
                ){
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}