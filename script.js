function enviar() {
    document.getElementById("confirmacao").style.display = "block";
}

function mascara_cep(){
    var cep = document.getElementById("cep").value
    console.log(cep)
    if (cep[2]!="." && cep[2]!=undefined) {
        document.getElementById("cep").value = cep.slice(0, 2)+"."+cep[2]
    }
    if (cep[6]!="-" && cep[6]!=undefined) {
        document.getElementById("cep").value = cep.slice(0, 6)+"-"+cep[6]
    }
}

function mascara_cpf(){;
    var cpf = document.getElementById("cpf").value
    console.log(cpf)
    if (cpf[3]!="." && cpf[3]!=undefined) {
        document.getElementById("cpf").value = cpf.slice(0,3)+"."+cpf[3]
    }
    if (cpf[7]!="." && cpf[7]!=undefined) {
        document.getElementById("cpf").value = cpf.slice(0,7)+"."+cpf[7]
    }
    if (cpf[11]!="." && cpf[11]!=undefined) {
        document.getElementById("cpf").value = cpf.slice(0,11)+"."+cpf[11]
    }
}

function mascara_telefone(){
    var tel = document.getElementById("telefone").value 
    tel=tel.slice(0,14)
    console.log(tel)
    if (tel[0]!="(") {
        if (tel[0]!= undefined) {
            document.getElementById("telefone").value = "("+tel[0]
        }
    }
    if (tel[3]!= ")" && tel[3]!= undefined) {
        document.getElementById("telefone").value = tel.slice(0, 3) +")"+tel[3]
    }
    if (tel[9]!= "-" && tel[9]!= undefined) {
        document.getElementById("telefone").value = tel.slice(0, 9) +"-"+tel[9]
    }
}

function mascara_cnpj(){
    var cnpj = document.getElementById("cnpj").value
    console.log(cnpj)
    if (cnpj[2]!="." && cnpj[2]!=undefined) {
        document.getElementById("cnpj").value = cnpj.slice(0, 2)+"."+cnpj[2]
    }
    if (cnpj[6]!="." && cnpj[6]!=undefined) {
        document.getElementById("cnpj").value = cnpj.slice(0, 6)+"."+cnpj[6]
    }
    if (cnpj[10]!="/" && cnpj[10]!=undefined) {
        document.getElementById("cnpj").value = cnpj.slice(0, 10)+"/"+cnpj[10]
    }
    if (cnpj[15]!="-" && cnpj[15]!=undefined) {
        document.getElementById("cnpj").value = cnpj.slice(0, 15)+"-"+cnpj[15]
    }
}

function mascara_codigo(){
    var cod = document.getElementById("codigo").value
    console.log(cod)
    if (cod[2]!="_" && cod[2]!=undefined) {
        document.getElementById("codigo").value = cod.slice(0, 2)+"_"+cod[2]
    }
    if (cod[5]!="/" && cod[5]!=undefined) {
        document.getElementById("codigo").value = cod.slice(0, 5)+"/"+cod[5]
    }
    if (cod[6]!="/" && cod[6]!=undefined) {
        document.getElementById("codigo").value = cod.slice(0, 6)+"/"+cod[6]
    }
    if (cod[10]!="-" && cod[10]!=undefined) {
        document.getElementById("codigo").value = cod.slice(0, 10)+"-"+cod[10]
    }
    if (cod[14]!="." && cod[14]!=undefined) {
        document.getElementById("codigo").value = cod.slice(0, 14)+".9."+cod[14]
    }
}
